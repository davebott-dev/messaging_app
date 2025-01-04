require('dotenv').config();
const {PrismaClient}= require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    getUser: async(req,res)=> {
        const user = await prisma.user.findFirst({
            where: {
                id: req.user.id,
            },
            include:{
                profile:true,
                messages:true,
            }
        });
        res.json(user);
    },
    createUser: async(req,res)=> {
        const {username,email,name,password:prev} = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        });
        
        if(!user) {
            bcrypt.hash(prev,10,async(err,password)=> {
                if(err) {
                    console.error(err);
                } else {
                    const newUser = await prisma.user.create({
                        data: {
                            email,
                            name,
                            username,
                            password,
                            profile: {
                                create:{
                                    bio: 'I am a new user...'
                                }
                            }
                        }
                    });
                    const token = jwt.sign({userId: newUser.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
                    res.json({
                        success:true,
                        token:token,
                        msg: "New User Successfully Created",
                    })
                }
            })
        } else {
            res.json({
                success:false,
                msg: "Email/Username already selected"
            })
        }

    },
    getUsers:async(req,res) => {
        const content = await prisma.user.findMany({
            include:{
                profile:true,
                messages:{
                    include:{
                        chatroom:true,
                    }
                }
            }
        });
        res.json({
            success:true,
            content,
        })
    },
    getChats: async(req,res) => {
        const content = await prisma.chatroom.findMany({
            include:{
                messages:true,
            }
        });
        res.json({
            success:true,
            content,
        })
    }

}