import { App } from './App'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import { routes } from './routes'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = App({
    port: 3005,
    host: '127.0.0.1',
    routes,
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cookieParser()
    ]
})
