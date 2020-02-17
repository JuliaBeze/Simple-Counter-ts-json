import axios from "axios";

interface IResponseData {
    value: number
}

const instance = axios.create({
    baseURL: "http://localhost:3004/"
});


const counterApi = {
    async getValue(): Promise<number> {
        let result = await instance.get<IResponseData>('counter')
        return result.data.value
    }
};

export default counterApi;