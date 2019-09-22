import { Person } from "../api/person";
import { DatabaseActionType, FILL_DATABASE } from "./databaseTypes";
import { sendDatabaseToWorker } from "../worker/send";

export const fillDatabase = (data: Person[]): DatabaseActionType => {
  sendDatabaseToWorker(data);
  return {
    type: FILL_DATABASE,
    data
  };
};
