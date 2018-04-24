import Event from '../models/event.server.model';
import multer from 'multer';
import Jimp from 'jimp';
import fs from 'fs';

//set multer storage
var storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, './public/images/events')
    },
    filename:(req,file,cb) => {
        let date = Date.now();
        var imageName = file.originalname.split('.')[file.originalname.split('.').length - 2];
        var newImageName = imageName.replace(/ /g, '_');
        newImageName = date + newImageName + "." + file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, newImageName);
    }
})

const Upload = multer({
    storage:storage
}).single("image");

const imgPath = "./public/images/events/";

export default class eventController {
    self = this;
    createEvent = (req,res,next) => {
        console.log('createEvent: '+ JSON.stringify(req.body));
        if (req.body) {
            let newEvent = new Event(req.body);
            newEvent.createdAt = Date.now();
            if(req.file){
                console.log('uploadEventImage: '+ JSON.stringify(req.file));
                newEvent.smallImage = "/images/events/"+"small-"+req.file.filename;
                newEvent.largeImage = "/images/events/"+"large-"+req.file.filename;

                Jimp.read(req.file.path).then(function (image) {
                    var imageClone = image.clone();
                    var w = image.bitmap.width; // the width of the image
                    var h = image.bitmap.height; // the height of the image
                    var dimensions = calculateImageDimensions(w,h,600,400);//Get proportionate dimensions
                    image.resize(100, 100)            // resize 
                         .quality(60)                 // set JPEG quality 
                         .write(imgPath+"small-"+req.file.filename);
                    imageClone.cover(dimensions.width, dimensions.height)
                         .quality(60)
                         .write(imgPath+"large-"+req.file.filename)
                        // .write(req.file.path); // save 
                }).catch(function (err) {
                    console.error(err);
                });
              }
            newEvent.save((err,event) => {
                if (err) {
                    console.log('Error in createEvent: '+ JSON.stringify(err));
                    return  res.json({
                        success:false,
                        message:'Some Error',
                        err
                    });
                }
                else {
                    if (event) {
                        console.log('Event created successfully: '+ JSON.stringify(event));
                        if (req.file) {
                            fs.unlink(req.file.path, (err) => {
                                if(!err) console.log(req.file.path +' was deleted');
                            });
                        }
                        return  res.json({
                            success:true,
                            message:'Event Created Successfully',
                            event
                        });
                    }
                }
            })
        }
    }

    getEvents = (req,res,next) => {
       if (req.params.page && req.params.limit) {
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit) < 30 ? parseInt(req.params.limit) : 30;
        let skip_value = (page * limit) - limit;
        Event.find()
             .limit(limit)
             .skip(skip_value)
             .exec((err,events) => {
                if (err) {
                    console.log('Error in getEvents: '+ JSON.stringify(err));
                    return  res.json({
                        success:false,
                        message:'Some Error',
                        err
                    });
                } else {
                    if (events) {
                        console.log('Event fetched successfully: '+ JSON.stringify(events));
                        return  res.json({
                            success:true,
                            message:'Event Fetched Successfully',
                            events
                        });
                    }
                }
             })
       }
    }

    uploadImage = (req,res,next) => {
        Upload(req,res,err => {
          if(err){
               console.log('ERROR:'+err);
               return res.json({'success':false,'message':err});;
             }
             else{
               next();
             }
        });
      }

    
}

const calculateImageDimensions = (width,height,maxWidth,maxHeight) => {
    // calculate the width and height, constraining the proportions
    if (width > height) {
        if (width > maxWidth) {
            height = Math.round(height *= maxWidth / width);
            width = maxWidth;
        }
    }
    else {
        if (height > maxHeight) {
            width = Math.round(width *= maxHeight / height);
            height = maxHeight;
        }
    }
    return {width:width,height:height};
}