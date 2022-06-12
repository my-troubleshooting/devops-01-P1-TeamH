'use strict'

const { updateOneproduct } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const result = await updateOneproduct(this.mongo,request.params.id,request.body)


    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
    reply
      .code(200)
      .header('Content-Type','application/json')
      .send({value : result})
    }
  })
}