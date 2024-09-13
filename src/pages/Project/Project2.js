import React from "react";
import { Image } from "react-bootstrap";

const Project2 = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] justify-items-center items-center lg:mt-10 gap-y-10 gap-x-0">
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform z-0 duration-700 ease-in-out"
            src={require("../../assets/project/2/z5820560682076_bd3a4097250af127d67c2fc42b17462c.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/2/z5820560628063_06fd85d30ff8c2817388019b2da72e89.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/2/z5820560682044_5e4077e0c54c886501c44f4e115c0c79.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/2/z5820560682043_ec69d864b1b06f8e1550224f9510585b.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/2/z5820560682078_28b95ff919c292da34e736bd0c6f0299.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/2/z5820560682081_eb8e6ac7d7e69d1518ec085f0b14dcd6.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/2/z5820560682079_661bceb03c5cc70837780cd86f754e6e.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project2;
