import  mongoose from "mongoose";

const Mahasiswa = mongoose.Schema({
  
    nama:{
        type : String,
        required : true
    },
    kelas: {
        type : Number,
        required : true
    },
    rekening :[String],

});

export default mongoose.model('mahasiswa',Mahasiswa);
//model('nama di dokumen bisa isi bebas)