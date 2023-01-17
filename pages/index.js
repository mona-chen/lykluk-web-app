import React from "react";
import Header from "../components/header/Header";
import LeftSide from '../components/home/leftSide/LeftSide';
import Middle from "../components/home/middle/Middle";
import { useEffect } from 'react';
import { getFyp } from '../redux/home';
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import RightSide from '../components/home/rightSide/RightSide';

export default function Home() {
  const dispatch = useDispatch()

  const fetchFyp = async (e) => {
    const data = await dispatch(getFyp());
    if (data?.payload?.sucess) {
      return data;
    }
    
  };
  
// fetch posts on page load
  useEffect(() => {
    fetchFyp()
      }, [])

// retrieve posts from redux
const { fyp } = useSelector((state) => state.home);

  return (
    <div className="window_wrapper">
      <Header />
    <div className="main_home_wrapper">
      <LeftSide />
      <Middle 
      posts = {fyp?.data}
      />
      <RightSide />

    </div>
    </div>
  )
}
