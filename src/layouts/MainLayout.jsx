import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <header>
                <Navbar></Navbar>
            </header>
            <main>

                <Outlet></Outlet>
            </main>
            {/* Footer */}
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;

