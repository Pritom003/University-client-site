/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authapi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/Auth.slice";
import { verifyToken } from "../Utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../Types";

const Login = () => {
    const navigate = useNavigate();
    const dispatch=useAppDispatch()
    const {register, handleSubmit} = useForm();
    const [login ,{data, error,}] = useLoginMutation();
    console.log('data==>',data);
    console.log('error==>',error);
const onsubmit =async (data: any) => {
    const toastId=toast.loading('loading...')
    console.log(data);
    try{
    const userInfo={
        id:data.id,
        password:data.password
    }
  const res= await login(userInfo).unwrap() 
  console.log(res , 'res');
  const user=verifyToken(res.data.accessToken) as TUser
  dispatch(setUser({user:user,token:res.data.accessToken}))
  toast.success('Logged in successfully',{id:toastId ,duration:2000})
  navigate(`/${user.role}/dashboard`)}
catch(err){
    console.log(err);
    toast.error('Invalid Credentials',{id:toastId ,duration:2000})

}}
    return (
    <form onSubmit={handleSubmit(onsubmit)}>
            <div>
            <label htmlFor="id" >ID:</label>
            <input type="text" id="id" {...register('id') } />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" {...register('password') }/>
        </div>
        <Button htmlType="submit">login</Button>
    </form>
    );
};

export default Login;