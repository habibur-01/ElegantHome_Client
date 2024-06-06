import { FaRegStar } from "react-icons/fa";
import Container from "../../../Components/Shared/Container/Container";
import TitleSection from "../../../Components/Shared/TitleSection/TitleSection";


const ChooseUs = () => {
    return (
        <div>
            <Container>
                <div>
                    <TitleSection title={"Why Choose Us"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis."}>

                    </TitleSection>
                </div>
                <div>
                    <div className="w-96 h-60 bg-[#ffffff52] p-">
                        <h1><FaRegStar color="orange" size={25}/></h1>
                        <h1 className="text-xl font-semibold">Quality</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis quidem voluptatibus tempora ratione perspiciatis reiciendis rem placeat at doloribus.</p>
                        {/*   */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChooseUs;