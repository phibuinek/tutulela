import React from "react";
import { Image } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const GardenVillaBlog = () => {
  // Giả sử đây là URL của bài viết bạn muốn chia sẻ
  const shareUrl = window.location.href;
  const title = "Check out this blog post!";

  return (
    <div className="mt-10">
      <div className="lg:grid lg:grid-cols-4">
        <div className="lg:col-span-3 lg:pl-36 md:pl-24 pl-4">
          <div className="flex flex-wrap text-sm text-[#959595]">
            <div className="flex">
              <Image
                className="w-5 h-5"
                src={require("../../assets/icon/calendar.png")}
              />
              <h1 className="ml-2 pb-2">03/08/2024</h1>
            </div>
            <div className="flex ml-10">
              <Image
                className="w-5 h-5"
                src={require("../../assets/icon/clock.png")}
              />
              <h1 className="ml-2 pb-2">9:51 Sáng</h1>
            </div>
            <div className="flex ml-10">
              <Image
                className="w-5 h-5"
                src={require("../../assets/icon/comment.png")}
              />
              <h1 className="ml-2 pb-2">No Comments</h1>
            </div>
            <div className="flex ml-10 space-x-2">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={20} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={20} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={20} round />
              </LinkedinShareButton>
              <PinterestShareButton
                url={shareUrl}
                media={`${shareUrl}/image.jpg`}
              >
                <PinterestIcon size={20} round />
              </PinterestShareButton>
              <RedditShareButton url={shareUrl} title={title}>
                <RedditIcon size={20} round />
              </RedditShareButton>
              <EmailShareButton
                url={shareUrl}
                subject={title}
                body="Check out this blog!"
              >
                <EmailIcon size={20} round />
              </EmailShareButton>
            </div>
          </div>
          {/* Noi dung cua blog */}
          <div></div>
        </div>
        <div className="lg:col-span-1 md:pr-10">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li className="truncate">
                Hướng dẫn cách trồng hoa hồng trong chậu
              </li>
              <li className="truncate">
                Hướng dẫn cách chăm sóc hoa hồng trong chậu
              </li>
              <li className="truncate">
                Một số bệnh hay gặp trên hoa hồng trồng chậu
              </li>
              <li className="truncate">
                Những lưu ý khi trồng hoa hồng trong chậu tại nhà
              </li>
            </div>
          </div>
          <div className="pb-4 border border-[#f4f4f4] w-[350px] md:mt-24 mt-10">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              BÀI VIẾT MỚI
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <div className="flex space-x-4 text-[#82858a]">
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/tieu-canh-trong-nha-avt-405x228.jpg")}
                />
                <h1>
                  #6 thiết kế tiểu cảnh trong nhà đẹp được ưa chuộng nhất 2024
                </h1>
              </div>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <div className="flex space-x-4 text-[#82858a]">
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/mau-thiet-ke-biet-thu-hien-dai-kieu-nghi-duong-405x228.jpg")}
                />
                <h1>
                  TOP 10 mẫu thiết kế biệt thự nghỉ dưỡng lộng lẫy, xa hoa
                </h1>
              </div>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <div className="flex space-x-4 text-[#82858a]">
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/den-san-vuon-dep-avt-405x228.jpg")}
                />
                <h1>Top mẫu đèn sân vườn đẹp, được ưa chuộng nhất 2024</h1>
              </div>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <div className="flex space-x-4 text-[#82858a]">
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/ca-phe-dep-nhat-405x228.jpg")}
                />
                <h1>Khám phá top những quán cafe sân vườn đẹp tại Sài Gòn</h1>
              </div>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <div className="flex space-x-4 text-[#82858a]">
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/thiet-ke-biet-thu-nha-vuon-avt-405x228.jpg")}
                />
                <h1>
                  Mẫu thiết kế biệt thự nhà vườn sang trọng & lưu ý cần biết
                </h1>
              </div>
            </div>
          </div>
          <div className=" border border-[#f4f4f4] w-[350px] md:mt-24 mt-10">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              DỊCH VỤ
            </div>
            <div className="">
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ KIẾN TRÚC
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ NHÀ VƯỜN
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ & THI CÔNG CẢNH QUAN
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ & THI CÔNG SÂN VƯỜN
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ & THI CÔNG HỒ CÁ KOI
              </div>
              <div className="p-4 hover:bg-black hover:text-white cursor-pointer duration-300">
                THIẾT KẾ & THI CÔNG TƯỜNG CÂY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenVillaBlog;
