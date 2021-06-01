import axios from "axios";

axios.defaults.params = {}
axios.defaults.params['api_key'] = '1b9c13a9683b8cbcc1b4540029939511';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default instance;