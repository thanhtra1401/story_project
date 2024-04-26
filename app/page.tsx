import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className=" ">
      <Header></Header>
      <div className="px-[180px] h-[30px] bg-white text-gray-500">
        Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy
        đủ và cập nhật liên tục.
      </div>

      <div className="bg-gradient-to-b from-[#E0E0E0] to-[#F2F2F2] px-[180px] pb-[10px] pt-[20px]">
        <div className="flex items-center justify-between">
          <div className="uppercase text-xl py-2 text-gray-600 border-b-[1px] border-gray-600 w-min text-nowrap">
            Truyện hot
            <i className="fa-solid fa-fire text-xl ml-2"></i>
          </div>
          <div className="">
            <select className="border-[1px] border-blue-400 bg-transparent uppercase w-[154px] text-xl px-2 py-1 ouline-none">
              <option value="0" className="bg-gray-200 ">
                Tất cả
              </option>
              <option value="1" className="bg-gray-200 ">
                Kiếm hiệp
              </option>
              <option value="2" className="bg-gray-200 ">
                Ngôn tình
              </option>
              <option value="3" className="bg-gray-200 ">
                Lịch sử
              </option>
            </select>
          </div>
        </div>

        <div className="mt-[20px]">
          <div className="w-full grid grid-cols-12 gap-3  ">
            <div className="col-span-2 relative h-[245px]  shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
            <div className="col-span-2 relative h-[245px] shadow-md ">
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[20px] px-[180px] bg-[#F4F4F4] grid grid-cols-12 ">
        <div className="col-span-9 mb-2">
          <div className="flex items-center justify-between">
            <div className="uppercase text-xl py-2 text-gray-600 border-b-[1px] border-gray-600 w-min text-nowrap">
              Truyện mới cập nhật
              <i className="fa-solid fa-chevron-right text-base ml-2"></i>
            </div>
            <div className="">
              <select className="border-[1px] border-blue-400 w-[154px] bg-transparent uppercase text-xl px-2 py-1 ouline-none">
                <option value="0" className="bg-gray-200 ">
                  Tất cả
                </option>
                <option value="1" className="bg-gray-200 ">
                  Kiếm hiệp
                </option>
                <option value="2" className="bg-gray-200 ">
                  Ngôn tình
                </option>
                <option value="3" className="bg-gray-200 ">
                  Lịch sử
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12  ">
            <div className="col-span-6 p-2 border-[1px] border-gray-400 border-dashed ">
              <i className="fa-solid fa-chevron-right text-sm mr-2"></i>
              <span className="hover:underline cursor-pointer">
                Đồ Đệ Xuống Núi Vô Địch Thiên Hạ
              </span>
              <span className="border-[1px] border-red-500 text-red-500 ml-2 text-sm px-1">
                Hot
              </span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed cursor-pointer">
              <span className=" hover:underline">Đô Thị</span>
              <span>, </span>
              <span className=" hover:underline">Huyền Huyễn</span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed text-blue-500 hover:underline cursor-pointer">
              Chương 1834
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed">
              10 giờ trước
            </div>
          </div>
          <div className="grid grid-cols-12  ">
            <div className="col-span-6 p-2 border-[1px] border-gray-400 border-dashed ">
              <i className="fa-solid fa-chevron-right text-sm mr-2"></i>
              <span className="hover:underline cursor-pointer">
                Đồ Đệ Xuống Núi Vô Địch Thiên Hạ
              </span>
              <span className="border-[1px] border-red-500 text-red-500 ml-2 text-sm px-1">
                Hot
              </span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed cursor-pointer">
              <span className=" hover:underline">Đô Thị</span>
              <span>, </span>
              <span className=" hover:underline">Huyền Huyễn</span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed text-blue-500 hover:underline cursor-pointer">
              Chương 1834
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed">
              10 giờ trước
            </div>
          </div>
          <div className="grid grid-cols-12  ">
            <div className="col-span-6 p-2 border-[1px] border-gray-400 border-dashed ">
              <i className="fa-solid fa-chevron-right text-sm mr-2"></i>
              <span className="hover:underline cursor-pointer">
                Đồ Đệ Xuống Núi Vô Địch Thiên Hạ
              </span>
              <span className="border-[1px] border-red-500 text-red-500 ml-2 text-sm px-1">
                Hot
              </span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed cursor-pointer">
              <span className=" hover:underline">Đô Thị</span>
              <span>, </span>
              <span className=" hover:underline">Huyền Huyễn</span>
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed text-blue-500 hover:underline cursor-pointer">
              Chương 1834
            </div>
            <div className="col-span-2 p-2 border-[1px] border-gray-400 border-dashed">
              10 giờ trước
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-2 my-2 p-2 border-[1px] border-gray-400 bg-[#ECF0F1] text-gray-700 ">
          <div className="uppercase text-xl pb-2 border-b-[1px] border-gray-400 w-min text-nowrap">
            Thể loại truyện
          </div>
          <div className="grid grid-cols-2 mt-1 capitalize ">
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
            <div className="col-span-1 hover:underline text-center mt-2 cursor-pointer">
              Tiên hiệp
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[20px] py-6 px-[180px] bg-[#F4F4F4]">
        <div className="border-b-[1px] border-gray-400">
          <div className="uppercase text-xl py-2 text-gray-600 border-b-[1px] border-gray-600 w-min text-nowrap">
            Truyện đã hoàn thành
            <i className="fa-solid fa-chevron-right text-base ml-2"></i>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <div className=" relative h-[250px] cursor-pointer shadow-md">
              <Image
                src="/than-dao-dan-ton-6060282.jpg"
                alt="card"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center mt-1 text-gray-700 font-medium ">
              Công lược trái tim
            </div>
            <div className="flex justify-center">
              <div className="text-white bg-[#2A5893] rounded-sm w-min text-nowrap text-xs px-1 ">
                Full - 250 chương
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
