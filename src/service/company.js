import axios from 'axios'
//import {Search_searchinput} from "../component/search/search_searchinput/search_searchinput";

export class company_server {

  static async get_list(value) {

    //return await axios.get('http://localhost:3002/api/search?keyword=led');
    return await axios.get('http://192.168.2.184:3002/api/search?keyword='+ value);
  }

  static get_detail() {
    setTimeout(() => {
      return {}
    }, 500)
  }
}




// static get_list(callback) {
//
//   let data = [
//     {name: 'AMERICAN LIGHTING INC', country: '美国', buyer_number: 15, mate_number: 83},
//     {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25},
//     {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25}];
//
//   callback(data);
//   //setTimeout(callback(data), 500);
// }

// static get_list() {
//   let data;
//   axios.get('http://localhost:63342/untitled/led.json')
//     .then(function (response) {
//       console.log(response);
//       return data = response.items;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
