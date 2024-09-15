import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import homeBanner1 from "./assets/banner.jpg";
import homeBanner2 from "./assets/banner-trang-chu-3.jpg";
import homeBanner3 from "./assets/banner-trang-chu-2.jpg";
import introduceBanner from "./assets/banner/banner-chung-chinh-1920-700-e1697443857714.png";
import flowerBlogBanner from "./assets/vuon-hoa-hong.jpg";
import miniatureBlogBanner from "./assets/banner/tieu-canh-trong-nha-avt.jpg";
import hollidayVillaBlogBanner from "./assets/banner/mau-thiet-ke-biet-thu-hien-dai-kieu-nghi-duong.jpg";
import gardenBlogBanner from "./assets/banner/den-san-vuon-dep-avt.jpg";
import cafeBlogBanner from "./assets/banner/ca-phe-dep-nhat.jpg";
import gardenVillaBlogBanner from "./assets/banner/thiet-ke-biet-thu-nha-vuon-avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";
import Introduce from "./pages/Introduce";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FlowerBlog from "./pages/BlogDetail/FlowerBlog";
import MiniatureBlog from "./pages/BlogDetail/MiniatureBlog";
import HolidayVillaBlog from "./pages/BlogDetail/HolidayVillaBlog";
import GardenBlog from "./pages/BlogDetail/GardenBlog";
import GardenVillaBlog from "./pages/BlogDetail/GardenVillaBlog";
import CafeBlog from "./pages/BlogDetail/CafeBlog";
import GardenHousePrice from "./pages/Price/GardenHousePrice";
import GardenPrice from "./pages/Price/GardenPrice";
import FarmStayPrice from "./pages/Price/FarmStayPrice";
import ServiceAreaPrice from "./pages/Price/ServiceAreaPrice";
import Price from "./pages/Price";
import Service from "./pages/Service";
import ArchitectureService from "./pages/Service/ArchitectureService";
import LandscapeService from "./pages/Service/LandscapeService";
import GardenVillaService from "./pages/Service/GardenVillaService";
import GardenService from "./pages/Service/GardenService";
import KoiPondService from "./pages/Service/KoiPondService";
import Project1 from "./pages/Project/Project1";
import project1Banner from "./assets/project/1/z5820562488003_1ff7274c729a4f2c1440c0acfb4ffc42.jpg";
import Project2 from "./pages/Project/Project2";
import project2Banner from "./assets/project/2/z5820560628076_dde6a16155285892e18685ecde5e215f.jpg";
import project3Banner from "./assets/project/3/z5820561064718_3d87d38670124db5778317e9a3c98176.jpg";
import Project3 from "./pages/Project/Project3";
import Project4 from "./pages/Project/Project4";
import project4Banner from "./assets/project/4/c.jpg";
import project5Banner from "./assets/project/5/z5820558877403_2c948bd1462bf1d27ac483c60de3572a.jpg";
import Project5 from "./pages/Project/Project5";
import Project6 from "./pages/Project/Project6";
import project6Banner from "./assets/project/6/z5820560135068_2c7671d91544eeaf0ac285d13f48c1d0.jpg";
import Project from "./pages/Project";

