import { useState } from "react";

const searchData = [
  {
    _id: 1,
    image: "https://i.ibb.co/PY0dfXM/294967aca7a45d9d7accae.png",
    text: "Body Care",
  },
  {
    _id: 2,
    image: "https://i.ibb.co/B3sbTYr/Group-11-Copy-2.png",
    text: "Skin Care",
  },
  {
    _id: 3,
    image: "https://i.ibb.co/qRgBLg6/d1a0a522423d6fd8304c00.png",
    text: "Hair Care",
  },
  {
    _id: 4,
    image: "https://i.ibb.co/MC5Q33n/0f371822bd325d6c9eb6d5.png",
    text: "Igiene orale",
  },
];
const searchData2 = [
  {
    _id: 1,
    image: "https://i.ibb.co/Gkcp5Zh/Group-11-Copy-15.png",
    text: "Igiene orale",
  },
  {
    _id: 2,
    image: "https://i.ibb.co/Swf0H6P/294967aca7a45d9d7accae-1.png",
    text: "Allergie",
  },
  {
    _id: 3,
    image: "https://i.ibb.co/tZgsRFb/Group-11-Copy.png",
    text: "Benessere gastrointestinale",
  },
  {
    _id: 4,
    image: "https://i.ibb.co/HXmDzH4/Group-11-Copy-3.png",
    text: "Benessere mentale",
  },
  {
    _id: 5,
    image: "https://i.ibb.co/J2ht3rf/Group-11-Copy-2-1.png",
    text: "Benessere gastrointestinale",
  },
  {
    _id: 6,
    image: "https://i.ibb.co/jRRrrCn/Group-11-Copy-5.png",
    text: "Benessere sessuale",
  },
  {
    _id: 7,
    image: "https://i.ibb.co/6BgsDXw/Group-12.png",
    text: "Cellulite",
  },
  {
    _id: 8,
    image: "https://i.ibb.co/cT879Gx/Group-11-Copy-1.png",
    text: "Circolazione",
  },
  {
    _id: 9,
    image: "https://i.ibb.co/GxNjFtF/Group-11-Copy-6.png",
    text: "Cellulite",
  },
  {
    _id: 10,
    image: "https://i.ibb.co/rp21Z8k/Group-11-Copy-8.png",
    text: "Depurativo",
  },
  {
    _id: 11,
    image: "https://i.ibb.co/Zms8t0p/Group-11-Copy-7.png",
    text: "Dolori",
  },
  {
    _id: 12,
    image: "https://i.ibb.co/FYrBNXd/Group-11-Copy-9-1.png",
    text: "Energia",
  },
  {
    _id: 13,
    image: "https://i.ibb.co/TKQvDyG/Group-22.png",
    text: "Ferro",
  },
  {
    _id: 14,
    image: "https://i.ibb.co/W2w50fM/Group-11-Copy-2.png",
    text: "Ferro",
  },
  {
    _id: 15,
    image: "https://i.ibb.co/YBnnc6H/Group-11-Copy-10.png",
    text: "Ferro",
  },
  {
    _id: 16,
    image: "https://i.ibb.co/qDWP6V5/Group-11-Copy-12.png",
    text: "Ferro",
  },
  {
    _id: 17,
    image: "https://i.ibb.co/Hzf9KSf/Group-11-Copy-11.png",
    text: "Ferro",
  },
  {
    _id: 18,
    image: "https://i.ibb.co/TBhRsZd/Group-11-Copy-13.png",
    text: "Ferro",
  },
  {
    _id: 19,
    image: "https://i.ibb.co/CwLCw7S/Group-11-Copy-14.png",
    text: "Ferro",
  },
];

const ShopeSearchComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContent =
    activeTab === 1 ? (
      <div className="grid grid-cols-2 gap-4">
        {searchData?.map((search) => (
          <div key={search?._id} className="relative hover-cursor-pointer">
            <img src={search?.image} alt="image" className="w-full h-auto" />
            <div className="absolute left-4  bottom-10 w-full">
              <p className="text-white text-2xl font-bold">{search?.text}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-4">
        {searchData2?.map((search) => (
          <div key={search?._id} className="relative hover-cursor-pointer">
            <img src={search?.image} alt="image" className="w-full h-auto" />
            <div className="absolute left-4  bottom-10 w-full">
              <p className="text-white text-2xl font-bold">{search?.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  return (
    <div className="py-4">
      <div className="flex space-x-6">
        <button
          onClick={() => setActiveTab(1)}
          className={`text-[#000000] text-lg font-semibold hover:cursor-pointer pb-2 ${
            activeTab === 1 ? "border-b-2 border-black" : ""
          }`}
        >
          Cosmesi
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`text-[#000000] text-lg font-semibold hover:cursor-pointer pb-2 ${
            activeTab === 2 ? "border-b-2 border-black " : ""
          }`}
        >
          Integratori alimentari
        </button>
      </div>
      <div className="py-4">{tabContent}</div>
    </div>
  );
};

export default ShopeSearchComponent;
