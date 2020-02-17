import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:3004/"
})


const counterApi = {
    getCounterValue: () => {
        return instance.get('counter')
    }
};

export default counterApi;