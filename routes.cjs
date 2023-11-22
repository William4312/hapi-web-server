const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: `*`,
        path: `/{any*}`,
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    },
    {
        method: `GET`,
        path: `/users/{username?}`,
        handler: (request, h) => {
            const { username = 'Strangers' } = request.params;
            return `Hello ${username}!`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'Strangers' } = request.params;
            const { lang } = request.query;
            if( lang === "id"){
                return `Hai ${name}`;
            }

            return `Hello ${name}!`;
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
        },
     },
     {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {username, password} = request.payload;
            return `welcome ${username}! with password ${password}`;

        }
     }
]

module.exports = routes;