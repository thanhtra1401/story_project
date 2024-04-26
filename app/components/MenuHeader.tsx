import { useEffect, useRef, useState } from "react";

function MenuHeader(Props: { name: string; icon: string }) {
  const [openSub, setOpenSub] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSub(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="cursor-pointer text-white relative ">
      <div
        className={
          openSub
            ? "bg-[#2F566D] h-[50px] flex items-center px-[15px]"
            : "h-[50px] flex items-center px-[15px]"
        }
        ref={ref}
        onClick={() => setOpenSub(!openSub)}
      >
        <i className={Props.icon}></i>
        <span className="ml-1">{Props.name}</span>
        <i className=" ml-1 text-xs fa-solid fa-caret-down "></i>
      </div>
      {openSub && (
        <div className="absolute bg-[#2F566D] top-[50px]">
          <div className="px-4 py-2 text-nowrap hover:bg-[#14425D] ">
            Truyện mới cập nhật
          </div>
          <div className="px-4 py-2 text-nowrap hover:bg-[#14425D]">
            Truyện mới cập nhật
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuHeader;
