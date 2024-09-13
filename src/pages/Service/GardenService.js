import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const GardenService = () => {
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
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section18Ref = useRef(null);

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
                Một khu vườn đẹp được tạo ra như thế nào?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section2Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Nguyên tắc cơ bản trong thiết kế
                </li>
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Lưu ý quan trọng
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section4Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Những mẫu thiết kế sân vườn biệt thự đẹp đẳng cấp hợp phong thủy
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn phong cách tropical
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn phong cách Á Đông hiện đại
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn đẹp đơn giản phong cách Nhật Bản
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Lung linh về đêm với mẫu sân vườn đẹp nhất
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn phong cách cổ điển Châu Âu
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu phong cách vườn Nhật phương Đông và sân vườn hiện đại
                  phương Tây
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn nhỏ kết hợp hồ cá koi Nhật
                </li>
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu sân vườn cho Penthouse phong cách Á Đông
                </li>
                <li
                  onClick={() => scrollToSection(section13Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Bản vẽ thiết kế sân vườn nhà quê phong cách Farmstay
                </li>
                <li
                  onClick={() => scrollToSection(section14Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế sân vườn phong cách hiện đại
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section15Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Dịch vụ thiết kế sân vườn chuyên nghiệp của Tutulela có gì khác
                biệt?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section16Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Quy trình triển khai
                </li>
                <li
                  onClick={() => scrollToSection(section17Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Bảng báo giá thiết kế sân vườn biệt thự mới nhất
                </li>
                <li
                  onClick={() => scrollToSection(section18Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Lựa chọn Tutulela thiết kế cho sân vườn của bạn
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
          <div ref={section1Ref} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Một khu vườn đẹp được tạo ra như thế nào?
            </h2>
            <p>
              Một khu vườn đẹp không chỉ mang lại không gian sống trong lành mà
              còn thể hiện phong cách và gu thẩm mỹ của gia chủ. Để tạo ra một
              khu vườn đẹp, chúng tôi không chỉ chú trọng đến tính thẩm mỹ mà
              còn cân nhắc kỹ lưỡng yếu tố phong thủy, sự hài hòa giữa kiến trúc
              ngôi nhà và môi trường xung quanh.
            </p>
          </div>

          <div ref={section2Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Nguyên tắc cơ bản trong thiết kế
            </h3>
            <p>
              Thiết kế sân vườn cần dựa trên một số nguyên tắc cơ bản như: sự
              cân bằng giữa các yếu tố, tính đồng bộ, sự phù hợp với địa hình,
              cũng như phong cách sống của gia chủ. Các nguyên tắc này đảm bảo
              khu vườn không chỉ đẹp mà còn bền vững với thời gian.
            </p>
          </div>

          <div ref={section3Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Lưu ý quan trọng</h3>
            <p>
              Khi thiết kế sân vườn, cần lưu ý đến yếu tố ánh sáng tự nhiên, hệ
              thống thoát nước, và sự phát triển của cây cối theo thời gian. Bên
              cạnh đó, cần tính toán kỹ lưỡng vị trí cây cảnh, hồ cá hoặc các
              tiểu cảnh khác để đảm bảo phong thủy.
            </p>
          </div>

          <div ref={section4Ref} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Những mẫu thiết kế sân vườn biệt thự đẹp đẳng cấp hợp phong thủy
            </h2>
            <p>
              Dưới đây là một số mẫu thiết kế sân vườn biệt thự đẳng cấp mà
              chúng tôi đã thực hiện, từ phong cách tropical hiện đại cho đến
              sân vườn phong cách Nhật Bản.
            </p>
          </div>

          <div ref={section5Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn phong cách tropical
            </h3>
            <p>
              Phong cách tropical mang đến sự tươi mới, gần gũi với thiên nhiên
              và tạo cảm giác thư giãn. Cây cối xanh tươi kết hợp với hồ nước và
              ánh sáng tự nhiên giúp mang lại không gian sống trong lành và đầy
              sức sống.
            </p>
          </div>
          <Image
            className="mt-4"
            src={require("../../assets/service/GardenService/khong-gian-xanh-la-net-dac-tai-biet-thu-tropical.jpg")}
          />

          <div ref={section6Ref} className="mb-10 mt-4">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn phong cách Á Đông hiện đại
            </h3>
            <p>
              Sân vườn Á Đông hiện đại mang nét thanh thoát, nhẹ nhàng nhưng vẫn
              giữ được sự tinh tế và hài hòa trong từng chi tiết. Các yếu tố như
              đá, cây cảnh và nước được kết hợp một cách hài hòa, tạo ra một
              không gian sống lý tưởng.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/ngoi-biet-thu-thiet-ke-san-vuon-500m2-tuyet-dep.jpg")}
          />

          <div ref={section7Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn đẹp đơn giản phong cách Nhật Bản
            </h3>
            <p>
              Sân vườn Nhật Bản đơn giản nhưng tinh tế, với sự kết hợp giữa cây
              cối, đá và nước. Không gian mở và sự tối giản trong cách bố trí
              giúp mang lại cảm giác yên bình và thanh thản.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/30-mau-vuon-nhat-tuyet-dep-LSS-10.jpg")}
          />

          <div ref={section8Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Lung linh về đêm với mẫu sân vườn đẹp nhất
            </h3>
            <p>
              Ánh sáng đèn được sắp đặt khéo léo để làm nổi bật vẻ đẹp của khu
              vườn vào ban đêm. Những mẫu sân vườn lung linh dưới ánh đèn không
              chỉ tạo điểm nhấn mà còn mang lại không gian thư giãn tuyệt vời
              sau một ngày làm việc.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/san-vuon-lung-linh-nhu-co-tich-nho-thiet-ke-he-thong-den-trang-tri-chuyen-nghiep-2.jpg")}
          />

          <div ref={section9Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn phong cách cổ điển Châu Âu
            </h3>
            <p>
              Sân vườn cổ điển Châu Âu thường có sự cân đối trong kiến trúc và
              cây cảnh, với những đường nét hoa văn tinh xảo, các bức tượng cổ
              điển và thảm cỏ xanh mướt. Đây là phong cách lý tưởng cho những ai
              yêu thích sự sang trọng và quý phái.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/san-vuon-biet-thu-chau-au-01-san-vuon-a-dong.jpg")}
          />

          <div ref={section10Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu phong cách vườn Nhật phương Đông và sân vườn hiện đại phương
              Tây
            </h3>
            <p>
              Sự kết hợp giữa vẻ đẹp truyền thống của vườn Nhật phương Đông với
              sự hiện đại và sáng tạo của sân vườn phương Tây tạo nên một không
              gian độc đáo, hài hòa và mới mẻ.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/san-vuon-phuong-dong.jpg")}
          />

          <div ref={section11Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn nhỏ kết hợp hồ cá koi Nhật
            </h3>
            <p>
              Hồ cá koi Nhật là điểm nhấn tuyệt vời cho những khu vườn nhỏ. Sự
              kết hợp giữa các yếu tố thiên nhiên như nước, cây xanh và cá koi
              tạo nên một không gian sống động và bình yên.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/hinh-anh-goi-y-15-mau-thiet-ke-ho-ca-Koi-dep-ai-nhin-cung-me-so-1.jpg")}
          />

          <div ref={section12Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu sân vườn cho Penthouse phong cách Á Đông
            </h3>
            <p>
              Với diện tích không quá lớn, sân vườn cho penthouse vẫn có thể
              được thiết kế đẹp mắt, với cây cảnh và tiểu cảnh mang đậm nét văn
              hóa Á Đông. Không gian xanh mát giúp tạo sự thư giãn và gần gũi
              với thiên nhiên.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/canh-quan-lotus-garden-06-decox.jpg")}
          />

          <div ref={section13Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Bản vẽ thiết kế sân vườn nhà quê phong cách Farmstay
            </h3>
            <p>
              Phong cách Farmstay mang đến sự mộc mạc, gần gũi với thiên nhiên.
              Những bản vẽ thiết kế đơn giản nhưng hài hòa giúp tạo nên một
              không gian thư thái, phù hợp cho các khu nghỉ dưỡng hoặc nhà quê.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/1705120552.jpg")}
          />

          <div ref={section14Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Mẫu thiết kế sân vườn phong cách hiện đại
            </h3>
            <p>
              Thiết kế sân vườn hiện đại tập trung vào các yếu tố gọn gàng, tối
              giản nhưng vẫn đảm bảo tính thẩm mỹ. Cây cảnh, hồ nước và tiểu
              cảnh được sắp xếp hợp lý, tạo nên một không gian sống trẻ trung,
              năng động.
            </p>
          </div>
          <Image
            className="mt-4 mb-4"
            src={require("../../assets/service/GardenService/175519baoxaydung_image001.jpg")}
          />

          <div ref={section15Ref} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Dịch vụ thiết kế sân vườn chuyên nghiệp của Tutulela có gì khác
              biệt?
            </h2>
            <p>
              Tutulela tự hào mang đến cho khách hàng dịch vụ thiết kế sân vườn
              chuyên nghiệp, với đội ngũ kiến trúc sư giàu kinh nghiệm và sự tận
              tâm. Chúng tôi luôn lắng nghe và thấu hiểu nhu cầu của khách hàng,
              đảm bảo mọi dự án đều được hoàn thành với chất lượng cao nhất.
            </p>
          </div>

          <div ref={section16Ref} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Quy trình triển khai</h3>
            <p>
              Quy trình thiết kế và thi công sân vườn của chúng tôi gồm nhiều
              bước chặt chẽ, từ khâu tư vấn, khảo sát thực tế, lập bản vẽ đến
              thi công và bàn giao. Chúng tôi cam kết đem đến cho bạn một không
              gian xanh mát, hài hòa và bền vững.
            </p>
            <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-4 rounded">
              {/* BƯỚC 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 my-4">
                <h3 className="text-xl font-bold text-gray-800">BƯỚC 1</h3>
                <h4 className="text-2xl font-bold text-gray-600">
                  Tư vấn hình thức, phong cách sân vườn
                </h4>
                <p className="text-gray-700 mt-2">
                  Chúng tôi sẽ tìm hiểu về ý tưởng, mong muốn cũng như lối sống,
                  phong cách của chủ nhà để hình thành những ý tưởng ban đầu.
                  Tiếp theo, tùy thuộc vào điều kiện tự nhiên, diện tích, vị trí
                  và hình dáng của khu đất, đặc biệt là tổng thể kiến trúc của
                  căn nhà để chúng tôi đưa ra những giải pháp thiết kế phù hợp
                  nhất.
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
          <h2 ref={section17Ref} className="text-2xl font-bold mb-4">
            Bảng báo giá thiết kế sân vườn biệt thự mới nhất
          </h2>
          <h1 className="mt-4">
            Với đội ngũ kiến trúc sư và kỹ sư dày dạn kinh nghiệm, công ty thiết
            kế sân vườn hiện đại Tutulela cam kết mang đến cho căn nhà của bạn
            một không gian sân vườn trước nhà đẹp, hoàn hảo nhất. Tối ưu chi phí
            thiết kế và loại bỏ tối đa các lãng phí khi thi công là tiêu chí
            hàng đầu của chúng tôi.
          </h1>
          <h1 className="mt-4">
            Với đội ngũ kiến trúc sư và kỹ sư dày dạn kinh nghiệm, công ty thiết
            kế sân vườn hiện đại Tutulela cam kết mang đến cho căn nhà của bạn
            một không gian sân vườn trước nhà đẹp, hoàn hảo nhất. Tối ưu chi phí
            thiết kế và loại bỏ tối đa các lãng phí khi thi công là tiêu chí
            hàng đầu của chúng tôi.
          </h1>
          <h1 className="mt-4 font-bold">
            Sau đây là bảng báo giá thiết kế sân vườn cơ bản của Tutulela để bạn
            tham khảo
          </h1>
          <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-center mb-6">
              BÁO GIÁ THIẾT KẾ SÂN VƯỜN
            </h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-2 px-4 border-b border-gray-300">STT</th>
                  <th className="py-2 px-4 border-b border-gray-300">
                    DIỆN TÍCH (m2)
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300">
                    ĐƠN GIÁ (VND/m2)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300">1</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    100m² đầu tiên
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    350,000
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300">2</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    100 – 500 m²
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    200,000
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300">3</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    500 – 1.000 m²
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    150,000
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300">4</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    1.000 – 2.000 m²
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">95,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">2.000 – 5.000 m²</td>
                  <td className="py-2 px-4">70,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="mt-4">
            Để xem báo giá chi phí, đơn giá thi công sân vườn HCM và các tỉnh
            thành khác (Click ngay phía dưới)
          </h1>
          <div className="mt-4 mx-4">
            <Link
              to="/bao-gia"
              className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center"
            >
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../../assets/icon/expand.png")}
              />
              Mời xem mẫu và nhận báo giá thiết kế thi công sân vườn chi tiết
              miễn phí (click tại đây)
            </Link>
          </div>
          <h2 ref={section18Ref} className="text-2xl font-bold mb-4 mt-4">
            Lựa chọn Tutulela thiết kế cho sân vườn của bạn
          </h2>
          <h1 className="mt-4">
            Hãy tưởng tượng buổi sáng sau khi thức dậy bạn sẽ được chào đón bởi
            khu vườn đẹp nhất với một không gian xanh mát cùng với những nụ hoa
            đang chớm nở vươn mình đón ánh nắng sớm kết hợp với tường cây. Hay
            sau một ngày dài đi làm mệt mỏi trở về ngôi nhà thân yêu, thay vì
            khoảng sân trống rỗng cùng với chiếc cổng đơn điệu, bạn được đắm
            chìm trong một không gian thanh bình, thư giãn với tiếng suối chảy
            róc rách hòa quyện với hương thơm và gió mát trong lành. Điều này sẽ
            trở thành hiện thực khi bạn sở hữu một khu vườn cho riêng mình.
          </h1>
          <h1 className="mt-4">
            Sân vườn hiện nay đang là một trong những phương pháp không những
            làm tăng sức sống, sự sinh động, nghệ thuật cho ngôi nhà mà còn giúp
            cho không gian sống trở nên gần gũi với thiên nhiên, tạo nên sinh
            khí giúp điều hòa không gian sống và mang lại phong thủy tuyệt vời
            cho gia chủ.
          </h1>
          <h1 className="mt-4 font-bold">
            Một thiết kế sân vườn với sự kết hợp hài hòa giữa 5 yếu tố cơ bản:
            Đất, nước, đá, cây và không gian của chính bạn kết hợp hài hòa với
            nhau sẽ mang lại một không gian sống tuyệt vời.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/GardenService/thiet-ke-san-vuon_7a22c80ab1be4dc9849b98b0b4a3d248_grande.jpeg")}
          />
          <h1 className="mt-4">
            Chúng tôi với đội ngũ kiến trúc sư đầy nhiệt huyết, tận tâm, am hiểu
            từng sở thích, mong muốn, ý tưởng và yêu cầu của khách hàng để tư
            vấn thiết kế thi công sân vườn và đưa ra những giải pháp cũng như
            sản phẩm phù hợp với nhu cầu của khách hàng.
          </h1>
          <h1 className="mt-4">
            Tutulela với mục tiêu trở thành nhà cung cấp dịch vụ về cảnh quan
            sân vườn hàng đầu tại HCM, Bình Dương, Bà Rịa Vũng Tàu, Đồng Nai và
            khắp Việt Nam, cam kết mang đến cho khách hàng những sản phẩm không
            chỉ đạt giá trị cao về chất lượng, giá trị thẩm mỹ mà còn thấy được
            những chi tiết về tâm hồn cũng như tư duy của con người để tạo nên
            một kiệt tác đáng tự hào.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GardenService;
