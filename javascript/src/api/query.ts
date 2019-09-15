import { getPerson, Person } from "../api/person";

const request = {
  spreadsheetId: "1tLcsXib4I6wYr9EJED5uJj_mMfvDwI8hBJ7-dJWnTMk",
  range: "database!A1:T",
  key: "AIzaSyChFa8ete627UC3U9Wlgwffij0QeRdmthc"
};

const url = `https://sheets.googleapis.com/v4/spreadsheets/${request.spreadsheetId}/values/${request.range}?key=${request.key}`;

export const getAllDatabase = async () => {
  return window.fetch(url).then(response => {
    return response.json().then(res => {
      if (res) {
        return res.values.map((per: string[]) => getPerson(per));
      }
    });
  });
};

export const getFromId = async (id: string) => {
  const allData = await getAllDatabase();
  if (allData === undefined) {
    return undefined;
  }
  return allData.filter((p: Person) => p.id === id);
};
