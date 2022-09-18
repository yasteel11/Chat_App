import React from 'react'
import Navbar from './components/Navbar';

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const style ={
  appContainer: `max-w-[728px] mx-auto text-center bg-white`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  button: `w-[15%] bg-white fixed top-10 absolute transform -translate-x-1/2 -translate-y-1/2 p-[12px]`
}

const notify = () => {
  toast.info('Sign-in with a google account and then open the website in another tab and sign-in with a different google account to get chatting!', {position:toast.POSITION.TOP_CENTER})
}

function App() {
const [user] = useAuthState(auth)


  return (
    <div className="bg-violet-400 min-h-screen">
    <div className={style.appContainer}>
      <section className="{style.sectionContainer}">
        {/*Navbar*/} 
        <Navbar /> 
        {user ? <Chat user={user} /> : null}
       <button onClick={notify} className={style.button}>Instructions</button>

      </section>
      <ToastContainer autoClose={8000}  />
    </div>
    </div>
  );
}

export default App;
