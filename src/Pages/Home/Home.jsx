import Aboutus from "../Aboutus/Aboutus";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Products from "./Products/Products";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Aboutus></Aboutus>
                <Products></Products>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;