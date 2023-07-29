import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { useCallback, useState } from 'react';

const GoogleSignup = styled(GoogleLogin)`
  margin: 50vh auto;

  padding: 8px 16px;
  background-color: #006bff;
  align-items: center;

  font-weight: bold;
  border-radius: 8px;
  align-items: center;
`;
const Container = styled.div``;

export const SignupForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const googleLogin = useCallback((response) => {
    const userInfo = {
      profileImg: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };
    setIsLogin(true);
    setUserInfo(userInfo);
  });

  return (
    <GoogleSignup
      clientId=""
      buttonText="Google로 시작하기"
      onSuccess={googleLogin}
      onFailure={(res) => console.log(res)}
      //   cookiePolicy={'single_host_origin'}
    />
  );
};
