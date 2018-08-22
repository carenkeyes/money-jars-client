import jwtDecode from 'jwt-decode';
import config from '../config';

const hasToken = () => {
    const token = sessionStorage.getItem(config.TOKEN_CONTENT_KEY);
    try {
        const tokenPayload = jwtDecode(token);
        const expiresIn = tokenPayload.exp * 1000;
        const now = new Date().getTime()
        if (token && expiresIn > now){
            return true;
        }
        return false;
        } catch (err) {
            return false;
        }
};


export default hasToken;