import bgImg from "../../assets/decor/modern-styled-entryway.jpg";

const FindStore = () => {
  return (
    <div>
      <div className="w-full h-[800px]">
        <div className="relative z-0">
          <div className="w-[100%] h-[400px] ">
            <img src={bgImg} className="w-[100%] h-full object-cover" />
          </div>
          <div className="absolute w-[100%] h-[100%] bg-[#00000070] top-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-7 leading-tight">
              Personalize Your Space With <br /> Elegance
            </h1>
            <p className="text-lg">Visit Our Store</p>
          </div>
        </div>
        <div className="flex justify-center items-center mx-10">
          <div className="container xl:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24">
            <h1 className="md:text-center font-bold text-2xl">Store Address</h1>
            <div className="bg-[#fffdfd] p-4 border-[1px] w-60">
              <h1 className="text-base font-medium ">
                Address: Mirpur-1, Dhaka
              </h1>
              <p>Phone: 017586945654</p>
              <p>Email: elgant@home.com</p>
            </div>
            <div className="bg-[#fffdfd] p-4 border-[1px] w-60">
              <h1 className="text-base font-medium ">
                Address: Mirpur-1, Dhaka
              </h1>
              <p>Phone: 017586945654</p>
              <p>Email: elgant@home.com</p>
            </div>
            <div className="bg-[#fffdfd] p-4 border-[1px] w-60">
              <h1 className="text-base font-medium ">
                Address: Mirpur-2, Dhaka
              </h1>
              <p>Phone: 017586945654</p>
              <p>Email: elgant@home.com</p>
            </div>
            <div className="bg-[#fffdfd] p-4 border-[1px] w-60">
              <h1 className="text-base font-medium ">
                Address: Mirpur-12, Dhaka
              </h1>
              <p>Phone: 017586945654</p>
              <p>Email: elgant@home.com</p>
            </div>
            <div className="bg-[#fffdfd] p-4 border-[1px] w-60">
              <h1 className="text-base font-medium ">
                Address: Mirpur-10, Dhaka
              </h1>
              <p>Phone: 017586945654</p>
              <p>Email: elgant@home.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindStore;
