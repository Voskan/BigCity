import { MongoClient } from "mongodb";

const user = 'user_name';
const password = 'password';
const cluster = 'cluster';
const dbName = 'main';

const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db("main");

  return {
    listings: db.collection("test_listings")
  }
};