import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="px-auto pb-10 lg:pl-64 pt-10 bg-black lg:flex text-white lg:gap-44">
        <div className="block lg:max-w-[800px] lg:mt-10">
          <div className="flex">
            <Image
              className="w-[150px] h-[150px] "
              src={require("../assets/logo/337898504_599323568770551_5777209997869181828_n.jpg")}
            />
            <h1 className="text-2xl font-medium ml-2 mt-4 text-white">
              <div className="text-4xl">TUTULELA</div> HOUSE PLANTS <br /> DECOR
            </h1>
          </div>
          <h1 className="mt-2">Công ty TNHH Tutulela House Plants Decor</h1>
          <div className="flex mt-4">
            {" "}
            <Image
              className="w-4 h-4 mt-1"
              src={require("../assets/icon/building.png")}
            />
            <h1 className="ml-1">Studio: 19/31 Cô Bắc, Phú nhuận, Tp.hcm</h1>
          </div>
          <div className="flex mt-4">
            {" "}
            <Image
              className="w-4 h-4 mt-1"
              src={require("../assets/icon/home.png")}
            />
            <h1 className="ml-1">Văn phòng: 19/31 Cô Bắc, Phú nhuận, Tp.hcm</h1>
          </div>
          <div className="flex mt-4">
            {" "}
            <Image
              className="w-4 h-4 mt-1"
              src={require("../assets/icon/phone-call.png")}
            />
            <h1 className="ml-1">Điện thoại: 0908215145</h1>
          </div>
          <div className="flex mt-4">
            {" "}
            <Image
              className="w-4 h-4 mt-1"
              src={require("../assets/icon/open-mail.png")}
            />
            <h1 className="ml-1">
              Email: tutulelahouseplantsdecorr@gmaill.comm
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-10 font-bold">Dịch Vụ</h1>
          <div className="border-[1px] mt-1 w-12 border-[#dbad4d]"></div>
          <div className="mt-10">
            <div className="flex hover:text-[#dbad4d] cursor-pointer">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">Thiết kế & thi công kiến trúc</h1>
            </div>
            <div className="flex hover:text-[#dbad4d] cursor-pointer mt-4">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">Thiết kế biệt thự nhà vườn</h1>
            </div>
            <div className="flex hover:text-[#dbad4d] cursor-pointer mt-4">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">Thiết kế & thi công cảnh quan</h1>
            </div>
            <div className="flex hover:text-[#dbad4d] cursor-pointer mt-4">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">Thiết kế & thi công sân vườn biệt thự</h1>
            </div>
            <div className="flex hover:text-[#dbad4d] cursor-pointer mt-4">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">Thiết kế & thi công hồ cá KOI</h1>
            </div>
            <div className="flex hover:text-[#dbad4d] cursor-pointer mt-4">
              <FontAwesomeIcon icon={faCaretRight} className="mt-1" />
              <h1 className="ml-2">
                Thiết kế & thi công vườn tường đứng cây xanh
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-10 font-bold">Yêu Cầu Báo Giá</h1>
          <div className="border-[1px] mt-1 w-12 border-[#dbad4d]"></div>
          <h1 className="text-2xl mt-10 font-bold">HOTLINE: 0908215145</h1>
        </div>
      </div>
      <div className="lg:pl-64 py-2 font-medium bg-[#3d3d3d] text-[#5c5c5c] lg:text-xl pl-6">
        Tutulela House Plants Decor © All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
