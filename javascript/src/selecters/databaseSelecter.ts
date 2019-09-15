import { Person } from "../api/person";

export const databaseSelecter = (
  database: Person[] = [],
  age: number,
  outlived: boolean
) =>
  database
    .filter(el =>
      outlived ? parseInt(el.days, 10) < age : parseInt(el.days, 10) > age
    )
    .sort((objA, objB) => {
      const a = parseInt(objA.days, 10);
      const b = parseInt(objB.days, 10);
      return outlived ? (a < b ? 1 : -1) : a > b ? 1 : -1;
    });
