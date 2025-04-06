import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards , Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import ProjectArr from "../ProjectsData.js";
import { useRef } from "react";
import backgroundVideo from "../assets/projects/videoBg.mp4"; // مسار الفيديو


export default function Projects() {
  const swiperRef = useRef(null)

  function handleSwiperRef(id) {    
    if (swiperRef.current) {
      console.log(id);
      
      swiperRef.current.slideTo(id);
    }
  }

  return (
    <>
      <div id="projects" className="video-container h-screen">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="py-5 text-center text-5xl border-b-2 border-amber-400 w-fit m-auto font-Yusi my-10 ">
          <h2>My Projects</h2>
        </div>
        <div className="flex py-14 items-center mt-14">
          <ul className="projects text-xl ms-10 w-1/4 rounded-md">
            {ProjectArr.map((project, i) => (
              <li key={i}>
                <button onClick={()=> handleSwiperRef(project.id)}>{project.title}</button>
              </li>
            ))}
          </ul>
          <div className="w-3/4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 2000, disableOnInteraction: false}}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // تخزين مرجع Swiper
            >
                {ProjectArr.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="project-card bg-[#111827] w-2/3 m-auto rounded-lg">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-56 object-fill rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3>{project.title}</h3>
                        <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                        <button
                        onClick={()=> {window.open( project.demo ,  "_blank")}}
                          target="_blank"
                          className="flex items-center justify-center px-4 py-2 bg-amber-400 text-[#111827] text-sm rounded-md hover:bg-amber-500 transition-all "
                        >
                          Visit Demo
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}


            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
