'use strict'


const { readAllproduct,readOneproduct, readAllmylist } = require('../../model') // model에서 사용할 함수 선언하고 불러옴


module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAllproduct(this.mongo)
    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
     reply
      .code(200)
      .header('Content-Type','application/json')
      .send(result)
        }
        }
        )
    
    app.get('/:id', async function (request, reply) {
    
        const result = await readOneproduct(this.mongo,request.params.id)
    
        if(result === []){
          reply
            .code(404)
            .header('Content-Type','application/json')
            .send("error : Not Found")
        }else{
          reply
          .code(200)
          .header('Content-Type','application/json')
          .send(result)
        }
      } 
      )
      // app.get('/mylist', async function(request, reply){

      //   const result = await readAllmylist(this.mongo, id)
        
      //   if(user===[]){
      //     reply
      //      .code(401)
      //      .header('content-type', 'application/json; charset=urf-8')
      //      .send({message: '권한이 없습니다.'})
      //   }
      //   reply
      //    .code(200)
      //    .header('content-type', 'application/json; charset=urf-8')
      //    .send(result)

      }