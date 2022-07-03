// using axios to send http request in react 

//trigger axios sending http request by calling function directly, return async function 
const request = () => {
       (async () => {
            try {
                const res = await axios.get(URL);
                const data = await res.data;
                //console.log(data);
                //logic of handling received data here
            } catch (err) {
                //console.log(err);
                //logic of handling error here
            }
        })();    //invoke async function immediately after decalare
};

//or use async directly
async function request = () => {
    try {
      const res = await axios.get(URL);
      const data = await res.data;
      //logic of handling received data here
    } catch (err) {
      //logic of handling error here
    }
};


// call request() in some where



//using axios in useEffect
useEffect(() => { request() }, [])                     //axios call after didmount once only
useEffect(() => { request() }, [...dependecies])       //axios call once any dependency updated


