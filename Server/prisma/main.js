const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
    // const profile= await prisma.profile.deleteMany({});
    // const user = await prisma.user.deleteMany({});

    // const chatroom = await prisma.chatroom.create({
    //     data:{
    //         title: "Global",
    //     }
    // })

    
    console.dir(chatroom, {depth:null});
}

main();