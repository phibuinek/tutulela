import React from "react";
import { Image } from "react-bootstrap";

const LandscapeService = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-4">
        <div className="text-3xl font-extrabold text-gray-800">
          TUTULELA HOUSE PLANTS DECOR + đã thi công nhiều công trình cảnh quan
          tại ban công căn hộ và sân vườn biệt thự.
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mt-8 max-w-4xl space-y-6">
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Chúng tôi tạo nên lá phổi xanh ngay trong căn hộ với phong cách gần
          gũi, thoáng mát, dễ chịu,... Mang đến cảm giác sống gần thiên nhiên
          cho mỗi gia đình.
        </div>
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          TUTULELA HOUSE PLANTS DECOR + dựa trên mong muốn của chủ đầu tư, lắng
          nghe và tìm ra phương án phù hợp, tối ưu nhất.
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/339114704_2417270498428993_286106854399940186_n.jpg")}
          alt="Architecture Example"
        />
      </div>
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/291977402_150592154248283_9054523736393276986_n.jpg")}
          alt="Architecture Example"
        />
      </div>
    </div>
  );
};

export default LandscapeService;
