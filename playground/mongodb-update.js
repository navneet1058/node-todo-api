const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');
    
    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('591846022d03ab5128f11635')
    },{
        $set: {
            completed : true
        }
    },{
        returnOriginal : false                                        
    }).then((results) => {
        console.log(results);
    });
    
});