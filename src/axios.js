import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://jsonplaceholder.typicode.com',
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request.use(request => {
//     console.log(request);
//     //edit request 
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// })


export default instance;