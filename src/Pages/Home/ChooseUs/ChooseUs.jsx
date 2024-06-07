import { FaHeadphonesAlt, FaRegStar } from "react-icons/fa";
import Container from "../../../Components/Shared/Container/Container";
import TitleSection from "../../../Components/Shared/TitleSection/TitleSection";
import { AiOutlineSafety } from "react-icons/ai";

const ChooseUs = () => {
  return (
    <div className="my-24">
      <Container>
        <div>
          <TitleSection
            title={"Why Choose Us"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis."
            }
          ></TitleSection>
        </div>
        <div className="flex justify-around mt-10 px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-32">
            <div className="w-96 bg-[#e0dcdc52] p-10 rounded-md shadow-md">
              <h1 className="mb-3">
                <FaRegStar color="orange" size={25} />
              </h1>
              <h1 className="text-xl font-semibold mb-6">Quality</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                facilis quidem voluptatibus tempora ratione perspiciatis
                reiciendis rem placeat at doloribus.
              </p>
              {/*   */}
            </div>
            <div className="w-96 bg-[#e0dcdc52] p-10 rounded-md shadow-md">
              <h1 className="mb-3">
                <AiOutlineSafety color="orange" size={25} />
              </h1>
              <h1 className="text-xl font-semibold mb-6">Longevity</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                facilis quidem voluptatibus tempora ratione perspiciatis
                reiciendis rem placeat at doloribus.
              </p>
              {/*   */}
            </div>
            <div className="w-96 bg-[#e0dcdc52] p-10 rounded-md shadow-md">
              <h1 className="mb-3">
                <FaHeadphonesAlt color="orange" size={25} />
              </h1>
              <h1 className="text-xl font-semibold mb-6">Services</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                facilis quidem voluptatibus tempora ratione perspiciatis
                reiciendis rem placeat at doloribus.
              </p>
              {/*   */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
