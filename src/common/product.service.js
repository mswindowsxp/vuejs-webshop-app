import CommonService from './common.service'

export const ProductService = {
  getListProduct () {
    return CommonService.getAll('http://dummy.restapiexample.com/api/v1/employees')
  }
}
