const BannerCategory = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-black text-start">
        Acquisti per categorie
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://i.ibb.co/N7BSZ50/image-1.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-md">Body Care</h3>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://i.ibb.co/mNMsQMC/image.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-md">Skin Care</h3>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://i.ibb.co/Qrw6vRs/image-2.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-md">Igiene orale</h3>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://i.ibb.co/TwJZsRW/image-1625.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-md">Hair Care</h3>
        </div>
      </div>
    </div>
  );
};

export default BannerCategory;
