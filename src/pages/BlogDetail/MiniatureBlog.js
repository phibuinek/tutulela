import React, { useRef } from "react";
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

const MiniatureBlog = () => {
  // Giả sử đây là URL của bài viết bạn muốn chia sẻ
  const shareUrl = window.location.href;
  const title = "Check out this blog post!";
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

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
        <div className="col-span-3 lg:pl-48 md:pl-36 pl-4 text-lg mb-4">
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
              <h1 className="ml-2 pb-2">8:57 Sáng</h1>
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
          <div className="mt-10 md:w-[800px] text-justify">
            <h1>
              Ngày nay, việc tạo dựng tiểu cảnh trong nhà đã trở thành xu hướng
              được ưa chuộng, bởi nó không chỉ làm tăng tính thẩm mỹ nghệ thuật
              mà còn tạo nên không gian sống sinh động và sang trọng hơn. Trong
              bài viết dưới đây, Tutulela sẽ giới thiệu đến bạn đọc những mẫu
              tiểu cảnh trong nhà đẹp nhất, phản ánh sự tinh tế trong từng thiết
              kế, đáp ứng nhu cầu làm đẹp cho không gian sống của bạn.
            </h1>
            <h1 ref={section1Ref} className="mt-10 text-5xl font-semibold">
              Ưu điểm khi thiết kế tiểu cảnh trong nhà
            </h1>
            <h1 className="mt-10">
              Thiết kế tiểu cảnh trong nhà là sự phối hợp tinh tế giữa đồ trang
              trí và các yếu tố tự nhiên như cây xanh, hoa động vật… Chúng không
              chỉ làm đẹp không gian sống mà còn mang lại nguồn năng lượng tích
              cực, tạo điều kiện cho sự gắn kết và sự thư giãn cho tất cả các
              thành viên trong gia đình.
            </h1>
            <h1 className="font-bold mt-4">Thẩm mỹ – nghệ thuật</h1>
            <h1 className="mt-4">
              Tiểu cảnh trong nhà sẽ mang dáng vẻ khác nhau, lột tả được sở
              thích, tính cách hay gu thẩm mỹ và cách sống của gia chủ. Không
              những vậy, tiểu cảnh trong nhà còn giúp con người kết nối với
              thiên nhiên trong chính căn nhà của mình.
            </h1>
            <h1 className="font-bold mt-4">Điều hòa không khí</h1>
            <h1 className="mt-4">
              Tiểu cảnh thường được kết hợp với cây xanh, thác nước… điều này
              rất tốt cho việc thanh lọc và điều hòa không khí trong nhà. Tiểu
              cảnh được xem như một mảng xanh của thiên nhiên trong không gian
              sống, cũng có thể hấp thụ những chất độc hại, bức xạ điện từ giúp
              nâng cao chất lượng cuộc sống hơn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/uu-diem-cua-tieu-canh-trong-nha-802x452.jpg")}
            />
            <h1 className="font-bold mt-4">Không gian sống đẹp – xanh</h1>
            <h1 className="mt-4">
              Bên cạnh việc dùng những đồ nội thất để trang trí nhà cửa, bạn
              cũng có thể tạo một góc tiểu cảnh như tường cây, bể cá, thác nước
              hoặc hòn non bộ… Những yếu tố này có thể giúp tinh thần trở nên dễ
              chịu, phấn chấn hơn, giúp không gian sống đẹp và thư giãn hơn.
            </h1>
            <h1 className="font-bold mt-4">Phong thủy</h1>
            <h1 className="mt-4">
              Phong thủy là yếu tố không thể thiếu khi thiết kế tiểu cảnh trong
              nhà. Mỗi chủ đề của tiểu cảnh sẽ có ý nghĩa và chủ đề riêng, những
              điều này đều cần hài hòa và phù hợp với mệnh của gia chủ. Từ đó
              giúp thu hút vận may, tăng cường sức khỏe, tài lộc, điều hòa âm
              dương, gia đình hòa thuận và hạnh phúc.
            </h1>
            <h1 ref={section2Ref} className="mt-10 text-5xl font-semibold">
              Những loại tiểu cảnh trong nhà đẹp và độc đáo
            </h1>
            <h1 className="mt-10">
              Mỗi tiểu cảnh là một tác phẩm nghệ thuật, phản ánh phong cách và
              tinh thần của ngôi nhà, nơi sự kết hợp tinh tế giữa thiên nhiên và
              các yếu tố trang trí tạo nên một không gian sống động và hài hòa.
              Dưới đây là những mẫu tiểu cảnh trong nhà được ưa chuộng nhất hiện
              nay:
            </h1>
            <h1 ref={section3Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh khô
            </h1>
            <h1 className="mt-4">
              Thiết kế cảnh quan khô không cần đến nước nhưng vẫn có thể tạo nên
              một không gian sống động qua sự phối hợp của thực vật, đất, đá và
              sỏi. Bên cạnh đó cũng có thể kết hợp với một số phụ kiện hoặc đồ
              nội thất khác như bàn, ghế… làm nên vẻ đẹp hài hòa cho tiểu cảnh.
            </h1>
            <h1 className="mt-4">
              Thông thường, tiểu cảnh dạng này thường được đặt dưới cầu thang
              hoặc tại một góc khuất của hiên nhà, không chỉ giúp làm đẹp thêm
              cho phòng khách mà còn tận dụng được ánh sáng tự nhiên, mang lại
              cảm giác hài hòa và thoải mái cho không gian sinh hoạt chung.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-kho-802x452.jpg")}
            />
            <h1 ref={section4Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh ướt
            </h1>
            <h1 className="mt-4">
              Trong các thiết kế tiểu cảnh ướt, các yếu tố như hòn non bộ, thác
              nước, tường nước và bể cá là những thành phần chính không thể
              thiếu. Nước không chỉ là yếu tố thu hút tài lộc theo phong thủy mà
              còn giúp điều tiết luồng không khí trong nhà, mang lại sự mát mẻ
              và cân bằng độ ẩm cho không gian sống.
            </h1>
            <h1 className="mt-4">
              Đối với những ngôi nhà có khoảng trống dưới cầu thang, việc lắp
              đặt hồ cá mini, hòn non bộ hoặc hồ cá sinh thái cùng với tượng
              trang trí và đá sỏi sẽ tạo nên vẻ đẹp hài hòa, sinh động. Tuy
              nhiên cần đặc biệt lưu ý đến việc duy trì hệ thống nước luân
              chuyển để đảm bảo nước trong hồ luôn trong sạch và tránh sự xuất
              hiện của côn trùng.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-uot-802x452.jpg")}
            />
            <h1 ref={section5Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh tâm linh
            </h1>
            <h1 className="mt-4">
              Nhiều gia đình, do lòng mộ đạo hoặc sự đam mê với văn hóa tôn
              giáo, thường lựa chọn những mẫu tiểu cảnh tâm linh như một cầu nối
              giữa cuộc sống thường nhật và có cho mình không gian tĩnh tâm,
              thanh bình.
            </h1>
            <h1 className="mt-4">
              Những tiểu cảnh này thường được làm từ gỗ hoặc đá, mang vẻ đẹp
              giản dị, với tượng thờ ở vị trí trung tâm, bao quanh là thác nước
              và đá tự nhiên. Mẫu tiểu cảnh này thường được đặt ở những không
              gian yên tĩnh, trở thành nơi lý tưởng để con người tìm kiếm sự cân
              bằng và an yên trong tâm hồn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-thac-nuoc-tuong-phat.jpg")}
            />
            <h1 ref={section6Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh cây xanh
            </h1>
            <h1 className="mt-4">
              Không gian sống được tô điểm bởi vẻ đẹp của thiên nhiên với những
              bụi cây xanh mát, được bố trí khéo léo khắp nơi từ phòng khách đến
              ban công, tạo nên một bầu không khí trong lành và tràn đầy sức
              sống.
            </h1>
            <h1 className="mt-4">
              Mỗi góc nhỏ trong nhà đều có thể trở thành điểm nhấn ấn tượng với
              sự hiện diện của cây xanh, góp phần cải thiện chất lượng không khí
              và mang lại nguồn năng lượng tích cực cho cuộc sống hàng ngày.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-cay-xanh-802x452.jpg")}
            />
            <h1 ref={section7Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh kết hợp
            </h1>
            <h1 className="mt-4">
              Việc phối hợp các tiểu cảnh khác nhau trong nhà không chỉ làm tăng
              vẻ đẹp tự nhiên mà còn góp phần cải thiện sức khỏe và tâm trạng
              của mọi người trong gia đình. Chẳng hạn, tiểu cảnh khô kết hợp với
              tiểu cảnh nước hay tiểu cảnh tâm linh với cây xanh có thể tạo nên
              một không gian sống hài hòa, tăng năng lượng tích cực theo nguyên
              lý phong thủy.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-ket-hop-802x452.jpg")}
            />
            <h1 ref={section8Ref} className="font-bold mt-4 text-2xl">
              Tiểu cảnh giếng giời
            </h1>
            <h1 className="mt-4">
              Giếng trời, với thiết kế độc đáo, không chỉ là nơi cung cấp nguồn
              sáng tự nhiên mà còn là điểm nhấn cho không gian sống. Ánh sáng từ
              trên cao chiếu xuống sẽ tạo nên một bức tranh sống động, làm nổi
              bật hình ảnh cây cối, đá cuội, tạo không gian xanh mát và thoáng
              đãng. Các giếng trời còn được tận dụng để trồng thực vật, vừa tô
              điểm cho ngôi nhà, vừa mang lại cảm giác sống cực kỳ gần gũi với
              thiên nhiên.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/tieu-canh-gieng-troi-802x452.jpg")}
            />
            <h1 ref={section9Ref} className="mt-10 text-5xl font-semibold">
              Một số lưu ý cần biết khi thiết kế tiểu cảnh trong nhà
            </h1>
            <h1 className="mt-10">
              Khi quyết định thiết kế tiểu cảnh trong nhà, dù mẫu có đơn giản
              hay cầu kỳ bạn đều phải chú ý đến một số yếu tố như:
            </h1>
            <h1 className="font-bold mt-4 ">
              Kích cỡ tiểu cảnh so với không gian ngôi nhà
            </h1>
            <h1 className="mt-4">
              Kích cỡ của tiểu cảnh phải phù hợp với không gian ngôi nhà. Ngôi
              nhà hạn chế về diện tích nên đặt tiểu cảnh đơn giản, kích thước
              nhỏ để đảm bảo không gian thoáng đãng, không bị rối mắt.
            </h1>
            <h1 className="font-bold mt-4 ">Vị trí tiểu cảnh</h1>
            <h1 className="mt-4">
              Nên bố trí cảnh quan ở các vị trí và hướng phù hợp với mệnh của
              gia chủ. Vì theo phong thủy, nếu đặt sai vị trí hoặc phạm vào
              những vị trí xấu sẽ mang lại những trường năng lượng xấu ảnh hưởng
              đến đời sống, sự nghiệp của gia chủ.
            </h1>
            <h1 className="mt-4">
              Để tiết kiệm không gian, khi thiết kế cần tận dụng những khu vực
              như gầm cầu thang, giếng trời, điều này giúp những nơi tưởng chừng
              là góc khuất và ít hữu dụng trong kiến trúc lại trở nên thẩm mỹ và
              trông có điểm nhấn hơn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/MiniatureBlog/luu-y-khi-choi-tieu-canh-trong-nha-802x452.jpg")}
            />
            <h1 className="font-bold mt-4 ">Độ sâu của nước</h1>
            <h1 className="mt-4">
              Khi tạo tiểu cảnh nước với bể cá, việc tính toán chiều sâu của bể
              là quan trọng. Một bể có độ sâu vừa phải sẽ thuận tiện cho việc
              bảo dưỡng, như thay nước hay làm sạch, đồng thời đảm bảo an toàn
              cho những gia đình có trẻ nhỏ, ngăn chặn nguy cơ xảy ra tai nạn
              không đáng có.
            </h1>
            <h1 className="font-bold mt-4 ">
              Chăm sóc yếu tố thực vật, động vật của tiểu cảnh
            </h1>
            <h1 className="mt-4">
              Nên thường xuyên cắt tỉa cành lá héo úa, chăm sóc, bón phân để cây
              luôn đầy đủ dinh dưỡng để sinh trưởng tốt, đây cũng là yếu tố thu
              hút may mắn cho gia đình. Đối với tiểu cảnh có hệ sinh thái dưới
              nước, bạn cần khử độc trước khi thả cá vào, thường xuyên thay nước
              và chăm sóc cá.
            </h1>
            <h1 className="mt-4">
              Trên đây là toàn bộ kinh nghiệm thiết kế tiểu cảnh trong nhà mà
              Tutulela tích lũy được, mong rằng chúng có thể giúp ích cho bạn
              đọc. Nếu có nhu cầu cần tư vấn thiết kế cảnh quan, tiểu cảnh hòn
              non bộ trong nhà hay sân vườn, có thể trực tiếp liên hệ cho chúng
              tôi để được hỗ trợ tư vấn một cách nhanh chóng nhất.
            </h1>
            <h1 className="mt-4 font-bold">
              Ban biên tập: Tutulela House Plant Decor
            </h1>
            <h1 className="mt-4 font-bold italic">Ảnh: Tham khảo internet</h1>
          </div>
        </div>
        <div className="col-span-1">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Ưu điểm khi thiết kế tiểu cảnh trong nhà
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Những loại tiểu cảnh trong nhà đẹp và độc đáo
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh khô
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh ướt
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh tâm linh
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh cây xanh
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh kết hợp
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 cursor-pointer hover:underline"
                >
                  Tiểu cảnh giếng giời
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section9Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Một số bệnh hay gặp trên hoa hồng trồng chậu
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
                  src={require("../../assets/vuon-hoa-hong.jpg")}
                />
                <h1>
                  Hướng dẫn trồng và chăm sóc hoa hồng trong chậu đúng kỹ thuật
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

export default MiniatureBlog;
