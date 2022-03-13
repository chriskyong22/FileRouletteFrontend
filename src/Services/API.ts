import axios from "axios";
const BASE_URL = "http://localhost:3001/";

export const uploadFile = async (file: File): Promise<string> => {

    const formData = new FormData();
    formData.append("file", file);
    return await axios.post(`${BASE_URL}upload/`, formData,  {
        headers: {
            'Content-Type': 'multipart/form-data'
        }, 
        responseType: 'arraybuffer'
    }).then((response) => {
        console.log(response.headers);
        let contentDisposition = response.headers["content-disposition"];
        let a = document.createElement('a');
        console.log(response.headers['content-type']);
        let data = new Blob([response.data], {type: response.headers['content-type']});
        let url = window.URL.createObjectURL(data);
        a.href = url;
        let fileName = contentDisposition.split("filename=")[1];
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        return fileName;
    }).catch((error) => {
        console.error(error);
        return "Something went wrong, please try again";
    })
}