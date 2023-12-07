import { SERVICE_PATHS } from "../../constants/servicePaths";
import {post} from "../../api/ApiBase";
const AuthService = {
    login: (url,body) => post(SERVICE_PATHS.AUTH.LOGIN,body)
};
export default AuthService;