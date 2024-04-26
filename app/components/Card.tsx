import Image from "next/image";

function Card() {
  return (
    <div className=" cursor-pointer transition-transform transform hover:scale-105 relative w-full h-full">
      <Image
        src="/than-dao-dan-ton-6060282.jpg"
        alt="card"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 text-center w-full px-2 py-1 font-light text-white bg-gray-800 opacity-70">
        Thần đạo đan tôn
      </div>
    </div>
  );
}

export default Card;
