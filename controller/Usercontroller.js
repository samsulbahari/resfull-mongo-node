import User from "../model/User.js";
import  bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";

export const Register = async (req,res) => {
    const register = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        hash_password: bcrypt.hashSync(req.body.password, 8)
      });
    //let saltRounds =  bcrypt.genSalt(10);

     try {
         
         const saveuser =  await register.save();
    
         
         res.json({
             'response' :200,
             'data' : saveuser
 
     });
     } catch (error) {
         res.status(400).json({message: error.message});
     }
    
 }
 export const login = async(req,res) => {
    const getuser = await  User.findOne({ email : req.body.email }) 
    try{
        if (!getuser || !getuser.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            
          }else{
            return res.json({ response : 200,
                             data : getuser,
                             token: jwt.sign({ email: getuser.email, fullName: getuser.fullName, _id: getuser._id }, 'RESTFULAPIs') 
        
                             });
          }
     }catch(err){
        res.status(400).json({message: err.message});
     }
 }
 
 export const loginRequired = async(req, res, next) =>
  {
    if (req.user) {
        console.log(req.user)
        //user di dapetin dari tampilan index depan
        try {

            const getuser=  await User.find();
            res.json({
                'response' :200,
                'data' : getuser
    
            });    
            next();
        } catch (error) {
            res.json({message: error.message});

        }
       
   
    } else {
  
      return res.status(401).json({ message: 'Unauthorized user!!' });
    }
  }


