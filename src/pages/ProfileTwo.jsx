import { Link, useNavigate } from "react-router-dom";

const ProfileTwo = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8">
      <div className="flex row items-center gap-24 mt-6">
        <img
          onClick={() => navigate(-1)}
          className="h-16 w-16"
          src="https://cdn-icons-png.flaticon.com/128/8571/8571453.png"
          alt=""
        />
        <h2 className="font-bold text-black text-[24px]">Ordini</h2>
      </div>

      {/* Card */}
      <Link to="/profilethird">
        <div className="mt-10 bg-[#F1F5F9] w-80 px-4 py-3 shadow-md">
          <div>
            <p className="text-black font-bold">#12312-12 Ago '22</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#D2B9A2]">In lavorazione</p>
            <img
              className="h-14 w-14"
              src="https://cdn-icons-png.flaticon.com/128/8571/8571455.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-black font-semibold">51,80 x 2 pezzi</p>
          </div>
        </div>
      </Link>

      <div className="mt-6 bg-[#F1F5F9] w-80 px-4 py-3 shadow-md">
        <div>
          <p className="text-black font-bold">#12312-12 Ago '22</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#D2B9A2]">In lavorazione</p>
          <img
            className="h-14 w-14"
            src="https://cdn-icons-png.flaticon.com/128/8571/8571455.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-black font-semibold">51,80 x 2 pezzi</p>
        </div>
      </div>

      <div className="mx-24 h-[5px] w-40 bg-black mt-64 rounded "></div>
    </div>
  );
};

export default ProfileTwo;
