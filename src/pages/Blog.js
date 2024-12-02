import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import vuonHoaHong from "../assets/vuon-hoa-hong.jpg"; // Nhập hình ảnh từ src
import tieuCanhTrongNha from "../assets/tieu-canh-trong-nha-avt-405x228.jpg";
import bietThu from "../assets/mau-thiet-ke-biet-thu-hien-dai-kieu-nghi-duong-405x228.jpg";
import mauDen from "../assets/den-san-vuon-dep-avt-405x228.jpg";
import caPhe from "../assets/ca-phe-dep-nhat-405x228.jpg";
import thietKeBietThu from "../assets/thiet-ke-biet-thu-nha-vuon-avt-405x228.jpg";

const blogs = [
  {
    id: 1,
    title: "Hướng dẫn trồng và chăm sóc hoa hồng trong chậu đúng kỹ thuật",
    description:
      "Hoa hồng là một trong những loài hoa thường được nhiều người mê hoa, cây cảnh tìm",
    image: vuonHoaHong,
    date: "03/08/2024", // Thêm thuộc tính date
  },
  {
    id: 2,
    title: "#6 thiết kế tiểu cảnh trong nhà đẹp được ưa chuộng nhất 2024",
    description:
      "Ngày nay, việc tạo dựng tiểu cảnh trong nhà đã trở thành xu hướng được ưa chuộng,",
    image: tieuCanhTrongNha,
    date: "03/08/2024", // Thêm thuộc tính date
  },
  {
    id: 3,
    title: "TOP 10 mẫu thiết kế biệt thự nghỉ dưỡng lộng lẫy, xa hoa",
    description:
      "Thiết kế biệt thự nghỉ dưỡng đáp ứng không gian sống mở, thoáng mát và hòa mình",
    image: bietThu,
    date: "03/08/2024", // Thêm thuộc tính date
  },
  {
    id: 4,
    title: "Top mẫu đèn sân vườn đẹp, được ưa chuộng nhất 2024",
    description:
      "Đèn sân vườn không chỉ làm đẹp cho không gian sống của bạn mà còn tạo điều",
    image: mauDen,
    date: "29/07/2024", // Thêm thuộc tính date
  },
  {
    id: 5,
    title: "Khám phá top những quán cafe sân vườn đẹp tại Sài Gòn",
    description:
      "Nhắc đến Sài Gòn, không chỉ hiện lên những địa điểm nổi tiếng như Nhà thờ Đức",
    image: caPhe,
    date: "26/07/2024", // Thêm thuộc tính date
  },
  {
    id: 6,
    title: "Mẫu thiết kế biệt thự nhà vườn sang trọng & lưu ý cần biết",
    description:
      "Thiết kế biệt thự nhà vườn là một trong những cách tốt nhất để tối ưu và",
    image: thietKeBietThu,
    date: "18/07/2024", // Thêm thuộc tính date
  },
  // Thêm các bài blog khác tương tự
];

const blogUrls = {
  1: "/huong-dan-trong-va-cham-soc-hoa-hong-trong-chau",
  2: "/tieu-canh-trong-nha",
  3: "/thiet-ke-biet-thu-nghi-duong",
  4: "/den-san-vuon-dep",
  5: "/top-nhung-quan-cafe-san-vuon-dep-o-sai-gon",
  6: "/thiet-ke-biet-thu-nha-vuon",
  // Thêm các URL khác tương ứng với từng blog ID
};

const Blog = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 px-4 md:px-16 lg:px-56 pt-10">
      {blogs.map((blog) => (
        <Link
          to={blogUrls[blog.id]} // Kiểm tra xem có URL cụ thể cho blog hay không, nếu không thì dùng đường dẫn mặc định
          key={blog.id}
          className="bg-white shadow-md border-b-[3px] my-4 rounded-lg overflow-hidden mx-auto hover:shadow-2xl hover:cursor-pointer"
          style={{ maxWidth: "370px", minWidth: "300px", width: "100%" }}
        >
          <Image src={blog.image} className="w-full h-[250px] object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 hover:text-[#9c9b9b]">
              {blog.title}
            </h2>
            <div className="text-gray-400 text-sm mb-2">{blog.date}</div>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
