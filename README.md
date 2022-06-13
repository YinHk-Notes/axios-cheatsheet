# Axios
This doc is about Axios

```js
axios(config)
axios.request(config) // 與上相同功能

axios.get(url, config)
axios.delete(url, config)
// 功能與 GET 相同，但無 response body
xios.head(url, config) 
  
axios.post(url, data, config)
axios.put(url, data, config)
axios.patch(url, data, config)

// 用來發送探測請求，確認該地址採用的協定、要求的表頭
axios.options(url, config) // 預先檢查發送的請求是否安全
```
