
import Aboutus from "../Aboutus/Aboutus";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Products from "./Products/Products";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Aboutus></Aboutus>
                <Products></Products>
                <ChooseUs></ChooseUs>
                <Testimonials></Testimonials>
               
            </div>
        </div>
    );
};

export default Home;