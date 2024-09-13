import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArchitectureService = () => {
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
                Thiết kế kiến trúc là gì?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section2Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Tổng quan về ngành kiến trúc
                </li>
                <li
                  onClick={() => scrollToSection(section3Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Tại sao cần công ty tư vấn thiết kế kiến trúc?
                </li>
                <li
                  onClick={() => scrollToSection(section4Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  Các yêu cầu cần có tránh tiền mất tật mang
                </li>
                <li
                  onClick={() => scrollToSection(section5Ref)}
                  className="truncate pl-4 cursor-pointer hover:underline"
                >
                  So sánh sự khác biệt giữa thiết kế nội thất và kiến trúc
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section6Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                TOP mẫu thiết kế kiến trúc đẹp nhất 2024 – 2025
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section7Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế biệt thự vườn phong cách Nam Bộ
                </li>
                <li
                  onClick={() => scrollToSection(section8Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc nhà phố phong cách hiện đại
                </li>
                <li
                  onClick={() => scrollToSection(section9Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế biệt thự Vinhomes phong cách bán cổ điển
                </li>
                <li
                  onClick={() => scrollToSection(section10Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc biệt thự vườn 2 tầng kiểu Nhật
                </li>
                <li
                  onClick={() => scrollToSection(section11Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc biệt thự vườn phong cách tropical
                </li>
                <li
                  onClick={() => scrollToSection(section12Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc nhà vườn 1 tầng phong cách hiện đại
                </li>
                <li
                  onClick={() => scrollToSection(section13Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc biệt thự vườn phong cách làng quê
                </li>
                <li
                  onClick={() => scrollToSection(section14Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Mẫu thiết kế kiến trúc nhà diện tích nhỏ
                </li>
              </div>
              <li
                onClick={() => scrollToSection(section15Ref)}
                className="truncate cursor-pointer hover:underline"
              >
                Tutulela mang đến gì?
              </li>
              <div className="space-y-2">
                <li
                  onClick={() => scrollToSection(section16Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Quy trình làm việc thiết kế kiến trúc và thi công kiến trúc
                  của chúng tôi
                </li>
                <li
                  onClick={() => scrollToSection(section17Ref)}
                  className="pl-4 truncate cursor-pointer hover:underline"
                >
                  Tại sao chọn công ty thiết kế thi công kiến trúc Tutulela
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
          <h1>
            Để có được một công trình nhà cấp 4, nhà phố, biệt thự hay cao ốc
            đúng công năng sử dụng và phù hợp sở thích cũng như ngân sách của
            chủ đầu tư thì công tác thiết kế thi công kiến trúc cực kỳ quan
            trọng. Thiết kế kiến trúc được hiểu là việc bố trí không gian và
            phân khu chức năng theo nhu cầu sử dụng. Ngoài ra, khi đi vào chi
            tiết còn bao gồm rất nhiều công việc khác như: kết cấu, ốp lát,
            chiếu sáng, cấp thoát nước, internet,…
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/hanh-trinh-11-thang-hoc-thiet-ke-kien-truc-noi-that-tu-con-so-0-2.jpg")}
          />
          <h1 className="mt-4">
            Vì vậy, để tạo nên một không gian sống tiện nghi, thoải mái, nâng
            tầm chất lượng cuộc sống của chủ tư và các thành viên trong gia đình
            đòi hỏi người kiến trúc sư phải có chuyên môn cao, óc sáng tạo và gu
            thẩm mỹ. Trong bài viết này cùng Tutulela là công ty thiết kế thi
            công kiến trúc biệt thự nhà phố, nhà vườn đẹp chuyên nghiệp, cùng
            tìm hiểu những thông tin xoay quanh về thiết kế kiến trúc, và top
            những mẫu để thiết kế thi công kiến trúc đẹp theo xu hướng mới nhất
            hiện nay.
          </h1>
          <h1 ref={section1Ref} className="mt-4 text-4xl font-semibold">
            Thiết kế kiến trúc là gì?
          </h1>
          <h1 className="mt-4">
            Thiết kế kiến ​​trúc được hiểu một cách đơn giản là sự sắp xếp, bố
            trí không gian bao gồm kiến ​​trúc, cấp thoát nước, thông gió, chiếu
            sáng… nhằm tạo ra một không gian sống đẹp, chất lượng cao, tiện
            nghi, đầy đủ công năng tạo nên một môi trường sống thoải mái, dễ
            chịu và là niềm tự hào cho chủ nhân.
          </h1>
          <h1 className="mt-4">
            Nói đến kiến ​​trúc, nhiều người nghĩ ngay đến những kiến ​​trúc sư,
            với óc sáng tạo phong phú và nhãn quan thẩm mỹ cao, nhưng ngoài
            những phẩm chất đó thì sự am hiểu sâu rộng về kiến ​​thức kiến
            ​​trúc khoa học cũng rất quan trọng. Vì vậy, thiết kế kiến ​​trúc là
            tổng hòa của nghệ thuật, mỹ thuật và khoa học.
          </h1>
          <h1 ref={section2Ref} className="mt-4 text-4xl font-semibold">
            Tổng quan về ngành kiến trúc
          </h1>
          <h1 className="mt-4">
            Kiến trúc là một ngành nghệ thuật nhưng luôn chú trọng đến tính kỹ
            thuật, vì công việc không chỉ đòi hỏi yếu tố thẩm mỹ mà còn phải đảm
            bảo an toàn và phù hợp với thực tế. Nếu bạn yêu thích cả nghệ thuật
            và khoa học tự nhiên, kiến ​​trúc là một lựa chọn tiềm năng để bạn
            cân nhắc chọn ngành nghề trong tương lai.
          </h1>
          <h1 className="mt-4">
            Nói một cách đơn giản, kiến ​​trúc là một ngành học có vai trò mang
            đến các công trình, không gian sống, làm việc phục vụ cuộc sống hàng
            ngày của con người. Đây là nghề liên quan đến an toàn cá nhân nên
            bạn phải chuẩn bị tâm lý vì bạn có thể sẽ nghiên cứu trong thời gian
            dài, ít nhất 5 năm học và 2 năm làm việc thì mới được công nhận là
            kiến ​​trúc sư.
          </h1>
          <h1 className="mt-4">
            Tương tự như các môn học khác, năm đầu tiên ngành kiến ​​trúc sẽ
            cung cấp cho bạn những kiến ​​thức cơ bản như lịch sử, công nghệ,
            luật xây dựng, lý thuyết sơ đồ và các kỹ năng phân tích, tính toán.
            Từ năm thứ hai trở đi, bạn sẽ tập trung vào các lựa chọn cá nhân và
            bắt đầu hiểu cách triển khai các ý tưởng thành bản vẽ 3D hoàn chỉnh
            trên giấy hoặc trên máy tính. Bạn sẽ học cách sử dụng nhiều phần mềm
            thiết kế khác nhau để giúp bạn hoàn thành công việc.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/thiet-ke-kien-truc-nha-o-ket-hop-kinh-doanh-1.jpg")}
          />
          <h1 className="mt-4">
            Sau khi hoàn thành khóa học này, bạn sẽ không chỉ có kỹ năng thiết
            kế kiến ​​trúc mà còn có các kỹ năng khác như lập kế hoạch xây dựng,
            ngân sách, quản lý đầu tư, đàm phán với nhà thầu hoặc giám sát an
            toàn lao động trên công trường. Với một bộ kỹ năng đa dạng, bạn sẽ
            có nhiều con đường sự nghiệp ngoài việc chỉ là một kiến ​​trúc sư.
          </h1>
          <h1 className="mt-10">Một số chuyên ngành trong ngành kiến trúc:</h1>
          <h1 className="mt-10 font-bold">Chuyên ngành kỹ sư công trình</h1>
          <h1 className="mt-4">
            Chuyên ngành này sẽ tập trung nhiều hơn vào thi công kiến trúc, các
            khía cạnh tính toán và kỹ thuật của các tòa nhà. Nói cách khác, các
            kỹ sư quan tâm nhiều hơn đến ứng dụng, vì vậy họ thường chịu trách
            nhiệm đảm bảo rằng các tòa nhà bền vững theo thời gian và các hệ
            thống điện, thông gió luôn hoạt động tốt. Không coi trọng tính thẩm
            mỹ, các kỹ sư này thường làm những công trình không cần quá sự khéo
            léo nhưng đòi hỏi tính ứng dụng cao, chẳng hạn như kênh rạch, cầu,
            đường.
          </h1>
          <h1 className="mt-4 font-bold">Chuyên ngành thiết kế kiến trúc</h1>
          <h1 className="mt-4">
            Thiết kế kiến ​​trúc tập trung nhiều hơn vào phần sáng tạo của tòa
            nhà. Và dĩ nhiên, dù sáng tạo nhưng các thiết kế kiến trúc cũng phải
            đảm bảo không gian an toàn cho con người sinh sống và làm việc.
            Chuyên ngành này sẽ mang đến cho bạn nhiều cơ hội để bạn thỏa sức
            sáng tạo, kể cả những ý tưởng ngông cuồng nhất.
          </h1>
          <h1 className="mt-4 font-bold">Chuyên ngành thiết kế nội thất</h1>
          <h1 className="mt-4">
            Chuyên ngành sẽ giúp bạn học cách sử dụng ánh sáng, vật liệu, màu
            sắc, phong cách và nhiều yếu tố khác để tạo ra một không gian nổi
            bật và dễ chịu bên trong một tòa nhà. Mỗi dự án chắc chắn sẽ có các
            yêu cầu trang trí khác nhau, vì vậy bạn sẽ tìm hiểu tất cả các cách
            để đặt các yếu tố để tạo ra bầu không khí phù hợp cho từng nơi.
          </h1>
          <h1 className="mt-4 font-bold">Chuyên ngành thiết kế cảnh quan</h1>
          <h1 className="mt-4">
            Thiết kế cảnh quan dành cho những ai đam mê thiên nhiên, cây cỏ hoặc
            không gian ngoài trời. Do nhiều người sử dụng loại công trình này ở
            ngoài trời nên hướng thiết kế sẽ khác so với các công trình nhà ở
            riêng lẻ hoặc trung tâm thương mại. Thiết kế cảnh quan có mối liên
            quan chặt chẽ với các lĩnh vực khác như nông lâm kết hợp để cung cấp
            các giải pháp cho cây trồng, kỹ sư hệ thống xử lý các vấn đề về nước
            và thoát nước, và thậm chí cả điêu khắc để trang trí cảnh quan với
            màu sắc sống động hơn.
          </h1>
          <h1 className="mt-4 font-bold">Chuyên ngành quy hoạch đô thị</h1>
          <h1 className="mt-4">
            Chuyên ngành này có tác dụng kiểm soát toàn bộ công trình của một
            khu vực hay vùng lãnh thổ. Do đó không chỉ từng công trình riêng lẻ
            phải đẹp mà cảnh quan tổng thể nhìn từ trên cao cũng phải đẹp. Các
            công trình cũng phải đáp ứng tiêu chí không can thiệp, cản trở nhau,
            đồng thời phải gắn kết hài hòa trong một hệ sinh thái chung. Xét về
            phạm vi ảnh hưởng, quy hoạch đô thị có thể là một nghề bao hàm tất
            cả các tên gọi trên.
          </h1>
          <h1 ref={section3Ref} className="mt-4 text-4xl font-semibold">
            Tại sao cần công ty tư vấn thiết kế kiến trúc?
          </h1>
          <h1 className="mt-4">
            Tại sao phải thuê đơn vị tư vấn thiết kế kiến ​​trúc? Đây là câu hỏi
            mà nhiều nhà đầu tư đặt ra khi có ý định bắt tay vào triển khai dự
            án. Công ty thiết kế kiến ​​trúc, bạn sẽ thu được nhiều lợi ích và
            giảm bớt những khó khăn trong quá trình xây dựng. Một nhà tư vấn
            thiết kế sẽ lên bản vẽ thể hiện công trình dựa trên nhu cầu xây dựng
            của bạn.
          </h1>
          <h1 className="mt-4">
            Các kiến ​​trúc sư sẽ lập sơ đồ cấu trúc để giúp các nhà xây dựng
            định hình dự án của bạn dễ dàng hơn trong tương lai, từ đó cũng có
            thể tiết kiệm chi phí nguồn nhân lực. Đồng thời, kiến ​​trúc sư sẽ
            giúp bạn tính toán kết cấu chịu lực sao cho an toàn. Việc bố trí hệ
            thống điện, nước, thông gió… cũng đã được tính toán chi tiết giúp
            chủ đầu tư đạt được sự tiện nghi và tiết kiệm chi phí tối đa. Vì
            vậy, hãy có một công trình kiến ​​trúc lý tưởng và an toàn, đừng
            ngần ngại trích một khoản phí thuê đơn vị tư vấn thiết kế kiến
            ​​trúc.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/tu-hoc-thiet-ke-kien-truc-e1565945944666.jpg")}
          />
          <h1 ref={section4Ref} className="mt-4 text-4xl font-semibold">
            Các yêu cầu cần có tránh tiền mất tật mang
          </h1>
          <h1 className="mt-4">
            Khi lựa chọn một dịch vụ thiết kế kiến trúc, ngoài việc tìm kiếm một
            nơi uy tín và chất lượng, bạn cũng nên chú trọng vào một số chi
            tiết:
          </h1>
          <h1 className="mt-4 font-bold">Bản vẽ thiết kế kiến trúc</h1>
          <h1 className="mt-4">
            Thiết kế kiến trúc của một công ty thiết kế nhà sẽ gồm có bản vẽ và
            thiết kế nội thất. Trong đó, bản vẽ là một bộ khoảng trên dưới 200
            trang A4 với 3 phần: Điện nước, kết cấu và kiến trúc.
          </h1>
          <h1 className="mt-4">
            Để có một ngôi nhà như ý muốn thì việc đầu tiên gia chủ cần chú ý đó
            là bản vẽ thiết kế. Khi lựa chọn dịch vụ kiến trúc, bên phí công ty
            dịch vụ sẽ thể hiện rõ mong muốn, yêu cầu của gia chủ trực tiếp lên
            thiết kế bản vẽ của kiến trúc sư. Điều này giúp cho các bạn sẽ có
            cái nhìn trực quan hơn về ngôi nhà tương lai của mình.
          </h1>
          <h1 className="mt-4">
            Bản vẽ càng chi tiết sẽ giúp cho tốc độ và chất lượng thi công được
            đảm bảo… nhất là những rủi ro trong quá trình thực hiện sẽ được giảm
            thiểu tối đa. Thông qua đó, khách hàng cũng có thể tiết kiệm được
            chi phí xây dựng tốt nhất. Vì khi nhìn vào bản vẽ chi tiết, bạn có
            thể loại bỏ phần không quan trọng và những lỗi sai lệch với mong
            muốn của bản thân.
          </h1>
          <h1 className="mt-4 font-bold">Xem xét yếu tố phong thủy</h1>
          <h1 className="mt-4">
            Phong thủy trong kiến trúc và thiết kế nhà ở có vai trò vô cùng quan
            trọng đối với sự nghiệp, tài lộc, sức khỏe của gia chủ theo quan
            điểm của người Việt. Khi thiết kế nhà phố đẹp, kiến ​​trúc sư sẽ nắm
            thông tin về tuổi của gia chủ, vị trí, quê quán, nhu cầu sử dụng… để
            tìm ra giải pháp thiết kế sao cho ngôi nhà của bạn vừa thẩm mỹ vừa
            phù hợp phong thủy nhất.
          </h1>
          <h1 className="mt-4">
            Giúp khách hàng được sống trong một không gian tiện nghi, đẹp mắt và
            phù hợp phong thủy là yêu cầu cơ bản cần có của một công ty dịch vụ
            kiến trúc. Vì sự quan trọng của ngành nghề nên dịch vụ thiết kế kiến
            trúc cũng yêu cầu ngày càng cao về chất lượng, thẩm mỹ và giá trị
            mang lại.
          </h1>
          <h1 ref={section5Ref} className="mt-4 text-4xl font-semibold">
            So sánh sự khác biệt giữa thiết kế nội thất và kiến trúc
          </h1>
          <h1 className="mt-4">
            Kiến ​​trúc là công việc biến một không gian mở thành một ngôi nhà
            có thể che mưa che nắng, có đủ các phòng, không gian bày được bài
            trí hợp lý trong nhà. Nhưng không có thiết kế nội thất thì công
            trình chỉ dừng là nơi tránh mưa tránh nắng và chưa có được những
            công năng, tiện ích cho một cuộc sống đầy đủ và tiện nghi. Kiến
            ​​trúc tạo hình khối cho ngôi nhà, thiết kế nội thất mang đến linh
            hồn, sự linh động và sang trọng cho kiến trúc.
          </h1>
          <h1 className="mt-4">
            Kiến trúc nội thất hiện nay được coi là hai ngành học có quan hệ mật
            thiết với nhau. Tuy nhiên, vẫn có những điểm khác biệt giữa ngành
            nội thất và kiến ​​trúc. Kiến thức chuyên môn và kỹ thuật là điểm
            khác biệt chính giữa hai dịch vụ. Thiết kế nội thất ít yêu cầu hơn
            so với kiến ​​trúc nội thất mặc dù nó ra đời sớm hơn. Một số điểm
            khác nhau giữa kiến thức nội thất và kiến trúc:
          </h1>
          <table className="min-w-full table-auto border-collapse border border-gray-300 mt-10">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4 text-left">
                  Kiến thức
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Thiết kế nội thất
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Thiết kế kiến trúc
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Hình khối</td>
                <td className="border border-gray-300 p-4">
                  Giúp tạo nên bố cục của giường, bàn, ghế, tủ, kệ… các mảng
                  trang trí và bố cục tổng thể của không gian nội thất ngôi nhà.
                </td>
                <td className="border border-gray-300 p-4">
                  Tổ hợp các kiến thức hình khối để có thể tạo nên hình khối của
                  các bức tường kết hợp với mái, cửa, vòm, hiên… từ đó mà tính
                  nghệ thuật được tăng cao.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Màu sắc</td>
                <td className="border border-gray-300 p-4">
                  Màu sắc là sự kết hợp của không gian nội thất: Tủ, bếp,
                  giường, kệ…
                </td>
                <td className="border border-gray-300 p-4">
                  Màu sắc của sơn tường, mái ngói, gạch men…
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Ánh sáng</td>
                <td className="border border-gray-300 p-4">
                  Tối ưu và bày trí ánh sáng của đèn trang trí trong ngôi nhà
                  sao cho đẹp mắt và tiện dụng.
                </td>
                <td className="border border-gray-300 p-4">
                  Tính toán ánh sáng tự nhiên chiếu vào không gian ngôi nhà.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Bố cục, quy hoạch về không gian
                </td>
                <td className="border border-gray-300 p-4">
                  Tối ưu hóa những đồ nội thất cần thiết trong ngôi nhà nhằm đảm
                  bảo đúng bố cục mà chủ nhân ngôi nhà mong muốn.
                </td>
                <td className="border border-gray-300 p-4">
                  Thiết kế mặt bằng không gian, cách bố trí và phân chia các
                  không gian, phòng ốc sao cho hợp lý: Đâu là phòng khách, đâu
                  là nhà vệ sinh, đâu là bếp, cửa sổ…
                </td>
              </tr>
            </tbody>
          </table>
          <h1 ref={section6Ref} className="mt-4 text-4xl font-semibold">
            TOP mẫu thiết kế kiến trúc đẹp nhất 2024 – 2025
          </h1>
          <h1 className="mt-4">
            Tutulela gửi đến quý khách TOP mẫu thiết kế kiến trúc biệt thự vườn
            đẹp và đẳng cấp nhất. Đây cũng là những hình ảnh dự án thực tế mà
            đội ngũ công ty thiết kế kiến trúc Tutulela đã thực hiện.
          </h1>
          <h1 ref={section7Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế biệt thự vườn phong cách Nam Bộ
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/Thiet-ke-biet-thu-san-vuon-Nam-Bo-3.jpg")}
          />
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/biet_thu_vuon_mien_tay_1.jpg")}
          />
          <h1 ref={section8Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc nhà phố phong cách hiện đại
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/nha-pho-hien-dai.jpg")}
          />
          <h1 ref={section9Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế biệt thự Vinhomes phong cách bán cổ điển
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/thiet-ke-biet-thu-tan-co-dien-15.jpg")}
          />
          <h1 className="mt-4">
            Tọa lạc nơi đắc địa, cuộc sống tiện nghi và sang trọng bậc nhất Sài
            Thành, khu biệt thư Vinhome Tân Cảng luôn là hình mẫu lý tưởng đáng
            mơ ước cho nhiều người trong chúng ta. Với lối thiết kế bán cổ điển,
            hơi hướng hiện đại và tối giản, tiện nghi đẳng cấp Âu Châu, sẽ đưa
            ta vào giai điệu nhịp nhàng và sôi động của cuộc sống tại Sài Gòn.
          </h1>
          <h1 ref={section10Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc biệt thự vườn 2 tầng kiểu Nhật
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/thiet-ke-biet-thu-hien-dai-2-tang-phong-cach-nhat-ban-dien-tich-626m2-view-1.jpg")}
          />
          <h1 className="mt-4">
            Văn hoá Nhật Bản luôn mang trong mình nhiều tinh hoa và giá trị nghệ
            thuật đặc sắc. Vì vậy, phong các kiến trúc Nhật Bản được rất nhiều
            chủ nhà ưa chuộng, đặc biệt là những ai yêu thích văn hoá Á Đông.
            Vĩnh Cửu House là một dự án điển hình cho lối kiến trúc – sân vườn
            Nhật Bản nói riêng và Á Đông nói chung.
          </h1>
          <h1 ref={section11Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc biệt thự vườn phong cách tropical
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/biet-thu-phong-cach-nhiet-doi-31.jpg")}
          />
          <h1 className="mt-4">
            Đề bài của chủ đầu tư đặt ra cho team thiết kế của Tutulela rất đơn
            giản: thiết kế căn nhà vườn 2 tầng có 8 phòng ngủ, sân vườn có thiết
            kế hồ cá koi làm nơi nghỉ dưỡng cho cha mẹ và là nơi con cháu về
            chơi mỗi dịp cuối tuần – lễ tết. Dựa trên kết quả của công tác
            nghiên cứu hiện trạng, Tutulela đã đưa ra một phương án thiết kế phù
            hợp với địa hình, khí hậu cũng như nhu cầu sử dụng của chủ đầu tư.
          </h1>
          <h1 ref={section12Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc nhà vườn 1 tầng phong cách hiện đại
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/nha-vuon-1-tang-7.jpg")}
          />
          <h1 ref={section13Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc biệt thự vườn phong cách làng quê
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/Thiet-ke-biet-thu-co-dien-2-1.jpg")}
          />
          <h1 className="mt-4">
            Chủ nhà mong muốn thiết kế một khuôn viên nhà vườn nghĩ dưỡng kiểu
            nông nghiệp, một nơi mà đại gia đình có thể sum họp, quây quần, nghỉ
            ngơi vào những ngày cuối tuần hoặc những dịp lễ tết. Dựa trên những
            yêu cầu của chủ nhà, đội ngũ kiến trúc sư của Tutulela đã đề xuất
            cho chủ nhà một không gian nhà vườn nghĩ dưỡng hiện đại nhưng mang
            nét truyền thống Việt.
          </h1>
          <h1 ref={section14Ref} className="mt-4 text-2xl font-semibold">
            Mẫu thiết kế kiến trúc nhà diện tích nhỏ
          </h1>
          <h1 className="mt-4">
            Do sự hạn chế về diện tích nên bài toán đặt ra cho Tutulela là phải
            thiết kế thật tinh tế để vừa đáp ứng được nhu cầu sử dụng cũng như
            tận dụng được gió và ánh sáng tự nhiên để tạo nên một không gian
            sống hài hoà. Ngoại thất của căn nhà nổi bật với tông màu trầm ấm
            của tường gạch nung, mái ngói và các chi tiết ốp gỗ.
          </h1>
          <h1 ref={section15Ref} className="mt-4 text-4xl font-semibold">
            Tutulela mang đến gì
          </h1>
          <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-4 rounded">
            <h2
              ref={section16Ref}
              className="text-3xl font-bold text-center text-gray-800 mb-8"
            >
              Quy trình làm việc thiết kế kiến trúc và thi công kiến trúc của
              chúng tôi
            </h2>

            {/* BƯỚC 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-gray-800">BƯỚC 1</h3>
              <h4 className="text-2xl font-bold text-gray-600">
                Tư vấn hình thức, phong cách kiến trúc
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
                Lập báo giá và nhiệm vụ thiết kế
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
                Lập hồ sơ thiết kế ý tưởng
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
                Lập hồ sơ thiết kế cơ sở và thiết kế thi công
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
              <h4 className="text-2xl font-bold text-gray-600">
                Tổ chức thi công từ thô đến hoàn thiện
              </h4>
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
              <h4 className="text-2xl font-bold text-gray-600">
                Nghiệm thu, bàn giao và bảo dưỡng
              </h4>
              <p className="text-gray-700 mt-2">
                Sau khi thi công hoàn chỉnh, Tutulela sẽ tiếp tục dõi và bảo trì
                các hạng mục liên quan một thời gian, sau đó sẽ bàn giao lại tất
                cả cho chủ đầu tư quản lý. Nếu có vấn đề phát sinh, Tutulela sẽ
                hỗ trợ trong khả năng cho phép.
              </p>
            </div>
          </div>
          <h1 ref={section17Ref} className="mt-4 text-4xl font-semibold">
            Tại sao chọn công ty thiết kế thi công kiến trúc Tutulela
          </h1>
          <h1 className="mt-4">
            Công ty thiết kế thi công kiến trúc, cảnh quan Tutulela với đội ngũ
            kiến trúc và kỹ sư được đào tạo chuyên nghiệp tại các trường đại học
            chuyên về kiến trúc tại TPHCM. Chúng tôi là đội ngũ trẻ đầy nhiệt
            huyết, đam mê với lĩnh vực thiết cảnh quan. Tận tâm, am hiểu từng sở
            thích mong muốn, ý tưởng và yêu cầu của khách hàng để tư vấn và đưa
            ra những giải pháp về thiết kế kiến trúc phù hợp nhất.
          </h1>
          <Image
            className="mt-4 w-[800px]"
            src={require("../../assets/service/ArchitectureService/z5781695761464_492c8ff1c8968d638ea0ecbbe56b0202.jpg")}
          />
          <h1 className="mt-4">
            Tutulela với mục tiêu trở thành nhà cung cấp dịch vụ về kiến trúc &
            cảnh quan hàng đầu Việt Nam, cam kết mang đến cho khách hàng những
            sản phẩm không chỉ đạt giá trị cao về chất lượng, giá trị thẩm mỹ mà
            còn thấy được những chi tiết về tâm hồn cũng như tư duy của con
            người để tạo nên một kiệt tác đáng tự hào.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureService;
