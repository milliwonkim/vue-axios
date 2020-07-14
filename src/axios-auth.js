import axios from 'axios';

const instance = axios.create({
    baseURL: "https://vuejs-using-axios-49da4.firebaseio.com/"
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;