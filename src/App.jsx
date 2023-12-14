import React from "react";
import AppStore from "./components/AppStore";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
