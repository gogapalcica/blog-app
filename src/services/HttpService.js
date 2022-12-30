import axios from "axios";

class HttpService {
    constructor(){
        this.client = axios.create({
            baseURL:"http://localhost:3000/api"
        });
    }
}
export const httpService = new HttpService();