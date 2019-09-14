export const databaseSelecter = (database = [], age, outlived) => 
  database
    .filter(el => outlived ? el.days < age : el.days > age)
    .sort( (a,b) => outlived ? a.days < b.days : a.days > b.days)