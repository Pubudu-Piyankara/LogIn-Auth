const express = require('express')
const mongoose =  require('mongoose')
const cors =  require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/userSchema')

//connet too express app
const app= express()

//connect to MongoDB
const dbURL ='mongodb+srv://pubu:test123@cluster99.xcnka7n.mongodb.net/UserDB?retryWrites=true&w=majority'
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
app.post('/register', async (req,res)=>{
    try{
        const{email, username, password} = res.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({email, username, password:hashedPassword})
        await newUser.save()
        res.status(201).json({message: 'User created successfully'})
    }
    catch{
        res.status(500).json({error: 'Unable to create user'})
        
    }
})

