export const loadAuthToken = () => {
    return sessionStorage.getItem('token');
};

export const saveAuthToken = authToken => {
    try{
        sessionStorage.setItem('token', authToken);
    } catch(err){}
}

export const clearAuthToken = () => {
    try{
        sessionStorage.removeItem('token');
    } catch(err) {}
};