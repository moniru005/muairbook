import Banner from "./Shared/Banner";
import Deal from "./Shared/Deal";
import Feature from "./Shared/Feature";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Feature/>
            <Deal/>
        </div>
    );
};

export default Home;