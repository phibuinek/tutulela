import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
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
      backgroundImage: homeBanner1,
      h1: "KIẾN TẠO CUỘC SỐNG",
      h2: "Những không gian trở về, chữa lành luôn là điểm cuối cùng của mỗi sự lựa chọn, khi bạn đã vất vả ngần ấy thời gian. Bây giờ hãy để cho chúng tôi tạo cho bạn một không gian mà bạn mong đợi",
    },
    {
      backgroundImage: homeBanner2,
      h1: "THIẾT KẾ KIẾN TRÚC CẢNH QUAN",
      h2: "Chúng tôi tự hào là những người thiết kế kiến trúc cảnh quan và xây dựng các giải pháp sáng tạo để giúp mọi người thực hiện tầm nhìn của họ và biến chúng thành hiện thực. Thú vị đấy chứ?",
    },
    {
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
          className={`inset-0 lg:fixed lg:z-40 z-50 transition-colors h-[96px] duration-300 ${
            isHeaderBgBlack ? "bg-[#1a1a1a]" : "bg-transparent"
          }`}
        >
          <Header className="z-50" onMenuToggle={setIsMenuOpen} />
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
              <button
                className={`button-effect mt-10 ${
                  isMenuOpen ? "z-30" : "z-30"
                }`}
              >
                Xem Dự Án
              </button>
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
            href="mailto:example@gmail.com"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Contact via Gmail"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a
            href="https://zalo.me/1234567890"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            aria-label="Contact via Zalo"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a
            href="tel:+1234567890"
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
        className={`no-scrollbar overflow-y-scroll bg-white z-30 mb-24`}
      >
        {React.cloneElement(children, { isMenuOpen })}
      </Container>
      <Footer />
    </>
  );
};

const App = () => {
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
              <GardenBlog />
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
      </Routes>
    </>
  );
};

export default App;
