import Banner from "./Shared/Banner";
import Deal from "./Shared/Deal";
import Feature from "./Shared/Feature";
import Navbar from "./Shared/Navbar";
import Popular from "./Shared/Popular";
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
        </div>
    );
};

export default Home;