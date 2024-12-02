import React from "react";
import { Image } from "react-bootstrap";

const Project1 = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] justify-items-center items-center lg:mt-10 gap-y-10 gap-x-0">
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform z-0 duration-700 ease-in-out"
            src={require("../../assets/project/1/z5820562488003_1ff7274c729a4f2c1440c0acfb4ffc42.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/1/z5820562487991_e47d329e8524dd39c985a3c912874b55 (1).jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/1/z5820562541727_0f74440294d4208e338152eabf636613.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out"
            src={require("../../assets/project/1/z5820562487995_2faaac956508b74414b03ae8325f070c.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/1/z5820562541732_5dc5b4181e3420729d3d22024a55d731.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/1/z5820562541770_d7523bd19822b7a0aaac57379aef801f.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/1/z5820562541804_4fd07b22b96ecb50533bc5d90a8afd48.jpg")}
          />
        </div>
        <div className="group w-[700px] overflow-hidden">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-in-out "
            src={require("../../assets/project/1/z5820562487994_b8ea10f6651bb7857782f2f8c5bfd853.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;