const Layout = ({ children, backgroundImage }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderBgBlack, setIsHeaderBgBlack] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  const slides = [
    {
      link: "/du-an",
      backgroundImage: homeBanner1,
      h1: "KIẾN TẠO CUỘC SỐNG",
      h2: "Những không gian trở về, chữa lành luôn là điểm cuối cùng của mỗi sự lựa chọn, khi bạn đã vất vả ngần ấy thời gian. Bây giờ hãy để cho chúng tôi tạo cho bạn một không gian mà bạn mong đợi",
    },
    {
      link: "/thiet-ke-canh-quan",
      backgroundImage: homeBanner2,
      h1: "THIẾT KẾ KIẾN TRÚC CẢNH QUAN",
      h2: "Chúng tôi tự hào là những người thiết kế kiến trúc cảnh quan và xây dựng các giải pháp sáng tạo để giúp mọi người thực hiện tầm nhìn của họ và biến chúng thành hiện thực. Thú vị đấy chứ?",
    },
    {
      link: "/thiet-ke-san-vuon",
      backgroundImage: homeBanner3,
      h1: "DESIGN & BUILD",
      h2: "Chúng tôi tạo ra những khu vườn chỉnh chu từ thiết kế đeến thi công, các khu vườn triệu đô, theể hiện được vị thế và đẳng cấp của chủ đầu tư. Nhưng trên hết sự hiệu quả và kiến tạo nơi chốn luôn được đặt lên hàng đầu.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const childrenSection = document.getElementById("childrenSection");
      if (childrenSection) {
        const sectionTop = childrenSection.offsetTop;
        const scrollPosition = window.scrollY;

        // Kiểm tra vị trí cuộn và thay đổi màu nền của Header
        if (scrollPosition >= sectionTop) {
          setIsHeaderBgBlack(true);
        } else {
          setIsHeaderBgBlack(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setFadeIn(false); // Start fade-out
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          setFadeIn(true); // Start fade-in after changing slide
        }, 500); // Delay for the fade-out to complete before switching slide
      }, 3000);

      // Cleanup interval khi component unmount
      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  const handleNextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setFadeIn(true);
    }, 500);
  };

  const handlePrevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setFadeIn(true);
    }, 500);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center w-full h-[1000px] z-0 slider"
        style={{
          backgroundImage:
            location.pathname === "/"
              ? `url(${slides[currentSlide].backgroundImage})`
              : `url(${backgroundImage})`,
          height:
            location.pathname === "/" && slides[currentSlide]?.backgroundImage
              ? "940px"
              : "600px",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div
          className={`inset-0 md:fixed lg:z-40 z-100 transition-colors h-[96px] duration-300 ${
            isHeaderBgBlack ? "bg-[#1a1a1a]" : "bg-transparent"
          }`}
        >
          <Header className="z-100" onMenuToggle={setIsMenuOpen} />
        </div>

        {location.pathname === "/" && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h1
                className={`text-white text-8xl font-semibold mb-4 transition-opacity duration-500 lg:w-[1000px] ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
              >
                {slides[currentSlide].h1}
              </h1>
              <h2
                className={`text-white text-lg lg:w-[1000px] transition-opacity duration-500 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
              >
                {slides[currentSlide].h2}
              </h2>
              <Link
                to={slides[currentSlide].link}
                className={`button-effect mt-10 ${
                  isMenuOpen ? "z-30" : "z-30"
                }`}
              >
                Xem Dự Án
              </Link>
            </div>
          </div>
        )}
        {location.pathname === "/gioi-thieu" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div>
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Giới Thiệu
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Giới Thiệu
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/blog" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div>
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Blog
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Blog
              </h1>
            </div>
          </div>
        )}
        {location.pathname ===
          "/huong-dan-trong-va-cham-soc-hoa-hong-trong-chau" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1
                className={`text-white text-4xl lg:text-5xl font-bold px-24 lg:pl-44`}
              >
                Hướng dẫn trồng và chăm sóc hoa hồng trong chậu đúng kỹ thuật
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Sân vườn » Hướng dẫn trồng và chăm sóc hoa
                hồng trong chậu đúng kỹ thuật
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/tieu-canh-trong-nha" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                #6 thiết kế tiểu cảnh trong nhà đẹp được ưa chuộng nhất 2024
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Sân vườn » #6 thiết kế tiểu cảnh trong nhà
                đẹp được ưa chuộng nhất 2024
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-biet-thu-nghi-duong" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                TOP 10 mẫu thiết kế biệt thự nghỉ dưỡng lộng lẫy, xa hoa
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Sân vườn » TOP 10 mẫu thiết kế biệt thự
                nghỉ dưỡng lộng lẫy, xa hoa
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/den-san-vuon-dep" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Top mẫu đèn sân vườn đẹp, được ưa chuộng nhất 2024
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Sân vườn » Top mẫu đèn sân vườn đẹp, được
                ưa chuộng nhất 2024
              </h1>
            </div>
          </div>
        )}
        {location.pathname ===
          "/top-nhung-quan-cafe-san-vuon-dep-o-sai-gon" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Khám phá top những quán cafe sân vườn đẹp tại Sài Gòn
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Sân vườn » Khám phá top những quán cafe
                sân vườn đẹp tại Sài Gòn
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-biet-thu-nha-vuon" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Mẫu thiết kế biệt thự nhà vườn sang trọng & lưu ý cần biết
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Kiến thức Kiến trúc » Mẫu thiết kế biệt thự nhà vườn
                sang trọng & lưu ý cần biết
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/dang-ky-bao-gia-thiet-ke-nha-vuon" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Đăng ký báo giá thiết kế nhà vườn
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Bảng báo giá thiết kế thi công cảnh quan sân vườn »
                Đăng ký báo giá thiết kế nhà vườn
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/dang-ky-bao-gia-thiet-ke-khu-dich-vu" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Đăng ký báo giá thiết kế khu dịch vụ
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Bảng báo giá thiết kế thi công cảnh quan sân vườn »
                Đăng ký báo giá thiết kế khu dịch vụ
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/bao-gia" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Bảng báo giá thiết kế thi công cảnh quan sân vườn
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Bảng báo giá thiết kế thi công cảnh quan sân vườn
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-kien-truc" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Thiết Kế Kiến Trúc
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dịch Vụ » Thiết Kế Kiến Trúc
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-canh-quan" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Thiết Kế Và Thi Công Cảnh Quan
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dịch Vụ » Thiết Kế Và Thi Công Cảnh Quan
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-nha-vuon" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Thiết Kế Nhà Vườn
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dịch Vụ » Thiết Kế Nhà Vườn
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-san-vuon" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Thiết Kế Và Thi Công Sân Vườn
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dịch Vụ » Thiết Kế Và Thi Công Sân Vườn
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/thiet-ke-ho-ca-koi" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Thiết Kế Và Thi Công Hồ Cá Koi
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dịch Vụ » Thiết Kế Và Thi Công Hồ Cá Koi
              </h1>
            </div>
          </div>
        )}
        {location.pathname === "/du-an" && (
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="max-w-[1300px]">
              <h1 className={`text-white text-5xl font-bold pl-24 lg:pl-44`}>
                Dự Án
              </h1>
              <h1 className={`text-white mt-4 pl-24 lg:pl-44`}>
                Trang chủ » Dự Án
              </h1>
            </div>
          </div>
        )}

        {location.pathname === "/" && (
          <div className="absolute right-0 bottom-0 flex">
            <button
              onClick={handlePrevSlide}
              className="bg-transparent text-white text-4xl  p-4 px-6 shadow-md"
            >
              &lt;
            </button>
            <button
              onClick={handleNextSlide}
              className="bg-transparent text-white text-4xl  p-4 px-6  shadow-md"
            >
              &gt;
            </button>
          </div>
        )}

        <div className={`fixed flex flex-col bottom-20 right-6 space-y-2 z-50`}>
          <a
            href="tutulelahouseplantsdecorr@gmaill.com"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Contact via Gmail"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a
            href="https://zalo.me/0908215145"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Contact via Zalo"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a
            href="tel:+84908215145"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Contact via Phone"
          >
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </button>
        </div>
      </div>
      <Container
        id="childrenSection"
        fluid
        className={`no-scrollbar overflow-y-scroll bg-white z-0 mb-24`}
      >
        {React.cloneElement(children, { isMenuOpen })}
      </Container>
      <Footer />
    </>
  );
};

