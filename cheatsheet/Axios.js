const axios = require("axios");
const url = "https://jexample.com";

/* Making a get request */

//With Promises (without async/await)
axios.get(url)
  .then((response) => response)
  .then((responseObject) => console.log(responseObject.data))
  .catch((err) => console.log(err));

//With async/await
const getData = async (url) => {
  const res = await axios.get(url);
  const json = await res.data;
  console.log(json);
};
getData(url);

//axios try catch
try {
  let res = await axios.get('/bad-call');
  let data = res.data;
} catch (error) {
    console.log(error);    
}
