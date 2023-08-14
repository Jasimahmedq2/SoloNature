import { Link } from "react-router-dom";
import BottomNavbar from "../components/menu";

const ProfileOne = () => {
  return (
    <>
      <div className="max-w-sm w-full bg-white rounded">
        <div className="flex justify-end items-center my-10 gap-32 mx-8">
          <h1 className="font-extrabold text-[20px]">Profile</h1>
          <img
            className="w-8 h-8"
            src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
            alt=""
          />
        </div>

        {/* Images and Username */}
        <div className="flex row gap-8 mx-8 items-center">
          <div className="">
            <img
              className="h-14 w-14"
              src="https://cdn-icons-png.flaticon.com/128/685/685669.png"
              alt=""
            />
          </div>

          {/* usrname and Gmail */}

          <div>
            <h2 className="font-bold text-[24px]">Mamun Khan</h2>
            <h3>mamun180037@gmail.com</h3>
          </div>
        </div>

        {/* Features */}
        <Link to="/profileTwo">
          <div className="flex justify-start items-center gap-6 mx-8 mt-16">
            <img
              className="w-7 h-7"
              src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
              alt=""
            />
            <h1 className="font-sans text-[24px]">I tuoi ordini</h1>
          </div>
        </Link>

        <div className="border-2 mt-5"></div>
        <Link to="/profileFour">
          <div className="flex justify-start items-center gap-6 mx-8 mt-6">
            <img
              className="w-7 h-7"
              src="https://cdn-icons-png.flaticon.com/128/9822/9822974.png"
              alt=""
            />
            <h1 className="font-sans text-[24px]">Modalità di pagamento</h1>
          </div>
        </Link>

        <div className="border-2 mt-5"></div>
        <Link to="/profileFive">
        <div className="flex justify-start items-center gap-6 mx-8 mt-6">
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
            alt=""
          />
          <h1 className="font-sans text-[24px]">Indirizzi</h1>
        </div>
        </Link>
        <div className="border-2 mt-5"></div>
        <Link to="/profileSix">
        <div className="flex justify-start items-center gap-6 mx-8 mt-6">
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/6380/6380189.png"
            alt=""
          />
          <h1 className="font-sans text-[24px]">Dettagli Account</h1>
        </div>
        </Link>
        <div className="border-2 mt-5"></div>
        <div className="flex justify-start items-center gap-6 mx-8 mt-6">
          <img
            className="w-7 h-7"
            src="https://cdn-icons-png.flaticon.com/128/905/905036.png"
            alt=""
          />
          <h1 className="font-sans text-[24px]">I miei Punti Natura</h1>
        </div>
        <div className="border-2 mt-5"></div>

        <div className="mx-auto h-[5px] w-40 bg-black mt-32 rounded "></div>
      </div>
      <div>
        <BottomNavbar />
      </div>
    </>
  );
};

export default ProfileOne;
