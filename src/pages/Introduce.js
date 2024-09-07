import React from "react";
import { Image } from "react-bootstrap";

const Introduce = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
        <div className="lg:col-span-1 lg:pl-24 pl-0">
          <Image
            className="max-w-[678px] max-h-[900px] lg:mt-16 lg:pl-24"
            src={require("../assets/background-about-us-e1700469663462.jpg")}
          />
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-4xl font-bold mt-24">About Us</h1>
          <h1 className="text-lg mt-10 md:max-w-[600px] w-[400px] lg:w-full">
            <div className="mb-4">
              Được thành lập từ năm 2013 với tên gọi ban đầu là CÔNG TY TNHH
              TUTULELA.
            </div>
            <div className="mb-4">
              Đến năm 2019, sau khi trải qua quá trình tích luỹ kinh nghiệm và
              phát triển, chúng tôi đổi tên thành CÔNG TY TNHH TUTULELA HOUSE
              PLANT DECOR để phản ánh rõ hơn về chuyên môn hoạt động của mình.
            </div>
            <div className="mb-4">
              Trải qua các giai đoạn phát triển, năm 2021, chúng tôi đã tiến
              hành tái cơ cấu bộ máy điều hành và vận hành, tăng cường năng lực
              quản lý để đáp ứng mạnh mẽ với sự phức tạp ngày càng tăng của thị
              trường kiến trúc và cảnh quan.
            </div>
            <div className="mb-4">
              Năm 2022, chúng tôi đã mở rộng và xác định lại các mảng dịch vụ
              khách hàng, tập trung vào việc mang đến giải pháp sáng tạo và chất
              lượng cho các dự án kiến trúc và cảnh quan.
            </div>
            <div className="mb-4">
              Năm 2023, chúng tôi kết hợp với các đối tác uy tín và thành lập
              SGL Vietnam, nhằm tạo ra sự đa dạng và phong phú trong quy trình
              sáng tạo và triển khai dự án.
            </div>
            <div className="mb-4">
              Chúng tôi tự hào tích lũy được nhiều kinh nghiệm quý báu thông qua
              việc thực hiện nhiều dự án lớn trên khắp cả nước, từ biệt thự, nhà
              phố, resort, khu du lịch, khu công nghiệp cho đến quán cafe và khu
              dân cư.
            </div>
            <div className="mb-4">
              Sứ mệnh của chúng tôi là “Thổi hồn vào các công trình kiến trúc &
              cảnh quan để biến chúng trở thành tác phẩm nghệ thuật.”
            </div>
            <div className="mb-4">
              Hãy đến và chia sẻ với chúng tôi về ý tưởng gian trong mơ của bạn,
              SGL cam kết biến nó thành hiện thực, tạo nên không gian sống và
              làm việc đẳng cấp và độc đáo.
            </div>
          </h1>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
        <div className="lg:col-span-1">
          <div className="">
            <h1 className="text-2xl font-bold leading-relaxed text-center">
              <span className="text-4xl font-bold">//</span> <br />
              Bạn cho tôi không gian, <br /> tôi tặng bạn cảm xúc!!!
            </h1>
            <h1 className="text-lg lg:pl-36  mt-10 lg:w-full max-w-[800px]">
              <h1>
                Tôi tin rằng không gian cảnh quan không chỉ là nơi, nó là cách
                bạn trải nghiệm cuộc sống. Sứ mệnh của tôi là mang đến cho khách
                hàng những không gian sống nên thơ, yên bình và thanh lịch, qua
                phong cách thiết kế tinh tế và đầy triết lý Nhật.
              </h1>
              <h1>
                {" "}
                Mỗi công trình cảnh quan của tôi là một tác phẩm độc đáo, phản
                ánh sự thành công và phong cách sống của khách hàng.
              </h1>
            </h1>
          </div>
        </div>
        <div className="lg:col-span-1">
          <Image
            className="lg:w-[610px] lg:h-[400px]"
            src={require("../assets/govap-jgarden.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
