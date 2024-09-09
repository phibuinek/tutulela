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

const CafeBlog = () => {
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
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);

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
            <h1 className="mt-4">
              Nhắc đến Sài Gòn, không chỉ hiện lên những địa điểm nổi tiếng như
              Nhà thờ Đức Bà, chợ Bến Thành… mà còn là những quán café sân vườn
              đẹp đặc trưng. Chúng trở thành những điểm đến thường xuyên của
              những ai đang sống, làm việc tại đây và du khách từ nơi khác đến.
              Trong bài viết này cùng Tutulela điểm danh TOP những quán cà phê
              sân vườn có không gian xanh đẹp mê ly tại TP.HCM ngay nhé!
            </h1>
            <h1 ref={section1Ref} className="mt-10 text-5xl font-semibold">
              Văn hóa café của người Sài Gòn
            </h1>
            <h1 className="mt-4">
              Café là một nét đẹp văn hóa lâu đời và rất đặc trưng của người Sài
              Gòn, thể hiện qua hương vị đắng – ngọt – béo ngậy – thơm “gây
              nghiện”. Theo nhịp phát triển của con người, dùng café không còn
              chỉ dừng lại ở đơn thuần là “uống” mà nó đã dần trở thành việc
              “thưởng thức” café một cách sành điệu hơn nhưng cũng thi vị hơn.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-ca-phe-dep-2.jpg")}
            />
            <h1 className="mt-4">
              Người Sài Gòn có nhiều cách để uống café, nhiều nơi để đến từ quán
              cóc vỉa hè đến những quán café sân vườn hay quán cafe máy lạnh
              sang trọng. Nhiều quán café mọc lên ngoài việc đáp ứng thức uống
              ngon, còn mang đến không gian để khách hàng thư giãn, có những giờ
              phút riêng tư, vui vẻ bên gia đình, bạn bè hoặc đơn giản là một
              góc yên tĩnh để làm việc.
            </h1>
            <h1 ref={section2Ref} className="mt-10 text-5xl font-semibold">
              Top những quán café “phải đến” ở Sài Gòn
            </h1>
            <h1 className="mt-4">
              Nổi tiếng nhất ở thành phố hoa lệ này phải kể đến những quán café
              sân vườn đẹp, nơi chắc chắn mang lại khoảng thời gian ý nghĩa,
              đáng nhớ. Nếu uống café ở Sài Gòn, đừng bỏ lỡ top những quán café
              dưới đây, không gian vừa tuyệt vời, đa chức năng, thức uống cũng
              được đánh giá cao về chất lượng lẫn hình thức.
            </h1>
            <h1 ref={section3Ref} className="mt-4 text-3xl font-semibold">
              Du Miên
            </h1>
            <h1 className="mt-4">
              Nằm ở trên con đường sầm uất của quận Gò Vấp – Phan Văn Trị, Du
              Miên Café không chỉ nổi tiếng với người ở khu vực đó mà hầu như ai
              ở Sài Gòn cũng từng ghé qua hoặc nghe nói đến.
            </h1>
            <h1 className="mt-4">
              Du Miên có lợi thế về diện tích quán cực rộng lớn, kiến trúc sân
              vườn làm chủ đạo. Thiết kế sân vườn của quán lột tả “hồn thơ mộng”
              như chính tên gọi Du Miên của mình.
            </h1>
            <h1 className="mt-4">
              Bước vào Du Miên, bạn sẽ bị ấn tượng bởi nhiều cây xanh lớn, nhỏ,
              cây đại thụ… được bố trí rất tự nhiên, kết hợp với tiểu cảnh khác
              như hòn non bộ, đài phun có đèn LED…Đặc biệt, Du Miên có “ngôi nhà
              gỗ trên cây” – hình ảnh này là sự kết hợp giữa con người và thiên
              nhiên vô cùng độc đáo, sáng tạo.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-du-mien.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: 7 Phan Văn Trị, P. 10, Quận Gò Vấp</li>
              <li>Giờ mở cửa: 7:00 – 23:00</li>
            </div>
            <h1 ref={section4Ref} className="mt-4 text-3xl font-semibold">
              Villa Song Saigon
            </h1>
            <h1 className="mt-4">
              Quán là một nhà hàng – quán cafe sang trọng, phục vụ cả đồ uống và
              thức ăn. Tọa lạc trong khu villa biệt lập đắt đỏ nhất nhì Sài Gòn
              – Thảo Điền, nên quán có không gian cực kì yên tĩnh và thoáng
              đãng. Cảnh quan và nội thất được thiết kế theo phong cách hiện đại
              và sang trọng với view cực đẹp: một bên bờ sông và một bên biệt
              thự.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/villa-song-sai-gon.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: 197/2 Nguyễn Văn Hưởng, P. Thảo Điền, Quận 2</li>
              <li>Giờ mở cửa: 07:00 – 22:30</li>
            </div>
            <h1 ref={section5Ref} className="mt-4 text-3xl font-semibold">
              MAD House
            </h1>
            <h1 className="mt-4">
              MAD House là một nhà hàng phục vụ cả món Âu, Á và đồ uống với chất
              lượng cực kì xuất sắc. Phong cách thiết kế của quán mang hơi hướm
              hiện đại pha với một chút cổ điển. Quán có không gian cực kì rộng
              rãi và chỗ ngồi siêu thoải mái là những chiếc sofa cỡ lớn, rất
              thích hợp để tụ tập bạn bè “chill” vào dịp cuối tuần.
            </h1>
            <h1 className="mt-4">
              Thậm chí không gian ở đây đủ lớn để tổ chức những bữa tiệc vừa và
              nhỏ như: sinh nhật, wedding ceremony,…
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-mad-house.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: 6/1/2 Nguyễn Ư Dĩ, Thảo Điền, Quận 2</li>
              <li>Giờ mở cửa: 09:00 – 22:00</li>
            </div>
            <h1 ref={section6Ref} className="mt-4 text-3xl font-semibold">
              Café Tinh tế
            </h1>
            <h1 className="mt-4">
              Nằm trên con đường Nam Kỳ Khởi Nghĩa, Quận 3, café Tinh Tế mở ra
              một không gian xanh mát với sân vườn và nhiều phòng đa năng. Sân
              quán, với thiết kế mộc mạc nhưng không kém phần thoáng đãng, mang
              lại cho khách hàng cảm giác thư thái, dễ chịu. Các loại cây cảnh
              được sắp xếp khéo léo, không chỉ tô điểm cho quán mà còn tạo nên
              một ốc đảo xanh giữa lòng thành phố.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/cafe-tinh-te.jpg")}
            />
            <h1 className="mt-4">
              Café Tinh Tế còn thu hút khách hàng bởi các khu vực chức năng đặc
              biệt, phục vụ đa dạng nhu cầu từ làm việc đến giải trí công nghệ.
              Với phòng hội thảo có sức chứa 30 người và khu vực tổ chức các
              buổi workshop đào tạo có thể đón tới 150 người, quán sẵn sàng tổ
              chức các sự kiện, hội thảo với trang thiết bị hiện đại như hệ
              thống âm thanh, ánh sáng và máy chiếu chất lượng cao.
            </h1>
            <div className="mt-4 italic">
              <li>Địa chỉ: 209 Nam Kỳ Khởi Nghĩa, F.7, Q.3, TPHCM</li>
              <li>Giờ mở cửa: 07:00 – 22:00</li>
            </div>
            <h1 ref={section7Ref} className="mt-4 text-3xl font-semibold">
              Family Garden Café
            </h1>
            <h1 className="mt-4">
              Quán café này, với tên gọi đầy mời gọi, mở ra không gian lý tưởng
              cho các cuộc tụ họp của gia đình và bạn bè, nhờ vào diện tích
              thoáng đãng và khu vui chơi dành riêng cho trẻ em.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/cafe-san-vuon-family-garden-cafe.jpg")}
            />
            <h1 className="mt-4">
              Nổi bật với thiết kế sân vườn mang đậm chất Châu Âu, quán đã trang
              hoàng bằng cối xay gió khổng lồ và hàng loạt thực vật xanh mát,
              tạo nên một bức tranh tự nhiên sống động ngay giữa lòng thành phố.
            </h1>
            <h1 className="mt-4">
              Không chỉ có không gian mở tươi mát, Family Garden Café còn cung
              cấp các khu vực ngồi trong nhà và ngoài trời, mang đến cho khách
              hàng sự lựa chọn đa dạng và một trải nghiệm tận hưởng không gian
              xanh mát, thư giãn.
            </h1>
            <h1 className="mt-4">
              Ngoài phục vụ thức uống, quán còn có cả đồ ăn nhẹ và bánh ngọt để
              đa dạng lựa chọn cho khách đến trải nghiệm.
            </h1>
            <div className="mt-4 italic">
              <li>Địa chỉ: 438 Phan Văn Trị, phường 7, quận Gò Vấp, TP. HCM</li>
              <li>Giờ mở cửa: 07:00 – 22:00</li>
            </div>
            <h1 ref={section8Ref} className="mt-4 text-3xl font-semibold">
              Nhà Hàng Cà Phê Sinh Thái Bến Hẹn
            </h1>
            <h1 className="mt-4">
              Bến Hẹn, một ốc đảo xanh mát tọa lạc tại quận 9, là điểm đến lý
              tưởng cho những ai yêu thích không gian nhà hàng, cafe sân vườn.
              Với diện tích mở rộng, quán được phân chia thành các khu vực độc
              đáo: từ khu vực ven sông tĩnh lặng đến khu vui chơi năng động dành
              cho trẻ em, còn có khu tổ chức sự kiện và thác nước hùng vĩ.
            </h1>
            <h1 className="mt-4">
              Mỗi một góc của Bến Hẹn đều toát lên vẻ đẹp hài hòa giữa thiên
              nhiên và kiến trúc, tạo nên những khung cảnh tuyệt vời cho những
              bức ảnh check-in sành điệu. Dù hơi xa trung tâm, nhưng Bến Hẹn vẫn
              là điểm đến của nhiều người khi muốn tìm kiếm một trải nghiệm cafe
              sân vườn đích thực.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-sinh-thai-ben-hen.jpg")}
            />
            <div className="mt-4 italic">
              <li>
                Địa chỉ: 755 Nguyễn Duy Trinh, P. Phú Hữu, Quận 9, TP. HCM
              </li>
              <li>Giờ mở cửa: 06:30 – 23:00</li>
            </div>
            <h1 ref={section9Ref} className="mt-4 text-3xl font-semibold">
              Sen Cafe
            </h1>
            <h1 className="mt-4">
              Sen Cafe nổi bật với diện tích hai mặt tiền rộng, không gian quán
              luôn trong lành nhờ trồng nhiều cây xanh. Sen Cafe lựa chọn phong
              cách nội thất mộc mạc, giản dị nhưng tinh tế, đẹp mắt. Quán không
              có nhiều điểm cuốn hút, nhưng ở đây thực sự tạo cho thực khách cảm
              giác thân thiện và thoải mái. Chất lượng đồ uống ở đây cũng là một
              điểm cộng.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-sen-cafe-quan-2.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: số 18 đường 26 P. An Phú, Quận 2, TP.HCM</li>
              <li>Giờ mở cửa: 06:00 – 22:00</li>
            </div>
            <h1 ref={section10Ref} className="mt-4 text-3xl font-semibold">
              The Coffee House – Xuân Thủy, Q.2
            </h1>
            <h1 className="mt-4">
              The Coffee House, tọa lạc tại đường Xuân Thủy, Thảo Điền – Quận 2,
              là điểm đến lý tưởng cho những ai yêu thích sự bình yên và gần gũi
              với thiên nhiên. Thiết kế của quán được lấy cảm hứng từ kiến trúc
              Nam Bộ truyền thống, gây ấn tượng mạnh với khách hàng bởi vẻ đẹp
              mộc mạc, hòa quyện giữa hệ thống tường đá độc đáo cùng nội thất
              làm từ chất liệu gỗ tự nhiên. Mỗi cánh cửa tại đây không chỉ là
              lối đi, mà còn là bức tranh nghệ thuật, tạo nên một không gian cà
              phê mở đầy ánh sáng và bầu không khí trong lành.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/the-coffee-house-xuan-thuy.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: 57 Xuân Thuỷ, Quận 2</li>
              <li>Giờ mở cửa: 08:00 – 22:00</li>
            </div>
            <h1 ref={section11Ref} className="mt-4 text-3xl font-semibold">
              Baraen Coffee
            </h1>
            <h1 className="mt-4">
              Baraen Coffee, hay còn được khách quen gọi là quán cà phê hoa
              hồng, là một ốc đảo xanh giữa lòng thành phố với vườn hoa hồng đua
              nở quanh. Quán được thiết kế theo phong cách cổ điển, điều này đã
              mang đến không gian lãng mạn như những ngôi nhà cổ tại Đà Lạt. Mặc
              dù diện tích quán không quá lớn như những quán cà phê sân vườn
              khác, Baraen Coffee vẫn tạo ra những góc nhỏ xinh đẹp, nơi mọi lo
              âu tan biến, thay vào đó là sự bình yên và thư thái.
            </h1>
            <h1 className="mt-4">
              Baraen Coffee không chỉ là một quán cà phê, mà còn là điểm nhấn
              xanh mát, nơi mỗi bông hoa hồng không chỉ đem lại vẻ đẹp mà còn
              góp phần tô điểm cho sắc màu giữa lòng thành phố.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-baraen-coffee.jpg")}
            />
            <div className="mt-4 italic">
              <li>Địa chỉ: 12 Đường Số 19, P. An Phú, Quận 2</li>
              <li>Giờ mở cửa: 06:00 – 23:00</li>
            </div>
            <h1 ref={section12Ref} className="mt-4 text-3xl font-semibold">
              Lily’s Garden Caffee
            </h1>
            <h1 className="mt-4">
              Khi đặt chân đến Thủ Đức, đừng bỏ lỡ cơ hội trải nghiệm không gian
              độc đáo tại Lily’s Garden Caffee. Khi đến đây, bạn có thể thư giãn
              trong những chiếc ghế ngồi được thiết kế từ ống cống độc đáo, hoặc
              dạo bước trên cây cầu kính trong suốt với đàn cá koi nô đùa dưới
              chân. Lily’s Garden không chỉ ghi điểm bởi vẻ đẹp xanh mát cùng
              không gian mở rộng lớn, mà còn nổi bật bởi sự độc đá và sáng tạo
              từng góc quán.
            </h1>
            <h1 className="mt-4">
              Về đêm, với ánh đèn lung linh sẽ tạo nên một bầu không khí lãng
              mạn, hứa hẹn những phút giây thư thái. Ngoài không gian thoáng
              đãng, quán còn có những chương trình âm nhạc acoustic du dương
              vang lên mỗi tối càng làm tăng thêm phần năng động, hứa hẹn mang
              đến cho bạn những trải nghiệm lãng mạn khó quên tại Lily’s.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/lily-garden-caffee.jpg")}
            />
            <div className="mt-4 italic">
              <li>
                Địa chỉ: 114 Đường Số 6 (đi thêm 50m nữa), P. Tam Phú, Quận Thủ
                Đức, TP. HCM
              </li>
              <li>Giờ mở cửa: 07:00 – 23:00</li>
            </div>
            <h1 ref={section13Ref} className="mt-4 text-3xl font-semibold">
              Terrace Café
            </h1>
            <h1 className="mt-4">
              Terrace Café được thiết kế như một khu vườn nằm giữa thành phố
              nhộn nhịp. Kiến trúc kiểu lồng độc đáo kết hợp nhiều cây xanh tạo
              nên không gian sang trọng, lãng mạn và riêng tư. Quán ngoài phục
              vụ thức uống còn có đa dạng nhiều món ăn để thực khách lựa chọn.
            </h1>
            <h1 className="mt-4">
              Tông màu chủ đạo của quán là màu tối kết hợp với ánh sáng vàng cực
              kỳ phù hợp với những tối hẹn hò của các bạn trẻ. Với background
              đậm tính nghệ thuật của Terrace, chắc chắn bạn sẽ thấy được bao
              phủ bởi thiên nhiên và như đang lạc vào một khu rừng nào đó.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-terrace-cafe.jpg")}
            />
            <div className="mt-4 italic">
              <li>
                Địa chỉ: Tầng Trệt, Saigon Centre, 65 Lê Lợi, P. Bến Nghé, Quận
                1, TP. HCM
              </li>
              <li>Giờ mở cửa: 7:00 – 22:30</li>
            </div>
            <h1 ref={section14Ref} className="mt-4 text-3xl font-semibold">
              Amour Kafe
            </h1>
            <h1 className="mt-4">
              Amour Kafe có không gian rất ấn tượng nhờ những bức tường cây cỡ
              lớn và một khu vườn bé bé xinh xinh như một khu rừng nhiệt đới.
              Nội thất của quán tạo cho chúng ta cảm giác ấm cúng và thân thiện,
              đồ uống của quán không những ngon miệng mà còn đẹp mắt. Ngoài ra
              quán còn phục vụ thêm đồ ăn nhẹ và vị trí ngay trung tâm quận 1
              cũng là một điểm cộng.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/quan-cafe-san-vuon-dep-amour-kafe.jpg")}
            />
            <div className="mt-4 italic">
              <li>
                Địa chỉ: 134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Quận 1, TP. HCM
              </li>
              <li>Giờ mở cửa: 24/24</li>
            </div>
            <h1 ref={section15Ref} className="mt-4 text-3xl font-semibold">
              The Brix Saigon
            </h1>
            <h1 className="mt-4">
              The Brix là một ốc đảo nhiệt đới ở trung tâm phường Thảo Điền,
              Quận 2 – một không gian độc đáo và riêng tư giúp bạn thoát khỏi
              nhịp sống ồn ã của phố thị. Quán được thiết kế theo phong cách
              tropical với một hồ bơi lớn ở trung tâm giúp điều hòa nhiệt độ,
              xung quanh là các loại cây nhiệt đới, vạy nên ngay khi bước chân
              vào quán thực khách sẽ ngỡ như mình đang ở giữa một khu rừng mưa
              Nam Mỹ. The Brix phục vụ đa dạng các món đồ uống, cocktail và các
              món Âu – Á.
            </h1>
            <Image
              className="mt-4 w-[800px]"
              src={require("../../assets/blog/CafeBlog/mau-thiet-ke-quan-cafe-san-vuonn-phong-cach-tropical.jpg")}
            />
            <div className="mt-4 italic">
              <li>
                Địa chỉ: 26 Trần Ngọc Diện, Thảo Điền, Quận 2, Thành phố Hồ Chí
                Minh
              </li>
              <li>Giờ mở cửa: 11:00 – 23:00</li>
            </div>
            <h1 className="mt-4">
              Tutulela là một trong những công ty cảnh quan sân vườn chuyên
              thiết kế thi công quán cafe sân vườn hàng đầu hiện nay. Hy vọng
              bài viết sẽ có thêm nhiều sự lựa chọn quán cafe sân vườn view đẹp
              cần phải ghé thưởng thức.
            </h1>
            <h1 className="mt-4 font-bold">
              Ban biên tập: Tutulela House Plant Decor
            </h1>
            <h1 className="mt-4 font-bold italic">Ảnh: Tham khảo internet</h1>
          </div>
        </div>
        <div className="lg:col-span-1 ">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Văn hóa café của người Sài Gòn
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Top những quán café “phải đến” ở Sài Gòn
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Du Miên
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Villa Song Saigon
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  MAD House
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Café Tinh tế
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Family Garden Café
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Nhà Hàng Cà Phê Sinh Thái Bến Hẹn
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Sen Cafe
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  The Coffee House – Xuân Thủy, Q.2
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Baraen Coffee
                </li>
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Lily’s Garden Caffee
                </li>
                <li
                  onClick={() => scrollToSection(section13Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Terrace Café
                </li>
                <li
                  onClick={() => scrollToSection(section14Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Amour Kafe
                </li>
                <li
                  onClick={() => scrollToSection(section15Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  The Brix Saigon
                </li>
              </div>
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

export default CafeBlog;
