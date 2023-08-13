import { GoHome } from "react-icons/go";

const PaymentTopText = () => {
  return (
    <div className="py-6 space-y-4">
      <div className="bg-[#F1F5F9] flex items-center space-x-4 p-4">
        <GoHome className="text-6xl" />
        <div>
          <h2 className="text-xl font-bold text-[#000000]">Carrello</h2>
          <p className="text-[#000000]">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p>+1 9871230000</p>
          <p className="text-[#A05611] font-bold underline">
            Modifica indirizzo
          </p>
        </div>
      </div>
      <div className="bg-[#F1F5F9] p-4 ">
        <h3 className="text-lg font-semibold border-b py-2 border-[#CBD5E1]">
          Riepilogo ordine
        </h3>
        <div className="space-y-4 border-b py-2 border-[#CBD5E1]">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-md  font-semibold ">
                Pacchetto Allergie × 1
              </h2>
              <h2 className="text-md  font-semibold ">BIOFENIX × 1</h2>
            </div>
            <h2 className="text-xl font-bold text-[#000000]">€51,80</h2>
          </div>
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-md  font-semibold ">Omaggio per:</h2>
              <h2 className="text-md  font-semibold ">contenuto carrello</h2>
            </div>
            <h2 className="text-md font-semibold text-[#000000]">Gratis</h2>
          </div>
        </div>
        <div className="space-y-4 border-b py-4 border-[#CBD5E1]">
          <div className="flex items-baseline justify-between">
            <h2 className="text-md  font-semibold ">Subtotale</h2>

            <h2 className="text-md font-semibold text-[#000000]">€51,80</h2>
          </div>
          <div className="flex justify-between items-baseline">
            <h2 className="text-md  font-semibold ">Spedizione</h2>

            <h2 className="text-md font-semibold text-[#000000] w-1/2 text-end">
              {" "}
              costi di spedizione vengono calcolati durante il pagamento.
            </h2>
          </div>
        </div>
        <div className="flex justify-between items-baseline py-4">
            <h2 className="text-md  font-xl ">Totale</h2>

            <h2 className="text-xl font-semibold text-[#000000] w-1/2 text-end">
              {" "}
              €51,80
            </h2>
          </div>
      </div>
    </div>
  );
};

export default PaymentTopText;
