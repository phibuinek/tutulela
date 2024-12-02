import React from "react";
import { Image } from "react-bootstrap";

const ArchitectureService = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-4">
        <div className="text-3xl font-extrabold text-gray-800">
          TUTULELA HOUSE PLANTS DECOR + đã thiết kế và thi công các dự án về
          quán cafe, nhà hàng.
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mt-8 max-w-4xl space-y-6">
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Với các công trình, TUTULELA luôn tối đa hóa không gian, lựa chọn cây
          cảnh phù hợp nhằm đảm bảo thu hút khách hàng, vừa đảm bảo thuận tiện
          và phù hợp với chi phí đầu tư và tiến độ đề ra.
        </div>
        <div className="text-lg md:text-xl leading-relaxed text-gray-700">
          Là dự án mà TUTULELA được thử thách sáng tạo vô cùng đa dạng, để phù
          hợp nhiều lứa tuổi khác nhau.
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-3xl">
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={require("../../assets/464433549_546049694701723_5776348844159145894_n.jpg")}
          alt="Architecture Example"
        />
      </div>
    </div>
  );
};

export default ArchitectureService;
