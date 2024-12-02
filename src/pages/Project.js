import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-10 px-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] lg:ml-0 ml-4 lg:w-full mt-4 lg:mt-10 gap-10">
        <Link to="/du-an1" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out "
            src={require("../assets/project/6/z5820560135029_f49fce3286bb59c5430602ac30adff1e.jpg")}
          />
        </Link>
        <Link to="/du-an2" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out"
            src={require("../assets/project/2/z5820560628076_dde6a16155285892e18685ecde5e215f.jpg")}
          />
        </Link>
        <Link to="/du-an3" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out "
            src={require("../assets/project/3/z5820561064718_3d87d38670124db5778317e9a3c98176.jpg")}
          />
        </Link>
        <Link to="/du-an4" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out"
            src={require("../assets/project/4/c.jpg")}
          />
        </Link>
        <Link to="/du-an5" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out"
            src={require("../assets/project/5/z5820558877403_2c948bd1462bf1d27ac483c60de3572a.jpg")}
          />
        </Link>
        <Link to="/du-an6" className="group block">
          <Image
            className="h-[380px] w-full object-cover transition-transform duration-500 ease-in-out"
            src={require("../assets/project/6/z5820560135068_2c7671d91544eeaf0ac285d13f48c1d0.jpg")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Project;
