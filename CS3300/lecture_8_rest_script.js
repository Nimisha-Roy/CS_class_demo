const express = require('express'); //import express
const Joi = require('joi'); //import joi
const app = express(); //create express application on the app variable
app.use(express.json()); //use the json file, data stores in json format available on the server, not connecting to any database like SQL

//Port Environment Variable- where the created server will be running
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ', port));

// Give data to the server, some data should be present when API calls the server
//object of students
const students = [
    {name: 'George', id: 1},
    {name: 'Sam', id: 2},
    {name: 'Mary', id: 3},
    {name: 'Rebecca', id: 4},
    {name: 'Tanya', id: 5}
]

//Use GET to recieve all info from server, display list of students, display information related to a specific student

//display message when URL consists of '/', so when url is read by server which is localhost:8080/, we get a response in the form of a welcome message
app.get('/', (req, res) => {
    res.send("Welcome to CS 3300 REST API!!");
});

//Display the list of students when URL comprises of api/students
app.get('/api/students', (req, res) => {
    res.send(students);
});

//Display information of a specific student when the request mentions an id
app.get('/api/students/:id', (req, res) => {
    console.log(req.params.id);
    var student = students.find(c => c.id === parseInt(req.params.id));
    console.log(student);
    // display error message if ID is not valid
    if (!student) res.status(404).send('Oops! Cant find what you are looking for');
    res.send(student);
});

// USe POST to send/change info to server, create a new student information, change info of a student, delete a student details

// create a new student information
app.post('/api/students', (req,res) => {
    const { error } = validateStudent(req.body);
    if (error) {
       res.status(400).send(error.details[0].message)
       return;
     }
    // Incrememt student id
    var student = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(student);
    res.send(student);
});

//update existing student's name
app.put('/api/students/:id', (req, res) => {
    var student = students.find(c=> c.id === parseInt(req.params.id));
    if(!student) res.status(404).send('<h2> Not a valid student </h2>');

    const { error } = validateStudent(req.body);
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }

    student.name = req.body.name;
    res.send(student);
})

// validate information
function validateStudent(student) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()// title should be minimum of 3 characters
    });
    const validation = schema.validate(student);
    return validation
}
