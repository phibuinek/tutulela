import React from "react";
import { Image } from "react-bootstrap";

const Introduce = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] lg:px-10 mt-10">
        <div className="col-span-1 lg:pl-24 pl-0">
          <Image
            className="max-w-[678px] max-h-[900px] lg:mt-16 lg:pl-24"
            src={require("../assets/background-about-us-e1700469663462.jpg")}
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-4xl font-bold mt-24">About Us</h1>
          <h1 className="text-lg mt-10 md:max-w-[600px] w-[400px] lg:w-full">
            <div className="mb-4">
              Xin chào, chúng tôi là TUTULELA HOUSE PLANTS DECOR +
            </div>
            <div className="mb-4">
              TUTULELA HOUSE PLANTS DECOR + là công ty chuyên thiết kế - thi
              công- hoàn thiện cảnh quan cây xanh nội - ngoại thất cho các công
              trình bao gồm:
            </div>
            <div className="mb-4">
              <li>Cửa hàng ăn uống (Quán Cafe - Nhà Hàng)</li>
              <li>Cửa hàng kinh doanh (Showroom, Spa, Shop,...)</li>
              <li>
                Căn hộ - Biệt Thự - Khu nghỉ dưỡng ( Khách sạn, resort,...)
              </li>
              <li>Công trình công cộng</li>
            </div>
            <div className="mb-4">
              Với phương châm TRÁCH NHIỆM - TRUNG THỰC - UY TÍN, TUTULELA HOUSE
              PLANTS DECOR + luôn tìm cách thấu hiểu nhu cầu và sở thích để kiến
              tạo nên một không gian phủ sắc xanh tô điểm cho không gian sống.
            </div>
            <div className="mb-4">
              Với kinh nghiệm đã thiết kế và hoàn thiện cảnh quan cây xanh nội -
              ngoại thất cho nhiều dự án, chúng tôi hy vọng giúp được quý khách
              hàng một cách nhiệt tình, chuyên nghiệp và hiệu quả nhất, nhằm
              mang đến không gian gần gũi với thiên nhiên, tạo ra không gian yên
              bình chân thật tại chính nơi khách hàng mong muốn.
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
              Tutulela cam kết biến nó thành hiện thực, tạo nên không gian sống
              và làm việc đẳng cấp và độc đáo.
            </div>
          </h1>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Wc2cvV1RrKHzsLDd_AUR5srzCdnMBT5d/view?usp=drive_link",
                "_blank"
              )
            }
            className="ml-auto lg:mr-48 py-4 inline-block px-9 text-white text-xs uppercase font-bold border border-[#1a1a1a] bg-[#1a1a1a] bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] bg-[length:100%_100%] hover:bg-[length:0%_100%] transition-all duration-700 hover:text-black hover:bg-white"
          >
            XEM PORFOLIO
          </button>
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
