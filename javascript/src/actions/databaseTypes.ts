import { Person } from "../api/person";
export const FILL_DATABASE = "FILL_DATABASE";

interface FillDatabaseAction {
  type: typeof FILL_DATABASE;
  data: Person[];
}

export type DatabaseActionType = FillDatabaseAction;
