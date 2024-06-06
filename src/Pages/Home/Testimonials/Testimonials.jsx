import Container from "../../../Components/Shared/Container/Container";
import TitleSection from "../../../Components/Shared/TitleSection/TitleSection";
import user1 from "../../../assets/decor/portrait-man-laughing.jpg";
import user2 from "../../../assets/decor/user2.jpg";
import user3 from "../../../assets/decor/user3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="bg-[#f1f0f0] pt-14">
      <Container>
        <div>
          <TitleSection
            title={"Our Client Word"}
            subTitle={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo optio odio iste."
            }
          ></TitleSection>
        </div>
        <div>
          <div className="py-10 z-0">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full relative h-[200px] flex flex-col justify-center items-center mb-10">
                  <div className="bg-[#30cfbd] w-[80%] px-10 py-4 rounded-md z-0">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia consequuntur culpa deleniti corporis fugit ipsa
                      saepe doloremque aspernatur quis! Beatae?
                    </p>
                    <h1 className="text-xl font-semibold">--Abdul Matin</h1>
                  </div>
                  <div className="absolute top-2 right-24 z-10">
                    <img
                      src={user1}
                      alt="user picture"
                      className="w-16 h-16 rounded-full border-2 border-yellow-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full relative h-[200px] flex flex-col justify-center items-center">
                  <div className="bg-[#30cfbd] w-[80%] px-10 py-4 rounded-md z-0">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia consequuntur culpa deleniti corporis fugit ipsa
                      saepe doloremque aspernatur quis! Beatae?
                    </p>
                    <h1 className="text-xl font-semibold">--Jennifar Luiz</h1>
                  </div>
                  <div className="absolute top-2 right-24 z-10">
                    <img
                      src={user2}
                      alt="user picture"
                      className="w-16 h-16 rounded-full border-2 border-yellow-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full relative h-[200px] flex flex-col justify-center items-center">
                  <div className="bg-[#30cfbd] w-[80%] px-10 py-4 rounded-md z-0">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia consequuntur culpa deleniti corporis fugit ipsa
                      saepe doloremque aspernatur quis! Beatae?
                    </p>
                    <h1 className="text-xl font-semibold">--Brendon Jack</h1>
                  </div>
                  <div className="absolute top-2 right-24 z-10">
                    <img
                      src={user3}
                      alt="user picture"
                      className="w-16 h-16 rounded-full border-2 border-yellow-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
