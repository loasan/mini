

export class company_server {
  static get_list(callback) {

    let data = [
      {name: 'AMERICAN LIGHTING INC', country: '美国', buyer_number: 15, mate_number: 83},
      {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25},
      {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25}];

    callback(data);
    //setTimeout(callback(data), 500);
  }

  static get_detail() {
    setTimeout(() => {
      return {}
    }, 500)
  }
}
