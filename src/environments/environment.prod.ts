import {Environment} from '@delon/theme';

export const environment = {
    production: true,
    useHash: true,
    api: {
        baseUrl: 'https://stock-api-tagname.onrender.com/',
        refreshTokenEnabled: true,
        refreshTokenType: 'auth-refresh'
    }
} as Environment;
