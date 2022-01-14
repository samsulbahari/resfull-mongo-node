import Mahasiswa from "../model/Mahasiswa.js";
export const getMahasiswa = async (req,res) => {
    try {
        const dapetmahasiswa =  await Mahasiswa.find();
        res.json({
            'response' :200,
            'data' : dapetmahasiswa

    });
    } catch (error) {
        res.json({message: error.message});
    }
   

}


export const getMahasiswaId = async (req,res) => {
    try {
  
        const getidmahasiswa =  await Mahasiswa.findById(req.params.id);
      
        res.json({
            'response' :200,
            'data' : getidmahasiswa

            }); 
    } catch (error) {
        res.json({
            'response' :404,
            'data' : error.value + ' tidak ada '

            });
    }
   
}
export const saveMahasiswa = async (req,res) => {
   const mahasiswa = new Mahasiswa({
       'nama' : req.body.nama,
       'kelas' : req.body.kelas,
       'rekening' : req.body.rekening,
   });
    try {
        
        const savemahasiswa =  await mahasiswa.save();
        res.json({
            'response' :200,
            'data' : savemahasiswa

    });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
   
}

export const updateMahasiswa = async (req,res) => {

     try {
         const updatemahasiswa =  await Mahasiswa.updateOne({_id: req.params.id},{$set:req.body});
         res.json({
             'response' :200,
             'data' : updatemahasiswa
 
     });
     } catch (error) {
         res.status(400).json({message: error.message});
     }
    
 }

 export const deletemahasiswa = async (req,res) => {
    try {
        const deletemahasiswa =  await Mahasiswa.deleteOne({_id: req.params.id});
        res.json({
            'response' :200,
            'data' : deletemahasiswa

    });
    } catch (error) {
        res.json({
            'response' :404,
            'data' : error.value + ' tidak ada '

            });
    }
   
}