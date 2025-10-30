import axios from "axios"
const upload= async(file)=>{
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset","freelance-marketplace")
    try{
      const res= await axios.post("https://api.cloudinary.com/v1_1/dajlyulcg/image/upload",data)
      return res.data.url
    }
    catch(err){
      console.log(err)
    }
  }
export default upload