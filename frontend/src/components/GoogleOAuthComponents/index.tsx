// Importing packages
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function GoogleSSOComponent() {
  const navigate = useNavigate();
  return (
    <>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          try {
            const response = await fetch('http://localhost:8080/api/auth/google/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: credentialResponseDecoded.email,
                name: credentialResponseDecoded.name,
                profilePicture: credentialResponseDecoded.picture
              })
            });

            const data = await response.json();
            localStorage.setItem('usid', data.userId);
            localStorage.setItem('profile', data.profilePicture);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);

            if (response.status === 200) {
              navigate('/');
            } else {
              if (response.status === 404) {
                alert('Error occured');
              }
            }
          } catch (error) {
            console.error('Error:', error);
          }
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
