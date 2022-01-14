import  mongoose from "mongoose";
import  bcrypt from "bcrypt";
import Mahasiswa from "../model/Mahasiswa.js";

const User = mongoose.Schema({
  
    fullName: {
        type: String,
        trim: true,
        required: true
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
      },
      hash_password: {
        type: String
      },

      created: {
        type: Date,
        default: Date.now
      }
    });
    
    User.methods.comparePassword = function(password) {
      return bcrypt.compareSync(password, this.hash_password);
    };


export default mongoose.model('User',User);
//model('nama di dokumen bisa isi bebas)