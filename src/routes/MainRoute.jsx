import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyAppointments from "../pages/MyAppointments";
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:async() => {
                    const servicesData = await fetch(`/service.json`);
                    const services = await servicesData.json();

                    const feedbackData = await fetch(`/happayClients.json`);
                    const feedbacks = await feedbackData.json()

                    return {services, feedbacks}
                }
            },
            {
                path:'/allTeatments',
                element: <AllTreatments></AllTreatments>,
                loader: ()=> fetch(`/service.json`)

            },
            {
                path:'/myAppointments',
                element: <PrivetRoute><MyAppointments></MyAppointments></PrivetRoute> 
            },
            {
                path:'/profile',
                element:<PrivetRoute> <Profile></Profile></PrivetRoute>
            },
            {
                path:'/serviceDetail/:id',
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
                loader:async({params}) => {
                    const data = await fetch(`/service.json`)
                    const serviceData = await data.json();
                    const serviceDetails = serviceData.find(d=> d.id == params.id)
                    return serviceDetails
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router