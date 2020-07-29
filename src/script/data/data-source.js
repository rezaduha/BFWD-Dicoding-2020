const baseUrl = "https://breakingbadapi.com/api/characters";

class DataSource {
  static dataCharacter() {
    return fetch(`${baseUrl}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`Something Wrong!!!`);
        }
      });
  }

  static searchCharacter(keyword) {
    return fetch(`${baseUrl}?name=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
