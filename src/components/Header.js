import React, { useState, useEffect, useRef } from "react";
import { Menu, Dropdown } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onMenuToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [hoverItem, setHoverItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onMenuToggle(!isOpen); // Gọi hàm callback để thông báo trạng thái
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const arrowStyle = (active, hover) => ({
    position: "relative",
    display: "inline-block",
    paddingBottom: "0px",
    color: active || hover ? "#000" : "#000",
  });

  const arrowAfterStyle = (active, hover) => ({
    content: '""',
    position: "absolute",
    bottom: -32,
    left: "50%",
    transform: "translateX(-50%) rotate(180deg)",
    width: "0",
    height: "0",
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderTop: `7px solid ${active || hover ? "white" : "transparent"}`,
    transition: "border-top 0.3s ease",
  });
  const arrowAfterStyle1 = (active, hover) => ({
    content: '""',
    position: "absolute",
    bottom: -32,
    left: "510px",
    transform: "translateX(-50%) rotate(180deg)",
    width: "0",
    height: "0",
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderTop: `7px solid ${active || hover ? "white" : "transparent"}`,
    transition: "border-top 0.3s ease",
  });
  const arrowAfterStyle2 = (active, hover) => ({
    content: '""',
    position: "absolute",
    bottom: -32,
    left: "390px",
    transform: "translateX(-50%) rotate(180deg)",
    width: "0",
    height: "0",
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderTop: `7px solid ${active || hover ? "white" : "transparent"}`,
    transition: "border-top 0.3s ease",
  });
  const menu = (
    <Menu
      className="custom-dropdown-menu"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#4e4e4e",
        marginTop: "30px",
      }}
    >
      <Menu.Item key="1">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base mt-2"
          to="/dang-ky-bao-gia-thiet-ke-nha-vuon"
          onMouseEnter={() => setHoverItem("/bao-gia")}
          style={{
            color: "#989898",
          }}
        >
          Báo giá thiết kế nhà vườn
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base"
          to="/dang-ky-bao-gia-thiet-ke-san-vuon"
          onMouseEnter={() => setHoverItem("/bao-gia")}
          style={{
            color: "#989898",
          }}
        >
          Báo giá thiết kế sân vườn
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base"
          to="/dang-ky-bao-gia-thiet-ke-farmstay"
          onMouseEnter={() => setHoverItem("/bao-gia")}
          style={{
            color: "#989898",
          }}
        >
          Báo giá thiết kế farmstay
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base mb-2"
          to="/dang-ky-bao-gia-thiet-ke-khu-dich-vu"
          onMouseEnter={() => setHoverItem("/bao-gia")}
          style={{
            color: "#989898",
          }}
        >
          Báo giá thiết kế khu dịch vụ
        </Link>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu
      className="custom-dropdown-menu"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#4e4e4e",
        marginTop: "30px",
      }}
    >
      <Menu.Item key="1">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base mt-2"
          to="/garden-house"
          style={{
            color: "#989898",
          }}
        >
          Thiết Kế Và Thi Công Kiến Trúc
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base"
          to="/garden-design"
          style={{
            color: "#989898",
          }}
        >
          Thiết Kế Và Thi Công Cảnh Quan
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base"
          to="/farmstay"
          style={{
            color: "#989898",
          }}
        >
          Thiết Kế Và Thi Công Nhà Vườn
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base mb-2"
          to="/service-area"
          style={{
            color: "#989898",
          }}
        >
          Thiết Kế Và Thi Công Sân Vườn
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link
          className="block text-gray-900 px-8 py-2 tracking-wider text-base mb-2"
          to="/service-area"
          style={{
            color: "#989898",
          }}
        >
          Thiết Kế Và Thi Công Hồ Cá Koi
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`bg-transparent shadow-md transition-colors duration-300 lg:border-b-[1px] border-gray-500 lg:fixed w-full z-50`}
    >
      <div className="max-w-7xl lg:py-4 px-4 py-4 lg:pl-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex mt-8 md:mt-0">
            <a href="/" className="text-xl font-bold text-white">
              <Image
                src={require("../assets/logo/337898504_599323568770551_5777209997869181828_n.jpg")}
                alt="Logo"
                className="h-24 w-24"
              />
            </a>
            <h1 className="text-base font-medium ml-2 mt-2 text-white">
              <div className="text-xl">TUTULELA</div> HOUSE PLANTS <br /> DECOR
            </h1>
          </div>
          <div className="hidden md:flex flex-1 justify-center text-white md:ml-24 mb-2">
            <nav className="space-x-4 relative text-white">
              <Link
                to="/"
                className="text-white  px-3 py-2 rounded-md text-md font-normal"
                style={arrowStyle(activeItem === "/" || hoverItem === "/")}
                onMouseEnter={() => setHoverItem("/")}
                onMouseLeave={() => setHoverItem(null)}
              >
                <h1 className="text-white">TRANG CHỦ</h1>
                <span
                  style={arrowAfterStyle(
                    activeItem === "/" || hoverItem === "/"
                  )}
                />
              </Link>
              <Link
                to="/gioi-thieu"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-md font-normal"
                style={arrowStyle(
                  activeItem === "/gioi-thieu" || hoverItem === "/gioi-thieu"
                )}
                onMouseEnter={() => setHoverItem("/gioi-thieu")}
                onMouseLeave={() => setHoverItem(null)}
              >
                <h1 className="text-white">GIỚI THIỆU</h1>
                <span
                  style={arrowAfterStyle(
                    activeItem === "/gioi-thieu" || hoverItem === "/gioi-thieu"
                  )}
                />
              </Link>
              <Link
                to="/service"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-md font-normal"
                style={arrowStyle(
                  activeItem === "/service" || hoverItem === "/service"
                )}
                onMouseEnter={() => setHoverItem("/service")}
                onMouseLeave={() => setHoverItem(null)}
              >
                <h1 className="text-white">DỰ ÁN</h1>

                <span
                  style={arrowAfterStyle(
                    activeItem === "/service" || hoverItem === "/service"
                  )}
                />
              </Link>
              <Dropdown
                overlay={menu1}
                trigger={["hover"]}
                placement="bottomLeft"
              >
                <Link
                  to="/newW"
                  className="text-white px-3 py-2 rounded-md text-md font-normal"
                  onMouseEnter={() => setHoverItem("/newW")}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  DỊCH VỤ
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                  <span
                    style={arrowAfterStyle2(
                      activeItem === "/newW" || hoverItem === "/newW"
                    )}
                  />
                </Link>
              </Dropdown>
              <Dropdown
                overlay={menu}
                trigger={["hover"]}
                placement="bottomLeft"
              >
                <Link
                  to="/bao-gia"
                  className="text-white px-3 py-2 rounded-md text-md font-normal"
                  onMouseEnter={() => setHoverItem("/bao-gia")}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  BÁO GIÁ
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                  <span
                    style={arrowAfterStyle1(
                      activeItem === "/bao-gia" || hoverItem === "/bao-gia"
                    )}
                  />
                </Link>
              </Dropdown>
              <Link
                to="/blog"
                className="text-white px-3 py-2 rounded-md text-md font-normal"
                style={arrowStyle(
                  activeItem === "/blog" || hoverItem === "/blog"
                )}
                onMouseEnter={() => setHoverItem("/blog")}
                onMouseLeave={() => setHoverItem(null)}
              >
                <h1 className="text-white">BLOG</h1>
                <span
                  style={arrowAfterStyle(
                    activeItem === "/blog" || hoverItem === "/blog"
                  )}
                />
              </Link>
              <Link
                to="/lien-he"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-md font-normal"
                style={arrowStyle(
                  activeItem === "/lien-he" || hoverItem === "/lien-he"
                )}
                onMouseEnter={() => setHoverItem("/lien-he")}
                onMouseLeave={() => setHoverItem(null)}
              >
                <h1 className="text-white">LIÊN HỆ</h1>
                <span
                  style={arrowAfterStyle(
                    activeItem === "/lien-he" || hoverItem === "/lien-he"
                  )}
                />
              </Link>
            </nav>
          </div>
          <div className="md:hidden z-50">
            <button
              // onClick={() => setIsOpen(!isOpen)}
              onClick={toggleMenu}
              className="text-white hover:text-black focus:outline-none focus:text-black"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-1000 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 w-1/2 bg-[#2a2a2a] z-50 h-screen  transform transition-transform ease-in-out duration-1000 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Nút đóng */}
            <button
              className="absolute top-0 left-4 text-white text-4xl font-bold"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              →
            </button>

            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                onClick={toggleMenu}
                to="/"
                className="text-white border-[#3a3a3a] pb-3 border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium pt-16"
              >
                TRANG CHỦ
              </Link>
              <Link
                onClick={toggleMenu}
                to="/gioi-thieu"
                className="text-white border-[#3a3a3a] pb-3 border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
              >
                GIỚI THIỆU
              </Link>
              <Link
                onClick={toggleMenu}
                to="/services"
                className="text-white border-[#3a3a3a] pb-3 border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
              >
                DỰ ÁN
              </Link>
              <div className="text-white border-[#3a3a3a] pb-3 border-b-[2px] px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Link
                  onClick={toggleMenu}
                  to="/your-link" // Thay "/your-link" bằng URL bạn muốn điều hướng đến
                  className="flex-grow"
                >
                  DỊCH VỤ
                </Link>
                {isDropdownOpen ? (
                  <ChevronUpIcon
                    onClick={toggleDropdown}
                    className="ml-2 mt-1 h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDownIcon
                    onClick={toggleDropdown}
                    className="ml-2 mt-1 h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
              {isDropdownOpen && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-2">
                  <Link
                    onClick={toggleMenu}
                    to="/service1"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Thiết Kế Và Thi Công Kiến Trúc
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/service2"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Thiết Kế Và Thi Công Cảnh Quan
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/service3"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Thiết Kế Và Thi Công Nhà Vườn
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/service3"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Thiết Kế Và Thi Công Sân Vườn
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/service3"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Thiết Kế Và Thi Công Hồ Cá Koi
                  </Link>
                </div>
              )}
              <div className="text-white border-[#3a3a3a] pb-3 border-b-[2px] px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Link onClick={toggleMenu} to="/bao-gia" className="flex-grow">
                  BÁO GIÁ
                </Link>
                {isDropdownOpen1 ? (
                  <ChevronUpIcon
                    onClick={toggleDropdown1}
                    className="ml-2 mt-1 h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDownIcon
                    onClick={toggleDropdown1}
                    className="ml-2 mt-1 h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
              {isDropdownOpen1 && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-2">
                  <Link
                    onClick={toggleMenu}
                    to="/dang-ky-bao-gia-thiet-ke-nha-vuon"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Báo giá thiết kế nhà vườn
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/dang-ky-bao-gia-thiet-ke-san-vuon"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Báo giá thiết kế sân vườn
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="//dang-ky-bao-gia-thiet-ke-farmstay"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Báo giá thiết kế farmstay
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/dang-ky-bao-gia-thiet-ke-khu-dich-vu"
                    className="text-white border-[#3a3a3a] border-b-[2px] block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Báo giá thiết kế khu dịch vụ
                  </Link>
                </div>
              )}
              <Link
                onClick={toggleMenu}
                to="/blog"
                className="text-white border-[#3a3a3a] pb-3 border-b-[2px] px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                BLOG
              </Link>
              <Link
                onClick={toggleMenu}
                to="/lien-he"
                className="text-white border-[#3a3a3a] pb-3 border-b-[2px] px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                LIÊN HỆ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
