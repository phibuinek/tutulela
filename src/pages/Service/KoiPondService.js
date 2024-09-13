import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const KoiPondService = () => {
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
                Cách thiết kế hồ nuôi cá koi đạt chuẩn
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Hình ảnh mẫu thiết kế hồ cá koi đẹp ấn tượng
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu hồ cá koi sân vườn phong cách Nhật Bản
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu hồ cá koi khu du lịch sinh thái đẹp và tấn tượng
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Bản vẽ thiết kế phối cảnh 3D hồ cá koi cho nhà phố
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế hồ cá koi ngoài trời đẹp
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Concept hồ cá koi cho nhà diện tích và kích thước nhỏ
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu hồ cá koi mini đẹp cho quán cafe sân vườn
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu hồ cá koi biệt thự cao cấp
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu hồ cá koi ở công viên đá Nhật Bản Rin Rin Park
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section11Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Lựa chọn Tutulela thiết kế cho sân vườn của bạn
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Quy trình dịch vụ của Tutulela
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
        <div className="col-span-3 lg:pl-48 md:pl-36 pl-4 md:max-w-[1000px] max-w-[400px] text-justify text-lg space-y-10">
          {/* Section 1 */}
          <section ref={section1Ref}>
            <h2 className="text-3xl font-bold mb-6">
              Cách thiết kế hồ nuôi cá koi đạt chuẩn
            </h2>
            <p className="mb-4">
              Hồ cá koi cần được thiết kế sao cho phù hợp với điều kiện tự nhiên
              và sở thích của gia chủ. Một hồ cá koi đạt chuẩn phải đảm bảo các
              yếu tố như kích thước, độ sâu, hệ thống lọc nước, và cảnh quan
              xung quanh. Đặc biệt, việc lựa chọn vật liệu và bố trí cây xanh
              cũng ảnh hưởng lớn đến sự sống và sức khỏe của cá koi.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/xay-ho-ca-koi-hinh-ban-nguyet.webp")}
              className="mb-4"
            />
          </section>

          {/* Section 2 */}
          <section ref={section2Ref}>
            <h2 className="text-3xl font-bold mb-6">
              Hình ảnh mẫu thiết kế hồ cá koi đẹp ấn tượng
            </h2>
            <p className="mb-4">
              Dưới đây là một số mẫu hồ cá koi được thiết kế theo nhiều phong
              cách khác nhau, từ hiện đại đến cổ điển, mang đến sự hài hòa và
              thẩm mỹ cho không gian sân vườn.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/thi-cong-ho-ca-koi-1.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 3 */}
          <section ref={section3Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu hồ cá koi sân vườn phong cách Nhật Bản
            </h2>
            <p className="mb-4">
              Phong cách thiết kế hồ cá koi Nhật Bản mang đến sự tinh tế và yên
              bình, với các chi tiết như cầu gỗ, đèn đá, và cây bonsai, tạo nên
              không gian thư giãn tuyệt vời.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/ho-ca-koy-trong-san-vuon-greenmore-4.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 4 */}
          <section ref={section4Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu hồ cá koi khu du lịch sinh thái đẹp và ấn tượng
            </h2>
            <p className="mb-4">
              Các khu du lịch sinh thái thường lựa chọn hồ cá koi để tạo điểm
              nhấn thiên nhiên và thu hút du khách. Những hồ cá rộng, kết hợp
              với không gian xanh tạo ra một bầu không khí thư giãn và gần gũi
              với thiên nhiên.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/z3969705377606_b5e7c5e724d145a3af9a4a456cd3935f.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 5 */}
          <section ref={section5Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Bản vẽ thiết kế phối cảnh 3D hồ cá koi cho nhà phố
            </h2>
            <p className="mb-4">
              Thiết kế 3D hồ cá koi cho nhà phố giúp gia chủ dễ dàng hình dung
              không gian, bố trí tiểu cảnh và các yếu tố kỹ thuật cần thiết cho
              hồ cá, từ đó đưa ra những phương án thi công hợp lý nhất.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/quy-trinh-tao-dung-ban-ve-thiet-ke-ho-ca-koi-chuan-2.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 6 */}
          <section ref={section6Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu thiết kế hồ cá koi ngoài trời đẹp
            </h2>
            <p className="mb-4">
              Hồ cá koi ngoài trời thường kết hợp với tiểu cảnh sân vườn, thác
              nước, và cây cỏ để tạo nên một không gian sống động và thư thái.
              Dưới đây là một số mẫu thiết kế đẹp mắt và ấn tượng.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/hinh-anh-goi-y-15-mau-thiet-ke-ho-ca-Koi-dep-ai-nhin-cung-me-so-1.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 7 */}
          <section ref={section7Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Concept hồ cá koi cho nhà diện tích và kích thước nhỏ
            </h2>
            <p className="mb-4">
              Đối với những ngôi nhà có diện tích nhỏ, việc thiết kế hồ cá koi
              phải tối ưu không gian và công năng. Concept dưới đây sẽ giúp bạn
              có thêm nhiều lựa chọn cho không gian sống của mình.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/thiet-ke-ho-ca-koi-mini.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 8 */}
          <section ref={section8Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu hồ cá koi mini đẹp cho quán cafe sân vườn
            </h2>
            <p className="mb-4">
              Các quán cafe sân vườn có thể thu hút khách hàng bằng cách bố trí
              hồ cá koi mini trong không gian, tạo điểm nhấn và mang lại sự thư
              giãn cho khách khi thưởng thức cafe.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/1.2.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 9 */}
          <section ref={section9Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu hồ cá koi biệt thự cao cấp
            </h2>
            <p className="mb-4">
              Hồ cá koi trong các khu biệt thự cao cấp thường có thiết kế rộng
              lớn, kết hợp với thác nước và hệ thống lọc nước hiện đại, mang lại
              không gian sống đẳng cấp cho gia chủ.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/1-ho-ca-koi-nhat-ban-dep-7.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 10 */}
          <section ref={section10Ref}>
            <h2 className="text-2xl font-bold mb-6">
              Mẫu hồ cá koi ở công viên đá Nhật Bản Rin Rin Park
            </h2>
            <p className="mb-4">
              Rin Rin Park nổi tiếng với các hồ cá koi phong cách Nhật Bản, được
              chăm chút tỉ mỉ với những chi tiết như đá cảnh, đèn đá, và các
              loại cây đặc trưng của Nhật Bản. Hồ cá tại đây tạo nên một không
              gian yên bình và tuyệt đẹp.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/cac-loai-ca-koi-da-dang.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 11 */}
          <section ref={section11Ref}>
            <h2 className="text-3xl font-bold mb-6">
              Lựa chọn Tutulela thiết kế cho sân vườn của bạn
            </h2>
            <p className="mb-4">
              Với nhiều năm kinh nghiệm trong lĩnh vực thiết kế và thi công hồ
              cá koi, Tutulela tự hào là đơn vị tiên phong trong việc mang đến
              những thiết kế tinh tế và sáng tạo, đáp ứng mọi yêu cầu của khách
              hàng.
            </p>
            <Image
              src={require("../../assets/service/KoiPondService/1-1-800x800.jpg")}
              className="mb-4"
            />
          </section>

          {/* Section 12 */}
          <section ref={section12Ref}>
            <h2 className="text-3xl font-bold mb-6">
              Quy trình dịch vụ của Tutulela
            </h2>
            <p className="mb-4">
              Tutulela cung cấp dịch vụ thiết kế và thi công hồ cá koi chuyên
              nghiệp, từ khâu tư vấn, thiết kế cho đến hoàn thiện công trình.
              Chúng tôi cam kết mang đến chất lượng tốt nhất với quy trình minh
              bạch và rõ ràng.
            </p>
            <div className="mb-10">
              <p>
                Thiết kế và xây dựng hồ cá koi là sự kết hợp giữa chức năng
                (khoa học) và thẩm mỹ (nghệ thuật) để mang lại cảm xúc cho gia
                chủ trong chính khu vườn của mình. Khi thiết kế một hồ cá koi
                đòi hỏi phải tuân theo một quy trình có hệ thống và khoa học.
              </p>
              <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-4 rounded">
                {/* BƯỚC 1 */}
                <div className="bg-white shadow-md rounded-lg p-6 my-4">
                  <h3 className="text-xl font-bold text-gray-800">BƯỚC 1</h3>
                  <h4 className="text-2xl font-bold text-gray-600">
                    Tư vấn hình thức, phong cách hồ cá
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Kháo sát địa điểm thi công thực tế, trao đổi với khách hàng
                    để hiểu rõ mong muốn, sở thích của khách. Dựa trên những
                    điều đó, chúng tôi sẽ tư vấn phong cách, kích thước hồ phù
                    hợp nhất.
                  </p>
                </div>

                {/* BƯỚC 2 */}
                <div className="bg-white shadow-md rounded-lg p-6 my-4">
                  <h3 className="text-xl font-bold text-gray-800">BƯỚC 2</h3>
                  <h4 className="text-2xl font-bold text-gray-600">
                    Lập báo giá và nhiệm vụ thiết kế
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Tùy thuộc vào quy mô, mức độ và phong cách của hồ, SGL
                    Vietnam sẽ xem xét và báo giá cho khách hàng cụ thể và chính
                    xác nhất.
                  </p>
                </div>

                {/* BƯỚC 3 */}
                <div className="bg-white shadow-md rounded-lg p-6 my-4">
                  <h3 className="text-xl font-bold text-gray-800">BƯỚC 3</h3>
                  <h4 className="text-2xl font-bold text-gray-600">
                    Lập hồ sơ thiết kế ý tưởng
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Khi đã hiểu rõ được mong muốn của khách hàng cũng như những
                    chi tiết về hình dạng cũng như phong cách về cảnh quan, sau
                    khi kí hợp đồng kiến trúc sư thiết kế của công ty sẽ lên ý
                    tưởng và thiết kế sơ bộ để gửi tới khách hàng.
                  </p>
                </div>

                {/* BƯỚC 4 */}
                <div className="bg-white shadow-md rounded-lg p-6 my-4">
                  <h3 className="text-xl font-bold text-gray-800">BƯỚC 4</h3>
                  <h4 className="text-2xl font-bold text-gray-600">
                    Lập hồ sơ thiết kế cơ sở và thiết kế thi công
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Sau khi chủ đầu tư hài lòng với bản vẽ thiết kế concept, kỹ
                    sư của Tutulela sẽ bắt đầu khai triển hồ sơ bản vẽ, bóc tách
                    khối lượng công trình để chuẩn bị thi công.
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
                    công trình theo hồ sơ được triển khai. Kỹ sư giám sát công
                    trình sẽ đảm bảo tiến độ thi công, chất lượng công trình và
                    các yếu tố liên quan khác khi thi công dự án.
                  </p>
                </div>

                {/* BƯỚC 6 */}
                <div className="bg-white shadow-md rounded-lg p-6 my-4">
                  <h3 className="text-xl font-bold text-gray-800">BƯỚC 6</h3>
                  <h4 className="text-2xl font-bold text-gray-600">
                    Nghiệm thu, bàn giao và bảo dưỡng
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Sau khi thi công hoàn chỉnh, Tutulela sẽ tiếp tục dõi và bảo
                    trì các hạng mục liên quan một thời gian, sau đó sẽ bàn giao
                    lại tất cả cho chủ đầu tư quản lý. Nếu có vấn đề phát sinh,
                    Tutulela sẽ hỗ trợ trong khả năng cho phép.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <p className="mb-4">
              Chúng tôi đã thực hiện hàng trăm dự án hồ cá koi cho khách hàng
              trên toàn quốc, với nhiều phong cách khác nhau. Dưới đây là một số
              dự án tiêu biểu mà chúng tôi đã hoàn thiện.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KoiPondService;
