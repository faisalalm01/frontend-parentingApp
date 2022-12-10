const Captains = [
    {
        id: 10001,
        image: './images/captains/faisal.jpeg',
        name: 'Faisal Ali Muhammad',
        title: 'Back End Developer',
        describe: '##',
    },
    {
        id: 10002,
        image: './images/captains/aap.jpg',
        name: 'Aap Hapipah',
        title: 'Front End Developer',
        describe: '##',
    },
    {
        id: 10003,
        image: './images/captains/iqbal.jpeg',
        name: 'Iqbal Febren Haryanto',
        title: 'Front End Developer',
        describe: '##',
    },
    {
        id: 10004,
        image: './images/captains/prisma.jpeg',
        name: 'Prisma Alamsyah',
        title: 'Front End Developer',
        describe: '##',
    }
];

function getAllCaptains() {
    return Captains;
}

export { getAllCaptains };
