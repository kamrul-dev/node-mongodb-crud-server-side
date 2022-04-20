const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Running my node crud server");
})

// user: dbuser1
// password: Qd5fRBDMf0w6lX6p


const uri = "mongodb+srv://dbuser1:Qd5fRBDMf0w6lX6p@cluster0.nqpxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");

        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users)
        })

        // POST user: add a new user
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })
    }
    finally {
        //    await client.close();
    }

}
run().catch(console.dir);


// use middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('listening port:', port);
})