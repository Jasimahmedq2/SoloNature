import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const IngredientiPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="px-6 py-4">
      <div className="flex items-center">
        <IoIosArrowBack
          onClick={handleNavigate}
          className="text-3xl hover:cursor-pointer"
        />

        <h2 className="w-50 mx-auto text-xl font-bold ">Ingredienti</h2>
      </div>
      <div className="py-8">
        <p className="font-semibold text-[#000000]">
          Vedi gli ingredienti dei singoli prodottl:
        </p>
        <h3 className="font-semibold text-xl py-3 text-[#000000]">Talos:</h3>
        <p className="font-semibold text-[#000000]">
          Ribes (Ribes nigrum L.) gemme 12%, Rosa canina (Rosa canina L.)
          giovani getti 6%, Elicriso (Helichrysum italicum (Roth.) G. Don.)
          sommità 6%, Agrimonia (Agrimonia eupatoria L.) erba 6%, Faggio (Fagus
          sylvatica L.) gemme 6%, Piantaggine (Plantago lanceolata L.)
        </p>
      </div>

      <div className="py-4">
        <div
          className="space-y-2 border-4 p-4  border-[#272727]"
        >
          <p className="font-semibold border-b p-2 border-[#272727] text-[#000000]">
            Ingredienti caratterizzanti e contenuti medi per dose massima
            giornaliera consigliata (16 vaporizzazioni)
          </p>
          <div className="border-b p-2 flex justify-between items-center border-[#272727]">
            <p className="font-semibold text-[#000000]">Ribes gemme</p>
            <p className="font-bold text-xl text-[#000000]">240mg</p>
          </div>
          <div className="border-b p-2 flex justify-between items-center border-[#272727]">
            <p className="font-semibold text-[#000000]">
              Rosa canina giovani getti
            </p>
            <p className="font-bold text-xl text-[#000000]">240mg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientiPage;
