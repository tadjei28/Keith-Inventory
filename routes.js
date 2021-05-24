const express = require('express');

const router = express.Router();
const usermodel = require('./usermodel')


router.get('/', function(request,response){
    response.status(200).send("hello home")
})


router.post("/login", async (request,response) => {
    const { username, password } = request.body
    // console.log(email);
    let responseData = await usermodel.findOne({username})
    console.log(responseData);
    if(responseData){
        if(password === responseData.password){
            response.status(200).send({message1:"login Successful"})
        } else {
            response.status(200).send({message2:"wrong username or password"})
        }
    } else {

        response.send({message3:"User does not exist"})
    }



})

router.post('/signup', async (request,response) => {
    const { companyName, username, email,password, ConfirmPassword } = request.body

    try {
        let newuser = new usermodel({companyName, username, email,password, ConfirmPassword})
        responseData =  await newuser.save()
        response.status(200).send({message:"you have successfully signed up. You can login now!!!"})
    } catch (error) {
        response.status(400).send({message:error})
    }
    

})




module.exports = router