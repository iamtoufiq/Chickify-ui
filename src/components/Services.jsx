// import Img from "../assets/biryani.png";
// import Img from "../assets/biryani.png";
import Img2 from "../assets/biryani2.png";
// import Img3 from "../assets/biryani4.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Chicken Biryani",
    rating: 4,
    description:
      "Savor the rich flavors of our Chicken Biryani, expertly crafted for an unparalleled dining experience.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    rating: 4.5,
    description:
      "Indulge in the aromatic Chicken Kari, a culinary masterpiece that combines spices and tenderness in every bite.",
  },
  {
    id: 3,
    img: Img2,
    name: "Chicken Curry",
    rating: 4.5,
    description:
      "Experience the perfection of our Chicken Curry, where succulent chicken meets a symphony of spices in a delightful medley.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Chicken delights, expertly crafted for your palate. Savor a
              symphony of flavors, a poultry paradise like no other.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt="services iamges"
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    <StarRatings
                      rating={service.rating}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starDimension="20px"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
