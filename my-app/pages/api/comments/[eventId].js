
import { connectDatabase, getAllDocuments, insertDocument} from "../../../helpers/db-util";

async function handler(req,res){

    const eventId = req.query.eventId;

let client
     
    try{
       const client = await connectDatabase();
   } catch (error) {
    res.status(500).json({message: 'connectiong to the Database failed'})
    return;
   }

    if(req.method === 'POST'){
//add server side validation
const { email,name, text }  = req.body;

        if (!email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        !text.trim() === '')
        {
            res.status(422).json({message: 'Invalid input.'})
            return;
    }
    console.log(newComment);
    const newComment = {
        email,
        name,
        text,
        eventId
    }

    let result;
    try{
     result = await insertDocument(client, 'comments', newComment) 
     newComment._id = result.insertedId; 
     res.status(201).json({message: 'added comment', comments: newComment})  
    }catch (error) {
        res.status(500).json({message: 'inserting comment failed'});
    }
}



    if(req.method === 'GET') {
        try{
        const documents = await getAllDocuments(client, 'comments', {_id: -1}, {eventId: eventId})
        } catch (error) {
            res.status(500).json({message:'getting all comments from database failed'})
        }
    }
    client.close();
}
export default handler;