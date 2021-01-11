import {createConnection, Connection} from "typeorm";
import { log } from "../../logger";

let mongoConnection: Connection;

async function connect() {
  log({
    type: 'INFO',
    step: 'START',
    message: 'Opening MongoDB connection'
  })
  mongoConnection = await createConnection()
}

async function disconnect() {
  await mongoConnection.close()
  mongoConnection = null
  log({
    type: 'INFO',
    step: 'END',
    message: 'Closing MongoDB connection'
  })
}

export { connect, disconnect, mongoConnection }