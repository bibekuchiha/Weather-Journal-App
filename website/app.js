/* Global Variables */
// US is default country. Parameter is zip code,country code
const url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
const apiKey = "&APPID=d32951b8f6f1cdb30959be37755f0b89";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

//* Function to GET Web API Data*/

const GetData = async (url='') => {
    try {
        const Res = await fetch(url);
        const data = await Res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
/* Function to POST data */
const PostData = async (url='',data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log('error', error);
    }
  };

  /* Function to Update data */

const UpdateData = async ()=> {
    const projectData = await GetData('/data');
    document.getElementById('date').innerHTML = `Current Date : ${projectData.date}`;
    document.getElementById('temp').innerHTML = `The Temperature is : ${projectData.temperature} Fahrenheit`;
    document.getElementById('content').innerHTML = projectData.feelings;
};

/* Function to Generate data */

const GenerateData = async () => {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const response = await fetch(`${url}${zip}${apiKey}`);
    try {
        const data = await response.json();
        data.date = newDate;
        data.feelings = feelings;
        await PostData('/',data);
        UpdateData();
    } catch (error) {
        console.error("error",error);
    }
};
document.getElementById('generate').addEventListener('click', GenerateData);