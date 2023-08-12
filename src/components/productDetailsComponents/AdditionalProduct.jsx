import { BiPlus } from "react-icons/bi";

const AdditionalProduct = () => {
  return (
    <>
      <div className="px-6 pb-24">
        <h2 className="text-xl font-bold">Abbinalo a TALOS</h2>
        <div>
          <div className="flex pt-3 space-x-4">
            <div className="pt-2 w-1/2 space-x-2">
              <div>
                <div className="flex justify-between">
                  <h2 className="px-2 rounded bg-[#FED2AA] w-12">new</h2>
                </div>
                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/S3SDxBc/14031092-20912948-480.png"
                  alt=""
                />

                <div className="text-center">
                  <h3 className="text-md font-bold">Energia</h3>
                  <h4 className="text-md">VITAL B</h4>
                  <p className="text-md">€ 28.70</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <BiPlus className="text-2xl hover:cursor-pointer" />
            </div>
            <div className="pt-2 w-1/2">
              <div>
                <div className="flex justify-between">
                  <h2 className="px-2 rounded bg-[#FFB6B6] w-30">-10% off</h2>
                </div>
                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
                  alt=""
                />

                <div className="text-center">
                  <h3 className="text-md font-bold">Benessere mentale</h3>
                  <h4 className="text-md">BIOFENIX</h4>
                  <p className="text-md">€ 23.40 € 16.40</p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#ECDFCE] text-md font-bold hover:cursor-pointer p-4 w-full my-2 rounded">
            Aggiungi entrambi al carrello
          </button>
        </div>
      </div>
      <div className="drop-shadow-2xl fixed bottom-0 right-0 left-0 bg-white flex justify-between items-center p-6">
        <div>
          <p className="text-[#000000] text-md font-semibold">
            340${" "}
            <sup className="">
              <del>380$</del>
            </sup>
          </p>
          <p className="text-sm font-semibold text-[#000000]">15% off</p>
        </div>
        <button className="bg-[#ECDFCE] text-md font-bold hover:cursor-pointer p-3 rounded">
          Aggiungi al carrello
        </button>
      </div>
    </>
  );
};

export default AdditionalProduct;
