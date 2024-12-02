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

const GardenVillaBlog = () => {
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
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);

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
              <h1 className="ml-2 pb-2">18/07/2024</h1>
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
              Thiết kế biệt thự nhà vườn là một trong những cách tốt nhất để tối
              ưu và nâng cấp không gian sống của bạn. Bạn muốn cải thiện khu
              vườn của mình và tìm kiếm ý tưởng cảnh quan độc đáo? Hãy khám phá
              các mẫu thiết kế nhà vườn từ SGL Vietnam trong bài viết dưới đây
              để tìm cho mình lựa chọn hoàn hảo nhất.
            </h1>
            <h1 ref={section1Ref} className="mt-10 text-5xl font-semibold">
              Khái quát về biệt thự nhà vườn
            </h1>
            <h1 className="mt-10">
              Mẫu thiết kế biệt thự nhà vườn xanh mát không chỉ mang lại không
              gian sống hài hòa, mà còn tạo điều kiện để các thành viên trong
              gia đình có thể tận hưởng sự yên bình của thiên nhiên. Việc lựa
              chọn cây xanh và bố trí tiểu cảnh sẽ được thực hiện một cách tỉ
              mỉ, phù hợp với sở thích và nhu cầu sử dụng của gia chủ, nhằm tăng
              sự kết nối giữa con người và môi trường xung quanh.
            </h1>
            <h1 className="mt-4">
              Nhà thiết kế phải xem xét thiết kế biệt thự sân vườn phù hợp với
              sở thích của nhà, vị trí đất, diện tích vườn mà có cách bố trí và
              thiết kế cho phù hợp.
            </h1>
            <h1 className="mt-4">
              Biệt thự thiết kế nhà vườn có một số điểm nổi bật so với những
              thiết kế khác như sau:
            </h1>
            <div className="mt-4 space-y-4">
              <li>
                Bạn có thể kết hợp thiết kế theo nhiều phong cách khác nhau phù
                hợp với những đặc trưng kiến trúc riêng do diện tích thiết kế
                thường khá lớn.
              </li>
              <li>
                Không gian sống hòa nhập với thiên nhiên với phần diện tích vườn
                thoáng đãng, rộng rãi.
              </li>
              <li>
                Thiết kế tạo cho biệt thự nét sang trọng, tiện nghi, xây dựng
                lối sống trong lành, bền vững.
              </li>
              <li>
                Đảm bảo sức khỏe: Ngăn chặn ô nhiễm môi trường, đặc biệt là ô
                nhiễm không khí.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenVillaBlog/mau-nha-vuon-kieu-nhat-ve-dem.jpeg")}
            />
            <h1 ref={section2Ref} className="mt-10 text-5xl font-semibold">
              Một số nguyên tắc trong thiết kế biệt thự có vườn
            </h1>
            <h1 className="mt-10">
              Để việc thiết kế biệt thự có sân vườn phù hợp và độc đáo nhất, gia
              chủ và chủ đầu tư nên chú ý một số nguyên tắc sau đây:
            </h1>
            <div className="mt-4 space-y-4">
              <li>
                Tối ưu khả năng đón nắng cho cả biệt thự và không gian sân vườn.
              </li>
              <li>
                Ứng dụng phong thủy vào thiết kế để mang đến may mắn cho gia
                chủ.
              </li>
              <li>
                Tìm hiểu cách bố trí cây cối, lối đi, tiểu cảnh… để luôn đảm bảo
                an toàn và tiện nghi.
              </li>
              <li>
                Một không gian nhà vườn lý tưởng cần được đảm bảo sự thông
                thoáng, đồng thời phải có các biện pháp hiệu quả để ngăn chặn
                muỗi và các loại côn trùng hay bò sát khác xâm nhập.
              </li>
              <li>
                Khu vườn và bên trong biệt thự luôn được chiếu sáng đầy đủ vào
                buổi tối để tạo nên không gian sống vừa an toàn vừa thẩm mỹ.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenVillaBlog/ho-ca-koi-san-vuon-biet-thu.jpg")}
            />
            <h1 ref={section3Ref} className="mt-10 text-5xl font-semibold">
              Làm sao để thiết kế biệt thự vườn hợp lý, chuyên nghiệp?
            </h1>
            <h1 className="mt-10">
              Hãy chú ý các yếu tố về cảnh quan, nội thất và kiến trúc để khu
              biệt thự sân vườn luôn toát lên vẻ chuyên nghiệp và sang trọng.
            </h1>
            <h1 ref={section4Ref} className="mt-4 text-3xl font-semibold">
              Chú ý thiết kế cảnh quan
            </h1>
            <h1 className="mt-4">
              Để không gian trước nhà luôn thoáng đãng, hãy bố trí cây xanh một
              cách khéo léo và hợp lý. Các cây cảnh có kích thước nhỏ nên được
              trồng gần nhà để không che khuất ánh sáng, cây lớn hơn có thể được
              đặt gần hồ cá để tạo điểm nhấn.
            </h1>
            <h1 className="mt-4">
              Khu vực sân vườn cần được thiết kế thông minh, tận dụng gió tự
              nhiên để làm mát không gian sống, phản ánh sự tinh tế trong quy
              hoạch của ngôi biệt thự.
            </h1>
            <h1 className="mt-4">
              Hồ cá không chỉ là yếu tố tăng cường phong thủy mà còn là điểm
              nhấn làm dịu đi không khí, đồng thời thu hút tài lộc; tuy nhiên,
              kích thước của hồ cần được cân nhắc để đảm bảo an toàn và hài hòa
              với tổng thể kiến trúc.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/thiet-ke-san-vuon-dep-me-ly-min.jpg")}
            />
            <h1 ref={section5Ref} className="mt-4 text-3xl font-semibold">
              Chú ý thiết kế nội thất
            </h1>
            <h1 className="mt-4">
              Khi thiết kế nội thất cho biệt thự sân vườn, gia chủ cần lưu ý:
            </h1>
            <div className="mt-4 space-y-4">
              {" "}
              <li>
                Phòng khách nên được đặt gần cửa chính và tránh các vị trí không
                thuận lợi theo phong thủy như lục sát, ngũ quỷ, họa hại, tuyệt
                mệnh… và đặc biệt tránh đặt ở vị trí cuối nhà.
              </li>
              <li>
                Phòng ngủ cần được bố trí xa các khu vực như bếp và nhà vệ sinh,
                đồng thời tránh trang trí khu vực này bằng cây cảnh, bể cá hay
                tranh phong cảnh có thể ảnh hưởng đến việc nghỉ ngơi.
              </li>
              <li>
                Đối với nhà bếp, cần bố trí sao cho hợp lý, tuân thủ được nguyên
                tắc tụ khí để giữ năng lượng tốt là điều cần thiết, giúp tạo ra
                một không gian phòng bếp vừa tiện ích vừa hài hòa.
              </li>
            </div>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/txj1568453465.jpg")}
            />
            <h1 ref={section6Ref} className="mt-4 text-3xl font-semibold">
              Chú ý kiến trúc sân vườn
            </h1>
            <h1 className="mt-4">
              Một biệt thự sân vườn đẹp không chỉ cần phải đầy đủ tiện nghi mà
              còn phải có sự hài hòa với thiên nhiên xung quanh. Nhà thầu xây
              dựng sẽ đảm bảo rằng mọi yêu cầu về thiết kế và chức năng của căn
              biệt thự đều được thực hiện một cách tinh tế khi khách hàng đưa ra
              yêu cầu, từ đó tạo nên một không gian sống độc đáo và thân thiện
              với môi trường.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/nha-vuon-dep.jpeg")}
            />
            <h1 ref={section7Ref} className="mt-4 text-5xl font-semibold">
              Mẫu thiết kế biệt thự nhà vườn cao cấp và độc đáo
            </h1>
            <h1 className="mt-4">
              Dưới đây là những mẫu thiết kế biệt thự nhà vườn sang trọng, đẳng
              cấp mà đội ngũ SGL thiết kế và thi công, mời bạn tham khảo:
            </h1>
            <h1 ref={section8Ref} className="mt-4 text-3xl font-semibold">
              Mẫu thiết kế mang thiên nhiên vào không gian sân vườn biệt thự
            </h1>
            <h1 className="mt-4">
              Ngày nay, xu hướng thiết kế không gian sống xanh, yên bình để phục
              hồi tinh thần sau những bộn bề của cuộc sống đô thị đang ngày càng
              được ưa chuộng. Điều này giải thích vì sao các thiết kế biệt thự
              nhà vườn lại trở nên phổ biến, khi mà nhiều người mong muốn tạo
              dựng một không gian sống hòa mình, gần gũi với thiên nhiên hơn.
            </h1>
            <h1 className="mt-4">
              Để thiết kế được một ngôi biệt thự sân vườn ưng ý, việc chú trọng
              đến kiến trúc tối giản, từ nội thất đến các chi tiết trang trí
              chính là chìa khóa để tạo nên sự cân đối, hài hòa giữa không gian
              bên trong và cảnh quan bên ngoài.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/1-thiet-ke-san-vuon-nha-biet-thu-dep-1.jpg")}
            />
            <h1 className="mt-4">
              Trong thiết kế kiến trúc biệt thự, việc lựa chọn màu sắc và vật
              liệu xây dựng chủ đạo đóng vai trò quan trọng. Đặc biệt, biệt thự
              vườn nên ưu tiên những gam màu trắng hoặc kem để tạo sự cân đối
              với màu xanh của thiên nhiên và nâng cao vẻ đẹp tinh tế của không
              gian sống. Lựa chọn vật liệu nội thất thân thiện với môi trường
              cũng nên được ưu tiên để gia tăng cảm giác hòa nhập với thế giới
              tự nhiên.
            </h1>
            <h1 className="mt-4">
              Ngoài ra, thiết kế biệt thự có vườn cần đảm bảo việc tận dụng tối
              đa ánh sáng tự nhiên, mang lại không gian sống trong lành và thư
              thái. Đồng thời nên chú trọng việc lựa chọn nội thất không gây cản
              trở ánh sáng, để mỗi khoảnh khắc tại gia đều tràn ngập sự thoải
              mái và gần gũi với thiên nhiên.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/biet-thu-nha-vuon-sang-trong-1536x865.jpg")}
            />
            <h1 ref={section9Ref} className="mt-4 text-3xl font-semibold">
              Mẫu thiết kế biệt thự nhà vườn cấu trúc cấp 4
            </h1>
            <h1 className="mt-4">
              Ngày nay, việc thiết kế biệt thự nhà vườn cấp 4 đang ngày càng
              được ưa chuộng, phản ánh sự hòa quyện tinh tế giữa phong cách
              truyền thống và tiện nghi hiện đại. Kiến trúc của những ngôi biệt
              thự này không chỉ thể hiện sự thoải mái, tiện ích mà còn chú trọng
              đến vẻ đẹp sang trọng mang tính thời đại.
            </h1>
            <h1 className="mt-4">
              Biệt thự với mái thái vững chắc và đường nét thiết kế đơn giản
              nhưng không kém phần độc đáo, thu hút mọi ánh nhìn. Sự kết hợp
              giữa các cột tròn chắc chắn và những chi tiết trang trí mềm mại
              trên gờ cửa và cột trụ tạo nên sự sang trọng, vững chãi. Màu trắng
              chủ đạo cùng với sự đối lập của màu đen và xám tạo nên một hiệu
              ứng nghệ thuật đầy cuốn hút cho toàn bộ công trình.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/mau-biet-thu-nha-vuon-cap-4-1536x865.jpg")}
            />
            <h1 ref={section10Ref} className="mt-4 text-3xl font-semibold">
              Mẫu kiến trúc nhà vườn 1 tầng rộng rãi, mát mẻ
            </h1>
            <h1 className="mt-4">
              Đối với biệt thự, ai cũng nghĩ rằng biệt thự phải hoành tráng,
              nhiều tầng thì mới sang trọng và độc đáo. Nhưng thực sự, biệt thự
              cao tầng chỉ nên thiết kế khi không gian hạn chế, chẳng hạn như
              trong các khu đô thị chẳng hạn. Biệt thự trên lô đất rộng nên bố
              trí 1 tầng tạo cảm giác hoàn hảo và rộng rãi cho không gian. Nội
              thất có thể được chia thành các khu vực riêng biệt, tạo ra nhiều
              không gian đáp ứng nhu cầu nhà ở riêng tư cho các thành viên.
            </h1>
            <h1 className="mt-4">
              Thông thường, những ý tưởng thiết kế biệt thự nhà vườn 1 tầng
              thường có diện tích sân vườn lớn để tạo sự trong lành, thoáng
              đãng, trang nhã và đầy đủ tiện nghi..
            </h1>
            <h1 className="mt-4">
              Một ưu điểm nữa của việc xây biệt thự chỉ 1 tầng là bạn tiết kiệm
              được chi phí xây dựng đáng kể. Nếu giảm được chi phí xây dựng, bạn
              có thể đầu tư thêm vào nội thất. Bạn nên chọn những món có liên
              quan nhau về thiết kế, màu sắc và tạo ra vẻ ngoài độc đáo theo sở
              thích của riêng mình.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/kien-truc-biet-thu-nha-vuon-1-tang-1536x865.jpg")}
            />
            <h1 ref={section11Ref} className="mt-4 text-3xl font-semibold">
              Mẫu biệt thự nhà vườn 2 tầng tiện nghi đầy đủ
            </h1>
            <h1 className="mt-4">
              Mẫu biệt thự sân vườn 2 tầng là mẫu được ưa chuộng nhất hiện nay
              đặc biệt là những căn biệt thự trung tâm phố có diện tích khá hạn
              chế so với nông thôn. Ý tưởng thiết kế biệt thự 2 tầng cũng xuất
              phát từ nhu cầu sinh hoạt của cư dân nhiều căn hộ chung cư, tầng
              trệt thường là phòng khách, bếp ăn, tầng 1 làm khu vui chơi giải
              trí, phòng đôi, tầng 2 là phòng đơn.
            </h1>
            <h1 className="mt-4">
              Nhìn chung, mẫu biệt thự này chủ yếu mang trong mình một tổng thể
              sang trọng và hiện đại. Kết hợp với cây xanh và bể bơi tạo không
              gian mát mẻ và thông thoáng cho ngôi nhà.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/Mau-nha-biet-thu-2-tang-don-gian-WEDO10.jpg")}
            />
            <h1 className="mt-4">
              Hiện nay rất nhiều người yêu thích mẫu biệt thự 2 tầng mái thái
              với kiến ​​trúc đơn giản, tường sơn màu trắng mang đến không gian
              biệt thự ấm cúng và sang trọng. Để ngôi nhà trở nên thu hút hơn,
              bạn có thể thiết kế chất liệu kính trong suốt cho toàn bộ hệ thống
              cửa để cây xanh và ánh sáng có thể tràn vào phòng.
            </h1>
            <h1 className="mt-4">
              Một chi tiết thiết kế trong mẫu biệt thự 2 tầng mà bạn nên chú ý
              đó là khu vực lan can ban công. Bởi một ban công đẹp sẽ khiến
              ngoại thất biệt thự trở nên hoàn toàn khác biệt và thanh thoát
              hơn.Nên chọn mẫu lan can có kiểu dáng thanh mảnh, chiều cao vừa
              phải và có màu sắc tươi mát tạo sự rộng rãi. Đây sẽ là nơi giúp
              bạn thư giãn sau ngày dài mệt mỏi.
            </h1>
            <h1 className="mt-4">
              Với gam màu trung tính chủ đạo và mái thái sẫm màu, ngôi biệt thự
              2 tầng của bạn sẽ khiến những ai nhìn thấy lần đầu tiên phải ngỡ
              ngàng bởi vẻ đẹp lạnh lùng, hoàn mỹ mà nó mang lại.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/biet-thu-nha-vuon-2-tang-tien-nghi-1536x865.jpg")}
            />
            <h1 ref={section12Ref} className="mt-4 text-3xl font-semibold">
              Mẫu biệt thự 3 tầng đẳng cấp và sang trọng
            </h1>
            <h1 className="mt-4">
              Những gia chủ có điều kiện kinh tế khá giả có thể tham khảo ý
              tưởng thiết kế biệt thự 3 tầng vì đây là mẫu biệt thự thể hiện
              được sự nguy nga, bề thế và sang trọng bật nhất. Ý tưởng kết hợp
              nhiều khối kiến ​​trúc khác nhau tạo ra một không gian hoàn hảo.
            </h1>
            <h1 className="mt-4">
              Các mẫu biệt thự 3 tầng chú trọng thiết kế khối, mảng kiến ​​trúc
              và đầu tư mặt tiền biệt thự. Tuy nhiên, kiến trúc không sử dụng
              hoa văn nhỏ, tinh xảo mà sử dụng các hình khối, nhẵn, phẳng để tạo
              vẻ đẹp sang trọng. Các khối kiến ​​trúc phải liên quan đến nhau về
              màu sắc, hình dáng và chất liệu.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/GardenVillaBlog/mau-biet-thu-nha-vuon-3-tang-dang-cap-1536x865.jpg")}
            />
            <h1 className="mt-4 text-3xl font-semibold">
              Biệt thự 3 tầng phổ biến:
            </h1>
            <div className="mt-4">
              <li>
                <b>Theo phong cách tân cổ điển:</b> Kiến trúc sử dụng nhiều cột,
                cửa kính có hình dáng độc đáo và khác biệt. Hệ thống cổng và
                tường rào với những họa tiết uốn lượn tinh tế mang đến nét cuốn
                hút riêng. Với hệ thống mái ngói sang trọng và quý phái tạo điểm
                nhấn làm nổi bật cho công trình kiến ​​trúc.{" "}
              </li>
              <li>
                <b>Theo phong cách cổ điển:</b> Thiết kế sử dụng nhiều phào chỉ,
                mái vòm, tay vịn, trụ trang trí, ban công, hệ thống lối đi…
                thường được bố trí theo kiểu trải dài. Từ tầng 2 đến tầng 3,
                sảnh tầng 1 được thiết kế nhô ra bên ngoài tạo vẻ đẹp quý phái,
                lộng lẫy.
              </li>
              <li>
                <b>Theo phong cách hiện đại:</b> Áp dụng những đường nét hình
                khối đơn giản, cùng với sự phối màu hài hòa, trang nhã như màu
                gỗ, màu kem, màu tường trắng làm cho căn biệt thự luôn thoáng
                đãng, sáng sủa và tràn đầy sức sống.
              </li>
            </div>
            <h1 className="mt-4">
              Ngoài ra, đối với thiết kế 3 tầng kết hợp sân cũng là lựa chọn của
              nhiều gia đình. Sự sang trọng hòa hợp với thiên nhiên trong thiết
              kế là lựa chọn tối ưu trong điều kiện ô nhiễm như hiện nay.
            </h1>
            <h1 ref={section13Ref} className="mt-4 text-5xl font-semibold">
              Đơn vị thiết kế sân vườn biệt thự uy tín, chất lượng
            </h1>
            <h1 className="mt-4">
              Chắc hẳn bạn cũng mong muốn có một căn biệt thự nhà vườn vô cùng
              sang trọng và xa hoa với nội thất hoàn hảo cho riêng mình phải
              không nào? Bạn nên tham khảo các đơn vị thiết kế uy tín và chất
              lượng.
            </h1>
            <h1 className="mt-4">
              Tutulela tự hào là đơn vị đi đầu trong lĩnh vực thiết kế sân vườn
              với biệt thự. Chúng tôi có đội ngũ thiết kế có trình độ chuyên môn
              cao. Đến với chúng tôi các bạn sẽ hoàn toàn hài lòng với:
            </h1>
            <div className="mt-4 space-y-4">
              <li>
                Ý tưởng thiết kế sáng tạo, độc đáo: Nguyên tắc thiết kế của
                chúng tôi đều tuân theo nhu cầu, sở thích của khách hàng. Nếu
                khách hàng không có ý tưởng cụ thể, SGL sẽ đề xuất các gợi ý nổi
                bật nhất để khách hàng có thể so sánh, đánh giá và lựa chọn.{" "}
              </li>
              <li>
                Thẩm mỹ cao: Về thiết kế, chúng tôi luôn đặt tính thẩm mỹ lên
                hàng đầu. SGL luôn không ngừng nỗ lực sáng tạo nên những kiệt
                tác công trình với mong muốn làm hài lòng tất cả khách hàng.{" "}
              </li>
              <li>
                Công năng vượt trội: Một ngôi biệt thự đẹp thôi chưa đủ mà nó
                phải có nhiều công năng sử dụng. Chúng tôi sẽ giúp biệt thự có
                được sự bố trí không gian khoa học và hiện đại nhất. Kết nối là
                các thiết kế khác nhau trong sân vườn một cách tốt nhất. Đội ngũ
                kiến ​​trúc sư sẽ phác thảo ý tưởng cơ bản về thẩm mỹ và không
                gian chức năng. Từ đó giúp khách hàng có cái nhìn tổng quan
                nhất, hạn chế sai sót trong quá trình thi công.
              </li>
            </div>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenVillaBlog/dich-vu-trong-co-huyen-cu-chi-gia-re.jpg")}
            />
            <h1 className="mt-4">
              Trên đây là toàn bộ thông tin về thiết kế biệt thự nhà vườn do SGL
              Vietnam tìm hiểu và tổng hợp lại. Hy vọng bạn sẽ có cho mình sự
              lựa chọn tốt nhất về thiết kế. Có bất kỳ thắc mắc gì hãy liên hệ
              với chúng tôi để được giải đáp nhanh nhất.
            </h1>
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
                Khái quát về biệt thự nhà vườn
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Một số nguyên tắc trong thiết kế biệt thự có vườn
              </li>
              <li
                onClick={() => scrollToSection(section3Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Làm sao để thiết kế biệt thự vườn hợp lý, chuyên nghiệp?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Chú ý thiết kế cảnh quan
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Chú ý thiết kế nội thất
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Chú ý kiến trúc sân vườn
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section7Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Mẫu thiết kế biệt thự nhà vườn cao cấp và độc đáo
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Mẫu thiết kế mang thiên nhiên vào không gian sân vườn biệt thự
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Mẫu thiết kế biệt thự nhà vườn cấu trúc cấp 4
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Mẫu kiến trúc nhà vườn 1 tầng rộng rãi, mát mẻ
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Mẫu biệt thự nhà vườn 2 tầng tiện nghi đầy đủ
                </li>
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="truncate cursor-pointer hover:underline pl-4"
                >
                  Mẫu biệt thự 3 tầng đẳng cấp và sang trọng
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section13Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đơn vị thiết kế sân vườn biệt thự uy tín, chất lượng
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
                to="/thiet-ke-biet-thu-nghi-duong"
                className="flex space-x-4 text-[#82858a]"
              >
                <Image
                  className="w-10 h-10 rounded mt-1"
                  src={require("../../assets/mau-thiet-ke-biet-thu-hien-dai-kieu-nghi-duong-405x228.jpg")}
                />
                <h1>
                  TOP 10 mẫu thiết kế biệt thự nghỉ dưỡng lộng lẫy, xa hoa
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

export default GardenVillaBlog;
