const axios = require("axios");
const url = "https://example.com";

/* Making a get request */

//With Promises (without async/await)
axios.get(url)
  .then((response) => response)
  .then((responseObject) => console.log(responseObject.data))
  .catch((err) => console.log(err));

//With async/await
const getData = async () => {
  const res = await axios.get(url);
  const json = await res.data;
  console.log(json);
};
getData(url);

//axios try catch
async function getData() {
  try {
    let res = await axios.get(url);
    let data = await res.data;
    return data;
  } catch (error) {
      console.log(error);    
  }
}

//with params object
//eg:
async function getUser() {
  try {
    let res = await axios.get('/user', {
       params: {
         ID: 12345 
       }
    });
    let data = await res.data;
    return data;
  } catch (error) {
      console.log(error);    
  }
}

//same as 
async function getUser() {
  try {
    let res = await axios.get('/user?ID=12345');
    let data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}


//eg:
const params = {
  answer: { toJSON: () => 42 },
  time: moment('2016-06-01')
};

const res = await axios.get('https://httpbin.org/get', { params });
res.data.args; // { answer: 42, time: "\"2016-06-01T04:00:00.000Z\"" }







