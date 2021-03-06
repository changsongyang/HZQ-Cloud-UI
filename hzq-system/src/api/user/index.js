import request from '@/utils/request'

const path = '/api/system/v1/users'

export function page(params) {
  return request({
    url: path + '/page/' + params.pageNum + '/' + params.pageSize,
    method: 'get'
  })
}

export function pageByRoleId(params) {
  return request({
    url:
      path +
      '/page/role/' +
      params.pageNum +
      '/' +
      params.pageSize +
      '/' +
      params.roleId,
    method: 'get'
  })
}

export function pageNotByRoleId(params) {
  return request({
    url:
      path +
      '/page/role/not/' +
      params.pageNum +
      '/' +
      params.pageSize +
      '/' +
      params.roleId,
    method: 'get'
  })
}

export function listByRoleId(id) {
  return request({
    url: '/api/system/v1/users/role/' + id,
    method: 'get'
  })
}

export function createBatchUserRole(params) {
  return request({
    url: path + '/batch/userrole/' + params.roleId,
    method: 'post',
    data: params
  })
}
