import React, { useEffect } from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import Dashboard from './pages/Dashboard'
import BlogTitle from './pages/BlogTitle'
import Community from './pages/Community'
import GenerateImage from './pages/GenerateImage'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import { useAuth, useUser } from "@clerk/clerk-react";
import {Toaster} from 'react-hot-toast';

const App = () => {
  // const { getToken } = useAuth();
  // const { user } = useUser();

  // const fetchToken = async()=>
  // {
  //   const token = await getToken();
  //   console.log(token);
  // }
  // useEffect(()=>{
  //   fetchToken();
  // },[user])

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='generate-image' element={<GenerateImage/>}/>
          <Route path='blog-title' element={<BlogTitle/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='remove-object' element={<RemoveObject/>}/>
          <Route path='review-resume' element={<ReviewResume/>}/>
          <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
