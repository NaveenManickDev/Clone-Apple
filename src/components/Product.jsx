import React, { useState, useEffect } from "react";
import mobileImage from "./images/mobile/mac_for_students_hero__dbi4flqyio2u_small.jpg";
import desktopImage from "./images/desktop/promo_ios18__eo1lt24j3wk2_large.jpg";

const Product = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedImage = isDesktop ? desktopImage : mobileImage;

  return (
    <section className="w-full flex m-2 flex-wrap">
      <div className="w-full h-screen overflow-hidden m-2">
        <img
          src={selectedImage}
          alt="Product 1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-screen overflow-hidden m-2">
        <img
          src={selectedImage}
          alt="Product 2"
          className="w-full h-full object-cover"
        />
        
      </div>
      
    </section>
  );
};

export default Product;