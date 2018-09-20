import jwtDecode from 'jwt-decode';
import config from './config';

const hasToken = () => {
    const token = localStorage.getItem(config.TOKEN_CONTENT_KEY);
    try {
        const tokenPayload = jwtDecode(token);
        console.log(tokenPayload)
        console.log(token);
        const expiresIn = tokenPayload.iat*1000+864000;
        console.log(expiresIn)
        const now = new Date().getTime();
        console.log(now)
        if(token && expiresIn > now){
            console.log('true')
            return true;
        }
        return false;
    } catch(e){
        return false;
    }
}

export default hasToken;