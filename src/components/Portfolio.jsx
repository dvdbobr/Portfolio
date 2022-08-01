import React, { useEffect, useState } from "react";
import { projectsData } from "../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import ProjectCard from "./ProjectCard";
import Divider from "./Divider";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);
  return (
    <>
      <Divider title={"Portfolio"} id={"portfolio"} />
      <section className="mt-8 mx-auto md:w-[80vw] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={isMobile ? 1 : 2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{delay:5000}}
        >
          {projectsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ProjectCard item={item} key={item.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Portfolio;
