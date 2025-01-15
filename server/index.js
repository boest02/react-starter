import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

async function main() {
    console.log('Fetching shoes...');
    const shoes = await prisma.shoe.findMany();
    return shoes;
};

// Or, configure CORS for specific origins
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express with ES6!');
});

app.get('/api/shoes', (req, res) => {
    main()
        .then(async (shoes) => {
            await prisma.$disconnect();
            res.json(shoes);
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            res.send(e);
        });
});

app.post('/api/shoes/add', (req, res) => {
    console.log("POST request: ", req.body);

    let shoe = { data: req.body };
    prisma.shoe.create(shoe)
        .then(async () => {
            await prisma.$disconnect();
            res.end('Received POST request');
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            res.status(500).json(e);
        });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});