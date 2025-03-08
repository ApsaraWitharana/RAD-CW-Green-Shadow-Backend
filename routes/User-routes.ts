// import express from "express";
// import {User} from "../model/user";
// import jwt, {Secret} from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import {registerUser, verifyUserCredentials} from "../controller/UserController";
//
// dotenv.config();
//
// const router = express.Router();
//
// router.post("/login", async (req, res) => {
//     console.log('Login');
//
//     const { email, password } = req.body.user;
//
//     const user = new User( email, password);
//
//     try {
//         const isVerified = await verifyUserCredentials(user);
//         if (isVerified) {
//             const token = jwt.sign({ email }, process.env.SECRET_KEY as Secret, { expiresIn: "1d" });
//             const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN as Secret, { expiresIn: "7d" });
//             res.json({ accessToken: token, refreshToken: refreshToken });
//         } else {
//             res.status(403).send('Invalid credentials');
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(400).send(err);
//     }
// });
//
//
// router.post("/register", async (req, res) => {
//     console.log('Register', req.body);
//     const name = req.body.user.name;
//     const password = req.body.user.password;
//     const email = req.body.user.email;
//     const role = req.body.user.role;
//
//     const user : User = {name, password,email,role};
//
//     try{
//         const registration = await registerUser(user);
//         res.status(201).json(registration);
//     }catch(err){
//         console.log(err);
//         res.status(401).json(err);
//     }
//
// })
//
// router.post("/refresh-token", async (req, res) => {
//     const authHeader = req.headers.authorization;
//     const refresh_token = authHeader?.split(' ')[1];
//
//     if(!refresh_token)res.status(401).send('No token provided');
//
//     try{
//         const payload = jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret) as {username: string, iat: number};
//         const token = jwt.sign({ username: payload.username }, process.env.SECRET_KEY as Secret, {expiresIn: "1m"});
//         res.json({accessToken : token});
//     }catch(err){
//         console.log(err);
//         res.status(401).json(err);
//     }
// })
//
// export function authenticateToken(req : express.Request, res : express.Response, next : express.NextFunction){
//     const authHeader = req.headers.authorization;
//     const token = authHeader?.split(' ')[1];
//
//     console.log(token);
//     if(!token)res.status(401).send('No token provided');
//
//     try{
//         const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as {username: string, iat: number};
//         console.log(payload.username);
//         req.body.username = payload.username;
//         next();
//     }catch(err){
//         res.status(401).send(err);
//     }
// }
//
// export default router;