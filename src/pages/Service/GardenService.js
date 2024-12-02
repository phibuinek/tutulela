import React from "react";
import { Image } from "react-bootstrap";

const GardenService = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-4">
        <div className="text-3xl font-extrabold text-gray-800">
          TUTULELA HOUSE PLANTS DECOR + đã thiết kế và thi công các dự án về
          công trình công cộng.
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mt-8 max-w-4xl space-y-6">
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Thiết kế- Thi công - Hoàn thiện cảnh quan sân vườn tại Nhà Văn Hóa
          Thanh Niên và trang trí thêm sắc xanh cho chi cục thuế thành phố.
        </div>
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Giúp hiệu quả công việc đạt mức tốt nhất.
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/347263368_948176726503218_5450823563856910344_n.jpg")}
          alt="Architecture Example"
        />
      </div>
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/347263368_948176726503218_5450823563856910344_n.jpg")}
          alt="Architecture Example"
        />
      </div>
    </div>
  );
};

export default GardenService;
