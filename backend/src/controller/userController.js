const User = require("../model/User");
const bcryptService = require("../service/BcryptService");
const jwtService = require("../service/JwtService");

module.exports = {

    async signup (req, res){
        const {name, email, password} = req.body;
        const exist = await User.find({email: email})
        if(!exist){
            return res.status(400).json({message: 'Usuário já se encontra cadastrado.'})
        }
        const user = await User.create({name, email, password: bcryptService.encrypt(password)})
        return res.status(201).json({message: 'Usuário cadastrado com sucesso.'})
    },

    async login (req, res){
        const {email, password} = req.body;
        const user = await User.find({email: email})
        if(user){
            if(bcryptService.compare(password,user.password)){
                var token = jwtService.generate(user.id)
                return res.status(200).json({ auth: true, token: token });
            }
        }
        return res.status(400).json({message: 'E-mail ou Senha Inválidos.'})
    }
    
}