import {Environment} from '@delon/theme';

export const environment = {
    production: true,
    useHash: true,
    api: {
        baseUrl: 'https://stocker-api-tagname.onrender.com',
        refreshTokenEnabled: true,
        refreshTokenType: 'auth-refresh'
    },
    modules: []
} as Environment;
