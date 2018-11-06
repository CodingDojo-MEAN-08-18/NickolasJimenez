// modules
// ...express
const express = require('express');
// ...body parser
const bodyParser = require('body-parser');
// ...path
const path = require('path');
// ...mongo db
const mongoose = require('mongoose');

// port
// ...port number
const port = process.env.PORT || 8000;
// ...schema
const { Schema } = mongoose;

// initialize app
const app = express();

// set views
app.use(express.static( __dirname + '/public/dist/public' ));

// set middle ware
app.use(bodyParser.json());

// set up database
// ...connect to mongo db
mongoose.connect('mongodb://localhost:27017/restful_api', {useNewUrlParser:true});
// ...check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

// ...create schema
const tasksSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        default: "",
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{ timestamps:true });

// ...set schema for db
const Tasks = mongoose.model('Tasks', tasksSchema);

// routes

// GET: Retrieve all Tasks  ('/tasks')
app.get('/tasks', function(req, res){
    Tasks.find({}, function(err,task){
        if(err) {
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})

// GET: Retrieve a Task by ID ('/tasks/:id')
app.get('/tasks/:id', function(req,res){
    Tasks.find({_id: req.params.id}, function(err,task){
        if(err) {
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})

// POST: Create a Task ('/tasks')
app.post('/tasks', function(req, res){
    let taskInstance = new Tasks();
    taskInstance.title = req.body.title;
    taskInstance.description = req.body.description;
    taskInstance.completed = req.body.completed;

    taskInstance.save(function(err, task){
        if(err){
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})

// PUT: Update a Task by ID ('/tasks/:id')
app.put('/tasks/:id', function(req,res){
    Tasks.updateOne({_id: req.params.id}, req.body, function(err,task){
        if(err){
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})

// DELETE: Delete a Task by ID ('/tasks/:id')
app.delete('/tasks/:id', function(req,res){
    Tasks.deleteOne({_id: req.params.id}, function(err,task){
        if(err){
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})

// port
app.listen(port, () => console.log('listening to port number:', port));
