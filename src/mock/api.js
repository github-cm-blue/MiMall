import Mock from 'mockjs'

//Mock.mock(url,response);地址、返回值
Mock.mock('/api/user/login',{
    "code": 0,
    "data": {
      "id": 12,
      "username": "admin",
      "email": "admin@51purse.com",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000
    }
  })