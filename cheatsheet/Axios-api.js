/* axios(config) */

//eg:
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

axios.get(url, config)
axios.post(url, config)
axios.delete(url, config)
axios.put(url, config)
