import { NavLink, useLoaderData } from "react-router-dom";
import Service from "../component/Service";
import Banner from "../component/Banner";
import Feedback from "../component/Feedback";


const Home = () => {
    const {services, feedbacks} = useLoaderData()
    // console.log(services,feedbacks)
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className="text-2xl font-bold border-b pb-3 mb-6 mt-10">Services</h1>
                <div className="grid md:grid-cols-4 gap-4">
                    {
                        services.slice(0,4).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
                <div className="mt-6 text-center">
                    <NavLink className='btn btn-sm btn-info text-white' to='/allTeatments'>Show all service</NavLink>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold border-b pb-3 mb-6 mt-10">Feedback</h1>
                <div className="grid md:grid-cols-3  gap-4 ">
                    {
                        feedbacks.map(feedback => <Feedback key={feedback.reviewId} feedback={feedback}></Feedback>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;