const App = () => {
  // Chặn chuột phải
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Chặn phím F12 và các phím tắt khác
  document.onkeydown = function (e) {
    if (e.keyCode === 123) {
      // F12
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      // Ctrl+Shift+I
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      // Ctrl+Shift+J
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
      // Ctrl+U
      return false;
    }
  };
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Layout backgroundImage={homeBanner1}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/gioi-thieu"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Introduce />
            </Layout>
          }
        />
        <Route
          path="/lien-he"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/blog"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/huong-dan-trong-va-cham-soc-hoa-hong-trong-chau"
          exact
          element={
            <Layout backgroundImage={flowerBlogBanner}>
              <FlowerBlog />
            </Layout>
          }
        />
        <Route
          path="/tieu-canh-trong-nha"
          exact
          element={
            <Layout backgroundImage={miniatureBlogBanner}>
              <MiniatureBlog />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-biet-thu-nghi-duong"
          exact
          element={
            <Layout backgroundImage={hollidayVillaBlogBanner}>
              <HolidayVillaBlog />
            </Layout>
          }
        />
        <Route
          path="/den-san-vuon-dep"
          exact
          element={
            <Layout backgroundImage={gardenBlogBanner}>
              <GardenBlog />
            </Layout>
          }
        />
        <Route
          path="/top-nhung-quan-cafe-san-vuon-dep-o-sai-gon"
          exact
          element={
            <Layout backgroundImage={cafeBlogBanner}>
              <CafeBlog />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-biet-thu-nha-vuon"
          exact
          element={
            <Layout backgroundImage={gardenVillaBlogBanner}>
              <GardenVillaBlog />
            </Layout>
          }
        />
        <Route
          path="/dang-ky-bao-gia-thiet-ke-nha-vuon"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <GardenHousePrice />
            </Layout>
          }
        />
        <Route
          path="/dang-ky-bao-gia-thiet-ke-san-vuon"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <GardenPrice />
            </Layout>
          }
        />
        <Route
          path="/dang-ky-bao-gia-thiet-ke-farmstay"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <FarmStayPrice />
            </Layout>
          }
        />
        <Route
          path="/dang-ky-bao-gia-thiet-ke-khu-dich-vu"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <ServiceAreaPrice />
            </Layout>
          }
        />
        <Route
          path="/bao-gia"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Price />
            </Layout>
          }
        />
        <Route
          path="/dich-vu"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-kien-truc"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <ArchitectureService />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-canh-quan"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <LandscapeService />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-nha-vuon"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <GardenVillaService />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-san-vuon"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <GardenService />
            </Layout>
          }
        />
        <Route
          path="/thiet-ke-ho-ca-koi"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <KoiPondService />
            </Layout>
          }
        />
        <Route
          path="/du-an1"
          exact
          element={
            <Layout backgroundImage={project1Banner}>
              <Project1 />
            </Layout>
          }
        />
        <Route
          path="/du-an2"
          exact
          element={
            <Layout backgroundImage={project2Banner}>
              <Project2 />
            </Layout>
          }
        />
        <Route
          path="/du-an3"
          exact
          element={
            <Layout backgroundImage={project3Banner}>
              <Project3 />
            </Layout>
          }
        />
        <Route
          path="/du-an4"
          exact
          element={
            <Layout backgroundImage={project4Banner}>
              <Project4 />
            </Layout>
          }
        />
        <Route
          path="/du-an5"
          exact
          element={
            <Layout backgroundImage={project5Banner}>
              <Project5 />
            </Layout>
          }
        />
        <Route
          path="/du-an6"
          exact
          element={
            <Layout backgroundImage={project6Banner}>
              <Project6 />
            </Layout>
          }
        />
        <Route
          path="/du-an"
          exact
          element={
            <Layout backgroundImage={introduceBanner}>
              <Project />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
