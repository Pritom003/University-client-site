/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';

import { useAppDispatch } from '../redux/hooks';

import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useLoginMutation } from '../redux/features/auth/authapi';
import { verifyToken } from '../Utils/verifyToken';
import { TUser } from '../Types';
import { setUser } from '../redux/features/auth/Auth.slice';
import UniForm from '../Components/form/UniForm';
import UniInput from '../Components/form/UniInput';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   },
  // });

  const defaultValues = {
    userId: 'A-0000',
    password: 'securep23',
    
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <UniForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <UniInput type="text" name="userId" label="ID:" />
        <UniInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </UniForm>
    </Row>
  );
};

export default Login;