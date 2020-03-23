import axios from 'axios';
import { ApiRoutes } from './ApiRoutes';

export default axios.create({
    baseURL: ApiRoutes.baseUrl,
});
