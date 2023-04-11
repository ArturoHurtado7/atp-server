import { connect } from "mongoose";

export default async function connection () {
    try{
        const db = await connect("mongodb://localhost:27017/atp");
        console.log("Database is connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}