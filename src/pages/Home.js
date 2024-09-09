import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/bg1-home1.jpg";
const Home = ({ isMenuOpen }) => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:px-24 px-10 lg:border-x-[1px] pb-24 border-b-0 lg:mx-20 lg:border-[#e5e5e5] ">
        <div className="lg:col-span-1 lg:mt-48 mt-24">
          <Image src={require("../assets/lang-thong-dong-masterplan.jpg")} />
        </div>
        <div className="lg:col-span-1 lg:pt-36 pt-24 lg:pl-20 lg:ml-4 lg:border-[#e5e5e5] lg:border-l-[1px]">
          <div className="lg:grid lg:grid-cols-2">
            <div className="lg:col-span-1 lg:mt-20">
              <h1 className="text-lg font-semibold text-[#aaa9a9]">
                ( ABOUT COMPANY )
              </h1>
              <h1 className="text-5xl text-black font-semibold">TUTULELA</h1>
            </div>
            <div className="lg:col-span-1">
              <Image src={require("../assets/tree.png")} />
            </div>
          </div>
          <div className="mt-4 text-lg">
            Chúng tôi hoạt động trong lĩnh vực tư vấn thiết kế kiến trúc, thiết
            kế cảnh quan, thiết kế sân vườn, thi công sân vườn biệt thự, thiết
            kế vườn Nhật, thiết kế hồ cá Koi,… <br />{" "}
            <li className="mt-8">
              Thiết kế kiến trúc biệt thự vườn, nhà vườn, nhà dịch vụ
            </li>
            <li>Tư vấn quy hoạch và thiết kế cảnh quan</li>
            <li>Quản lý dự án, giám sát thi công kiến trúc, cảnh quan</li>
            <li>
              Thi công công trình kiến trúc, cảnh quan, sân vườn biệt thự cao
              cấp
            </li>
            <div className="mt-8">
              Với nhiều năm kinh nghiệm về thiết kế và thi công cảnh quan & kiến
              trúc đặc biệt là thiết kế nhà vườn, thiết kế sân vườn biệt thự,
              thiết kế vườn phong cách Nhật, thiết kế hồ cá Koi,… chúng tôi đã
              thiết kế, thi công kiến trúc và cảnh quan cho nhiều dự án lớn trên
              khắp cả nước.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:ml-24 ml-4">
        <div className="text-lg font-semibold text-[#aaa9a9]">
          ( OUR SERVICES )
        </div>
        <div className="text-4xl text-black font-bold mt-2">
          Dịch vụ chúng tôi cung cấp
        </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mb-4 mx-auto">
          <div className="col-span-1 w-[300px]">
            <Link className="flex space-x-4 border-2 border-[#7a7a7a] p-1 h-[90px] w-[300px] mx-auto">
              <div className="bg-[#7a7a7a] text-white font-bold text-5xl pt-3 pb-2 my-1 px-4">
                1
              </div>
              <div className="mt-3 font-bold text-xl lg:text-2xl">
                Thiết kế thi công cảnh quan
              </div>
            </Link>
          </div>
          <div className="col-span-1 w-[300px]">
            <Link className="flex space-x-4 border-2 border-[#7a7a7a] p-1 h-[90px] w-[300px] mx-auto">
              <div className="bg-[#7a7a7a] text-white font-bold text-5xl pt-3 pb-2 my-1 px-4">
                2
              </div>
              <div className="mt-3 font-bold text-xl lg:text-2xl">
                Thiết kế thi công nhà vườn
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <Link className="flex space-x-4 border-2 border-[#7a7a7a] p-1 h-[90px] w-[300px] mx-auto">
              <div className="bg-[#7a7a7a] text-white font-bold text-5xl pt-3 pb-2 my-1 px-4">
                3
              </div>
              <div className="mt-3 font-bold text-xl lg:text-2xl">
                Thiết kế thi công sân vườn
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <Link className="flex space-x-4 border-2 border-[#7a7a7a] p-1 h-[90px] w-[300px] mx-auto">
              <div className="bg-[#7a7a7a] text-white font-bold text-5xl pt-3 pb-2 my-1 px-4">
                4
              </div>
              <div className="mt-3 font-bold text-xl lg:text-2xl">
                Thiết kế thi công hồ cá koi
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={`mt-24 project z-30  `}>
        <div className="flex lg:ml-24 ml-4 z-30">
          <div>
            <div className="text-lg font-semibold text-[#aaa9a9]">
              ( OUR PROJECT )
            </div>
            <div className="text-4xl text-black font-bold mt-2">
              Dự án nổi bật
            </div>
          </div>
          <button className="ml-auto lg:mr-48 inline-block px-9 text-white text-xs uppercase font-bold border border-[#1a1a1a] bg-[#1a1a1a] bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] bg-[length:100%_100%] hover:bg-[length:0%_100%] transition-all duration-300 hover:text-black hover:bg-white">
            XEM TẤT CẢ
          </button>
        </div>
        <div className="lg:flex lg:ml-0 ml-4 lg:w-full lg:h-[380px] mt-4 lg:mt-10">
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/vien-le-jardin-720x720.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[300px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">VIEN LE JARDIN</div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN )
              </div>
            </div>
          </Link>
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/onsen-go-vap-720x720.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[300px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">ONSEN GÒ VẤP</div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN )
              </div>
            </div>
          </Link>
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/farmstay-daknong-720x720.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[300px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">DAKNONG FARMSTAY</div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN )
              </div>
            </div>
          </Link>
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/nha-mau-khu-10-lang-thong-dong.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[300px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">
                NHÀ MẪU LÀNG THONG DONG
              </div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN & BUILD)
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:flex lg:ml-0 ml-4 lg:w-full lg:h-[380px] ">
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/penthouse-opal-tower-feature-img.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[300px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">
                PENTHOUSE OPAL TOWER
              </div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN )
              </div>
            </div>
          </Link>
          <Link className={`group w-1/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/para-720x720.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-22px] text-white border-2 border-black bg-black w-[400px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">
                Vườn Tự Tại – Thiết kế khu tổ hợp chuyên đề Thiền tại Tp.Hồ Chí
                Minh
              </div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( ARCHITECTURE ) ( DESIGN )
              </div>
            </div>
          </Link>
          <Link className={`group w-2/4 ${isMenuOpen ? "" : "relative"}`}>
            <Image
              className="w-full h-[380px] transition-transform duration-500 ease-in-out sm:group-hover:scale-100 lg:group-hover:scale-110"
              src={require("../assets/project1-2.jpg")}
            />
            <div className="absolute bottom-0 left-0 lg:bottom-[-18px] lg:left-[-44px] text-white border-2 border-black bg-black w-[300px] lg:w-[500px] h-[150px] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="mt-4 ml-10 hover:underline">
                The Retreat Garden – Vườn Nhật Bản
              </div>
              <div className="text-[#e5e5e5] mt-2 ml-10 hover:text-white text-lg">
                ( DESIGN & BUILD )
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-24">
        <div className="justify-center text-center">
          <div className="text-lg font-semibold text-[#aaa9a9] ">
            ( OUR PROCEESS )
          </div>
          <div className="text-4xl text-black font-bold mt-2">
            Quy trình thực hiện dự án
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(420px,_1fr))] gap-y-4 justify-center items-center mx-auto mb-10 lg:mt-10 max-w-[1500px]">
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
        <div className="justify-center lg:flex grid grid-auto-fill-100  items-center lg:gap-x-36">
          <div className="lg:ml-0 text-center lg:mb-0 mb-10">
            <h1 className="text-[#c5c5c5] text-5xl">(70+)</h1>
            <h1 className="text-black text-3xl ml-4 mt-2 font-semibold">
              DỰ ÁN
            </h1>
          </div>
          <div className="lg:ml-0 text-center lg:mb-0 mb-10">
            <h1 className="text-[#c5c5c5] text-5xl">(10+)</h1>
            <h1 className="text-black text-3xl mt-2 font-semibold">
              NĂM KINH NGHIỆM
            </h1>
          </div>
          <div className="lg:ml-0 text-center lg:mb-0 mb-10">
            <h1 className="text-[#c5c5c5] text-5xl">(50+)</h1>
            <h1 className="text-black text-3xl mt-2 font-semibold">
              KHÁCH HÀNG
            </h1>
          </div>
          <div className="lg:ml-0 text-center lg:mb-0 mb-10">
            <h1 className="text-[#c5c5c5] text-5xl">(2)</h1>
            <h1 className="text-black text-3xl mt-2 font-semibold">
              VĂN PHÒNG
            </h1>
          </div>
        </div>
        <div
          className="w-full h-[300px] lg:h-[230px] mt-24 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start px-10"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="lg:ml-36 lg:mt-10">
            <div className="text-center lg:text-left text-white pt-10 text-2xl lg:text-5xl font-semibold">
              Liên hệ với chúng tôi!
            </div>
            <div className="text-[#858585] text-center lg:text-left pt-4 lg:text-xl">
              Mọi sự hài lòng của bạn là niềm kiêu hãnh của chúng tôi!
            </div>
          </div>
          <Link
            to="/lien-he"
            className="mt-4 lg:mt-24 lg:mr-36 px-9 py-4 text-black text-xs uppercase font-bold border border-[#1a1a1a] bg-white transition-all duration-500 hover:text-white hover:border-white bg-gradient-to-r from-transparent to-transparent bg-[length:0%_100%] bg-left-bottom hover:bg-[length:100%_100%] hover:bg-[#1a1a1a]"
          >
            NHẬN TƯ VẤN
          </Link>
        </div>
        <div>
          <div className="lg:grid lg: grid-cols-2 lg:justify-center lg:items-center pl-10 ">
            <div className="lg:col-span-1 h-full lg:border-x-2 lg:border-x-[#e5e5e5] ">
              <div className="lg:px-24  pt-24">
                <div className="text-[#a1a0a0] uppercase text-xl font-semibold mb-4">
                  ( our skills )
                </div>
                <div className="text-black text-5xl font-bold mb-8">
                  Giá trị cốt lõi
                </div>
                <div className="text-lg">
                  Chúng tôi không ngừng phát triển, học hỏi và cải tiến và các
                  đối tác của chúng tôi cũng không ngừng tăng lên.
                </div>
                <div className="mt-8">
                  <div className="uppercase text-black font-semibold">
                    hồ sơ, tiêu chuẩn và quy trình chuyên nghiệp
                  </div>
                  <div
                    ref={progressRef}
                    className="w-2/3 bg-gray-200 h-1 relative overflow-hidden"
                  >
                    <div
                      className={`h-full bg-black ${
                        isVisible
                          ? "w-full transition-all duration-1000"
                          : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="uppercase text-black font-semibold">
                    đội ngũ nhiều kinh nghiệm, không outsource
                  </div>
                  <div
                    ref={progressRef}
                    className="w-2/3 bg-gray-200 h-1 relative overflow-hidden"
                  >
                    <div
                      className={`h-full bg-black ${
                        isVisible
                          ? "w-full transition-all duration-1000"
                          : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="uppercase text-black font-semibold">
                    tư vấn toàn diện, không chỉ là giá trị thiết kế
                  </div>
                  <div
                    ref={progressRef}
                    className="w-2/3 bg-gray-200 h-1 relative overflow-hidden"
                  >
                    <div
                      className={`h-full bg-black ${
                        isVisible
                          ? "w-full transition-all duration-1000"
                          : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 pt-10 lg:pl-10">
              <Image src={require("../assets/banner-front-page.jpg")} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:flex lg:ml-24 ml-4 sm:text-center lg:text-left z-30">
          <div>
            <div className="text-lg font-semibold text-[#aaa9a9]">
              ( OUR BLOG )
            </div>
            <div className="lg:text-4xl sm:text-3xl text-black font-bold mt-2">
              Tin tức kiến trúc cảnh quan
            </div>
          </div>
          <Link
            to="/blog"
            className="ml-auto lg:mr-48 inline-block lg:mt-10 mt-4 px-9 py-4 text-white text-xs uppercase font-bold border border-[#1a1a1a] bg-[#1a1a1a] bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] bg-[length:100%_100%] hover:bg-[length:0%_100%] transition-all duration-300 hover:text-black hover:bg-white"
          >
            XEM TẤT CẢ
          </Link>
        </div>
        <div className="lg:ml-24 ml-4 text-xl mt-6">
          Cập nhật những thông tin mới nhất về hoạt động của SGL Vietnam và
          những kinh nghiệm, kiến thức về lĩnh vực kiến trúc – cảnh quan – sân
          vườn từ chuyên gia
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] lg:pl-24 md:pl-12 pl-4">
          <Link
            to="/huong-dan-trong-va-cham-soc-hoa-hong-trong-chau"
            className="w-[390px] mt-10 group cursor-pointer "
          >
            <Image
              className="w-[400px] h-[250px]"
              src={require("../assets/vuon-hoa-hong.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              Hướng dẫn trồng và chăm sóc hoa hồng trong chậu đúng kỹ thuật
            </div>
          </Link>
          <Link
            to="/tieu-canh-trong-nha"
            className="w-[390px] mt-10  group cursor-pointer "
          >
            <Image
              className="w-[400px] h-[250px]"
              src={require("../assets/../assets/tieu-canh-trong-nha-avt-405x228.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              #6 thiết kế tiểu cảnh trong nhà đẹp được ưa chuộng nhất 2024
            </div>
          </Link>
          <Link
            to="/thiet-ke-biet-thu-nghi-duong"
            className="w-[390px] mt-10 group cursor-pointer "
          >
            <Image
              className="w-[400px] h-[250px]"
              src={require("../assets/mau-thiet-ke-biet-thu-hien-dai-kieu-nghi-duong-405x228.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              TOP 10 mẫu thiết kế biệt thự nghỉ dưỡng lộng lẫy, xa hoa
            </div>
          </Link>
          <Link
            to="/den-san-vuon-dep"
            className="w-[390px] mt-10 group cursor-pointer"
          >
            <Image
              className="w-[390px] h-[250px]"
              src={require("../assets/den-san-vuon-dep-avt-405x228.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              Top mẫu đèn sân vườn đẹp, được ưa chuộng nhất 2024
            </div>
          </Link>
          <Link
            to="/top-nhung-quan-cafe-san-vuon-dep-o-sai-gon"
            className="w-[390px] mt-10  group cursor-pointer"
          >
            <Image
              className="w-full h-[250px]"
              src={require("../assets/../assets/ca-phe-dep-nhat-405x228.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              Khám phá top những quán cafe sân vườn đẹp tại Sài Gòn
            </div>
          </Link>
          <Link
            to="/thiet-ke-biet-thu-nha-vuon"
            className="w-[390px] mt-10 group cursor-pointer"
          >
            <Image
              className="w-full h-[250px]"
              src={require("../assets/thiet-ke-biet-thu-nha-vuon-avt-405x228.jpg")}
            />
            <div className="mt-4 text-xl font-semibold group-hover:text-[#7a7a7a]">
              Mẫu thiết kế biệt thự nhà vườn sang trọng & lưu ý cần biết
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            className="w-6 h-6"
            src={require("../assets/icon/favorite.png")}
          />
          <Image
            className="w-6 h-6"
            src={require("../assets/icon/favorite.png")}
          />
          <Image
            className="w-6 h-6"
            src={require("../assets/icon/favorite.png")}
          />
          <Image
            className="w-6 h-6"
            src={require("../assets/icon/favorite.png")}
          />
          <Image
            className="w-6 h-6"
            src={require("../assets/icon/favorite.png")}
          />
          <div className="ml-1 mt-1">5 / 5 ( 9 bình chọn )</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
