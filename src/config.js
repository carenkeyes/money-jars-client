let API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api'

export default {
    API_BASE_URL: API_BASE_URL,
    TOKEN_CONTENT_KEY: 'userToken',
    USER_CREATE: `${API_BASE_URL}/user`,
    USER_DATA: `${API_BASE_URL}/user/protected`,
    USER_ENDPOINT: `${API_BASE_URL}/user/login`,
    UNAUTHORIZED_ENDPOINT: '/login',
    FORBIDDEN_ENDPOINT: '/no-access',
    NOT_FOUND_ENDPOINT: '/not-found',
    SERVER_ERROR_ENDPOINT: '/server-error',
    CLIENT_ID: '524cb6ed48eb7037b8391bc45974590dace8e9b2434cc03e5ae595b54412cced',
    REDIRECT_URL: 'urn:ietf:wg:oauth:2.0:oob'
};