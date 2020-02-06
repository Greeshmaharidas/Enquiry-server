const db = require('./db');
function getEnquiry(){
    return db.Enquiry.find();
}
function createEnquiry(data){
    const newEnquiry=new db.Enquiry(data);
    return newEnquiry.save();

}
function getEnquiry(data){
    return db.Enquiry.find();

}
function searchEnquiry(value){
    return db.Enquiry.find({
        $or:[

        
        {firstName:new RegExp (value,'i')},
        {lastName:new RegExp (value,'i')},
        {email:new RegExp (value,'i')},
        {phone:new RegExp (value,'i')},
        {comment:new RegExp (value,'i')}

        ]
    })
}


exports.createEnquiry=createEnquiry;
exports.getEnquiry=getEnquiry;

exports.searchEnquiry=searchEnquiry;