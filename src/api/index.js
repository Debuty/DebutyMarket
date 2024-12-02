import axios from "axios";


const baesURL = "http://localhost:3000/";

const axiosInstat =axios.create({

    baesURL,
});



export default axiosInstat;