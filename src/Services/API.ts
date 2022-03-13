import axios from "axios";
const BASE_URL = "http://localhost:3001/";

export const uploadFile = (file: File) => {

    const formData = new FormData();
    formData.append("file", file);
    axios.post(`${BASE_URL}upload/`, formData,  {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.error(error);
    })
}