import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '../../helpers/db-util'; 

async function handler(req, res) {

    if(req.method === 'POST'){

        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'});
            return;
        }

        try{
            const client = await connectDatabase()
        } catch (error) {
            res.status(500).json({message: 'Connecting to the database failed'})
            return;
        }
     
        try{
            await insertDocument(client, 'newsletter', {email: userEmail});
       client.close();
        } catch (error) {
            res.status(500).json({message: 'Inserting to the database failed'})
            return;
        }
       
        res.status(201).json({ message: 'Signed up'});
    }
}
export default handler;


// 6IeqHm92DD4rAqYx
// mongodb+srv://mosobelulu:6IeqHm92DD4rAqYx@cluster0.cipchht.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://mosobelulu:bnwZF6Y5pBFB3ZmR@cluster0.cipchht.mongodb.net/?retryWrites=true&w=majority