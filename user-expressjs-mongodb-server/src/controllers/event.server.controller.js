import Event from '../models/event.server.model';

export default class eventController {
    createEvent = (req,res,next) => {
        console.log('createEvent: '+ JSON.stringify(req.body));
        if (req.body) {
            let newEvent = new Event(req.body);
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
        let limit = parseInt(req.params.limit) ? parseInt(req.params.limit) < 30 : 30;
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
}