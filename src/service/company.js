

export class company_server {
  get_list() {
    setTimeout(() => {
      return [
        {name: 'AMERICAN LIGHTING INC', country: '美国', buyer_number: 15, mate_number: 83},
        {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25},
        {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25}
      ]
    }, 500)
  }

  get_detail() {
    setTimeout(() => {
      return {}
    }, 500)
  }
}
