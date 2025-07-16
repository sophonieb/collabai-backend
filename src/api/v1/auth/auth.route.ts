import {Router} from 'express'
import { login, register } from './auth.controller';

const authRoute = Router()

authRoute.post('/login', login);
authRoute.post('/register', register);

export default authRoute