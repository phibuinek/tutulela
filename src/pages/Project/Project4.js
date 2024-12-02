import React from "react";
import { Image } from "react-bootstrap";

const Project4 = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] justify-items-center items-center lg:mt-10 gap-y-10 gap-x-0">
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform z-0 duration-700 ease-in-out"
            src={require("../../assets/project/4/z5820561229239_02a838691a61b2058a86ad15005354b5.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/4/z5820561175459_929ab68c9c7ec6943b9d72ef56d12745.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/4/z5820561229212_e6d38193ca0f14259ebddb698d7964a2.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/4/z5820561338381_ffad6a122f9142142ea0060c3b8249f2.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/4/z5820561338335_48e0eefca5e538be467de9c080bdcc67.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/4/z5820561338380_d8fd3474fbb0d4dc1c916e61a4aa7b2c.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/4/z5820561556613_0f49dd50eda428430048a715f9faf5e0.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project4;
