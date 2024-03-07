import Banner from "./Shared/Banner";
import Deal from "./Shared/Deal";
import Feature from "./Shared/Feature";
import Navbar from "./Shared/Navbar";
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
            <Travel/>
            <Popular/>
            <Testimonials/>
        </div>
    );
};

export default Home;