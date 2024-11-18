

const Banner = () => {
    return (
        <div className="hero  min-h-min">
            <div className="hero-content ">
                <div className="w-6/12">
                    <h1 className="text-5xl font-bold">Brighten Your Smile with Teeth Wizard</h1>
                    <p className="py-6">
                        Experience exceptional dental care and personalized solutions
                        for a healthier, brighter smile. Trust Teeth Wizard to keep your
                        teeth shining with confidence!
                    </p>
                    <button className="btn btn-sm btn-info text-white">Book Now</button>
                </div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/007/179/113/non_2x/doctor-dentist-cartoon-checking-boy-teeth-free-vector.jpg"
                    className="  max-w-sm " />
            </div>
        </div>
    );
};

export default Banner;