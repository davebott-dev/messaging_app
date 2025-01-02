const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
    const profile= await prisma.profile.deleteMany({});
    const user = await prisma.user.deleteMany({});

    
    console.dir(user, {depth:null});
}

main();