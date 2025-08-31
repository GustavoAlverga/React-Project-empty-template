import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class SimpleUsage extends CoreService {
    // Use the appropriate base route for your API
    private baseRoute: string = "/route";

    async clear(): Promise<AxiosResponse | null> {
        try {
            const response = await this.getApi().put(this.baseRoute);
            return response;
        } catch (error) {
            console.error("Error clearing all resources:", error);
            return null;
        }
    }
}

export default SimpleUsage;