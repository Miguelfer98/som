import axios from "axios";
const url = process.env.VUE_APP_RUTA_API_SEGURIDAD;
const SeguridadServices = {
login : async (Username,Password) => {
    try {
        const comprobacion ={
            Username:Username,
            Password:Password,
        }
      const res = await axios.post(url + "usuario/LoginAdmin",comprobacion);
      return res.data;
    } catch (e) {
      return e;
    }
  },
}
export default SeguridadServices;