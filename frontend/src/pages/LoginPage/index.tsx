import { useState } from 'react';
import { Link } from 'react-router-dom';

import BookInput from '../../components/FormComponents/BookInput';
import BookButton from '../../components/FormComponents/BookButton';

import Girlbook from '../../assets/attraction/Girlbook.svg';
import whitelogo from '../../assets/svg/brand/white-logo.svg';
import LoadingBtn from '../../components/FormComponents/LoadingBtn';
import GoogleAuthConfiguration from '../../components/GoogleOAuthComponents';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  localStorage.setItem('flag', '0');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log('button clicked');
  };

  return (
    <div className=" bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white p-5 overflow-hidden shadow-custom rounded-lg flex w-[58rem]">
        <div className="w-1/2 pr-[3.3rem] text-white">
          <div className="container bg-[#2B66F6] border border-[#2B66F6] h-full rounded-xl pl-[2rem] pr-[2rem] pb-[2rem]">
            <div className="mt-10 flex">
              <img src={whitelogo} alt="" className="w-6.1 h-6.1" />
              <p className="ml-2 mt-[0.45rem] text-white text-2xl">Critique</p>
            </div>
            <div className="container text-4xl text-white mt-[4rem] flex flex-col">
              <div>Welcome Back</div>
            </div>
            <div className="container flex flex-col mt-2 text-sm text-white fnt">
              <div>Log in to Explore Book Reviews You'll Love.</div>
            </div>
            <div className="mt-10">
              <img src={Girlbook} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center justify-center items-center pr-2">
          <div className="mt-[4rem] text-black text-3xl Nunito">Sign in.</div>

          <div className="fnt text-black text-sm mt-1">Unveil the World of Book Reviews.</div>

          <div className="flex justify-center items-center mt-[1rem]">
            <GoogleAuthConfiguration />
          </div>

          <div className="flex justify-center items-center mt-5 pl-[1rem] pr-[1rem]">
            <hr className="w-[8rem] h-[0.050rem] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-300" />
            <span className="text-xs text-[#929292]">Or with email</span>
            <hr className=" w-[8rem] h-[0.050rem] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-300" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-2 w-[21rem] h-12 pl-4 text-sm mt-2"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-2 w-[21rem] h-12 pl-4 text-sm "
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="text-m mt-0 text-[#878787]">
              <ul className="flex">
                <li className="p-1 pl-12"></li>
                <li className="p-1 pr-12 ml-auto">
                  <div>Forget Password?</div>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <Link to="/">
                  <BookButton
                    className="bg-[#2B66F6] text-white font-bold py-2 w-[21rem] rounded"
                    children="Login"
                    type="submit"
                    onClick={() => {}}
                  />
                </Link>
              )}
            </div>
          </form>

          <div className="text-m text-[#696868] mt-3 font-semibold">
            New User?{' '}
            <span className="text-black">
              <Link to="/register">
                <span>Sign Up</span>
              </Link>
            </span>
          </div>
          <div className="text-m mt-12 text-[#878787]">
            <ul className="flex">
              <li className="p-2 pl-4">Privacy Policy</li>
              <li className="p-2 pr-7 ml-auto">Copyright 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
