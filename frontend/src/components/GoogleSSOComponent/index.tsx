// Importing packages
import { useState } from 'react';
import { message } from 'antd';
import { useRecoilState } from 'recoil';
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

// Importing components
import RecordButton from '../../components/FormComponents/RecordButton';

// Importing assets
import googleLogo from '../../assets/image/other-brands/google.png';

// Importing API
import authApi from '../../apis/auth.api';

// Importing stores
import currentUserState from '../../store/user.store';

function GoogleSSOComponent() {
  const navigate = useNavigate();
  const [isGoogleLoginLoading, setIsGoogleLoginLoading] = useState(false);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useRecoilState(currentUserState);

  const login = useGoogleLogin({
    onSuccess: codeResponse => handleGetUserInfoFromGoogleOAuthApi(codeResponse),
    onError: () => message.error('Something went wrong, Please again later!')
  });

  const handleGetUserInfoFromGoogleOAuthApi = (codeResponse: any) => {
    authApi.handleGetUserInfoFromGoogleApi({
      config: {
        headers: {
          Authorization: `Bearer ${codeResponse.access_token}`,
          Accept: 'application/json'
        },
        withCredentials: false
      },
      success: (response: any) => handleGoogleAuthentication(response.data),
      error: handleGoogleAuthenticationError
    });
  };

  const handleGoogleAuthentication = (data: any) => {
    setIsGoogleLoginLoading(true);
    authApi.handleGoogleSSO({
      payload: {
        name: data.name,
        email: data.email,
        profilePicture: data.picture,
        googleId: data.id
      },
      success: () => {
        setCurrentLoggedInUser({
          ...currentLoggedInUser,
          isLoggedIn: true
        });
        navigate('/');
      },
      error: handleGoogleAuthenticationError
    });
  };

  const handleGoogleAuthenticationError = () => {
    setIsGoogleLoginLoading(false);
    message.error('Something went wrong, Please again later!');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        margin: 'auto',
        width: '80%'
      }}
    >
      <RecordButton
        htmlType="submit"
        size="large"
        type="default"
        loading={isGoogleLoginLoading}
        block
        sx={{
          marginTop: 40,
          borderRadius: 30,
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'center',
          backgroundColor: '#FFFFFF'
        }}
        onClick={() => {
          login();
        }}
      >
        <img
          src={googleLogo}
          alt="continue-with-google"
          width="20"
          style={{
            cursor: 'pointer'
          }}
        />
        Continue With Google
      </RecordButton>
    </div>
  );
}

export default function GoogleSSOConfiguration() {
  return (
    <GoogleOAuthProvider clientId="306931798725-mhcnb34m8hcsqq64srimph1ss104512b.apps.googleusercontent.com">
      <GoogleSSOComponent />
    </GoogleOAuthProvider>
  );
}
