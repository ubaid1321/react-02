import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import CreatePost from '../components/CreatePost'
import Postlist from '../components/Postlist'
import { useState } from 'react'
import PostlistProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab,setSelectedTab] = useState('Home')



  return (
    <>
    <PostlistProvider>
    <div className='app-container'>
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div className='content'>
     <Header/>
     <Outlet/>
     <Footer/>
     </div>
     </div>
     </PostlistProvider>
     </>
     
  )
}

export default App
