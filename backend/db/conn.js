import { connect } from "mongoose";
import dotenv from 'dotenv'
//Configured dotenv
dotenv.config();

async function conn() {
    try {
        await connect(process.env.ATLAS_URI || "mongodb+srv://iabrauf:aHikx2UjGWcu8av4@cluster0.vdeobll.mongodb.net/assessment?retryWrites=true&w=majority");
    }
    catch (err) {
        console.log(err)
    }
}

conn();