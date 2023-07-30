import styled from 'styled-components';
// import GoogleLogin from 'react-google-login';
import { useCallback, useState } from 'react';
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
  const googleLogin = async (response) => {
    // const userInfo = jwtDecode(response.credential);
    console.log('ii');
    try {
      const res = await axios.get(`${serverURL}/api/auth/google/callback`);
    } catch (error) {
      console.log('error :', error);
    }
    // window.location.href = '/';
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
