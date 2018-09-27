import jwtDecode from 'jwt-decode';
import config from './config';

const hasToken = () => {
    const token = localStorage.getItem(config.TOKEN_CONTENT_KEY);
    try {
        const tokenPayload = jwtDecode(token);
        const expiresIn = tokenPayload.iat*1000+864000;
        const now = new Date().getTime();
        if(token && expiresIn > now){
            return true;
        }
        return false;
    } catch(e){
        return false;
    }
}

export default hasToken;