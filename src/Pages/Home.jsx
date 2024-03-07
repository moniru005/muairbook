import Banner from "./Shared/Banner";
import Deal from "./Shared/Deal";
import Feature from "./Shared/Feature";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import Newsletter from "./Shared/Newsletter";
import Popular from "./Shared/Popular";
import Testimonials from "./Shared/Testimonials";
import Travel from "./Shared/Travel";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Feature/>
            <Deal/>
            <Popular/>
            <Testimonials/>
            <Travel/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;