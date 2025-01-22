
import { jwtDecode } from "jwt-decode";
export const verifyToken=(Token:string)=>{

return jwtDecode(Token);

}