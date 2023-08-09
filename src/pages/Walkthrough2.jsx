const Walkthrough2 = () => {
  return (
    <div className="h-screen relative bg-gray-100">
      <div className="h-[48%] z-0 w-full">
        <img
          className="w-full"
          src="https://i.ibb.co/VgmP9mp/pic-1.png"
          alt=""
        />
      </div>
      <div className="h-[48%] absolute z-10 shadow-xl bg-white px-8 w-11/12">
        <div className="text-center">
          <h2 className="text-xl py-8  font-bold text-[#000000]">
            Attenzione e ascolto del cliente
          </h2>
          <p className="text-[#000000] text-sm font-semibold">
            TU prima ancora di noi. Ascoltare e comprendere è un dono di pochi,
            solo chi mette al centro le persone riesce a farlo davvero.
          </p>
          <div className="pt-8 pb-4">
            <div className="flex justify-center py-3 items-center">
              <div className="w-3 h-3 bg-gray-300  rounded-full mr-2"></div>
              <div className="w-3 h-3  bg-gray-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <button className="text-black text-xl border border-black w-full p-2">
              Successivo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough2;
