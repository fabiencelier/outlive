import { Person } from "../api/person";
import { DatabaseActionType, FILL_DATABASE } from "./databaseTypes";

export const fillDatabase = (data: Person[]): DatabaseActionType => ({
  type: FILL_DATABASE,
  data
});
