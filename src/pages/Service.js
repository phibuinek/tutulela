import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);
  return (
    <div className="w-full mt-10 grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] justify-center mx-auto px-10 space-y-4">
      <div className="w-[450px]">
        <div className=" bg-[#f4f4f4] text-center justify-center items-center p-10 w-[400px] mt-4 h-[400px] hover:bg-black hover:text-white transition-all duration-1000 text-black">
          <Image
            className="mx-auto"
            src={require("../assets/service/iconbox5.png")}
          />
          <Link to="/thiet-ke-kien-truc" className="text-2xl">
            Thiết kế thi công kiến trúc
          </Link>
          <h1 className="mt-4">
            Chúng tôi hoạt động trong lĩnh vực thiết kế và thi công kiến trúc,
            tích lũy kinh nghiệm qua nhiều dự án đa dạng: nhà ở, biệt thự, văn
            phòng, trung tâm thương mại, khách sạn, khu nghỉ dưỡng,...
          </h1>
          <button
            className="
          mt-4 font-semibold"
          >
            <Link to="/thiet-ke-kien-truc">XEM THÊM</Link>
            <div
              ref={progressRef}
              className="w-full bg-gray-200 h-1 relative overflow-hidden"
            >
              <div
                className={`h-full bg-black ${
                  isVisible ? "w-full transition-all duration-1000" : "w-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <div className="bg-[#f4f4f4] text-center justify-center items-center p-10 w-[400px] h-[400px] hover:bg-black hover:text-white transition-all duration-1000 text-black">
          <Image
            className="mx-auto"
            src={require("../assets/service/iconbox5.png")}
          />
          <Link to="/thiet-ke-canh-quan" className="text-2xl">
            Thiết kế thi công cảnh quan
          </Link>
          <h1 className="mt-4">
            Chúng tôi hoạt động trong lĩnh vực thiết kế và thi công cảnh quan,
            tích lũy kinh nghiệm với nhiều dự án cảnh quan: khu dân cư, nhà máy,
            resort, khu du lịch, homestay, nhà hàng, quán café,…
          </h1>
          <button
            className="
          mt-4 font-semibold"
          >
            <Link to="/thiet-ke-canh-quan">XEM THÊM</Link>
            <div
              ref={progressRef}
              className="w-full bg-gray-200 h-1 relative overflow-hidden"
            >
              <div
                className={`h-full bg-black ${
                  isVisible ? "w-full transition-all duration-1000" : "w-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <div className="bg-[#f4f4f4] text-center justify-center items-center p-10 w-[400px] h-[400px] hover:bg-black hover:text-white transition-all duration-1000 text-black">
          <Image
            className="mx-auto"
            src={require("../assets/service/iconbox3.png")}
          />
          <Link to="/thiet-ke-nha-vuon" className="text-2xl">
            Thiết kế thi công nhà vườn
          </Link>
          <h1 className="mt-4">
            Chúng tôi mong muốn mang đến cho khách hàng những giá trị đích thực,
            một thiết kế không gian nhà vườn hoàn hảo để nghỉ ngơi thư giãn.
          </h1>
          <button
            className="
          mt-4 font-semibold"
          >
            <Link to="/thiet-ke-nha-vuon">XEM THÊM</Link>
            <div
              ref={progressRef}
              className="w-full bg-gray-200 h-1 relative overflow-hidden"
            >
              <div
                className={`h-full bg-black ${
                  isVisible ? "w-full transition-all duration-1000" : "w-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <div className="bg-[#f4f4f4] text-center justify-center items-center p-10 w-[400px] h-[400px] hover:bg-black hover:text-white transition-all duration-1000 text-black">
          <Image
            className="mx-auto"
            src={require("../assets/service/iconbox2.png")}
          />
          <Link to="/thiet-ke-san-vuon" className="text-2xl">
            Thiết kế thi công sân vườn
          </Link>
          <h1 className="mt-4">
            Cung cấp dịch vụ tư vấn chuyên sâu, lên ý tưởng và đưa ra giải pháp
            về thiết kế, quy hoạch tổng thể những hạng mục thuộc kiến trúc cảnh
            quan sân vườn.
          </h1>
          <button
            className="
          mt-4 font-semibold"
          >
            <Link to="/thiet-ke-san-vuon">XEM THÊM</Link>
            <div
              ref={progressRef}
              className="w-full bg-gray-200 h-1 relative overflow-hidden"
            >
              <div
                className={`h-full bg-black ${
                  isVisible ? "w-full transition-all duration-1000" : "w-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <div className="bg-[#f4f4f4] text-center justify-center items-center p-10 w-[400px] h-[400px] hover:bg-black hover:text-white transition-all duration-1000 text-black">
          <Image
            className="mx-auto"
            src={require("../assets/service/iconbox5.png")}
          />
          <Link to="/thiet-ke-ho-ca-koi" className="text-2xl">
            Thiết kế thi công hồ cá KOI
          </Link>
          <h1 className="mt-4">
            Chúng tôi cung cấp dịch vụ toàn diện về lĩnh vực hồ cá koi. Tư vấn
            khảo sát tại nhà; lên ý tưởng thiết kế, thi công; bàn giao và bảo
            dưỡng hồ định kỳ.
          </h1>
          <button
            className="
          mt-4 font-semibold"
          >
            <Link to="/thiet-ke-ho-ca-koi">XEM THÊM</Link>
            <div
              ref={progressRef}
              className="w-full bg-gray-200 h-1 relative overflow-hidden"
            >
              <div
                className={`h-full bg-black ${
                  isVisible ? "w-full transition-all duration-1000" : "w-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
