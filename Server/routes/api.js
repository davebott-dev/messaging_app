const express = require('express');
const router = express.Router();
const passport = require('passport');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const controller = require('../controller/apiController');

passport.use(new JwtStrategy ({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, async(jwtPayload,done)=> {
    try{
        const user = await prisma.user.findFirst({
            where: {
                id: jwtPayload.userId,
            },
        });
        if(user) {
            return done(null,user);
        } else {
            return done (null, false, {msg: "user not found"});
        }
    } catch(err) {
        return done(err, false);
    }
}));
router.post('/sign-up', controller.createUser);
router.post('/log-in', async(req,res)=> {
    const username = req.body.username;
    const password= req.body.password;

    try{
        const user = await prisma.user.findFirst({
            where: {
                username,
            },
        });
        if(!user) {
            return res.json({
                success:false,
                msg:"User Not Found",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({
                success:false,
                msg:"Incorrect Password",
            });
        }

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {
            expiresIn :'1h',
        });
        res.json({
            success:true,
            token,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            msg: "Server Error",
        });
    }
});
router.get("/", passport.authenticate('jwt', {session:false}), controller.getUser);
router.get('/chats',controller.getChats);
router.get('/users', controller.getUsers);


module.exports = router;