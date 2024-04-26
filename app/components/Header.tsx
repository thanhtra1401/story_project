"use client";
import { useState } from "react";
import MenuHeader from "./MenuHeader";

function Header() {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  return (
    <div className="px-[180px] h-[50px] bg-[#14425D] flex  items-center w-full">
      <div className="uppercase text-white h-full text-2xl leading-loose w-[200px] cursor-pointer">
        <i className="fa-solid fa-book-open"></i>
        <span className="ml-2 ">truyện full</span>
      </div>
      <MenuHeader name="Danh sách" icon="fa-solid fa-list" />
      <MenuHeader name="Thể loại" icon="fa-solid fa-list" />
      <MenuHeader name="Phân loại theo chương" icon="fa-solid fa-list" />
      <MenuHeader name="Truyện tranh" icon="fa-solid fa-square" />
      <MenuHeader name="Tùy chỉnh" icon="fa-solid fa-gear" />

      <div className="ml-auto flex">
        <input
          type="text"
          className="py-[4px] px-3 outline-none "
          placeholder="Tìm kiếm..."
        />
        <div className="flex items-center justify-center px-3 cursor-pointer hover:bg-gray-200 bg-white">
          <i className="fa-solid fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
