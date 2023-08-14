const ProfileSix = () => {
  return (
    <div className="mx-8">
      <div className="flex items-center gap-20 mt-6">
        <img
          className="h-9 w-9"
          src="https://cdn-icons-png.flaticon.com/128/3877/3877262.png"
          alt=""
        />
        <h2 className="font-bold text-black text-[22px] text-center">
          Dettagli profilo
        </h2>
      </div>

      <div className="w-80 max-w-md p-6 bg-white rounded shadow-md mt-10">
        {/* First Row - Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            NOME *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>

        {/* Second Row - Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            CELLULARE *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="+1 987 111 0000"
          />
        </div>

        {/* Second Row - Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            INDIRIZZO EMAIL *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="noah@solonatura.scom"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            DATA DI NASCITA (OPZIONALE)
          </label>
          <input
            type="date"
            id="email"
            name="email"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </div>
      <div className=" flex justify-start mt-20">
        <button className="bg-black text-white font-semibold py-3 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-normal">
          Salva dettagli
        </button>
      </div>
      <div className="mx-24 h-[5px] w-40 bg-black my-10 rounded"></div>
    </div>
  );
};

export default ProfileSix;
