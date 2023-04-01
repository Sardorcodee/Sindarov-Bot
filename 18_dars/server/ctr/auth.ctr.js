const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")


const { read_file, write_file } = require("../fs/fs_api")

let users = read_file("users.json")


const register = async(req, res) => {
    const { username, email, password } = req.body
    console.log(req.body);

   let foundedUser =  users.find(user => user.email === email)

   if(foundedUser) return res.status(400).send(JSON.stringify({
    msg: 'User already exists!!'
   }))

   const hashPsw = await bcrypt.hash(password, 12)

   let user = {
    id: uuid.v4(),
    username,
    email,
    password: hashPsw
   }

   users.push(user)

   write_file("users.json", users)

   return res.status(201).send({
    msg: 'User registrated!'
   })

}


const login = async(req, res) => {
    const { suppername, password } = req.body

   let foundedUser =  users.find(user => user.email === suppername || user.username === suppername)

   if(!foundedUser) return res.status(404).send({ msg: "User not found!" })


 let checkPsw = await bcrypt.compare(password, foundedUser.password)
 console.log(checkPsw);
 if(checkPsw){

    let token = await jwt.sign({ id: foundedUser.id }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
    return res.status(200).send({ token })

 }


 return res.status(404).send({ msg: "Password invated!" })

}

module.exports = {
    register,
    login
}