const { deleteOneproduct } = require("../../model")

module.exports = async function (app, opts) {
    app.delete('/:id', async function (request, reply) {
      
      const result = await deleteOneproduct(this.mongo, request.params.id)
      if(!result.value){
        console.log("no data")
        reply
          .code(204)
          .header('content-type', 'application/json')
          .send({
            value:result.value,
            ok:result.ok
          })
      }
      else{
        console.log("result :", result)
        reply
          .code(200)
          .header('content-type', 'application/json')
          .send({
            value:result.value,
            ok:result.ok
          })
      }
    })
  
  }