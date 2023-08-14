import { useNavigate } from "react-router-dom";

const ProfileFour = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8">
      <div className="flex items-center gap-8 mt-6">
        <img
          onClick={() => navigate(-1)}
          className="h-9 w-9"
          src="https://cdn-icons-png.flaticon.com/128/3877/3877262.png"
          alt=""
        />
        <h2 className="font-bold text-black text-[22px]">
          Modalità di pagamento
        </h2>
      </div>

      <div className="mt-10 bg-[#F1F5F9] w-80 px-4 py-3 shadow-md gap-6">
        <div className="ml-16 font-bold text-[19px]">Credit/Debit Card</div>

        <div className="flex row gap-4 mx-2 items-center">
          <div className="">
            <img
              className="h-10 w-10"
              src="https://cdn-icons-png.flaticon.com/128/3596/3596091.png"
              alt=""
            />
          </div>

          <div>
            <h2>1110 0000 0000 0000</h2>
            <h3>03/27</h3>
          </div>
        </div>
        <div className="ml-16 underline text-[#B98759] font-bold">Rimuovi</div>
      </div>

      <div className="mt-8 bg-[#F1F5F9] w-80 px-4 py-3 shadow-md gap-6">
        <div className="flex gap-2">
          <div className="font-semibold text-[19px]">Carta di credito</div>
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/349/349221.png"
            alt=""
          />
          <img
            className="w-8 h-5 mt-1"
            src="https://cdn-icons-png.flaticon.com/128/11041/11041055.png"
            alt=""
          />
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/39/39119.png"
            alt=""
          />
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/349/349228.png"
            alt=""
          />
        </div>

        <div className="flex row gap-2 mx-0 items-center mt-4">
          <div className="">
            <img
              className="h-7 w-7 mb-4"
              src="https://cdn-icons-png.flaticon.com/128/657/657076.png"
              alt=""
            />
          </div>
          <div className="mb-4 w-80">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* 2nd form */}
        <div className="flex mx-auto mt-0 gap-4">
          <div className="mb-4 w-40 ml-8">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/AA
                  CVC"
            />
          </div>
          <div className="mb-4 w-40">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="CVC"
            />
          </div>
        </div>
        <div className=" flex justify-center mt-2 space-x-4">
          <button className="bg-[#ECDFCE] text-black font-semibold py-2 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-normal">
            Aggiungi metodo di pagamento
          </button>
        </div>
      </div>
      <div className="mx-24 h-[5px] w-40 bg-black mt-44 rounded "></div>
    </div>
  );
};

export default ProfileFour;
