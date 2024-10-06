import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Care from './Components/Care/Care';
import Header from './Components/Essentials/Header';
import Footer from './Components/Essentials/Footer';
import Forms from './Components/Forms/Forms';
import NurseProfile from './Components/Care/CompanionProfile/Nurse';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Booking from './Components/Booking/Booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/care/:type",
    element: <Care />,
    // children: [
    //   {
    //     path: ":name", 
    //     element: <NurseProfile />
    //   }
    // ]
  },
  {
    path: "/care/:type/:name",
    element: <NurseProfile/>
  },
  {
    path: "/register/:type",
    element: <Forms />
  },
  {
    path: "booking",
    element: <Booking/>
  }
]);



function App() {
  return (
    <React.StrictMode>
      
      <main className='mb-0'>
        <Header/>
        <hr className='mt-0'/>
        <RouterProvider router={router} />
        <Footer/>
      </main>
      
    </React.StrictMode>
  );
}

export default App;
