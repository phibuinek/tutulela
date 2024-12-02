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

const GardenBlog = () => {
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
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section18Ref = useRef(null);
  const section19Ref = useRef(null);
  const section20Ref = useRef(null);

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
              <h1 className="ml-2 pb-2">29/07/2024</h1>
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
              Đèn sân vườn không chỉ làm đẹp cho không gian sống của bạn mà còn
              tạo điều kiện thuận lợi cho việc di chuyển về đêm. SGL Vietnam tự
              hào giới thiệu những mẫu đèn sân vườn tinh tế và hiện đại nhất,
              mang lại giá trị nghệ thuật và sự tiện nghi cho khu vườn của bạn.
            </h1>
            <h1 ref={section1Ref} className="mt-10 text-5xl font-semibold">
              Đèn trụ sân vườn
            </h1>
            <h1 className="mt-4">
              Đèn trụ sân vườn, với ánh sáng ấm cúng lan tỏa, không chỉ làm sáng
              bừng không gian sống mà còn tô điểm thêm vẻ đẹp quý phái, tinh tế
              cho khu vườn của bạn. Chúng đóng vai trò quan trọng trong việc đảm
              bảo an ninh, giúp việc di chuyển và lái xe trở nên an toàn hơn,
              đặc biệt là vào ban đêm.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-tru-san-vuon-802x452.jpg")}
            />
            <h1 className="mt-4">
              Đèn còn được tối ưu hóa việc chiếu sáng các chi tiết kiến trúc,
              nâng cao giá trị thẩm mỹ và làm điểm nhấn bắt mắt của thiết kế.
              Đặc biệt, một số mẫu đèn thông minh tích hợp công nghệ hiện đại,
              cho phép điều chỉnh độ sáng linh hoạt và từ xa, mang lại tiện ích
              vượt trội cho người sử dụng.
            </h1>
            <h1 ref={section2Ref} className="mt-10 text-5xl font-semibold">
              Đèn hắt sân vườn
            </h1>
            <h1 className="mt-4">
              Dựa vào công dụng và vị trí lắp đặt, đèn hắt sân vườn thường được
              chia thành những loại phổ biến như sau:
            </h1>
            <h1 ref={section3Ref} className="mt-10 text-3xl font-semibold">
              Đèn pha LED
            </h1>
            <h1 className="mt-4">
              Đèn LED pha chiếu sáng hiệu quả cao, cực kỳ thân thiện cho môi
              trường do không phát ra tia UV. Loại đèn này tiêu thụ ít năng
              lượng, giúp tiết kiệm điện đáng kể. Đèn có công suất đa dạng từ
              50W đến 200W, phù hợp với nhiều nhu cầu chiếu sáng khác nhau và
              được trang bị công nghệ chống nước IP65.
            </h1>
            <h1 className="mt-4">
              Với phần thân làm từ nhôm hoặc inox cao cấp, đèn đảm bảo có độ bền
              cao, chịu lực cực tốt. Đèn LED pha chính là sự lựa chọn phù hợp
              cho việc chiếu sáng sân vườn, sân vận động, tường rào và sân khấu.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-pha-led-802x452.jpg")}
            />
            <h1 ref={section4Ref} className="mt-10 text-3xl font-semibold">
              Đèn led âm đất
            </h1>
            <h1 className="mt-4">
              Đèn LED âm đất, với thiết kế vô cùng gọn nhẹ, được lắp đặt dưới
              mặt đất, không chỉ tiết kiệm không gian mà còn tạo hiệu ứng ánh
              sáng độc đáo, phù hợp với nhiều kiểu không gian từ sân vườn đến
              quán cafe và các khu vực ngoại thất.
            </h1>
            <h1 className="mt-4">
              Với đa dạng màu sắc từ RGB đến trắng và vàng, cùng tuổi thọ ấn
              tượng và khả năng tiết kiệm điện năng, đèn này còn có độ chống
              nước và chống bụi cao, đảm bảo khả năng chiếu sáng từ xa, là lựa
              chọn hàng đầu cho các dự án thiết kế ánh sáng.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-led-am-dat-802x452.jpg")}
            />
            <h1 ref={section5Ref} className="mt-10 text-3xl font-semibold">
              Đèn chiếu cây
            </h1>
            <h1 className="mt-4">
              Đèn chiếu cây là một trong những hạng mục trang trí ngoại thất đặc
              biệt, không chỉ chống nước hiệu quả mà còn tạo điểm nhấn nghệ
              thuật cho không gian sân vườn. Hiện nay có ba phương pháp lắp đặt
              chính cho loại đèn sân vườn này giúp làm nổi bật vẻ đẹp tự nhiên:
              chiếu sáng từ dưới lên, chiếu ánh sáng mô phỏng ánh trăng và chiếu
              sáng tạo bóng.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-chieu-cay-802x452.jpg")}
            />
            <h1 ref={section6Ref} className="mt-10 text-3xl font-semibold">
              Đèn nấm sân vườn
            </h1>
            <h1 className="mt-4">
              Đèn nấm sân vườn, với kích thước nhỏ xinh và giá cả phải chăng, là
              lựa chọn lý tưởng để tạo điểm nhấn cho khu vườn hay lối đi của
              bạn. Với mức giá dao động linh hoạt, từ vài trăm nghìn đến vài
              triệu đồng, bạn có thể dễ dàng tìm thấy sản phẩm phù hợp.
            </h1>
            <h1 className="mt-4">
              Với sự đa dạng về mẫu mã, mẫu đèn nấm sân vườn này có nhiều loại
              như: Đèn nấm bách tán, Đèn nấm cây thông, Đèn nấm Maria, đến Đèn
              nấm Tulip, giúp bạn có thêm nhiều sự lựa chọn để thỏa thích trang
              trí sân vườn theo sở thích của bản thân.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-nam-san-vuon-802x452.jpg")}
            />
            <h1 ref={section7Ref} className="mt-10 text-5xl font-semibold">
              Cột đèn sân vườn
            </h1>
            <h1 className="mt-10">
              Cột đèn sân vườn là phụ kiện không thể thiếu trong thiết kế cảnh
              quan sân vườn, có tác dụng không chỉ là nơi gắn thiết bị chiếu
              sáng mà còn đóng vai trò trang trí quan trọng, thể hiện phong cách
              và chủ đề của cảnh quan.
            </h1>
            <h1 ref={section8Ref} className="mt-10 text-3xl font-semibold">
              Cột đèn sân vườn 1 bóng
            </h1>
            <h1 className="mt-4">
              Thân cột được đúc bằng nhôm, thép hoặc gang, giá thành sẽ dao động
              phụ thuộc vào công suất bóng đèn và độ phức tạp của thân cột.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/cot-den-san-vuon-1-bong-802x452.jpg")}
            />
            <h1 ref={section9Ref} className="mt-10 text-3xl font-semibold">
              Cột đèn sân vườn 2 bóng
            </h1>
            <h1 className="mt-4">
              Có rất nhiều loại thân cột phù hợp với loại cột đèn sân vườn 2
              bóng. Phụ kiện là phần tay chùm có thể được thiết kế đối xứng sáng
              2 bên hoặc bất đối xứng tạo sự mới lạ, độc đáo.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/cot-den-san-vuon-2-bong-802x452.jpg")}
            />
            <h1 ref={section10Ref} className="mt-10 text-3xl font-semibold">
              Cột đèn sân vườn 3 bóng
            </h1>
            <h1 className="mt-4">
              Phần tay chùm cho cột đèn 3 bóng rất đa dạng kiểu dáng để chọn
              lựa. Tay chùm còn phụ thuộc vào mẫu mã của bóng đèn và công suất
              chiếu sáng của từng loại. Đây là loại được sử dụng phổ biến vì số
              bóng đèn vừa phải, phạm vi chiếu sáng khá rộng, kiểu dáng lại đơn
              giản, không quá cầu kỳ.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/cot-den-san-vuon-3-bong-802x452.jpg")}
            />
            <h1 ref={section11Ref} className="mt-10 text-3xl font-semibold">
              Cột đèn sân vườn 4 bóng và 5 bóng
            </h1>
            <h1 className="mt-4">
              Giá thành của cột đèn sân vườn 4 đến 5 bóng phụ thuộc vào số lượng
              bóng đèn, công suất của chúng. Hầu hết, các bóng đèn hiện nay đều
              có công năng tiết kiệm điện năng. Số bóng đèn nhiều yêu cầu phần
              chùm đèn có nhiều tay, kiểu dáng và phân bổ cầu kỳ tinh xảo hơn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/cot-den-san-vuon-5-bong-802x452.jpg")}
            />
            <h1 ref={section12Ref} className="mt-10 text-5xl font-semibold">
              Đèn trang trí sân vườn đẹp
            </h1>
            <h1 className="mt-10">
              Một số mẫu đèn còn được phân loại tùy theo chất lượng hoặc nhu cầu
              lắp đặt, mỗi loại sẽ có ưu điểm và thông số kỹ thuật, giá thành
              khác nhau:
            </h1>
            <h1 ref={section13Ref} className="mt-10 text-3xl font-semibold">
              Đèn sân vườn cao cấp
            </h1>
            <h1 className="mt-4">
              Đèn trang trí sân vườn cao cấp có kiểu dáng đa dạng, từ hình trụ
              đến cung vòm, đáp ứng mọi nhu cầu thiết kế. Với điện áp 220V và
              công suất dưới 30W, đèn sử dụng bóng thủy tinh tinh xảo, tiết kiệm
              năng lượng và có thân cột làm từ hợp kim, thép, hoặc nhôm bền
              vững.
            </h1>
            <h1 className="mt-4">
              Tuổi thọ đèn lên đến 65000 giờ với mức giá từ 350,000 đến 500,000
              VND. Mẫu đèn này là lựa chọn lý tưởng cho mọi không gian ngoại
              thất, mang lại vẻ đẹp và hiệu quả chiếu sáng cao cho khu vườn của
              bạn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-san-vuon-cao-cap-802x452.jpg")}
            />
            <h1 ref={section14Ref} className="mt-10 text-3xl font-semibold">
              Đèn LED bóng treo
            </h1>
            <h1 className="mt-4">
              Đèn LED dạng bóng treo, trong suốt có điện áp 220V và công suất từ
              100 đến 130 lm/w, được làm từ chất liệu thủy tinh cao cấp, không
              cần thân cột hỗ trợ. Thời gian thắp sáng ấn tượng, lên đến 65000
              giờ và mức giá từ 100,000 đến 250,000 VND.
            </h1>
            <h1 className="mt-4">
              Kích thước nhỏ gọn và khả năng tiết kiệm năng lượng nhờ công nghệ
              chip LED, đèn này không chỉ chiếu sáng mà còn là điểm nhấn nghệ
              thuật cho mọi không gian.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-led-bong-treo-802x452.jpg")}
            />
            <h1 ref={section15Ref} className="mt-10 text-3xl font-semibold">
              Đèn đá sân vườn
            </h1>
            <h1 className="mt-4">
              Mang đậm nét văn hóa Á Đông, các mẫu đèn đá sân vườn này có thiết
              kế truyền thống và đa dạng, từ Taima-ji đến Yukimi, Kanazawa, phù
              hợp với mọi không gian. Với điện áp 220V và công suất chiếu sáng
              100 – 130 lm/w, chúng không chỉ tiết kiệm năng lượng mà còn bền bỉ
              với thời gian.
            </h1>
            <h1 className="mt-4">
              Cột đèn được làm từ đá tự nhiên, giá cả phải chăng từ 500,000vnd
              đến 1,500,000vnd. Đặc biệt, với chiều cao linh hoạt từ dưới 2m,
              sản phẩm không chỉ là nguồn sáng mà còn là điểm nhấn văn hóa, tăng
              cường phong thủy cho mỗi khu vườn.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-da-san-vuon-802x452.jpg")}
            />
            <h1 ref={section16Ref} className="mt-10 text-3xl font-semibold">
              Đèn chiếu điểm
            </h1>
            <h1 className="mt-4">
              Đèn chiếu điểm này hoạt động ở điện áp AC từ 85 đến 265V và có sẵn
              trong các mức công suất từ 5W đến 30W. Thiết kế linh hoạt cho phép
              đèn quay đa hướng, cung cấp một loạt màu sắc và độ sáng mạnh mẽ.
              Là lựa chọn lý tưởng để làm nổi bật vẻ đẹp của không gian ngoại
              thất như tòa nhà, vườn, đường phố, công viên…
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-chieu-diem-802x452.jpg")}
            />
            <h1 ref={section17Ref} className="mt-10 text-3xl font-semibold">
              Đèn led ốp tường
            </h1>
            <h1 className="mt-4">
              Đèn được ứng dụng để chiếu sáng cả khu vực trong nhà và ngoài
              trời, như hành lang, tường sân vườn, sân thượng… Với ưu điểm không
              chứa thủy ngân và ánh sáng phát ra không gây khó chịu cho người
              nhìn, không có tia tử ngoại nên đây chính là thiết bị chiếu sáng
              vừa tiết kiệm vừa an toàn với sức khỏe con người. Loại đèn này
              hoạt động ở điện áp 220V, CRI trên 80 và đạt 25000 giờ sử dụng.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-led-op-tuong-802x452.jpg")}
            />
            <h1 ref={section18Ref} className="mt-10 text-3xl font-semibold">
              Đèn chiếu tường
            </h1>
            <h1 className="mt-4">
              Đèn chiếu tường là thiết bị thường được lắp đặt lên tường, hành
              lang, cầu thang… có tác dụng hắt ánh sáng ngược vào tường tạo điểm
              nhấn độc đáo, mang đậm tính nghệ thuật. Một số đèn chiếu còn được
              lắp đặt để hắt ánh sáng làm nổi bật bức tranh trên tường.
            </h1>
            <h1 className="mt-4">
              Mẫu đèn này được thiết kế đa dạng kiểu mã và màu sắc, ánh sáng
              được hắt theo phương thẳng đứng hoặc chéo nhau tạo nên hình khối
              đẹp mắt.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-chieu-tuong-802x452.jpg")}
            />
            <h1 ref={section19Ref} className="mt-10 text-5xl font-semibold">
              Đèn năng lượng mặt trời sân vườn
            </h1>
            <h1 className="mt-10">
              Là loại đèn sân vườn với nhiều loại (đèn trụ cổng, đèn tường rào,
              đèn sân vườn…), hình dạng, kích thước và kiểu dáng khác nhau nhưng
              được tích hợp hệ thống hấp thụ năng lượng mặt trời giúp tiết kiệm
              chi phí và thân thiện với môi trường. Đèn sân vườn năng lượng mặt
              trời là xu hướng nhiều gia đình lựa chọn hiện nay.
            </h1>
            <h1 className="mt-4">
              Đèn có tấm pin năng lượng mặt trời với chức năng sạc pin vào ban
              ngày (8-10 tiếng) và có thể chiếu sáng suốt đêm.
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/den-nang-luong-mat-troi-san-vuon-802x452.jpg")}
            />
            <h1 ref={section20Ref} className="mt-10 text-5xl font-semibold">
              Cách trang trí đèn sân vườn theo từng vị trí
            </h1>
            <h1 className="mt-10">
              Chọn đèn phù hợp không chỉ cải thiện chức năng chiếu sáng mà còn
              làm nổi bật vẻ đẹp của toàn bộ không gian sân vườn. Bạn có thể
              tham khảo các cách trang trí đèn sân vườn dưới đây:
            </h1>
            <h1 className="mt-4">
              <li>
                Bố trí đèn khéo léo tại các điểm nhấn để tạo dấu ấn đặc sắc, từ
                lối vào, hàng rào cho đến bãi cỏ và tiểu cảnh, mỗi khu vực đều
                sẽ toát lên sự tinh tế và sang trọng.
              </li>
              <li>
                Trang trí đèn hai bên cổng tạo sự an toàn khi di chuyển vào ban
                đêm, trong khi đèn âm đất và đèn trụ sân vườn giúp lối đi đẹp
                hơn.
              </li>
              <li>
                Dây đèn LED có thể treo lên tô điểm cho hàng rào, mang lại vẻ
                đẹp nghệ thuật và tăng sự riêng tư.
              </li>
              <li>
                Đèn âm đất trên bãi cỏ và đèn chiếu điểm tại gốc cây lớn tạo
                điểm nhấn bắt mắt cho khu vườn.
              </li>
              <li>
                Bố trí đèn LED ốp tường và đèn âm tường tại hiên nhà và vị trí
                sân trước giúp việc đi lại thuận tiện hơn và làm sáng ngôi nhà.
              </li>
              <li>
                Trang trí đèn LED âm dưới nước và đèn nấm tại hồ cá và các khu
                vực tiểu cảnh tạo nên không gian sống động và đầy tính nghệ
                thuật.
              </li>
            </h1>
            <Image
              className="mt-4"
              src={require("../../assets/blog/GardenBlog/cach-trang-tri-den-san-vuon-802x452.jpg")}
            />
            <div className="mt-4">
              Trên đây là tất cả những mẫu đèn sân vườn đẹp và một số cách trang
              trí đèn LED đẹp mà SGL Vietnam muốn giới thiệu đến bạn, hy vọng đã
              giúp bạn có thêm nhiều ý tưởng mới cho sân vườn của mình.
            </div>
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
                Đèn trụ sân vườn
              </li>
              <li
                onClick={() => scrollToSection(section2Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đèn hắt sân vườn
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn pha LED
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn led âm đất
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn chiếu cây
                </li>
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn nấm sân vườn
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section7Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Cột đèn sân vườn
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Cột đèn sân vườn 1 bóng
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Cột đèn sân vườn 2 bóng
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Cột đèn sân vườn 3 bóng
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Cột đèn sân vườn 4 bóng và 5 bóng
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section12Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đèn trang trí sân vườn đẹp
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section13Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn sân vườn cao cấp
                </li>
                <li
                  onClick={() => scrollToSection(section14Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn LED bóng treo
                </li>
                <li
                  onClick={() => scrollToSection(section15Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn đá sân vườn
                </li>
                <li
                  onClick={() => scrollToSection(section16Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn chiếu điểm
                </li>
                <li
                  onClick={() => scrollToSection(section17Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn led ốp tường
                </li>
                <li
                  onClick={() => scrollToSection(section18Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Đèn chiếu tường
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section19Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Đèn năng lượng mặt trời sân vườn
              </li>
              <li
                onClick={() => scrollToSection(section20Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Cách trang trí đèn sân vườn theo từng vị trí
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

export default GardenBlog;
