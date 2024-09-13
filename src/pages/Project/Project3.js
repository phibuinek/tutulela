import React from "react";
import { Image } from "react-bootstrap";

const Project3 = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] justify-items-center items-center lg:mt-10 gap-y-10 gap-x-0">
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform z-0 duration-700 ease-in-out"
            src={require("../../assets/project/3/z5820561064717_fccc471ea3ecb0c34d4410a743328e80.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/3/z5820561010724_7dbcf2c717f059a4e6305e2688453016.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/3/z5820561010721_1d46167c2de30c60e94b845b443a52bc.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/3/z5820561010722_4588180ca5266aad67aa1995ddf86edd.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/3/z5820561010723_161afe7b8f2c96edb9b396461188ddbd.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/3/z5820561064758_9278a144503c49d6a16f6e987793320d.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/3/z5820561010771_6acff297aa2a6460f018b12410e29d38.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/3/z5820561064760_8dd4f87293748c5cd068f2d18d2e9f43.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project3;
