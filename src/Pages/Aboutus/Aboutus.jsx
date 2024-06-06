import Container from "../../Components/Shared/Container/Container";
import aboutPic1 from "../../assets/decor/modern-styled-entryway.jpg"
import aboutPic2 from "../../assets/decor/modern-living-room-interior-design.jpg"
import { useState } from "react";

const Aboutus = () => {
    const [isTrue, setIsTrue] = useState(false)
    console.log(isTrue)
    const description = `Welcome to your ultimate destination for transforming spaces and
    elevating lives. Our collection brings together unique, elegant, and
    modern designs that blend style with comfort. Each piece is crafted
    with artistry and quality, ensuring your home reflects your personal
    taste and vision. From cozy, warm interiors to sophisticated,
    luxurious accents, we offer timeless pieces that inspire and
    delight. Discover innovative, functional solutions that harmonize
    aesthetics with practicality, creating inviting spaces filled with
    character and beauty. Embrace the joy of personalized decor and make
    every room in your home a masterpiece of creativity and elegance.`
  return (
    <Container>
      <div className="flex justify-center items-center w-full h-[800px]">
        <div className="w-[50%] px-20">
          <h1 className="text-4xl font-bold">About us</h1>
          <p className="text-gray-500 mt-8">
            {
                isTrue? <>{description}</>: <>{description.slice(0, 210)}</> 
            }
            <span className={`text-black-500 font-bold hover:cursor-default ${isTrue &&'hidden'}` }onClick={() => setIsTrue(!isTrue)}> read more</span>
          </p>
        </div>
        <div className="w-[50%] relative">
          <div>
            
            <img src={aboutPic1} className="w-[500px] h-[300px] object-cover overflow-hidden rounded-md" alt="furniture picture z-0" />
          </div>
          <div className="absolute -top-[40%] right-28 z-10">
            <img src={aboutPic2} alt="chair picture" className="w-[300px] h-[250px] object-fill overflow-hidden rounded-md"/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Aboutus;
