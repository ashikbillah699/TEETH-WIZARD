import { useLoaderData } from "react-router-dom";
import Service from "../component/Service";


const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div>
                <div className="grid md:grid-cols-4 gap-4 mt-10">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
        </div>
    );
};

export default AllTreatments;