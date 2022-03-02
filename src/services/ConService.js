import axios from 'axios';

class ConService{

    static getContacts(){
      let serverUrl = 'https://jsonplaceholder.typicode.com/users';
      return axios.get(serverUrl);
    }
}

export default ConService;