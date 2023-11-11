// Importing packages
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function GoogleSSOComponent() {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded);
          localStorage.setItem('Profile_url', credentialResponseDecoded.picture);
          localStorage.setItem('User_email', credentialResponseDecoded.email);
          localStorage.setItem('User_name', credentialResponseDecoded.name);
          localStorage.setItem('flag', '1');
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
}

export default function GoogleAuthConfiguration() {
  return (
    <GoogleOAuthProvider clientId="365993735993-qano6av4tuddfjbj2v60u3l2ujgvdftf.apps.googleusercontent.com">
      <GoogleSSOComponent />
    </GoogleOAuthProvider>
  );
}
