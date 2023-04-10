import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from '../component/footer';
import AboutUs from '../pages/aboutus';
import PreLaunching from "../pages/comingsoon";
import ProfileCust from '../pages/profileCust';
import ProfileSeller from '../pages/profileSeller';

const routers = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
    },
    {
        path : "/footer",
        element : <Footer/>,
    },
    {
        path : "/aboutus",
        element : <AboutUs/>,
    },
    {
        path : "/soon",
        element : <PreLaunching />,
    },
    {
        path : "/profilecust",
        element : <ProfileCust />,
    },
    {
        path : "/profileseller",
        element : <ProfileSeller />,
    },
])

export default routers;