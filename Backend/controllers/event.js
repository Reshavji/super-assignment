const Event = require("../models/event");
const createEvent = async(req,res)=>{
 const eventBody ={
    name: "Reshav",
    creator:"64bff27da7e9382900b1f965",
    date: Date.now()
 }
 const event = new Event(eventBody);
 await event.save();
 res.json({
    success:true,
    name: event.name,
    message:"Event created"
 })
};
const getEvents =()=>{

}
module.exports ={
    createEvent,
    getEvents
}