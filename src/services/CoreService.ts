import axios from 'axios';
import  { type AxiosInstance } from 'axios';

class CoreService {
    protected api: AxiosInstance;
    // Update this URL to your backend server's URL
    protected URL = "http://exemple.com/api";

    constructor() {
        this.api = axios.create({
          baseURL: this.URL,
          timeout: 1000 * 10,
        });
    }

    getApi(): AxiosInstance {
        return this.api;
      }
}

export default CoreService;