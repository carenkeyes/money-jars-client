export default {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
    TOKEN_CONTENT_KEY: 'userToken',
    USER_CREATE: `${this.API_BASE_URL}/user`,
    USER_ENDPOINT: `${this.API_BASE_URL}/user/login`,
    UNAUTHORIZED_ENDPOINT: '/login',
    FORBIDDEN_ENDPOINT: '/no-access',
    NOT_FOUND_ENDPOINT: '/not-found',
    SERVER_ERROR_ENDPOINT: '/server-error',
};