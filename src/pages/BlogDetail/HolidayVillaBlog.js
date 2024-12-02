import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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

const HolidayVillaBlog = () => {
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
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
        <div className="col-span-3 lg:pl-48 md:pl-36 pl-4 text-lg mb-4">
          <div className="flex flex-wrap text-sm text-[#959595]">
            <div className="flex">
              <Image
                className="w-5 h-5"
                src={require("../../assets/icon/calendar.png")}
              />
              <h1 className="ml-2 pb-2">01/08/2024</h1>
            </div>
            <div className="flex ml-10">
              <Image
                className="w-5 h-5"
                src={require("../../assets/icon/clock.png")}
              />
              <h1 className="ml-2 pb-2">8:00 Sáng</h1>
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
            <h1 className="mt-4">
              Thiết kế biệt thự nghỉ dưỡng đáp ứng không gian sống mở, thoáng
              mát và hòa mình vào thiên nhiên. Xã hội ngày càng phát triển kéo
              theo đó chất lượng cuộc sống của con người cũng được nâng cao,
              biệt thự nghỉ dưỡng giúp bạn và gia đình tận hưởng những giây phút
              an nhiên, thoải mái trong khoảng thời gian nghỉ ngơi, thư giãn.
              Trong bài viết sau đây, tutulela xin giới thiệu cho các bạn 10 mẫu
              thiết kế lộng lẫy và xa hoa nhất.
            </h1>
            <h1 ref={section1Ref} className="mt-10 text-5xl font-semibold">
              Đặc điểm thiết kế cho biệt thự nghỉ dưỡng hiện nay
            </h1>
            <h1 className="mt-4">
              Biệt thự nghỉ dưỡng mang đến cho bạn không gian sống trong lành
              kết hợp với nhiều tiện ích và giải trí chất lượng. Tất cả những
              điều này, giúp cải thiện tâm trạng và sức khỏe đồng thời giải tỏa
              mọi căng thẳng của cuộc sống tại gia. Có thể tóm tắt các đặc điểm
              của biệt thự nghỉ dưỡng như sau:
            </h1>
            <div className="mt-6 space-y-2">
              <li>
                Vị trí xây dựng: Biệt thự dùng để nghỉ dưỡng thường sẽ được đặt
                ở những nơi gần sông, hồ, biển, núi…
              </li>
              <li>
                Quy mô xây dựng: Diện tích của khu biệt thự không cần rộng quá
                mức chỉ cần đảm bảo được sự tiện nghi đầy đủ. Đồng thời, kiến
                trúc nghỉ dưỡng biệt thự cần độc đáo, sang trọng và có nhiều
                tiện ích nổi trội.
              </li>
              <li>
                Cảnh quan: Bao quanh biệt thự là không gian thẩm mỹ và thoải mái
                cho sinh hoạt. Môi trường trong lành của cảnh quan xanh sẽ giúp
                gia chủ điều hòa không khí, bảo vệ sức khỏe. Cùng với đó là sự
                sang trọng, đẳng cấp trong kiến trúc biệt thự hiện đại.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/kien-truc-dia-trung-hai--802x452.jpg")}
            />
            <h1 ref={section2Ref} className="mt-10 text-5xl font-semibold">
              Đặc trưng xu hướng thiết kế cho biệt thự nghỉ dưỡng đẹp
            </h1>
            <h1 className="mt-4">
              Cuộc sống hiện đại ngày càng bận rộn và tấp nập làm con người có
              thêm nhiều đòi hỏi con hơn về thư giãn, giải trí. Các biệt thự
              nghỉ dưỡng là thiết kế sang trọng nhưng không kém phần gần gũi,
              mang lại nhiều giây phút nghỉ ngơi hoàn hảo cho từng chủ sở hữu.
            </h1>
            <h1 className="mt-4">
              Nhu cầu của mỗi cá nhân về biệt thự để nghỉ dưỡng có chiều hướng
              tăng cao. Vì vậy, bản thiết kế kiến trúc luôn hoàn thiện mỗi ngày
              để có thể đáp ứng mọi yêu cầu của gia chủ. Một trong những đặc
              trưng nhất trong kiến trúc nghỉ dưỡng là:
            </h1>
            <h1 className="font-bold mt-4">Phong cách thiết kế</h1>
            <h1 className="mt-4">
              Trong lĩnh vực thiết kế kiến trúc, biệt thự và các công trình nghỉ
              dưỡng luôn được xây dựng dựa trên một phong cách đặc trưng, phản
              ánh được xu hướng hiện đại và sự tinh tế trong từng chi tiết kiến
              trúc. Các không gian nội thất trong khu biệt thự nghỉ dưỡng không
              đơn thuần là những căn phòng biệt lập mà là sự kết hợp hài hòa
              giữa các không gian như phong khách, bếp, sân vườn và khu vui
              chơi, tạo nên sự liên kết chặt chẽ. Gam màu chủ đạo trong thiết kế
              biệt thự nghỉ dưỡng thường hướng đến sự nhẹ nhàng và tinh tế như
              trắng, đen, xanh nhạt và xám, góp phần tạo nên một không gian sống
              mở, thoáng đãng và dễ chịu với con người.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/kien-truc-dia-trung-hai-4-802x452.jpg")}
            />
            <h1 className="font-bold mt-4">Sự tiện nghi, đầy đủ</h1>
            <h1 className="mt-4">
              Khi nhắc đến những khu biệt thự, nghỉ dưỡng cao cấp, tiện ích là
              một trong những yếu tố quan trọng hàng đầu. Các biệt thự nghỉ
              dưỡng hiện đại không chỉ đáp ứng nhu cầu cơ bản mà còn phải mang
              lại trải nghiệm thư giãn tối ưu. Điều này đòi hỏi mỗi chi tiết
              trong thiết kế và nội thất phải được chau chuốt kỹ lưỡng, từ việc
              lựa chọn vật liệu đến việc tích hợp các công nghệ thông minh, nhằm
              tạo nên không gian sống đẳng cấp và đầy đủ tiện nghi. Các khu biệt
              thự nghỉ dưỡng ngày càng chú trọng đến việc cung cấp các tiện ích
              giải trí đa dạng, từ sân vườn đến hồ bơi, để đảm bảo một cuộc sống
              thượng lưu hoàn hảo.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/nha-vuon-hai-tang-phong-cach-hien-dai-802x482.jpg")}
            />
            <h1 className="font-bold mt-4">
              Thân thiện với thiên nhiên, con người
            </h1>
            <h1 className="mt-4">
              Trong bối cảnh đô thị hối hả, nhu cầu tìm kiếm không gian yên
              bình, mộc mạc ngày càng cao, dẫn đến sự phát triển của cu hướng
              thiết kế biệt thự nghỉ dưỡng hòa mình vào thiên nhiên. Các biệt
              thự kiểu này thường tích hợp không gian mở, sân vườn, giếng trời
              để tạo nên sự liên kết chặt chẽ với môi trường xung quanh, trong
              khi nội thất được tô điểm bằng cây xanh và vật liệu tự nhiên, mang
              lại cảm giác thân thiện và thoải mái cho người sử dụng. Điều này
              không chỉ tôn vinh vẻ đẹp của thiên nhiên mà còn tạo ra một không
              gian sống thư giãn, là điểm đến lý tưởng để tái tạo năng lượng sau
              khoảng thời gian bận rộn của cuộc sống thường nhật.
            </h1>
            <h1 ref={section3Ref} className="mt-10 text-5xl font-semibold">
              Những lưu ý trong thiết kế biệt thự nghỉ dưỡng đẳng cấp
            </h1>
            <h1 className="mt-10">
              Một số lưu ý để có thể thiết kế một căn biệt thự dùng để nghỉ
              dưỡng đẳng cấp và sang trọng:
            </h1>
            <h1 className="font-bold mt-4">
              Thứ nhất, xác định được mục đích sử dụng
            </h1>
            <h1 className="mt-4">
              Khi chuẩn bị xây dựng, việc đầu tiên kiến trúc sư cần làm là xác
              định mục đích sử dụng biệt thự nghỉ dưỡng của chủ đầu tư. Căn cứ
              từ đó, kiến trúc sư sẽ tiến hành thiết kế nội, ngoại thất, bày
              trí, bố trí phòng… sao cho sự liên kết giữa các phòng là hợp lý
              nhất. Hiện nay, thiết kế nghỉ dưỡng thường có 2 mục đích sau đây:
            </h1>
            <div className="mt-4">
              <li>
                Kinh doanh: Khi sử dụng biệt thự để phục vụ cho hoạt động kinh
                doanh của mình, chủ đầu tư cần thiết kế nhiều phòng, không gian
                sinh hoạt rộng rãi… để có thể phục vụ cho nhiều khách ghé thăm
                khác nhau.
              </li>
              <li>
                Dùng để ở: Kiến trúc nghỉ dưỡng nên có số lượng phòng ở phù hợp
                với các thành viên trong gia đình. Đồng thời, trang trí nội,
                ngoại thất, bố trí cảnh quan ấn tượng để tạo sự khác biệt và độc
                đáo.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/mau-biet-thu-nghi-duong-01.jpg")}
            />
            <h1 className="font-bold mt-4">
              Thứ 2, phong cách thiết kế biệt thự để nghỉ dưỡng
            </h1>
            <h1 className="mt-4">
              Các biệt thự của resort được xây dựng theo nhiều phong cách khác
              nhau như hiện đại, tân cổ điển, đương đại, Địa Trung Hải… trong
              mỗi phong cách thiết kế, kiến trúc của biệt thự đều mang nét quyến
              rũ riêng tạo nên một khu thư giãn thoải mái. Thiết kế tuyệt đẹp
              kết hợp với cảnh quan mang đến những trải nghiệm tuyệt vời cho
              người dùng.
            </h1>
            <h1 className="font-bold mt-4">
              Thứ 3, tiện ích và cảnh quan của biệt thự
            </h1>
            <h1 className="mt-4">
              Hiện tại, mẫu thiết kế biệt thự nghỉ dưỡng đẹp đang được xây dựng
              tại khu vực có cảnh quan xanh mát, không khí trong lành. Vì vậy,
              biệt thự sẽ được bao bọc bởi nhiều cây xanh và hệ thống hồ bơi,
              tiểu cảnh. Kiến trúc của biệt thự được thiết kế theo lối mở nhằm
              tạo ra một không gian thư giãn hài hòa, gần gũi với thiên nhiên.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/nha-huong-nam.jpg")}
            />
            <h1 className="font-bold mt-4">Thứ 4, đơn vị thiết kế thi công</h1>
            <h1 className="mt-4">
              Muốn thiết kế biệt thự villa nghỉ dưỡng sang trọng, đẹp, tiện nghi
              và đẳng cấp đòi hỏi chủ đầu tư lựa chọn được đơn vị thiết kế có
              tay nghề và kinh nghiệm lâu năm cùng với gu thẩm mỹ cao. Thuê đơn
              vị thiết kế giúp bạn dễ dàng tính toán chính xác về chi phí về
              nguyên vật liệu, thi công trong từng giai đoạn khác nhau, từ đó
              giúp bạn tối ưu được các chi phí.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/cl428y1pg029301nr7h0xb5h3-diem-cam-trai-gan-bao-loc-nui-dai-binh-anh-tunghyper.full_.jpg")}
            />
            <h1 ref={section4Ref} className="mt-10 text-5xl font-semibold">
              10 mẫu thiết kế biệt thự nghỉ dưỡng đẹp, lộng lẫy nhất hiện nay
            </h1>
            <h1 className="mt-10">
              Hiện nay, xu hướng xây biệt thự nghỉ dưỡng cho thuê cùng với ở
              ngày một tăng cao. Mong muốn giúp chủ đầu tư tìm được mẫu Tutulela
              gửi đến bạn 10 mẫu thiết kế biệt thự dùng để nghỉ dưỡng lộng lẫy
              nhất.
            </h1>
            <h1 className="font-bold mt-4">
              Mẫu 1: Biệt thự có 2 tầng mái bằng đẳng cấp và sang trọng
            </h1>
            <h1 className="mt-4">
              Hiện nay nhiều gia chủ có xu hướng thiết kế biệt thự với mục đích
              kết hợp nghỉ dưỡng và kinh doanh. Xây nhà theo lối kiến trúc hiện
              đại, tối giản, nhẹ nhàng, nơi con người hướng về thiên nhiên cho
              phép gia chủ hoặc khách hàng thực sự tìm thấy một không gian yên
              bình, trong lành và thư thái, nuôi dưỡng tâm hồn. Đây cũng là một
              trong những cách hữu hiệu để lấy lại cân bằng cuộc sống và xóa tan
              mọi lo lắng, mệt mỏi, căng thẳng trong công việc và cuộc sống.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/hq720.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 2: Biệt thự nghỉ dưỡng có hồ bơi đẹp
            </h1>
            <h1 className="mt-4">
              Mẫu biệt thự resort nghỉ dưỡng kết hợp cho khách thuê mang tới sự
              khỏe khoắn, trẻ trung cho toàn bộ công trình xây dựng. Bằng việc
              sử dụng bê tông kiên cố tạo nên hệ thống mái bằng cứng cáp, vững
              chãi giúp toàn bộ mẫu biệt thự nghỉ dưỡng này trở nên khác lạ,
              đồng thời có thêm sự bền vững và chắc chắn. Mẫu biệt thự có bể bơi
              này sẽ là không gian lý tưởng để gia chủ và các vị khách nghỉ
              ngơi, thư giãn mỗi dịp cuối tuần.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-hien-dai-co-be-boi-san-thuong.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 3: Thiết kế biệt thự trẻ trung kết hợp cho thuê
            </h1>
            <h1 className="mt-4">
              Đồng nhất về hình dáng, mẫu biệt thự nghỉ dưỡng cho thuê này mang
              đến sự trẻ trung, khỏe khoắn cho toàn bộ công trình xây dựng. Bằng
              việc sử dụng bê tông cốt thép để tạo nên hệ thống mái bằng chắc
              chắn và kiên cố. Căn biệt thự có hồ bơi sẽ là nơi hoàn hảo để gia
              chủ và du khách nghỉ ngơi, thư giãn vào mỗi dịp cuối tuần.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-co-hoi-boi-tren-san-thuong-12-1.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 4: Biệt thự nghỉ dưỡng mang phong cách hiện đại
            </h1>
            <h1 className="mt-4">
              Nhìn tổng thể từ trên xuống có thể cảm nhận ngôi nhà mang phong
              cách hiện đại, vô cùng tự do và phóng khoáng. Toàn bộ chất liệu
              kính cao cấp giúp tạo không gian thoáng đãng, là sợi dây kết nối
              bền chặt giữa con người với cảnh quan thiên nhiên, tạo sự yên bình
              cho người ở.
            </h1>
            <h1 className="mt-4">
              Cho thuê biệt thự nghỉ dưỡng này gây ấn tượng với khách hàng bởi
              thiết kế độc đáo, sáng tạo và sang trọng. Mẫu biệt thự này được
              thiết kế theo phong cách đương đại với không gian thoáng đãng thu
              hút sự chú ý và tạo cảm giác thoải mái cho người chiêm ngưỡng. Sử
              dụng những khối nhà hiện đại với những khoảng trống, vật liệu mới
              giúp mang đến những thiết kế khoa học và sáng tạo.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-nghi-duong-1-tuan.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 5. Biệt thự nghỉ dưỡng mang hơi hướng Thái Lan
            </h1>
            <h1 className="mt-4">
              Mẫu biệt thự villa theo phong cách Thái Lan gây ấn tượng với nhiều
              người bởi sự bề thế, hoành tráng và sang trọng. Mẫu được thiết kế
              với lối kiến trúc có đường nét sắc cạnh đặc trưng cho phong cách
              biệt thự hiện đại. Đặc biệt mẫu biệt thự sử dụng gam màu trắng và
              gỗ vàng làm chủ đạo, cùng với đèn điện màu vàng vừa sáng sủa lại
              vừa bắt mắt và nổi bật, ấn tượng.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/1-Beachfront-home_1435649821.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 6: Biệt thự mang phong cách châu âu cổ kính
            </h1>
            <h1 className="mt-4">
              Biệt thự nghỉ dưỡng kiểu Thái được biết đến với sự uy nghi, bề thế
              và xa hoa. Mẫu biệt thự dùng để nghỉ dưỡng được thiết kế theo
              phong cách hiện đại đặc trưng của lối kiến trúc mái thái, đường
              nét sắc sảo. Đặc biệt, tường nhà chủ yếu là màu trắng, màu vàng gỗ
              và đèn điện màu vàng sáng bắt mắt gây ấn tượng mạnh. Hệ thống bể
              bơi hiện đại cùng ghế ngồi, giường gấp và các chi tiết khác giúp
              không gian nghỉ dưỡng trở nên tinh tế và thoải mái hơn.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-chau-au-15.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 7: Mẫu biệt thự nâng cao chất lượng cuộc sống
            </h1>
            <h1 className="mt-4">
              Mẫu nhà nghỉ cho thuê sử dụng gam màu đơn giản nhưng nổi bật và
              cửa kính lớn luôn tràn ngập ánh sáng. Cách phối màu toát lên sự
              tinh tế, sang trọng và gu thẩm mỹ, tạo nên không gian sống sang
              trọng cho gia chủ. Hệ thống mái bằng thiết kế hiện đại, các hình
              khối vuông vắn, khỏe khoắn, các đường nét, chi tiết đơn giản, được
              vát cạnh, uốn lượn mềm mại.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-mini-hien-dai-san-vuon-1.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 8: Mẫu biệt thự nghỉ dưỡng ấn tượng nhà vườn
            </h1>
            <h1 className="mt-4">
              Ấn tượng đầu tiên về biệt thự, nơi nghỉ dưỡng này là sự kết hợp
              màu sắc tươi sáng và nổi bật của nội, ngoại thất. Hơn nữa, mẫu
              biệt thự này còn gây ấn tượng với việc lựa chọn vật liệu hiện đại
              một cách tinh tế. Hệ thống cửa kính cường lực giúp không gian
              thiên nhiên gần gũi với con người hơn, tạo cảm giác thoải mái, dễ
              chịu.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/biet-thu-vuon-thoang-mat-thich-hop-nghi-duong-vao-nhung-ngay-oi-buc-mot-biet-thu-nha-vuon-dep-thuong-co-thiet-ke-tinh-te-va-hai-hoa-giua-kien-truc-va-thien-nhien-651e2b50c9649b0ef5f6.webp")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 9: Mang thiên nhiên vào trong thiết kế biệt thự nghỉ dưỡng
            </h1>
            <h1 className="mt-4">
              Một mẫu biệt thự kết nối với thiên nhiên chính là điều mà gia chủ
              và khách hàng cần để có thể thư giãn và thoải mái hơn. Mẫu nhà tận
              dụng triệt để chất liệu kính trong suốt, chắc chắn tạo cảm giác
              gần gũi với không gian thiên nhiên.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/mau-sieu-biet-thu-nghi-duong-440m2-tren-doi-dep-toan-dien-1.jpg")}
            />
            <h1 className="font-bold mt-4">
              Mẫu 10: Biệt thự nghỉ dưỡng đơn giản nhưng tinh tế
            </h1>
            <h1 className="mt-4">
              Biệt thự nghỉ dưỡng được thiết kế với những đường nét sang trọng
              và không gian nghỉ dưỡng rộng lớn, mang đến cảm giác nghỉ dưỡng
              hoàn hảo. Mô hình nhà nghỉ cho thuê được tạo nên từ những khối
              hình chữ nhật chắc chắn, cứng cáp nhưng không quá nặng nề. Xu
              hướng thiết kế biệt thự nghỉ dưỡng đẹp với bố cục kiến trúc và
              phối cảnh không gian trở nên hấp dẫn. Cảnh quan thiên nhiên trong
              lành hòa quyện với không gian sống tạo cảm giác thư thái, dễ chịu.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/HollidayVillaBlog/mau-nha-dep-vagues-villa-1100m2-07-decox-design.jpg")}
            />
            <div className="mt-4">
              Tutulela tự hào là một trong những nhà thiết kế và xây dựng biệt
              thự uy tín nhất cả nước. Số lượng công trình hoàn thành đã trở
              thành hình mẫu cho kiến trúc khu dân cư hiện nay. Đội ngũ kiến
              trúc sư của chúng tôi luôn đứng về phía khách hàng, mang đến giải
              pháp hoàn hảo để tạo nên chất lượng công trình. Đặt niềm tin ở
              chúng tôi, hành trình sở hữu một ngôi nhà biệt thự nghỉ dưỡng sang
              trọng không còn xa.
            </div>
            <div className="mt-4">
              Trên đây là 10+ mẫu thiết kế biệt thự nghỉ dưỡng mà Tutulela muốn
              chia sẻ đến bạn đọc. Hy vọng bài viết này mang đến những thông tin
              hữu ích giúp quý khách hàng có ý tưởng thiết kế hoàn hảo cho công
              trình sắp tới của bản thân mình. Quý khách hàng vui lòng liên hệ
              trực tiếp với chúng tôi khi có thắc mắc để được tư vấn tốt nhất.
            </div>
            <h1 className="mt-4 font-bold">
              Ban biên tập: Tutulela House Plant Decor
            </h1>
            <h1 className="mt-4 font-bold italic">Ảnh: Tham khảo internet</h1>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đặc điểm thiết kế cho biệt thự nghỉ dưỡng hiện nay
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đặc trưng xu hướng thiết kế cho biệt thự nghỉ dưỡng đẹp
              </li>
              <li
                onClick={() => scrollToSection(section3Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Những lưu ý trong thiết kế biệt thự nghỉ dưỡng đẳng cấp
              </li>
              <li
                onClick={() => scrollToSection(section4Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                10 mẫu thiết kế biệt thự nghỉ dưỡng đẹp, lộng lẫy nhất hiện nay
              </li>
            </div>
          </div>
          <div className="pb-4 border border-[#f4f4f4] w-[350px] md:mt-24 mt-10">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              BÀI VIẾT MỚI
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <Link
                to="/huong-dan-trong-va-cham-soc-hoa-hong-trong-chau"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/vuon-hoa-hong.jpg")}
                />
                <h1>
                  Hướng dẫn trồng và chăm sóc hoa hồng trong chậu đúng kỹ thuật
                </h1>
              </Link>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <Link
                to="/tieu-canh-trong-nha"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/tieu-canh-trong-nha-avt-405x228.jpg")}
                />
                <h1>
                  #6 thiết kế tiểu cảnh trong nhà đẹp được ưa chuộng nhất 2024
                </h1>
              </Link>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <Link
                to="/den-san-vuon-dep"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/den-san-vuon-dep-avt-405x228.jpg")}
                />
                <h1>Top mẫu đèn sân vườn đẹp, được ưa chuộng nhất 2024</h1>
              </Link>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <Link
                to="/top-nhung-quan-cafe-san-vuon-dep-o-sai-gon"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/ca-phe-dep-nhat-405x228.jpg")}
                />
                <h1>Khám phá top những quán cafe sân vườn đẹp tại Sài Gòn</h1>
              </Link>
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <Link
                to="/thiet-ke-biet-thu-nha-vuon"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/thiet-ke-biet-thu-nha-vuon-avt-405x228.jpg")}
                />
                <h1>
                  Mẫu thiết kế biệt thự nhà vườn sang trọng & lưu ý cần biết
                </h1>
              </Link>
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
      </div>
    </div>
  );
};

export default HolidayVillaBlog;
