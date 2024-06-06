import bannerBg from "../../../assets/banner/4935203_House_Furniture_Interior Design_1920x1080.mp4";

const Banner = () => {
  return (
    <div className="w-full h-[800px]">
      <div className="relative z-0">
        <div className="w-[100%] h-[800px] ">
          <video className="w-[100%] h-full object-fill" autoPlay loop muted>
            <source src={bannerBg} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute w-[100%] h-[100%] bg-[#00000070] top-0 flex flex-col justify-center text-white">
          <div className=" container mx-auto">
            <h1 className="text-5xl font-bold mb-7 leading-tight">
              Personalize Your Space  With <br/> Elegance
            </h1>
            <p className="text-lg">
              Welcome to our ultimate destination for unique, elegant, and
              modern home decor. Discover <br /> timeless pieces that inspire
              and delight.
            </p>
            <button className="btn bg-yellow-400 text-black text-lg px-6  mt-10 outline-none border-none hover:text-base ">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
