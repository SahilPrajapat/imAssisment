import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://imarticus-test.herokuapp.com/'
}) 

export default instance;