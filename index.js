const jsonserver=require('json-server')
// import json server

const cors=require('cors')


// server creation
const server=jsonserver.create()



// parse json data to js - middleware 
const middleware=jsonserver.defaults()

// create router 
const router=jsonserver.router("db.json")

// port
const PORT=process.env.PORT || 5000

// use
server.use(middleware)
server.use(router)
server.use(cors())

// listen
server.listen(PORT,()=>{
    console.log(`Json Server Started At Port Number ${PORT}`);
})

