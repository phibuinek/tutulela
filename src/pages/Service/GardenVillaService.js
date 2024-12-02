import React from "react";
import { Image } from "react-bootstrap";

const GardenVillaService = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-4">
        <div className="text-3xl font-extrabold text-gray-800">
          TUTULELA HOUSE PLANTS DECOR + đã thiết kế và thi công các dự án về cửa
          hàng kinh doanh.
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mt-8 max-w-4xl space-y-6">
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Thi công - Thiết kế - Hoàn thiện công trình cho các lĩnh vực Spa, bán
          lẻ, khách sạn,...
        </div>
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Với tiêu chí Sáng tạo - Chuyên nghiệp - Linh hoạt chúng tôi luôn bắt
          kịp xu hướng mong muốn mang lại không gian hoàn thiện, đa dạng phong
          cách, để lại ấn tượng cho khách hàng ghé thăm.
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/279368415_133203015987197_5691864188186507775_n.jpg")}
          alt="Architecture Example"
        />
      </div>
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/279440956_133203029320529_2002211960537885345_n.jpg")}
          alt="Architecture Example"
        />
      </div>
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/337042796_901440304517678_4131186848482393670_n.jpg")}
          alt="Architecture Example"
        />
      </div>
    </div>
  );
};

export default GardenVillaService;
