import styled from 'styled-components';
// import GoogleLogin from 'react-google-login';
import { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

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
  const cliendId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [cookies, setCookie] = useCookies(['id']);
  const googleLogin = async (response) => {
    const userInfo = jwtDecode(response.credential);
    try {
      const result = await axios.post(`${serverURL}/api/auth/google/callback`, {
        userInfo,
      });
      console.log(result);
      setCookie('accessToken', result.data.accessToken);
    } catch (error) {
      console.log('error :', error);
    }
    window.location.href = '/';
  };

  return (
    <>
      <GoogleOAuthProvider clientId={cliendId}>
        <GoogleLogin
          buttonText="Google로 시작하기"
          onSuccess={(credentialResponse) => {
            googleLogin(credentialResponse);
          }}
          onError={() => {
            console.log('loginfail');
          }}
        />
      </GoogleOAuthProvider>
      {/* <button onClick={googleLogin}>규굴로 시작하기</button> */}
    </>
  );
};
