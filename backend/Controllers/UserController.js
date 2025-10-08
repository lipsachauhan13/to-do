import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../Model/UserModel.js';

export const signup = async (req, res) =>{
    try{
        const { name,email,password } = req.body;

        const existingUser = await User.findOne({where:{email}});
        if(existingUser){
            return res.status(400).json({msg: 'email is already registeredd'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword});
        console.log('user created succesfully', user);

        res.status(201).json({msg:'signup successfully', user});
        
    } catch(err){
        console.error('signup error', err);
        res.status(500).json({msg: 'signup failed:', err: err.msg});
    }
};

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({where:{email:email}});

        if(!user)
            return res.status(400).json({msg: 'invalid credential'});
            console.log();

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
            return res.status(400).json({ msg: 'invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, 
        process.env.JWT_SECRET_KEY);

        res.status(200).json({msg: "login succesful", token});
    } catch (err){
        res.status(500).json({ msg: 'Login failed', error: err.message });
    }
}

