import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

async function main() {
    console.log('Fetching shoes...');
    const shoes = await prisma.footwear.findMany();
    return shoes;
};

// Enable CORS for all origins
app.use(cors());

// Or, configure CORS for specific origins
const corsOptions = {
    origin: 'http://localhost:5174', // Replace with your frontend's origin
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
    res.end('Received POST request');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});