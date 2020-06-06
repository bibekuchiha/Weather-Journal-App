// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const Express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

// Start up an instance of app
const app = Express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
app.use(Cors());

// Initialize the main project folder
app.use(Express.static('website'));


// Setup Server
const server = app.listen(port,listening);
function listening() {
    console.log('Server is running');
    console.log(`running on localhost: ${port}`);
};
app.get('/data',(req,res)=> {
    console.log('GET Request Received');
    res.send(projectData);
});
app.post('/', (req, res) => {
    projectData.date = req.body.date;
    projectData.temperature = req.body.temp;
    projectData.feelings = req.body.feelings;
    console.log('POST request received');
    res.end();
});