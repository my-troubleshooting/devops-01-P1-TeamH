const { ObjectId } = require('fastify-mongodb')
const product = require('../routes/product')//경로수정 3월 7일


module.exports = {
    readAllproduct: async (mongo) => {
        const collection = mongo.db.collection("products")
        const result = await collection.find({}).toArray()
        return result
    },


    readOneproduct: async (mongo,id) => {
        const collection = mongo.db.collection("products")
        const result = await collection.findOne({
            _id: ObjectId(id)
        })
        return result
    },

    createOneproduct: async (mongo, body) => {
        const collection = mongo.db.collection("products")
    
        const result = await collection.insertOne(body)
        return result
    },

    
    updateOneproduct: async (mongo, id, body) => {
        const collection = mongo.db.collection("products")
    
        const result = await collection.findOneAndUpdate({
          _id: ObjectId(id)
        }, {
          $set: body
        })
        return result
      },

    deleteOneproduct: async (mongo, id) => {
        const collection = mongo.db.collection("products")
    
        const result = await collection.findOneAndDelete({
          _id: ObjectId(id)
        })
        return result
    }
    //장바구니만 보기
//     readAllmylist: async(mongo, id) => {
//       const token = request.headers({Authorization})
//       function findUserByToken(token){
//           if (token==="aa") {
//             return user=1
//           } 
//           else if(token==="bb") {
//             return user=2
//           }
//         // return token.find(u=>u.token==token)
//         }
//       const user = findUserByToken(token)

//       if(user){
//         const collection=mongo.db.collection("mylist")
//         const result = await collection.find({userId: user}).toArray()
//       }
//     }
// }
  }