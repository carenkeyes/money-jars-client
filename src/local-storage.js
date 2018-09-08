export const loadAuthToken = () => {
    return localStorage.getItem('userToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('userToken', authToken);
    } catch(e) {}
};

export const clearAuthToken = () => {
    console.log('clear auth token')
    try {
        localStorage.removeItem('userToken');
    }catch (e) {}
};