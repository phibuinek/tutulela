import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Price = () => {
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
                Tổng hợp bảng báo giá thiết kế và thi công cảnh quan sân vườn
                mới nhất
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section2Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Báo giá thiết kế cảnh quan
                </li>
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Báo giá thiết kế kiến trúc biệt thự vườn
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Báo giá thiết kế bản vẽ sân vườn
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Báo giá chi phí, đơn giá thi công sân vườn
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Bảng báo giá thi công hồ cá koi
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Báo giá thi công vườn đứng
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section8Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Quy trình triển khai dịch vụ tại Tutulela
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Thế mạnh của chúng tôi
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mời xem các dự án của Tutulela
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
          <Image
            className=""
            src={require("../assets/price/z5781702134611_a243e833155e760ad994f436f32eef58.jpg")}
          />
          <h1 className="italic mt-2">
            Bạn đang có nhu cầu về thiết kế và thi công cảnh quan sân vườn, hồ
            cá koi, vườn tường đứng… nhưng chưa biết giá cả và chi phí đầu tư cụ
            thể như thế nào? Đừng lo lắng quá mức, hãy tham khảo ngay bảng báo
            giá chi tiết và cạnh tranh từ Tutulela.
          </h1>
          <h1 ref={section1Ref} className="mt-10 text-4xl font-bold">
            Tổng hợp bảng báo giá thiết kế và thi công cảnh quan sân vườn mới
            nhất
          </h1>
          <h1 className="mt-10">
            Trong bất kì dự án kiến trúc cảnh quan nào, ngoài các yếu tố kỹ
            thuật thì chi phí đầu tư cũng là yếu tố cần quan tâm. Bởi ngân sách
            là yếu tố quyết định đến mức độ, quy mô và phong cách của cảnh quan
            – sân vườn. Vì thế bạn nên tham khảo báo giá của nhiều công ty khác
            nhau để tìm được giải pháp tối ưu nhất.
          </h1>
          <h1 ref={section2Ref} className="mt-4 text-3xl font-semibold">
            Báo giá thiết kế cảnh quan
          </h1>
          <h1 className="mt-10">
            Mỗi một công trình sân vườn biệt thự hay dự án cảnh quan đều tốn kém
            rất nhiều chi phí. Vì thế trước khi quyết định, bạn nên tham khảo
            bảng báo giá thi công sân vườn của nhiều công ty cảnh quan và cân
            nhắc kỹ lưỡng để lựa chọn được một đơn vị thi công sân vườn uy tín
            và chuyên nghiệp
          </h1>
          <Image
            className="mt-4"
            src={require("../assets/price/z5781699601964_ab7a8eb60adb2c3580f4d40c9c1d620e.jpg")}
          />
          <h1 className="mt-4">
            Sau đây là bảng báo giá thi công sân vườn và thi công cảnh quan cơ
            bản của Tutulela để bạn tham khảo. Các hạng mục và chi phí được liệt
            kê ở dưới đây chỉ mang tính chất tham khảo và chung nhất cho mọi dự
            án cảnh quan.
          </h1>
          {/* Bảng báo giá thiết kế cảnh quan */}
          <table className="table-auto mt-4 border-collapse border border-gray-400 w-full text-center">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">STT</th>
                <th className="border border-gray-400 px-4 py-2">
                  DIỆN TÍCH (m²)
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  ĐƠN GIÁ (VNĐ/m²)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  100m² đầu tiên
                </td>
                <td className="border border-gray-400 px-4 py-2">210,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  100 – 500m²
                </td>
                <td className="border border-gray-400 px-4 py-2">150,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  500 – 1,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">110,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  1,000 – 2,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">95,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  2,000 – 5,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">70,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  5,000 – 10,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">7</td>
                <td className="border border-gray-400 px-4 py-2">
                  10,000 – 20,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">20,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">8</td>
                <td className="border border-gray-400 px-4 py-2">
                  20,000 – 50,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">9</td>
                <td className="border border-gray-400 px-4 py-2">
                  50,000 – 100,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">7,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">10</td>
                <td className="border border-gray-400 px-4 py-2">
                  Trên 100,000m²
                </td>
                <td className="border border-gray-400 px-4 py-2">5,000</td>
              </tr>
            </tbody>
          </table>
          <h1 className="font-bold mt-4">
            Bảng dự trù trên áp dụng cho hầu hết mọi dự án cảnh quan:
          </h1>
          <div className="mt-4 space-y-2">
            <li>Biệt thự, nhà phố…</li>
            <li>Quán cafe, showroom, nhà hàng, khách sạn,…</li>
            <li>Công ty, nhà máy, khu công nghiệp,…</li>
            <li>Resort, khu du lịch, công viên, khu dân cư,…</li>
          </div>
          <h1 className="font-bold mt-4">3/ Các công việc thiết kế:</h1>
          <div className="mt-4 space-y-2">
            <li>Khảo sát hiện trạng</li>
            <li>Thiết kế Concept 2D</li>
            <li>Thiết kế Concept 3D</li>
            <li>Thiết kế hồ sơ bản vẽ thi công</li>
            <li>Lập khái toán</li>
            <li>Giám sát tác giả</li>
          </div>
          <h1 className="font-bold mt-4">4/ Thời gian thiết kế:</h1>
          <div className="mt-4 space-y-2">
            <li>15 – 20 ngày đối với diện tích thiết kế nhỏ hơn 100m2</li>
            <li>20 – 25 ngày đối với diện tích thiết kế từ 101 đến 300m2</li>
            <li>25 – 30 ngày đối với diện tích thiết kế từ 301 đến 500m2</li>
            <li>Từ 30 ngày trở lên đối với diện tích thiết kế trên 500m2</li>
          </div>
          <h1 className="mt-4 italic">
            (Lưu ý:Thời gian thiết kế không bao gồm quá trình thay đổi, sửa chữa
            thiết kế và ngày lễ tết)
          </h1>
          <div className="mt-4 mx-4">
            <Link
              to="/thiet-ke-canh-quan"
              className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center"
            >
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../assets/icon/expand.png")}
              />
              Mời xem mẫu và nhận báo giá thiết kế cảnh quan chi tiết miễn phí
              (click tại đây)
            </Link>
          </div>
          <h1 ref={section3Ref} className="mt-4 text-3xl font-semibold">
            Báo giá thiết kế kiến trúc biệt thự vườn
          </h1>
          <table className="mt-4 w-full border-collapse border border-gray-400 text-center">
            <thead>
              <tr>
                <th
                  colSpan="3"
                  className="border border-gray-400 p-2 text-center font-bold text-lg"
                >
                  BÁO GIÁ THIẾT KẾ CÔNG TRÌNH KIẾN TRÚC
                </th>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2">STT</th>
                <th className="border border-gray-400 p-2">
                  Phong cách thiết kế
                </th>
                <th className="border border-gray-400 p-2">Đơn giá (VNĐ/m2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">1</td>
                <td className="border border-gray-400 p-2">Nhật Bản</td>
                <td className="border border-gray-400 p-2">420,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">Truyền Thống</td>
                <td className="border border-gray-400 p-2">300,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">3</td>
                <td className="border border-gray-400 p-2">Cổ Điển</td>
                <td className="border border-gray-400 p-2">520,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">Hiện Đại</td>
                <td className="border border-gray-400 p-2">250,000</td>
              </tr>
            </tbody>
          </table>
          <h1 ref={section4Ref} className="mt-4 text-3xl font-semibold">
            Báo giá thiết kế bản vẽ sân vườn
          </h1>
          <table className="mt-4 w-full border-collapse border border-gray-400 text-center">
            <thead>
              <tr>
                <th
                  colSpan="3"
                  className="border border-gray-400 p-2 text-center font-bold text-lg"
                >
                  Báo giá thiết kế sân vườn
                </th>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2">STT</th>
                <th className="border border-gray-400 p-2">DIỆN TÍCH (m2)</th>
                <th className="border border-gray-400 p-2">Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">1</td>
                <td className="border border-gray-400 p-2">100m2 đầu tiên</td>
                <td className="border border-gray-400 p-2">350,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">100 – 500 m2</td>
                <td className="border border-gray-400 p-2">200,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">3</td>
                <td className="border border-gray-400 p-2">500 – 1.000 m2</td>
                <td className="border border-gray-400 p-2">150,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">1.000 – 2.000 m2</td>
                <td className="border border-gray-400 p-2">95,000</td>
              </tr>
            </tbody>
          </table>
          <h1 ref={section5Ref} className="mt-4 text-3xl font-semibold">
            Báo giá chi phí, đơn giá thi công sân vườn
          </h1>
          <table className="mt-4 w-full border-collapse border border-gray-400 text-center">
            <thead>
              <tr>
                <th
                  colSpan="3"
                  className="border border-gray-400 p-2 text-center font-bold text-lg"
                >
                  BÁO GIÁ THIẾT KẾ THI CÔNG SÂN VƯỜN CẢNH QUAN
                </th>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2">STT</th>
                <th className="border border-gray-400 p-2">
                  PHONG CÁCH SÂN VƯỜN
                </th>
                <th className="border border-gray-400 p-2">Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">1</td>
                <td className="border border-gray-400 p-2"> Nhật Bản</td>
                <td className="border border-gray-400 p-2">từ 7,000,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">Cổ điển Châu Âu</td>
                <td className="border border-gray-400 p-2">từ 3,000,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">3</td>
                <td className="border border-gray-400 p-2">
                  Hiện đại – Tropical
                </td>
                <td className="border border-gray-400 p-2">từ 2,500,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">Hỗn hợp – Fusion</td>
                <td className="border border-gray-400 p-2">từ 4,000,000/m2</td>
              </tr>
            </tbody>
          </table>
          <h1 className="mt-4">
            <b>*Lưu ý:</b> Đơn giá trên là suất đầu tư trên m2 mang tính chất
            tham khảo để khách hàng dự trù tổng ngan sách đầu tư. Trên thực tế,
            chi phí thi công sân vườn sẽ thay đổi tuỳ theo phong cách thiết kế,
            quy mô, cây xanh – vật liệu hoàn thiện,… Để có được báo giá chính
            xác và không phát sinh, Tutulela luôn báo giá dựa vào BOQ chi tiết
            được bốc tách từ bản vẽ thiết kế thi công hoàn thiện.
          </h1>
          <div className="mt-4 mx-4">
            <Link
              to="/thiet-ke-san-vuon"
              className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center"
            >
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../assets/icon/expand.png")}
              />
              Mời xem mẫu và nhận báo giá chi tiết thiết kế thi công sân vườn
              miễn phí (click tại đây)
            </Link>
          </div>
          <h1 ref={section6Ref} className="mt-4 text-3xl font-semibold">
            Bảng báo giá thi công hồ cá koi
          </h1>
          <h1 className="mt-4">
            Nếu bạn làm hồ cá Koi mini thì chi phí khá nhẹ nhàng. Nhưng nếu là
            hồ cá Koi lớn, bạn cần phải cân nhắc kỹ và tham khảo giá thành từ
            nhiều đơn vị thi công khác nhau trước.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../assets/price/Ha-Noi-thi-cong-ho-ca-Koi-Chi-tiet-he-thong-loc-va-vat-lieu-ho-ca-Koi6.jpg")}
          />
          <h1 className="mt-4">
            Các yếu tố cần quan tâm khi thi công hồ cá koi SGL Vietnam mọi người
            xem thêm tại bài viết này. Bảng báo giá chi phí thi công hồ cá koi
            dưới đây là mức tham khảo. Chi phí thi công hồ cá koi phụ thuộc vào
            rất nhiều yếu tố: kích thước hồ, chủng loại cá koi, các tiểu cảnh đi
            kèm,…
          </h1>
          <table className="mt-4 w-full border-collapse border border-gray-400 text-center">
            <thead>
              <tr>
                <th
                  colSpan="3"
                  className="border border-gray-400 p-2 text-center font-bold text-lg"
                >
                  BÁO GIÁ THIẾT KẾ THI CÔNG HỒ CÁ KOI
                </th>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2">STT</th>
                <th className="border border-gray-400 p-2">DIỆN TÍCH</th>
                <th className="border border-gray-400 p-2">Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">1</td>
                <td className="border border-gray-400 p-2"> 10 – 20 m2</td>
                <td className="border border-gray-400 p-2">từ 25,000,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">20 – 50 m2</td>
                <td className="border border-gray-400 p-2">từ 21,000,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">3</td>
                <td className="border border-gray-400 p-2">50 – 100 m2</td>
                <td className="border border-gray-400 p-2">từ 15,000,000/m2</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">Trên 100 m2</td>
                <td className="border border-gray-400 p-2">từ 9,000,000/m2</td>
              </tr>
            </tbody>
          </table>
          <h1 className="mt-4">Phạm vi công việc: </h1>
          <div className="mt-4">
            <li>Đổ bê tông, chống thấm thành hồ, đáy hồ và hầm lọc</li>
            <li>Công tác M&E đấu nối điện nước sân vườn</li>
            <li>Hệ thống lọc</li>
            <li>Thi công kè đá nghệ thuật</li>
            <li>Thi công lắp đặt đèn đá Nhật</li>
            <li>Thi công sàn gỗ hầm lọc</li>
            <li>Thi công phối kết cây bụi và hoa tạo cảnh nghệ thuật </li>
            <li>Thi công cây tầm trung</li>
          </div>
          <div className="mt-4 mx-4">
            <Link
              to="/thiet-ke-ho-ca-koi"
              className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center"
            >
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../assets/icon/expand.png")}
              />
              Mời xem mẫu hồ cá koi đẹp v à nhận báo giá chi tiết miễn phí
              (click tại đây)
            </Link>
          </div>
          <h1 ref={section7Ref} className="mt-4 text-3xl font-semibold">
            Báo giá thi công vườn đứng
          </h1>
          <h1 className="mt-4">
            Bảng báo giá bao gồm thi công vườn đứng thủy canh và vườn đứng
            modul, mời quý khách tham khảo bản rút gọn:
          </h1>
          <Image
            className="mt-4 "
            src={require("../assets/price/z5781703742424_7cc1e2bf129da725c8caa25e8e0ad356 (1).jpg")}
          />
          <div className="mt-4 mx-4">
            <div className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center">
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../assets/icon/expand.png")}
              />
              Mời xem mẫu tường cây và nhận báo giá chi tiết miễn phí (click tại
              đây)
            </div>
          </div>
          <div
            ref={section8Ref}
            className="mt-4 text-4xl text-black font-bold mt-2"
          >
            Quy trình triển khai dịch vụ tại Tutulela
          </div>
          <div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-y-4 justify-center items-center mx-auto mb-10 lg:mt-10">
              <div className=" justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    1
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Lập Nhiệm vụ và Báo giá
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Bao gồm: NVTK & moodboard - Tiến độ dự kiến - Báo giá & hợp
                    đồng thiết kế
                  </div>
                </div>
              </div>
              <div className=" justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    2
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Lập hồ sơ thiết kế ý tưởng
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Bao gồm: Hình ảnh diễn họa 2D & 3D - Thuyết minh, spec - Mô
                    hình mô phỏng
                  </div>
                </div>
              </div>
              <div className=" justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    3
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Lập hồ sơ thiết kế cơ sở đến thi công
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Bao gồm hồ sơ thiết kế cơ sở và hồ sơ thiết kế thi công
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    4
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Lập báo giá thi công
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Bao gồm các công tác: BOQ, Khái toán, Dự toán theo định mức
                    nhà nước... Báo giá và hợp đồng
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    5
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Tổ chức thi công từ thô đến hoàn thiện
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Tổ chức thi công hoặc quản lý, điều phối và giám sát dự án
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 justify-center mt-4 flex">
                <div className="w-[420px] lg:w-[370px] h-[320px] bg-[#efefef] group hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                  <div className="text-[#dbad4d] text-8xl font-bold text-center pt-4 transition duration-300 ease-in-out">
                    6
                  </div>
                  <div className="text-center text-black group-hover:text-white text-2xl pt-4 transition duration-300 ease-in-out">
                    Nghiệm thu, bàn giao và bảo dưỡng
                  </div>
                  <div className="text-center px-10 pt-4 text-lg group-hover:text-[#b6b5b5] transition duration-300 ease-in-out">
                    Nghiệm thu bàn giao, bảo hành, bảo dưỡng và lập hồ sơ hoàn
                    công
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={section9Ref}
            className="mt-4 text-4xl text-black font-bold mt-2"
          >
            Thế mạnh của chúng tôi
          </div>
          <h1 className="mt-4">
            Công ty thiết kế thi công cảnh quan Tutulela với đội ngũ kiến trúc
            sư và kỹ sư được đào tạo chuyên nghiệp tại các trường đại học chuyên
            về cảnh quan tại TPHCM. Chúng tôi là đội ngũ trẻ đầy nhiệt huyết,
            đam mê với lĩnh vực thiết kế cảnh quan. Tận tâm, am hiểu từng sở
            thích mong muốn, ý tưởng và yêu cầu của khách hàng để tư vấn và đưa
            ra những giải pháp về thiết kế cảnh quan phù hợp nhất.
          </h1>
          <Image
            className="mt-4"
            src={require("../assets/price/z5781702305571_c2f8c7feac4f3295e7e7d00924bfc698.jpg")}
          />
          <h1 className="mt-4">
            Tutulela với mục tiêu trở thành nhà cung cấp dịch vụ về cảnh quan
            hàng đầu Việt Nam, cam kết mang đến cho khách hàng những sản phẩm
            không chỉ đạt giá trị cao về chất lượng, giá trị thẩm mỹ mà còn thấy
            được những chi tiết về tâm hồn cũng như tư duy của con người để tạo
            nên một kiệt tác đáng tự hào.
          </h1>
          <div className="mt-4 mx-4">
            <div className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center">
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../assets/icon/expand.png")}
              />
              Dịch vụ Thiết Kế Thi Công Vườn Trên Mái Đẹp Của Tutulela
            </div>
          </div>
          <div
            ref={section10Ref}
            className="mt-4 text-4xl text-black font-bold mt-2"
          >
            Mời xem các dự án của SGL Vietnam
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
