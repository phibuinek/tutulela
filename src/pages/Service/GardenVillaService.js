import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const GardenVillaService = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mt-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
        <div className="col-span-1 lg:pl-40 md:pl-36 pl-4 text-lg mb-4">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Nhà vườn là gì?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section2Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Nét đặc trưng của nhà vườn
                </li>
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Ưu điểm của nhà vườn
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Tại sao nhà vườn có sức hút không thể cưỡng lại?
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section5Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                TOP những thiết kế nhà vườn đẹp ấn tượng nhất năm 2024
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế nhà vườn biệt thự kiểu Nhật
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế nhà vườn mái Thái
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế nhà vườn cấp 4
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế nhà vườn 1 tầng
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế nhà vườn 2 tầng
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section11Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Nên tự thiết kế nhà vườn hay thuê công ty thiết kế chuyên
                nghiệp?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Quy trình thiết kế nhà vườn của công ty Tutulela
                </li>
              </div>
            </div>
          </div>
          <div className=" border border-[#f4f4f4] w-[350px] md:mt-24 mt-10 block">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              DỊCH VỤ
            </div>
            <div className="">
              <div className="p-4 w-[350px] hover:bg-black hover:text-white  duration-300">
                <Link className="cursor-pointer" to="/thiet-ke-kien-truc">
                  THIẾT KẾ KIẾN TRÚC
                </Link>
              </div>
              <div className="p-4 hover:bg-black hover:text-white duration-300">
                <Link className="cursor-pointer" to="/thiet-ke-nha-vuon">
                  THIẾT KẾ NHÀ VƯỜN
                </Link>
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                <Link className="cursor-pointer" to="/thiet-ke-canh-quan">
                  THIẾT KẾ & THI CÔNG CẢNH QUAN
                </Link>
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                <Link className="cursor-pointer" to="/thiet-ke-san-vuon">
                  THIẾT KẾ & THI CÔNG SÂN VƯỜN
                </Link>
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                <Link to="/thiet-ke-ho-ca-koi">
                  THIẾT KẾ & THI CÔNG HỒ CÁ KOI
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:pl-48 md:pl-36 pl-4 md:max-w-[1000px] max-w-[400px] text-justify text-lg">
          <h1 className="">
            Xu hướng thiết kế kiến trúc của những năm gần đây thì các mẫu thiết
            kế nhà vườn đẹp rất được các chủ đầu tư ưa chuộng. Trong bài viết
            này cùng Tutulela tìm hiểu và chiêm ngưỡng 33+ mẫu thiết kế bao gồm
            nhà vườn kiểu nhật, mái thái cho nhà vườn 1 tầng, nhà vườn 2 tầng…
          </h1>
          <h1 className="mt-4 font-bold">
            Sau nhiều năm vất vả bon chen làm việc nơi phố thị chật chội, rất
            nhiều nhà đầu tư có xu hướng đến những vùng ngoại ô hoặc những tỉnh
            miền quê không quá xa thành phố để tìm mua đất và xây dựng những mẫu
            nhà nhỏ nhưng tiện nghi.
          </h1>
          <h1 className="mt-4">
            Những căn nhà này nhằm mục đích phục vụ nhu cầu nghỉ dưỡng vào cuối
            tuần hay các dịp lễ tết, hoặc họp mặt gia đình bạn bè, và xa hơn là
            nơi để an hưởng tuổi già. Nếu bạn đang lên kế hoạch thiết kế cho gia
            đình mình một mẫu nhà vườn thì qua bài viết này, các chuyên gia đến
            từ Tutulela sẽ hướng dẫn bạn tìm kiếm những phong cách tốt nhất, phù
            hợp với mong muốn của mình.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/nha-vuon-thong-tin-chi-tiet-chi-phi-xay-dung-tham-khao-va-29-mau-nha-vuon-dep-me-ly-6446008f6d1ba4a29dcf8360.webp")}
          />
          <section ref={section1Ref}>
            <h2 className="text-2xl font-bold mb-4 mt-4">Nhà vườn là gì?</h2>
            <p>
              Nhà vườn là một mô hình nhà ở được thiết kế để hòa mình với thiên
              nhiên, tận dụng không gian xanh, tạo ra một môi trường sống trong
              lành và thư giãn. Thường có sân vườn rộng lớn bao quanh, nhà vườn
              mang đến cho gia chủ sự yên tĩnh và thoải mái, tránh xa sự ồn ào
              và hối hả của cuộc sống hiện đại.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/200.webp")}
          />

          <section ref={section2Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Nét đặc trưng của nhà vườn
            </h2>
            <p>
              Nhà vườn thường được xây dựng trên những khu đất rộng, với thiết
              kế chú trọng đến việc tối ưu hóa không gian thiên nhiên. Các loại
              cây xanh, hồ cá, tiểu cảnh, và các yếu tố thiên nhiên khác được sử
              dụng để tạo ra không gian sống gần gũi với tự nhiên. Phong cách
              kiến trúc nhà vườn thường mộc mạc, giản dị nhưng vẫn tinh tế và
              đầy đủ tiện nghi.
            </p>
          </section>

          <section ref={section3Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Ưu điểm của nhà vườn</h2>
            <p>
              Nhà vườn mang đến nhiều ưu điểm vượt trội như không gian sống
              thoáng đãng, không khí trong lành, giúp tinh thần thư giãn. Ngoài
              ra, nhà vườn còn có khả năng tự cung cấp nguồn thực phẩm sạch từ
              vườn rau, cây ăn trái, tạo ra một cuộc sống xanh, bền vững cho gia
              đình.
            </p>
          </section>

          <section ref={section4Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Tại sao nhà vườn có sức hút không thể cưỡng lại?
            </h2>
            <p>
              Nhà vườn không chỉ là nơi để ở mà còn là không gian để nghỉ dưỡng,
              thư giãn. Sự kết hợp giữa thiên nhiên và kiến trúc độc đáo khiến
              nhà vườn trở thành một điểm nhấn thu hút, tạo cảm giác gần gũi với
              thiên nhiên và mang lại nhiều giá trị tinh thần cho gia chủ.
            </p>
          </section>

          <section ref={section5Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              TOP những thiết kế nhà vườn đẹp ấn tượng nhất năm 2024
            </h2>
            <p>
              Năm 2024 chứng kiến sự bùng nổ của nhiều thiết kế nhà vườn độc
              đáo, từ phong cách Nhật Bản, mái Thái, đến các mẫu nhà cấp 4, 1
              tầng và 2 tầng. Mỗi thiết kế đều có nét đặc trưng riêng, nhưng đều
              hướng tới mục tiêu tạo ra không gian sống hòa mình vào thiên
              nhiên.
            </p>
          </section>

          <section ref={section6Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Mẫu thiết kế nhà vườn biệt thự kiểu Nhật
            </h2>
            <p>
              Thiết kế biệt thự nhà vườn kiểu Nhật tập trung vào sự tối giản và
              tinh tế. Sử dụng các yếu tố tự nhiên như gỗ, đá, và nước, không
              gian vườn Nhật tạo ra cảm giác bình yên và thanh tịnh.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/thiet-ke-biet-thu-nha-vuon-1-tang-kieu-nhat-tinh-te-dien-tich-922m2-2.jpg")}
          />

          <section ref={section7Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Mẫu thiết kế nhà vườn mái Thái
            </h2>
            <p>
              Nhà vườn mái Thái nổi bật với kiến trúc mái dốc, giúp thoát nước
              nhanh và tạo sự thanh thoát cho ngôi nhà. Thiết kế này thường kết
              hợp với không gian sân vườn rộng rãi, cây xanh và hồ nước, tạo nên
              không gian sống xanh mát.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/nha_mai_thai_dep_bb8525b8d5.jpg")}
          />

          <section ref={section8Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Mẫu thiết kế nhà vườn cấp 4
            </h2>
            <p>
              Nhà vườn cấp 4 là lựa chọn lý tưởng cho những gia đình yêu thích
              sự giản dị nhưng vẫn muốn tận hưởng không gian rộng rãi và thoáng
              mát. Kiến trúc nhà vườn cấp 4 thường có thiết kế mở, gần gũi với
              thiên nhiên.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/nha-vuon-cap-4-41.webp")}
          />

          <section ref={section9Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Mẫu thiết kế nhà vườn 1 tầng
            </h2>
            <p>
              Thiết kế nhà vườn 1 tầng giúp tận dụng không gian đất hiệu quả,
              mang đến sự tiện nghi trong sinh hoạt. Không gian vườn bao quanh
              nhà giúp gia chủ tận hưởng thiên nhiên ngay trong chính ngôi nhà
              của mình.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/ve-dep-tinh-te-va-sang-trong-cua-biet-thu-vuon-1-tang.jpg")}
          />

          <section ref={section10Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Mẫu thiết kế nhà vườn 2 tầng
            </h2>
            <p>
              Nhà vườn 2 tầng là giải pháp tuyệt vời cho những gia đình cần
              nhiều không gian sử dụng. Thiết kế này giúp tối ưu diện tích và
              mang lại vẻ đẹp hiện đại, sang trọng cho ngôi nhà.
            </p>
          </section>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenVillaService/mau-biet-thu-nha-vuon-2-tang-mai-thai-11.jpg")}
          />

          <section ref={section11Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Nên tự thiết kế nhà vườn hay thuê công ty thiết kế chuyên nghiệp?
            </h2>
            <p>
              Việc tự thiết kế nhà vườn sẽ giúp gia chủ tiết kiệm chi phí, nhưng
              yêu cầu sự hiểu biết sâu về kiến trúc và cảnh quan. Trong khi đó,
              việc thuê công ty thiết kế chuyên nghiệp sẽ đảm bảo tính thẩm mỹ,
              khoa học và sự tối ưu trong quá trình thi công.
            </p>
          </section>

          <section ref={section12Ref} className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Quy trình thiết kế nhà vườn của công ty Tutulela
            </h2>
            <p>
              Công ty Tutulela cung cấp dịch vụ thiết kế nhà vườn chuyên nghiệp
              với quy trình chặt chẽ từ việc khảo sát, tư vấn, lên ý tưởng đến
              thi công và hoàn thiện. Chúng tôi luôn nỗ lực mang đến cho khách
              hàng những giải pháp tối ưu và không gian sống lý tưởng.
            </p>
          </section>
          <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-4 rounded">
            {/* BƯỚC 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 1</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Tư vấn hình thức, phong cách nhà vườn
              </h4>
              <p className="text-gray-700 mt-2">
                Chúng tôi sẽ tìm hiểu về ý tưởng, mong muốn cũng như lối sống,
                phong cách của chủ nhà để hình thành những ý tưởng ban đầu. Tiếp
                theo, tùy thuộc vào điều kiện tự nhiên, diện tích, vị trí và
                hình dáng của khu đất, đặc biệt là tổng thể kiến trúc của căn
                nhà để chúng tôi đưa ra những giải pháp thiết kế phù hợp nhất.
              </p>
            </div>

            {/* BƯỚC 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 2</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Lập báo giá và nhiệm vụ thiết kế
              </h4>
              <p className="text-gray-700 mt-2">
                Mức giá để thiết kế và thi công kiến trúc tùy thuộc vào quy mô
                và độ phức tạp của dự án, kiến trúc sư của Tutulela sẽ xem xét
                và báo giá cho chủ đầu tư cụ thể và chính xác nhất.
              </p>
            </div>

            {/* BƯỚC 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 3</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Lập hồ sơ thiết kế ý tưởng
              </h4>
              <p className="text-gray-700 mt-2">
                Khi đã hiểu rõ được mong muốn của khách hàng cũng như những chi
                tiết về hình dạng cũng như phong cách về cảnh quan, sau khi kí
                hợp đồng kiến trúc sư thiết kế của công ty sẽ lên ý tưởng và
                thiết kế sơ bộ để gửi tới khách hàng.
              </p>
            </div>

            {/* BƯỚC 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 4</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Lập hồ sơ thiết kế cơ sở và thiết kế thi công
              </h4>
              <p className="text-gray-700 mt-2">
                Sau khi chủ đầu tư hài lòng với bản vẽ thiết kế concept, kỹ sư
                của Tutulela sẽ bắt đầu khai triển hồ sơ bản vẽ, bóc tách khối
                lượng công trình để chuẩn bị thi công.
              </p>
            </div>

            {/* BƯỚC 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 5</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Tổ chức thi công từ thô đến hoàn thiện
              </h4>
              <p className="text-gray-700 mt-2">
                Đội ngũ kỹ sư và nhân viên thi công của Tutulela sẽ thi công
                công trình theo hồ sơ được triển khai. Kỹ sư giám sát công trình
                sẽ đảm bảo tiến độ thi công, chất lượng công trình và các yếu tố
                liên quan khác khi thi công dự án.
              </p>
            </div>

            {/* BƯỚC 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 6</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Nghiệm thu, bàn giao và bảo dưỡng
              </h4>
              <p className="text-gray-700 mt-2">
                Sau khi thi công hoàn chỉnh, Tutulela sẽ tiếp tục dõi và bảo trì
                các hạng mục liên quan một thời gian, sau đó sẽ bàn giao lại tất
                cả cho chủ đầu tư quản lý. Nếu có vấn đề phát sinh, Tutulela sẽ
                hỗ trợ trong khả năng cho phép.
              </p>
            </div>
          </div>
          <h1 className="mt-4">
            Với hơn 8 năm kinh nghiệm trong lĩnh vực thiết kế và thi công sân
            vườn – cảnh quan, Tutulela tự tin cung cấp đến khách hàng dịch vụ
            thiết kế nhà vườn đẹp và chuyên nghiệp trên cả nước. <br /> Cùng đội
            ngũ kiến trúc sư và kỹ sư trẻ trung, năng động, không ngừng sáng
            tạo, đổi mới tư duy thiết kế. Cùng với đó, chúng tôi muốn mang đến
            cho khách hàng những giá trị đích thực, một thiết kế không gian nhà
            vườn hoàn hảo để nghỉ ngơi thư giãn. <br /> Đối với mỗi thiết kế,
            Tutulela luôn muốn thấu hiểu sở thích, mong ước, phong cách sống của
            chủ nhân căn nhà vườn. Để từ đó, tạo ra một thiết kế được cá nhân
            hóa, thể hiện được tính cách của chủ nhà. <br /> Đừng ngần ngại khi
            liên hệ và kể cho chúng tôi nghe về căn nhà vườn mơ ước của bạn!
          </h1>

          <section className="mt-10">
            <p>
              Tutulela đã hoàn thành nhiều dự án kiến trúc nhà vườn từ Bắc chí
              Nam. Mỗi dự án đều mang nét đặc trưng riêng, nhưng đều hướng tới
              sự hài hòa giữa kiến trúc và thiên nhiên, mang lại giá trị sống
              bền vững cho khách hàng.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GardenVillaService;
