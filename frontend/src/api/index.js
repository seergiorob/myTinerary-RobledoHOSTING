import axios from "axios";
import { API_URL } from "config.js";


const get = (uri)=>{
  try{
    const res=  axios.get(`${API_URL}/uri`)
    return {success:true,response:res.data.response}
  }catch(err){
    return {success:false,response:err}
  }

}

export {
    get,
    // post
    // put...
}