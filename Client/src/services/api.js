import axios from 'axios';



const headers = {
    "Content-Type": "multipart/form-data"
}


const API_URL='http://localhost:8000';

export const getSignedUrl=async()=>{
    try{
        const response=await axios.get(`${API_URL}/image-url`);
        return response.data;
    }catch(error){
        console.log('Error while calling api',error.message);
        return error.response.data;

    } 

}

export const uploadFile = async (url, file) => {
    try {
        const response = await axios.put(url, file, { headers: headers });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return error.response.data;
    }
}