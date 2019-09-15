export const databaseSelecter = (database = [], age, outlived) =>
  database
    .filter(el => (outlived ? el.days < age : el.days > age))
    .sort((objA, objB) => {
      const a = parseInt(objA.days, 10);
      const b = parseInt(objB.days, 10);
      return outlived ? a < b : a > b;
    });
