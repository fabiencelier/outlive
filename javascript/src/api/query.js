const request = {
  spreadsheetId: '1tLcsXib4I6wYr9EJED5uJj_mMfvDwI8hBJ7-dJWnTMk',
  range: 'database!A1:M',
  key: "AIzaSyChFa8ete627UC3U9Wlgwffij0QeRdmthc",
};

const parseResult = (row) => ({
  title: row[6],
  image: row[8],
  link: row[9],
  days: row[1],
})

const url=`https://sheets.googleapis.com/v4/spreadsheets/${request.spreadsheetId}/values/${request.range}?key=${request.key}`

const cleanData = data => {
  data.splice(0,1)
  return data.map(row => parseResult(row))
}

export const getAllDatabase = async () => {
  return window.fetch(url).then((response) =>{
    return response.json().then(res => {
      if (res) {
        return cleanData(res.values);
      }
    })
  })
}
