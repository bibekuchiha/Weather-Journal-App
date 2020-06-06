// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const Express = require('express');
// Start up an instance of app
const app = Express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(Express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

app.get('/data', (req, res) => {
    console.log('GET Request Received');
    res.send(projectData);
});
app.post('/', (req, res) => {
    projectData.date = req.body.date;
    projectData.temperature = req.body.main.temp;
    projectData.feelings = req.body.feelings;
    console.log('POST Request Received');
    res.end();
});
