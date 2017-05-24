const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
var id = "6924f74330faaf19840e8653";

if(!ObjectID.isValid(id)){
    console.log('Id is invalid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));
*/

User.findById('5925c5c9b0c23f62b740f861').then((user) => {
    if(!user){
       return console.log('Unable to find the user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

