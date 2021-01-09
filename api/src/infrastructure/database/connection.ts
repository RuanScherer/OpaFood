import {createConnection, Connection} from "typeorm";

let mongoConnection: Connection;

async function connect() {
  mongoConnection = await createConnection()
}

async function disconnect() {
  await mongoConnection.close()
  mongoConnection = null
}

export { connect, disconnect, mongoConnection }