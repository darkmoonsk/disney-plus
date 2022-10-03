import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSingOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

auth.languageCode = "pt-br";


function Header() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }));
        navigate("/");
      } else {
        navigate("/login");
      }
    }) // eslint-disable-next-line
  }, []); 


  const signIn = () => {
    setPersistence(auth, browserSessionPersistence)
    signInWithPopup(auth, provider).then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result); 
      // const token = credential.accessToken;
      const user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })); 
      navigate("/");
      //console.log(user);
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage);
      console.log(email);
      console.log(credential);
    });
  };

  const userSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setSingOut());
      navigate("/login");
    }).catch((error) =>  {
      console.log(error);
    });
  };


  //console.log("Name is: ", userName);
  //console.log("Photo url is: " , userPhoto);
  


  
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu id="menu">
            <a href="/">
              <img alt="home icon" src="/images/home-icon.svg"></img>
              <span>INÍCIO</span>
            </a>
            <a href="#menu">
              <img alt="search icon" src="/images/search-icon.svg"></img>
              <span>PESQUISA</span>
            </a>
            <a href="#menu">
              <img alt="watchlist icon" src="/images/watchlist-icon.svg"></img>
              <span>MINHA LISTA</span>
            </a>
            <a href="#menu">
              <img alt="original icon" src="/images/original-icon.svg"></img>
              <span>ORIGINAIS</span>
            </a>
            <a href="#menu">
              <img alt="movie icon" src="/images/movie-icon.svg"></img>
              <span>FILMES</span>
            </a>
            <a href="#menu">
              <img alt="series icon" src="/images/series-icon.svg"></img>
              <span>SÉRIES</span>
            </a>
          </NavMenu>
          <UserImg 
            referrerpolicy="no-referrer"
            onClick={userSignOut}
            src={userPhoto} 
          />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;
  a {
    margin-left: 15px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      margin-left: 10px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.button`
  cursor: pointer;
  border: 1px solid gray;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
