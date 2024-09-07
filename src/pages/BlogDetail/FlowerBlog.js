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

const FlowerBlog = () => {
  // Giả sử đây là URL của bài viết bạn muốn chia sẻ
  const shareUrl = window.location.href;
  const title = "Check out this blog post!";
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div className="lg:grid lg:grid-cols-4 lg:-space-x-10">
        <div className="lg:col-span-3 lg:pl-48 md:pl-36 pl-4 text-lg mb-4">
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
          <div className="mt-10 md:w-[800px] text-justify">
            <h1 className="text-justify">
              Hoa hồng là một trong những loài hoa thường được nhiều người mê
              hoa, cây cảnh tìm kiếm vì vẻ đẹp, mùi hương và sự phong phú về
              tổng thể. Nếu bạn đang nghĩ đến việc bắt đầu trồng hoa hồng trong
              các chậu của riêng mình hoặc tìm kiếm một vài mẹo về cách làm cho
              cây hoa hồng ra nhiều hoa hơn, thì bạn đã đến đúng chỗ.
            </h1>
            <h1 className="mt-4">
              Hoa hồng được đánh giá là một trong những loại hoa đẹp nhất trong
              sân vườn, trồng hoa hồng có vẻ khó khăn với người mới bắt đầu làm
              vườn, nhưng trên thực tế quá trình này rất dễ dàng. Bài viết dưới
              đây Tutulela sẽ hướng dẫn trồng và chăm sóc hoa hồng trong chậu
              đúng kỹ thuật, gần như bất kỳ ai cũng có thể trở thành người làm
              vườn hoa hồng thành công.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/gian-hoa-hong-pergola.jpg")}
            />
            <h1 ref={section1Ref} className="mt-4 text-4xl font-semibold">
              Hướng dẫn cách trồng hoa hồng trong chậu
            </h1>
            <h1 className="mt-10">
              <b>Bước 1:</b> Chuẩn bị chậu, đất, giống hoa hồng để trồng
              <h1 className="mt-4">
                Luôn chọn chậu sâu để phù hợp với sự phát triển của rễ và đảm
                bảo rằng nó có khả năng thoát nước tốt.
              </h1>
              <h1 className="mt-4">
                Sử dụng hỗn hợp đất chất lượng cao bằng cách kết hợp đất bầu với
                một ít phân trộn hoặc phân chuồng hoai mục để thêm giàu chất
                dinh dưỡng.
              </h1>
              <h1 className="mt-4">
                Để trồng được những chậu hoa hồng đẹp, hãy chọn các giống hoa
                hồng nhỏ hoặc hoa hồng ngoại. Chúng có sức sống mãnh liệt, cứng
                cáp và kháng bệnh tốt trong khi vẫn tạo ra nhiều bông hoa. Mặc
                dù có rất nhiều giống hoa hồng khác nhau, nhưng không phải tất
                cả đều sẽ phát triển tốt khi được trồng trong chậu.
              </h1>
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/cay-giong-hoa-hong.jpg")}
            />
            <h1 className="mt-4">
              <b>Bước 2:</b> Đặt hoa hồng của bạn vào trong chậu
              <h1 className="mt-4">
                Rải một lớp sỏi vào đáy chậu để cải thiện khả năng thoát nước,
                sau đó cho đất đã chuẩn bị ở bước 1 vào chậu cao 8/10 chiều cao
                của chậu, tiếp đó khoét một lỗ rộng và sâu đặt cây hoa hồng vào
                và lấp đất, dùng tay ấn nhẹ nhàng để cho đất cứng lại giúp cây
                đứng vững.
              </h1>
              <b className="mt-4 italic">
                Lưu ý: Khi đặt cây hoa hồng vào chậu hãy đảm bảo cấu trúc rễ
                không bị xáo trộn.
              </b>
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/cach-trong-hoa-hong.jpg")}
            />
            <h1 className="mt-4">
              <b>Bước 3:</b> Tưới nước cho cây hoa hồng của bạn
              <h1 className="mt-4">
                Cuối cùng, tưới nước kỹ cho cây hồng mới trồng của bạn, để hơi
                ẩm thấm vào đất và rễ. Tưới nước đầy đủ để rễ quen với đất mới.
              </h1>
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/tuoi-nuoc-cho-hoa-hong.jpg")}
            />
            <h1 ref={section2Ref} className="mt-4 text-4xl font-semibold">
              Hướng dẫn cách chăm sóc hoa hồng trong chậu
            </h1>
            <h1 className="mt-10">
              Khi bạn đã hoàn thành việc trồng hoa hồng của mình trong chậu,
              việc giữ cho chúng luôn khỏe mạnh với chế độ chăm sóc tốt là rất
              quan trọng. Hãy tiếp tục đọc các mẹo dưới đây về cách chăm sóc hoa
              hồng trong chậu.
            </h1>
            <h1 className="mt-4">
              <b>Vị trí đặt chậu:</b> Hoa hồng trong chậu phải được đặt ở vị trí
              nhận được tối thiểu 6 giờ nắng mỗi ngày.
            </h1>
            <h1 className="mt-4">
              <b>Tưới nước:</b> Chậu đất sét sẽ giúp giữ cho rễ hoa hồng mát mẻ
              trong mùa hè nóng nực, nhưng đất sét và đất nung có xu hướng hút
              ẩm từ đất và do đó cần tưới nhiều nước hơn so với chậu bằng nhựa.
              Để giúp tăng khả năng thoát nước, bạn có thể để chậu lên trên
              những viên gạch để nước thoát ra ngoài một cách tự do.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/cat-tia-hoa-hong.jpg")}
            />
            <h1 className="mt-4">
              <b>Nhu cầu chất dinh dưỡng:</b> Theo dõi phân trộn để đảm bảo rằng
              nó không bao giờ bị úng nước. Tưới nước thường xuyên trong suốt
              mùa hè, ít hơn vào mùa đông. Nếu không có nguồn cung cấp nước đầy
              đủ, phân trộn trong chậu có thể bị khô rất nhanh.
            </h1>
            <h1 className="mt-4">
              <b>Tỉa rễ, lá, cành:</b> Để giữ cho hoa hồng có kích thước tối ưu
              cho chậu của bạn, hãy cắt tỉa rễ, lá hoặc cành như cách bạn thường
              làm với những cây khác trong vườn. Loại bỏ những bông hoa héo, tỉa
              cành, cắt tỉa theo kích thước, hình dạng cũng giúp ngăn ngừa sâu
              bệnh.
            </h1>
            <h1 ref={section3Ref} className="mt-10 text-4xl font-semibold">
              Một số bệnh hay gặp trên hoa hồng trồng chậu
            </h1>
            <h1 className="mt-10">
              Như với tất cả các loại cây khác, hoa hồng có thể bị nhiễm sâu
              bệnh hoặc bị hư hại do bệnh. Tuy nhiên, bạn không cần phải quá lo
              lắng, chúng tôi sẽ giúp bạn. Cùng điểm qua một số bệnh phổ biến
              thường gặp trên hoa hồng.
            </h1>
            <h1 className="mt-4 font-bold">Bệnh đốm đen</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do mưa, tưới nước trên cao, tưới vào ban đêm,
              không khí lưu thông không đủ, quá đông đúc, quá nhiều bóng râm,
              nhiễm bẩn từ các tán lá đã rụng có nhiễm bệnh.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Xuất hiện dưới dạng các đốm đen được bao quanh
              bởi một quầng vàng, bệnh bắt đầu từ gốc cây và phát tán theo chiều
              hướng đi lên.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Loại bỏ tất cả các lá bị nhiễm bệnh và các bộ
              phận của cây khỏi cây và tốt nhất là loại bỏ khỏi mặt đất. Bôi
              thuốc diệt nấm đồng từ 7 đến 10 ngày một lần đối với những trường
              hợp bị nhiễm bệnh nặng.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/benh-dom-den-o-hoa-hong.jpg")}
            />
            <h1 className="mt-4 font-bold">Bệnh phấn trắng</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do mưa, tưới nước từ trên cao, sương mù và đất
              khô dẫn đến tình trạng phần trên thì ướt và dưới gốc cây thì khô.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Xuất hiện dưới dạng phấn trắng trên lá, chồi.
              Các lá bị nhiễm bệnh có thể bị méo mó, xoăn lại sau đó chuyển sang
              màu trắng xám.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Loại bỏ tất cả các bộ phận cây bị nhiễm bệnh
              khỏi cây và mặt đất và phun lưu huỳnh từ 7 đến 10 ngày một lần.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/benh-phan-trang-tren-hoa-hong.jpg")}
            />
            <h1 className="mt-4 font-bold">Bệnh chết khô</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do mưa quá nhiều, sương mù và độ ẩm cao gây
              ra.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Khi hoa và nụ hoa hồng trở thành một mớ hỗn độn
              gồm những cánh hoa nâu khô không thể mở ra.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Lưu thông không khí tốt là một biện pháp phòng
              ngừa quan trọng, vì vậy đừng trồng quá nhiều hoa hồng. Loại bỏ tất
              cả các bộ phận của cây bị nhiễm bệnh khỏi cây và mặt đất và không
              cho vào phân trộn. Tưới nước vào buổi sáng, không tưới vào buổi
              tối.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/benh-chet-kho-tren-hoa-hong.jpg")}
            />
            <h1 className="mt-4 font-bold">Bệnh sùi cành</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do một loại vi khuẩn sống trong đất
              Agrobacterium tumefaciens gây ra.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Xuất hiện các túi mật tròn trên thân hoặc rễ.
              Mật có màu xanh lục nhạt hoặc gần như trắng khi còn non. Khi chúng
              già đi, các khoang tối màu và trở thành gỗ, có kích thước từ những
              vết sưng nhỏ đến vết sưng lớn chiều ngang vài inch.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Loại bỏ các cây bị nhiễm bệnh ngay khi quan sát
              thấy có mật. Nếu có thể, hãy loại bỏ và loại bỏ đất khỏi khu vực
              có cây bị nhiễm bệnh. Khử trùng tất cả các dụng cụ cắt và tỉa đã
              được sử dụng gần miệng túi mật.
            </h1>
            <h1 className="mt-4 font-bold">Bệnh xoăn lá</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do các loại côn trùng như bù lạch và rệp dưa
              gây ra.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Các triệu chứng liên quan đến các loại côn trùng
              rất khác nhau. Thường thì xuất hiện những đường lượn sóng màu
              vàng, đốm vòng.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Không thể cứu các cây bị nhiễm virus. Chỉ mua
              những cây khỏe mạnh từ một đại lý bán cây có uy tín; đặc biệt
              tránh mua các cây có bất kỳ triệu chứng nhiễm virus nào.
            </h1>
            <h1 className="mt-4 font-bold">Bệnh gỉ sắt</h1>
            <h1 className="mt-4">
              <b>Nguyên nhân:</b> Do nấm gỉ sắt hay còn gọi là nấm ký sinh
              Phragmidium Tuberculatum gây ra.
            </h1>
            <h1 className="mt-4">
              <b>Biểu hiện:</b> Nó gây ra các đốm màu cam xuất hiện trên thân và
              lá. Các lá bị bệnh nặng của các giống cây trồng mẫn cảm có thể
              chuyển sang màu vàng hoặc nâu và rụng. Bệnh gỉ sắt hoa hồng tấn
              công tất cả các bộ phận của cây trừ rễ và cánh hoa.
            </h1>
            <h1 className="mt-4">
              <b>Biện pháp:</b> Cắt tỉa cây để giữ cho trung tâm cây thông
              thoáng, tưới nước cho cây trước buổi trưa và tránh làm ướt lá,
              loại bỏ và tiêu hủy các lá và cây bị bệnh. Sử dụng thuốc diệt nấm
              có chứa myclobutanil, mancozeb hoặc propiconazole.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/benh-gi-sat-tren-hoa-hong.jpg")}
            />
            <h1 ref={section4Ref} className="mt-10 text-4xl font-semibold">
              Những lưu ý khi trồng hoa hồng trong chậu tại nhà
            </h1>
            <h1 className="mt-4">
              Cùng điểm qua một số lưu ý quan trọng giúp bạn hoàn thiện kỹ thuật
              trồng hoa hồng trong chậu tại nhà của mình.
            </h1>
            <div className="mt-4 space-y-2">
              <li>
                Chọn chậu tùy thuộc vào kích thước của cây. Một cây hoa hồng nhỏ
                cần có chiều sâu tối thiểu là 10 inch đối với cây cao khoảng 18
                inch.
              </li>
              <li>
                Bón lót cho hoa hồng của bạn hàng năm vào mùa xuân bằng cách
                loại bỏ 5cm trên cùng của phân trộn và thay thế nó bằng một lớp
                mới.
              </li>
              <li>
                Đảm bảo rằng chậu có lỗ thoát nước. Nếu chậu không có sẵn chúng,
                cách khắc phục rất đơn giản là khoan một ít ở đáy để nước đi
                qua.
              </li>
              <li>
                Hoa hồng cần nhiều nước, tưới nước vào rễ chứ không phải tưới
                lên lá.Giữ đất bão hòa nhưng không bị ướt.
              </li>
              <li>
                Thời điểm tốt nhất để cắt tỉa là ngay trước khi cây chuẩn bị cho
                ra những bông hoa đầu tiên, điều này còn phụ thuộc vào khí hậu
                từng vùng khác nhau.
              </li>
              <li>
                Loại bỏ những lá già hoặc cành chết để dọn đường cho cây mới
                phát triển.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/FlowerBlog/chon-chau-cho-hoa-hong.jpg")}
            />
            <h1 className="mt-4">
              Hi vọng sau khi đọc xong bài viết “Hướng dẫn trồng và chăm sóc hoa
              hồng trong chậu đúng kỹ thuật” của Tutulela House Plant Decor bạn
              sẽ tự tay trồng được cho mình những chậu hoa hồng ưng ý nhất.
            </h1>
            <h1 className="mt-4 font-bold">
              Ban biên tập: Tutulela House Plant Decor
            </h1>
          </div>
        </div>
        <div className="lg:col-span-1 md:pr-24">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Hướng dẫn cách trồng hoa hồng trong chậu
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Hướng dẫn cách chăm sóc hoa hồng trong chậu
              </li>
              <li
                onClick={() => scrollToSection(section3Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Một số bệnh hay gặp trên hoa hồng trồng chậu
              </li>
              <li
                onClick={() => scrollToSection(section4Ref)}
                className="truncate cursor-pointer hover:underline"
              >
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

export default FlowerBlog;
