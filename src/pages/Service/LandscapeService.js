import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandscapeService = () => {
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
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);


  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mt-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
        <div className="col-span-1 lg:pl-40 md:pl-36 pl-4 text-lg mb-4">
          <div className="pb-4 border border-[#f4f4f4] w-[350px]">
            <div className="bg-[#f4f4f4] p-6 text-2xl font-semibold">
              NỘI DUNG CHÍNH
            </div>
            <div className="pl-4 space-y-2 mt-4">
              <li
                onClick={() => scrollToSection(section1Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Tutulela mang đến gì?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section2Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Lý tưởng của cái đẹp
                </li>
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Các nguyên tắc khi thiết kế cảnh quan của Tutulela
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Quy trình làm việc
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section5Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                9 Mẫu thiết kế cảnh quan tuyệt đẹp
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section6Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan nghĩa trang gia đình
                </li>
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan quán cafe sân vườn
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan không gian thiền định phong cách vườn
                  Zen
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan khu resort tuyệt đẹp về đêm
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan nhà hàng kiểu Thái đẹp
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan sân vườn Nhật Bản
                </li>
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu cảnh quan sân vườn phong cách “bình yên”
                </li>
                <li
                  onClick={() => scrollToSection(section13Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan đô thị
                </li>
                <li
                  onClick={() => scrollToSection(section14Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan công viên
                </li>
                <li
                  onClick={() => scrollToSection(section15Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan nhà điều hành khu công nghiệp
                </li>
                <li
                  onClick={() => scrollToSection(section16Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế khu tâm linh theo phong thủy
                </li>
                <li
                  onClick={() => scrollToSection(section17Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan đài truyền hình
                </li>
                <li
                  onClick={() => scrollToSection(section18Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan nghĩa trang gia tộc
                </li>
                <li
                  onClick={() => scrollToSection(section19Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan khu nghỉ dưỡng “săn mây”
                </li>
                <li
                  onClick={() => scrollToSection(section20Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế cảnh quan resort nghỉ dưỡng ven hồ
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section21Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Bảng báo giá thiết kế cảnh quan
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section22Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Vì sao nên chọn Tutulela?
                </li>
              </div>
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
        <div className="col-span-3 lg:pl-48 md:pl-36 pl-4 md:max-w-[1000px] max-w-[400px] text-justify text-lg">
          <Image
            src={require("../../assets/service/LandscapeService/z5781701981673_4bc26d490a29e390abec84afa7f0f53f.jpg")}
          />
          <h1 ref={section1Ref} className="mt-4 text-4xl font-semibold">
            Tutulela mang đến gì?
          </h1>
          <h1 className="mt-4">
            Tại Việt Nam, thiết kế kiến trúc cảnh quan và thiết kế cảnh quan có
            lẽ đã không còn quá xa lạ. Trong 10 năm trở lại đây, các kiến trúc
            sư có chuyển biến mạnh mẽ trong việc đưa cảnh quan vào trong công
            trình và dự án của chủ đầu tư. Từ những nhà máy đến công viên chuyên
            đề, các khu dân cư hay trong thiết kế đô thị, đến những sân vườn chủ
            đề, những homestay hay quán cà phê, nhà hang… đều có sự hiện diện
            của những kiến trúc sư cảnh quan để kiến tạo nên một không gian thú
            vị và có nội dung hơn.
          </h1>
          <h1 className="mt-4">
            Chúng tôi – Đội ngũ Tutulela – rất may mắn và vinh dự được đóng góp
            vào sự phát triển của ngành kiến trúc cảnh quan. Khi các chủ đầu tư
            luôn đặt sự kỳ về một công trình trọn vẹn và đồng bộ, chúng tôi ở đó
            và mang đến những giá trị thật cho họ.
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/z5781695942741_54f7ba1cfd8473af649b8edccf2f539b.jpg")}
          />
          <h1 ref={section2Ref} className="mt-4 text-4xl font-semibold">
            Lý tưởng của cái đẹp
          </h1>
          <h1 className="mt-4">
            Tất cả chúng ta đều cảm thấy hào hứng và thú vị hơn nếu có một chủ
            đề chung để bàn luận. Cảnh quan cũng vậy, bạn nghĩ sao về một tách
            trà giữa khu vườn của bạn. Một không gian đồng bộ, các chi tiết liên
            kết với nhau và mọi mắt xích đều không thể loại bỏ.
          </h1>
          <h1 className="mt-4">
            Chúng tôi hình ảnh hóa những câu chuyện của bạn, bạn có thể luyên
            thuyên với mọi người về những điều thú vị trước mắt. Không chỉ là sự
            đẹp về đường nét, tỉ lệ và hình học và mỹ quan, các kiến trúc sư
            chúng tôi mang cho bạn nhiều hơn thế rất nhiều.
          </h1>
          <div className="flex">
            <Image
              className="mt-4 w-[400px] h-[300px]"
              src={require("../../assets/service/LandscapeService/ly-tuong-cai-dep.jpg")}
            />
            <Image
              className="mt-4 w-[400px] h-[300px]"
              src={require("../../assets/service/LandscapeService/ly-tuong-cai-dep-3.jpg")}
            />
          </div>
          <h1 className="mt-1 text-center">
            Hình ảnh: Mặt bằng thiết kế ở Tp.Hồ Chí Minh được các kiến trúc sư
            Tutulela thực hiện
          </h1>
          <h1 className="mt-4 text-2xl font-semibold">
            Chúng ta có một nơi chốn
          </h1>
          <h1 className="mt-4">
            Bác hàng xóm sẽ ganh tị nếu như bạn cho ông ấy thấy khu vườn của
            bạn. Nó có điều gì đó khiến cảm xúc trong ông ấy muốn ở lại nơi này.
            Chúng ta sẽ ngồi lên Koshikake để kể về một dự án nho nhỏ nào đó,
            ngắm từng màu sắc xung quanh xem chúng đang phối kết nên những hình
            thù gì, nghe tiếng chim và tiếng suối trong ánh sáng mơ màng giữa
            chiều tà. Đừng quên bước sang Tsukubai để rửa tay và rửa mặt nhé!
          </h1>
          <h1 className="mt-4">
            Không chỉ là bản sắc, chúng tôi tạo ra nơi chốn, nơi mà bạn cảm thấy
            sự kết nối và gắn bó trong người mình và không gian. Không chỉ là
            cây cỏ, không chỉ là đá, suối hay ánh sáng, chúng tôi chú trọng về
            cả âm thanh. Điều đó giống như bạn đang bước nhẹ giữa phố cổ Hội An
            trong tiếng nhạc vậy. Vì thế, đừng cắt bớt những chiếc loa của chúng
            tôi trong suất đầu tư nhé!
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/chung=ta=co=mot-noi-chon.jpg")}
          />
          <h1 className="mt-4 text-2xl font-semibold">
            Sự kì diệu của vật liệu và công năng
          </h1>
          <h1 className="mt-4">
            Vật liệu luôn là một điều rất quan trọng trong cảnh quan, nhưng phối
            kết bằng mỗi cách thức khác nhau, sẽ tạo ra những hiệu quả khác
            nhau. Khi mà trào lưu sử dụng vật liệu địa phương như một xu thế,
            các thiết kế theo hướng Fusion được áp dụng nhiều hơn, đòi hỏi các
            kiến trúc sư luôn có những góc nhìn đa dạng với vật liệu.
          </h1>
          <h1 className="mt-4 font-bold">Đá</h1>
          <h1 className="mt-4">
            Giá trị nguyên bản của một viên đá Nhật có thể lớn, nhưng giá trị
            của việc gia công và sử dụng chúng mới là điều cốt lõi. Chúng tôi
            tôn sùng các tỉ lệ và nguyên lý phát triển của tự nhiên, vì thế
            những khối đá của chúng tôi được ghép nối chắc chắn với nhau và
            không hề có vữa xi măng. Chúng được xếp lên một cách kỳ diệu và nằm
            ở đó mãi mãi. Đặc biệt với không gian trắc trở đồi núi và rừng thông
            tại Đà Lạt, Việt Nam, chúng tôi đã tạo ra một con suối nhân tạo và
            một hồ sinh thái cỡ lớn.
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/da.jpg")}
          />
          <h1 className="mt-4 font-bold">Gỗ</h1>
          <h1 className="mt-4">
            Gỗ là phần không thể thiếu trong cảnh quan, không gian cây xanh sẽ
            ấm hơn nếu như được tô thêm một gam nóng. Với những kết cấu gỗ đặc
            biệt, chúng tôi xử lý bằng các mối nối không dùng đinh, những chi
            tiết gỗ Hinoki khớp với nhau và được giữ ở đó bằng kỹ thuật của nghệ
            nhân lành nghề. Một chai Pérignon 2009 sẽ ngon hơn nữa nếu được
            thưởng thức giữa không gian ấm cúng và lãng mạn đúng không?
          </h1>
          <h1 className="mt-4">
            Sự kết hợp giữa gỗ và đá cũng được chúng tôi chăm chút rất nhiều,
            chúng luôn có sự liên kết với nhau, điều đó thật hay ho. Bạn không
            phiền nếu tôi cùng thưởng thức bữa tiệc rượu giữa sân vườn nhà bạn
            chứ!
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/go.jpg")}
          />
          <h1 className="mt-4 font-bold">Nước</h1>
          <h1 className="mt-4">
            Yếu tố nước trong sân vườn là điều không thể thiếu được, không chỉ
            dừng lại ở hồ hay thác, những khu nước như tsukubai cũng là một
            trong những lựa chọn mang yếu tố thiết yếu trong các dự án của chúng
            tôi
          </h1>
          <h1 className="mt-4">
            Âm thanh của nước mang tính nhịp điệu và giúp cho con người hòa vào
            với tự nhiên hơn, sẽ không thiên vị chúng nào khi cho rằng hiệu ứng
            của nước luôn làm sinh động hơn cho một không gian.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/nuoc.jpg")}
          />
          <h1 className="mt-4 font-semibold text-2xl">
            Tính tự phát và sự khéo léo được cân nhắc kỹ lưỡng
          </h1>
          <h1 className="mt-4">
            Những tảng đá không có hình thù xác định đến khi chúng ta gặp được
            chúng. Cuộc chơi với những viên đá là điều chúng tôi thấy khó khăn
            nhất khi tạo nên một thiết kế. Nhưng không, điều đó thực sự là một
            điều thú vị. Các kiến trúc sư quyết định bố cục và tỉ lệ cần thiết
            cho mỗi cụm cảnh quan sử dụng đá. Điều đó sẽ là cơ sở để thi công
            một dự án, sau đó các nghệ nhân sẽ cân, cân, đo, đong, đếm rất nhiều
            để tạo nên một sản phẩm đầy cảm xúc. Nó không còn thuần túy là thiết
            kế nữa.
          </h1>
          <h1 className="mt-4">
            Cũng như đá, cây xanh là một thứ khôn thể xác định được hình dạng,
            tuy rằng đối với Tùng chúng ta có rất nhiều dáng cụ thể. Và đôi khi,
            chủ đầu tư được tặng vài cây xanh quý giá. Đối với các công trình dự
            án đô thị, việc trồng chúng khá dễ dàng chỉ cần thuân theo các quy
            định của kỹ sư. Nhưng với một thứ mang tính nghệ thuật như sân vườn
            chủ đề, chúng tôi cần nghiên cứu nhiền hơn nữa, bởi vì mỗi góc nhìn
            cây đều cho ta một cảm giác khác nhau.
          </h1>
          <h1 className="mt-4">
            Việc sử dụng thực tế có giống với công năng đặt ra ban đầu hay không
            ? Không có một tiêu chuẩn cho cảnh quan giống như các tiêu chuẩn
            kiến trúc. Và các chủ đầu tư cũng có lúc chưa biết bản thân có sử
            dụng những chức năng mà họ mong muốn trong giai đoạn lập nhiệm vụ
            thiết kế hay không.
          </h1>
          <h1 className="mt-4">
            Vì vậy, chúng tôi rất hay tự bổ sung phương án trong quá trình thi
            công có thể nhiều hoặc ít. Điều đó giúp chất lượng cho không gian
            bạn đang tận hưởng luôn được tốt hơn.
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/2.jpg")}
          />
          <h1 className="mt-4 font-semibold text-2xl">
            Con người thật, giá trị thật
          </h1>
          <h1 className="mt-4">
            Hơn ai hết, chúng tôi hiểu rằng các CDT luôn muốn làm việc với những
            đơn vị uy tín, chất lượng và mang lại giá trị thật sự với những gì
            CDT kỳ vọng. Đội ngũ Tutulela luôn hết mình và đặt tâm huyết vào
            từng góc của dự án, dù lớn hay nhỏ. Để làm được điều đó một cách cực
            kì chỉnh chu và phù hợp, không thể không kể đến những chuyên gia và
            cố vấn chuyên môn.
          </h1>
          <h1 className="mt-4">
            Các kiến trúc sư của chúng tôi luôn có sự hỗ trợ từ các chuyên gia
            bộ môn để đạt được những sản phẩm chất lượng nhất từ gia đoạn khảo
            sát đến thiết kế các chi tiết hoàn thiện.
          </h1>
          <h1 className="mt-4">
            Chúng tôi luôn có những quy trình riêng cho từng dự án cụ thể, để
            phù hợp với những thiết kế may đo và đo li đóng giày của chúng tôi.
            Sẽ thật là tuyệt vời khi chúng ta có thể ngồi vào bữa tiệc và nâng
            ly cùng nhau ngay tại khuôn viên dự án vừa hoàn thành.
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/con-ng.jpg")}
          />
          <h1 ref={section3Ref} className="mt-4 text-4xl font-semibold">
            Các nguyên tắc khi thiết kế cảnh quan của Tutulela
          </h1>
          <h1 className="mt-4 font-bold">Tính thống nhất</h1>
          <h1 className="mt-4">
            Là sự lặp đi lặp lại một cách có trật tự và nhất quán của các yếu tố
            như: chủng loại, chiều cao, kích thước, kết cấu, màu sắc của cây hay
            các nhóm thực vật, đá hay vật dụng trang trí trong thiết kế thi công
            cảnh quan sân vườn. Tính thống nhất tạo ra một phong cách và chủ đề
            nhất định cho mỗi thiết kế cảnh quan sân vườn.
          </h1>
          <h1 className="mt-4 font-bold">Tính đơn giản</h1>
          <h1 className="mt-4">
            Vận dụng sự đơn giản hóa nhằm làm nổi bật chủ đề của cảnh quan sân
            vườn. Người kiến trúc sư thiết kế thường tinh giản các vật liệu
            trang trí để giúp người xem tập trung hơn vào những gì mà họ cảm
            thấy là quan trọng nhất của cảnh quan.
          </h1>
          <h1 className="mt-4 font-bold">Chuyển tiếp tự nhiên</h1>
          <h1 className="mt-4">
            Nguyên tắc này thường được áp dụng để tránh sự thay đổi quá nhanh và
            đột ngột của cảnh quan, nhằm đảm bảo sự thay đổi của quang cảnh
            trong không gian diễn ra dần dần và có tính thống nhất.
          </h1>
          <h1 className="mt-4 font-bold">Tính cân đối</h1>
          <h1 className="mt-4">
            Tính cân đối xuất phát từ việc các yếu tố của cảnh quan liên quan
            với nhau như thế nào. Điều này phụ thuộc vào cường độ sử dụng, vị
            trí và năng lượng mà chúng mang lại cho người xem.
          </h1>
          <h1 className="mt-4 font-bold">Tỉ lệ</h1>
          <h1 className="mt-4">
            Có nhiều loại tỉ lệ, trong đó tỉ lệ người đề cập tới tương quan kích
            thước người và những vật xung quanh. Và bởi vì cảnh quan được thiết
            kế để con người sử dụng nên chúng ta cần đưa tỷ lệ người vào mọi chi
            tiết thiết kế trong cảnh quan.
          </h1>
          <h1 className="mt-4 font-bold">Tính chuyển động và góc nhìn</h1>
          <h1 className="mt-4">
            Kiến trúc sư luôn phải ý thức được góc nhìn tác động như thế nào khi
            thiết kế cảnh quan. Chúng bị tác động bởi việc chúng ta di chuyển
            như thế nào khi ngắm nhìn cảnh quan đó.
          </h1>
          <h1 className="mt-4">
            Tutulela có gần 10 năm hoạt động trong lĩnh vực tư vấn thiết kế &
            thi công cảnh quan. Đúc kết được rất nhiều kinh nghiệm thực tế với
            hơn 60 công trình thuộc nhiều loại dự án đã thực hiện trên khắp cả
            nước. <b>Công ty thiết kế cảnh quan Tutulela</b> tự tin là một trong
            những công ty thiết kế & và công ty thi công cảnh quan hàng đầu
            TP.HCM.
          </h1>
          <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-4 rounded">
            <h2
              ref={section4Ref}
              className="text-3xl font-bold text-center text-gray-800 mb-8"
            >
              Quy trình làm việc
            </h2>
            <h1>
              Thiết kế cảnh quan nhà ở là sự kết hợp giữa chức năng (khoa học)
              và thẩm mỹ (nghệ thuật) để mang lại giải pháp tối ưu nhất cho chủ
              đầu tư. Khi thiết kế một dự án cảnh quan đòi hỏi đơn vị thực hiện
              phải tuân theo một quy trình có hệ thống và khoa học.
            </h1>
            {/* BƯỚC 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 1</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Tư vấn hình thức, phong cách cảnh quan
              </h4>
              <p className="text-gray-700 mt-2">
                Tùy thuộc vào điều kiện tự nhiên cũng như diện tích, vị trí và
                hình dáng của dự án cũng như mong muốn của chủ đầu tư mà chúng
                tôi sẽ tư vấn những giải pháp, phong cách thiết kế phù hợp.
              </p>
            </div>

            {/* BƯỚC 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 2</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Báo giá thiết kế cảnh quan
              </h4>
              <p className="text-gray-700 mt-2">
                Mức giá để thiết kế và thi công kiến trúc tùy thuộc vào quy mô
                và độ phức tạp của dự án, kiến trúc sư của Tutulela sẽ xem xét
                và báo giá cho chủ đầu tư cụ thể và chính xác nhất.
              </p>
            </div>

            {/* BƯỚC 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 3</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Lên ý tưởng thiết kế sơ bộ (concept)
              </h4>
              <p className="text-gray-700 mt-2">
                Hiểu rõ được mong muốn của chủ đầu tư cũng như những yếu tố khác
                của dự án. Sau khi ký hợp đồng, kiến trúc sư thiết kế của công
                ty sẽ lên ý tưởng và thiết kế sơ bộ để gửi tới khách hàng.
              </p>
            </div>

            {/* BƯỚC 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 4</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Khai triển hồ sơ bản vẽ thi công cảnh quan
              </h4>
              <p className="text-gray-700 mt-2">
                Sau khi chủ đầu tư hài lòng với bản vẽ thiết kế concept, kỹ sư
                của Tutulela sẽ bắt đầu khai triển hồ sơ bản vẽ, bóc tách khối
                lượng công trình để chuẩn bị thi công.
              </p>
            </div>

            {/* BƯỚC 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 5</h3>
              <h4 className="text-2xl font-bold text-gray-600">Thi công</h4>
              <p className="text-gray-700 mt-2">
                Đội ngũ kỹ sư và nhân viên thi công của Tutulela sẽ thi công
                công trình theo hồ sơ được triển khai. Kỹ sư giám sát công trình
                sẽ đảm bảo tiến độ thi công, chất lượng công trình và các yếu tố
                liên quan khác khi thi công dự án.
              </p>
            </div>

            {/* BƯỚC 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 6</h3>
              <h4 className="text-2xl font-bold text-gray-600">Bàn giao</h4>
              <p className="text-gray-700 mt-2">
                Sau khi thi công hoàn chỉnh, Tutulela sẽ tiếp tục dõi và bảo trì
                các hạng mục liên quan một thời gian, sau đó sẽ bàn giao lại tất
                cả cho chủ đầu tư quản lý. Nếu có vấn đề phát sinh, Tutulela sẽ
                hỗ trợ trong khả năng cho phép.
              </p>
            </div>
          </div>
          <h1 ref={section5Ref} className="mt-4 font-semibold text-4xl">
            9 Mẫu thiết kế cảnh quan tuyệt đẹp
          </h1>
          <h1 className="mt-4">
            Tutulela gửi đến quý khách TOP mẫu thiết kế cảnh quan hùng vỹ, đẳng
            cấp nhất. Đây cũng là những hình ảnh dự án thực tế mà đội ngũ
            Tutulela thực hiện.
          </h1>
          <h1 ref={section6Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan nghĩa trang gia đình
          </h1>
          <Image
            className="mt-4"
            src={require("../../assets/service/LandscapeService/Lạc-Hồng-Viên-tháng-7-36-1-scaled.jpg")}
          />
          <div className="mt-4">
            Tutulela rất vinh dự khi được gia đình chủ đầu tư tin tưởng giao
            nhiệm vụ quy hoạch và thiết kế nghĩa trang cho gia tộc Huỳnh Trần.
            Nghĩa trang có diện tích 400m2 nằm trong khuôn viên Hoa Viên Nghĩa
            Trang Bình Dương, được quy hoạch với 20 mộ phần, góc thờ Địa Tạng Bồ
            Tát, một căn nhà chòi có sức chứa 20 người và một hồ cá koi
          </div>
          <h1 ref={section7Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan quán cafe sân vườn
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/thiet-ke-quan-cafe-san-vuon-_f6f6bac2ef6143a69902b7beb8eb2a44_grande.jpg")}
          />
          <div className="mt-4">
            Urban Coffee là một mô hình kết hợp giữa dịch vụ F&B và khu lưu trú.
            Phía trước là quán cafe phục vụ đa dạng đồ uống cùng các món ăn nhẹ,
            còn phía sau là homestay đầy đủ tiện nghi. Quán mang thiết kế hiện
            đại, tối giản nhưng vẫn tạo cảm giác gần gũi với thiên nhiên nhờ sự
            sắp đặt tinh tế của cây xanh. Khách hàng khi đến đây sẽ có cảm giác
            như bước vào một góc đô thị yên bình, tách biệt khỏi nhịp sống vội
            vã của thành phố.
          </div>
          <h1 ref={section8Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan không gian thiền định phong cách vườn Zen
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/090903baoxaydung_image005.jpg")}
          />
          <div className="mt-4">
            An Garden là một dự án phi lợi nhuận hướng đến cộng đồng, chủ đầu tư
            là người yêu thích thiền và ao ước tạo ra một không gian hành thiền
            đúng nghĩa dành cho cộng đồng. Kiến trúc và cảnh quan nơi đây được
            thiết kế theo phong cách vườn Zen Nhật Bản, định hướng không gian
            tĩnh nhằm phục vụ cho mục đích thiền.
          </div>
          <h1 ref={section9Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan khu resort tuyệt đẹp về đêm
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/thiet-ke-khach-san-co-ho-boi-ba-na.jpg")}
          />
          <h1 ref={section10Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan nhà hàng kiểu Thái đẹp
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/Mai-che-nha-hang-mp-thai-seafood-restaurant-nha-trang-03.webp")}
          />
          <div className="mt-4">
            Cảnh quan nhà hàng MP Thái Seafood được thiết kế đơn giản với phong
            cách kiến trúc kiểu Thái, xung quanh là các loại cây mang hơi thở
            nhiệt đới như: chà là, chuối rẻ quạt, cọ… cùng một số loại cây bán
            sa mạc như: phát tài núi, sứ,… Tất cả hòa quyện tạo nên một không
            gian tinh tế và không kém phần ấn tượng, độc đáo.
          </div>
          <h1 ref={section11Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan sân vườn Nhật Bản
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/japangarden-greenmore-1.jpg")}
          />
          <div className="mt-4">
            Cảnh quan biệt thự không nhất thiết phải cầu kỳ, phức tạp. Thiết kế
            sân vườn giúp tôn lên vẻ đẹp của không gian kiến trúc, đặc biệt là
            sân vườn Nhật Bản. Toàn bộ khu vườn sử dụng các yếu tố đậm chất Nhật
            Bản như: đèn đá, tùng vạn niên, bàn đá tự nhiên, đá xanh,… Tất cả
            kết hợp với nhau qua bàn tay của đội ngũ kiến trúc sư của Tutulela
            đã tạo nên một công trình mang trong mình vẻ đẹp tối giản của vườn
            Nhật hòa quyện với các đường nét hiện đại.
          </div>
          <h1 ref={section12Ref} className="mt-4 font-semibold text-2xl">
            Mẫu cảnh quan sân vườn phong cách “bình yên”
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/thiet-ke-san-vuon-dep-me-ly-min.jpg")}
          />
          <div className="mt-4">
            Một dự án thiết kế nhà vườn của Tutulela với diện tích cảnh quan lên
            đến 3000m2 ở ngoại ô thành phố Tam Kỳ, Quảng Nam. Lấy phong cách
            hiện đại chủ đạo hòa quyện với nét giản dị, bình yên của làng quê
            Việt Nam, một thiết kế cảnh quan sân vườn hoàn hảo trong xu hướng
            thiết kế năm 2024.
          </div>
          <h1 ref={section13Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan đô thị
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/100-mau-y-tuong-thiet-ke-canh-quan-dep-an-tuong-phong-thuy-8364-6.jpg")}
          />
          <div className="mt-4">
            Khi quy hoạch khu đô thị hay khu dân cư đều cần phải có thiết kế
            kiến trúc cảnh quan, bởi những lợi ích thiết thực của nó. Việc gia
            tăng mảng xanh cho dự án giúp cư dân trong khu vực tận hưởng được
            môi trường trong lành và những tiện ích xung quanh. Cảnh quan của
            mỗi khu đô thị đều có những đặc điểm thiết kế và tiện ích khác nhau,
            nhưng tựu trung lại đều đáp ứng bốn tiêu chí: sinh thái, sôi động,
            tiện nghi và hiện đại.
          </div>
          <h1 ref={section14Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan công viên
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/567d036f07dcad30a3dba47c17cf507b.png")}
          />
          <div className="mt-4">
            Thiết kế cảnh quan công viên chiếm một vị trí quan trọng tại các khu
            dân cư hay các thành phố lớn. Công viên được xem là lá phổi xanh
            giúp cải thiện chất lượng không khí, nâng cao sức khỏe của cư dân
            trong khu vực. Bên cạnh đó, tại các công viên thường được tích hợp
            các tiện ích như: Vườn tường thẳng đứng, máy tập thể dục, sân BBQ,
            khu vui chơi trẻ em,… để cư dân giải trí, thư giãn, nâng cao chất
            lượng cuộc sống.
          </div>
          <h1 ref={section15Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan nhà điều hành khu công nghiệp
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/567d036f07dcad30a3dba47c17cf507b.png")}
          />
          <div className="mt-4">
            Tutulela thực hiện công tác quy hoạch tổng thể, thiết kế kiến trúc
            và cảnh quan cho dự án nhà điều hành khu công nghiệp Hựu Thạnh của
            chủ đầu tư IDICO. Điểm nhấn đặc trưng và nổi bật nhất của cảnh quan
            là các công trình điêu khắc trang trí lạ mắt với màu đỏ nổi bật. Cây
            trồng mà Tutulela sử dụng chủ yếu là các loại cây nhiệt đới thường
            xanh nhằm kiến tạo không gian trong lành và mát mẻ. Một hồ nước lớn
            với hình khối ôm quanh tòa nhà góp phần điều hòa nhiệt độ. Lối đi
            trong khuôn viên được thiết kế thêm mái che và các ô kính nhiều màu
            để trang trí.
          </div>
          <h1 ref={section16Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế khu tâm linh theo phong thủy
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/Ảnh chụp Màn hình 2022-01-14 lúc 1.03.26 CH.png")}
          />
          <div className="mt-4">
            Miếu Ông Lão là ngôi miếu cũ nằm sát bờ kênh trên trục N2 thuộc đồ
            án quy hoạch phân khu 1/200 khu công nghiệp Hựu Thạnh IDICO. Với dự
            án này, đội ngũ kiến trúc sư của Tutulela tạo ra một không gian tâm
            linh mang tính chất hiện đại nhưng vẫn giữ được sự tôn nghiêm vốn có
            của miếu Ông Lão. Miếu cũ sẽ được phá bỏ, di dời đến vị trí khác và
            xây dựng ngôi miếu mới đẹp hơn, trang nghiêm hơn. Tại vị trí ngôi
            miếu cũ, Tutulela đặt một công trình điêu khắc bằng đá để tạo dấu ấn
            tâm linh.
          </div>
          <h1 ref={section17Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan đài truyền hình
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/dai-truyen-hinh-binh-phuoc-feature-img.jpg")}
          />
          <div className="mt-4">
            Ý tưởng của dự án này được lấy cảm hứng từ những cánh rừng cao su,
            tiêu, điều, cà phê,… những loài cây đặc trưng của nông nghiệp Bình
            Phước, hòa quyện cùng với những công trình kiến trúc hiện đại và
            những loài cây mang âm hưởng nhiệt đới.
          </div>
          <h1 ref={section18Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan nghĩa trang gia tộc
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/mau-khuon-vien-lang-mo-gia-dinh-1.jpg")}
          />
          <div className="mt-4">
            Mặc dù là không gian nghĩa trang nhưng không tạo cảm giác âm u, lạnh
            lẽo của một nghĩa trang thông thường, cảnh quan gần giống một công
            viên nhưng vẫn giữ được sự nghiêm trang, lịch sự. Khi bước chân vào
            nơi đây, các thành viên trong gia đình sẽ cảm thấy như đây là nhà
            của mình – nơi mà ông bà, chú bác, anh chị em mình đã an nghỉ.
          </div>
          <h1 ref={section19Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan khu nghỉ dưỡng “săn mây”
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/image-20211030092711-2.jpeg")}
          />
          <div className="mt-4">
            Các căn nhà trên đồi đều có view hướng về phía chân trời và được
            thiết kế theo kiểu không gian mở để lấy ánh sáng tự nhiên, đồng thời
            giúp ngôi nhà thông thoáng hơn. Do được đặt tại khu vực có độ cao
            gần như là nhất nhì thành phố Bảo Lộc, nên mỗi lúc bình minh và
            hoàng hôn, du khách chỉ cần phóng tầm mắt về phía chân trời là có
            thể ngắm nhìn được khung cảnh biển mây cực kỳ ấn tượng.
          </div>
          <h1 ref={section20Ref} className="mt-4 font-semibold text-2xl">
            Mẫu thiết kế cảnh quan resort nghỉ dưỡng ven hồ
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/ky-anh-resort-feature-img.jpg")}
          />
          <div className="mt-4">
            Kỳ Anh Resort là một bán đảo hướng ra hồ Sông Rác, Tutulela đã tận
            dụng tối đa đường bờ hồ để chủ đầu tư có thể khai thác tối đa quang
            cảnh tuyệt đẹp của hồ nước ngọt nhân tạo lớn nhất Hà Tĩnh. Không khó
            để nhận thấy khu phức hợp khách sạn và toàn bộ các bungalow nghỉ
            dưỡng đều view hướng ra hồ.
          </div>
          <h1 ref={section21Ref} className="mt-4 font-semibold text-4xl">
            Bảng báo giá thiết kế cảnh quan
          </h1>
          <div className="mt-4">
            Với đội ngũ kỹ sư và nhân viên thi công chuyên nghiệp và dày dạn
            kinh nghiệm của Tutulela, chúng tôi cam kết mang đến cho căn nhà của
            bạn một không gian sân vườn hoàn hảo nhất. Tối ưu chi phí thi công
            và loại bỏ tối đa các lãng phí là tiêu chí hàng đầu của Tutulela.
          </div>
          <h2 className="text-center text-lg font-bold my-4">
            BÁO GIÁ THIẾT KẾ CẢNH QUAN
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-400 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">STT</th>
                <th className="border border-gray-400 px-4 py-2">
                  DIỆN TÍCH (m2)
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  ĐƠN GIÁ (VNĐ)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  100m2 đầu tiên
                </td>
                <td className="border border-gray-400 px-4 py-2">210,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  100 – 500 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">150,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  500 – 1.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">110,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  1.000 – 2.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">95,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  2.000 – 5.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">70,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  5.000 – 10.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">7</td>
                <td className="border border-gray-400 px-4 py-2">
                  10.000 – 20.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">20,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">8</td>
                <td className="border border-gray-400 px-4 py-2">
                  20.000 – 50.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">9</td>
                <td className="border border-gray-400 px-4 py-2">
                  50.000 – 100.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">7,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">10</td>
                <td className="border border-gray-400 px-4 py-2">
                  Trên 100.000 m2
                </td>
                <td className="border border-gray-400 px-4 py-2">5,000</td>
              </tr>
            </tbody>
          </table>
          <h1 className="mt-4">
            Các hạng mục và chi phí được liệt kê ở dưới đây chỉ mang tính chất
            tham khảo và chung nhất cho mọi dự án sân vườn – cảnh quan.
          </h1>
          <div className="mt-4 mx-4">
            <div className="bg-[#68727d] p-2 border-2 border-[#7f7f7f] shadow-2xl text-white rounded flex text-center justify-center">
              <Image
                className="w-4 h-4 mt-2 mr-2"
                src={require("../../assets/icon/expand.png")}
              />
              Mời xem mẫu và nhận báo giá thiết kế cảnh quan chi tiết miễn phí
              (click tại đây)
            </div>
          </div>
          <h1 ref={section22Ref} className="mt-4 font-semibold text-4xl">
            Vì sao nên chọn Tutulela?
          </h1>
          <div className="mt-4">
            Công ty thiết kế thi công cảnh quan SGL Vietnam với đội ngũ kiến
            trúc và kỹ sư được đào tạo chuyên nghiệp tại các trường đại học
            chuyên về cảnh quan tại TPHCM. Chúng tôi là đội ngũ trẻ đầy nhiệt
            huyết, đam mê với lĩnh vực thiết cảnh quan. Tận tâm, am hiểu từng sở
            thích mong muốn, ý tưởng và yêu cầu của khách hàng để tư vấn và đưa
            ra những giải pháp về thiết kế cảnh quan phù hợp nhất.
          </div>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/LandscapeService/choose.jpg")}
          />
          <div className="mt-4">
            <div className="mt-4">
              Công ty thiết kế thi công cảnh quan Tutulela với đội ngũ kiến trúc
              và kỹ sư được đào tạo chuyên nghiệp tại các trường đại học chuyên
              về cảnh quan tại TPHCM. Chúng tôi là đội ngũ trẻ đầy nhiệt huyết,
              đam mê với lĩnh vực thiết cảnh quan. Tận tâm, am hiểu từng sở
              thích mong muốn, ý tưởng và yêu cầu của khách hàng để tư vấn và
              đưa ra những giải pháp về thiết kế cảnh quan phù hợp nhất.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeService;
