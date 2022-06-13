/* Making a get request */

//With Promises (without async/await)
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url)
  .then((response) => response)
  .then((responseObject) => console.log(responseObject.data))
  .catch((err) => console.log(err));

//With async/await
const axios = require("axios");
const getData = async (url) => {
  const res = await axios.get(url);
  const json = await res.data;
  console.log(json);
};

const url = "https://jsonplaceholder.typicode.com/todos/1";
getData(url);
