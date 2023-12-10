const express = require('express')
const mongoose =  require('mongoose')
const cors =  require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema1 = require('./models/userSchema')

//connet too express app
const app= express()

//connect to MongoDB
const dbURL ='mongodb+srv://pubu:test123@cluster99.xcnka7n.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(()=>{ 
    app.listen(3001, ()=>{ 

        console.log('Server is connected to port 3001 and MongoDB')
    })
})
.catch((error)=>{ 
    console.log('Unable to connect to server; ', error)
})


//middleware
app.use(bodyParser.json())
app.use(cors())

//schema


//routes
//user registration
//post register
app.post('/register', (req,res)=>{
    try{
        const{email, username, password} = res.body
    }
    catch{
        
    }
})

