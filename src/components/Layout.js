import React from "react";
// An <Outlet>nên được sử dụng trong các phần tử tuyến đường cha mẹ để hiển thị các phần tử tuyến đường con của chúng. Điều này cho phép giao diện người dùng lồng nhau hiển thị khi các tuyến con được hiển thị. Nếu tuyến gốc khớp chính xác, nó sẽ hiển thị tuyến chỉ mục con hoặc không hiển thị gì nếu không có tuyến chỉ mục.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
