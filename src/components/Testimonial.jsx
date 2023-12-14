import Slider from "react-slick";
import { testimonialData } from "../data";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What Chicken Lovers Say
            </p>
            <h1 className="text-3xl font-bold mb-[3px]">
              Chicken Testimonials
            </h1>
            <p className="text-xs text-gray-400">
              Discover why chicken enthusiasts love Chickify Zone. Read their
              testimonials below.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img}
                      alt="testimonal image"
                    />
                    <p className="text-gray-500 text-sm">{data.text}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
