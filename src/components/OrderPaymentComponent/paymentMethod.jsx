import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="bg-[#F1F5F9] p-4 ">
        <h3 className="text-lg font-semibold border-b py-2 border-[#CBD5E1]">
          Pagamento
        </h3>
        <div className="space-y-2 pt-2">
          <div className="pt-2">
            <label className="flex items-center mb-2 space-x-6 cursor-pointer">
              <input
                type="radio"
                value="paypal"
                checked={selectedOption === "paypal"}
                onChange={handleOptionChange}
                className="custom-radio w-6 h-6"
              />
              <span className="text-md font-semibold text-[#000000]">
                Paypal
              </span>
            </label>
          </div>
          <div className="pt-2">
            <label className="flex items-center mb-2 space-x-6 cursor-pointer ">
              <input
                type="radio"
                value="Satispay"
                checked={selectedOption === "Satispay"}
                onChange={handleOptionChange}
                className="custom-radio w-6 h-6 "
              />
              <div className="flex items-center space-x-4">
                <span className="text-md font-semibold text-[#000000]">
                  Satispay
                </span>
                <img src="https://i.ibb.co/cvXQmSM/image-1630.png" alt="" />
              </div>
            </label>
          </div>
          <div className="pt-2">
            <label className="flex items-baseline mb-2 space-x-6 cursor-pointer">
              <input
                type="radio"
                value="Carta di credito"
                checked={selectedOption === "Carta di credito"}
                onChange={handleOptionChange}
                className="custom-radio w-6 h-6"
              />
              <div>
                <div className="flex items-baseline justify-between space-x-4 w-full">
                  <span className="text-md font-semibold text-[#000000]">
                    Carta di credito
                  </span>
                  <img
                    src="https://i.ibb.co/z70NhY6/Frame-1000004120.png"
                    alt=""
                  />
                </div>
                {selectedOption === "Carta di credito" && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <CiCalendarDate className="text-4xl" />
                      <div className="space-y-2">
                        <div className="bg-base-200 border border-[#CBD5E1] w-full">
                          <input
                            type="text"
                            placeholder="Numero carta"
                            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200  p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="space-y-2">
                        <div className="bg-base-200 border border-[#CBD5E1] w-full">
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full p-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-base-200 border border-[#CBD5E1] w-full">
                          <input
                            type="text"
                            placeholder="CVC"
                            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-gray-700">
                        Spedire ad un indirizzo differe
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="pt-2">
            <label className="flex items-center mb-2 space-x-6 cursor-pointer">
              <input
                type="radio"
                value="Bonifico bancario"
                checked={selectedOption === "Bonifico bancario"}
                onChange={handleOptionChange}
                className="custom-radio w-6 h-6"
              />

              <span className="text-md font-semibold text-[#000000]">
                Bonifico bancario
              </span>
            </label>
          </div>
          <div className="pt-2">
            <label className="flex items-center mb-2 space-x-6 cursor-pointer">
              <input
                type="radio"
                value="Paga in 3 rate"
                checked={selectedOption === "Paga in 3 rate"}
                onChange={handleOptionChange}
                className="custom-radio w-6 h-6"
              />
              <div className="flex items-center space-x-4">
                <span className="text-md font-semibold text-[#000000]">
                  Paga in 3 rate
                </span>
                <img src="https://i.ibb.co/rfdNwQW/image-1635.png" alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-md font-semibold">
          I tuoi dati personali saranno utilizzati per elaborare il tuo ordine,
          supportare la tua esperienza su questo sito web e per altri scopi
          descritti nella nostra Privacy Policy.
        </p>
      </div>
      <div className="flex justify-between items-baseline">
        <input
          type="checkbox"
          className="form-checkbox  text-blue-500"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
        <span className="ml-2 mb-2 text-gray-700">
          HO LETTO E ACCETTO TERMINI E CONDIZIONI DEL SITO WEB * POSSIEDI UN
          BUONO REGALO?
        </span>
      </div>
      <div className="py-2">
        <button className="bg-[#000000] text-white text-md font-bold hover:cursor-pointer p-4 w-full rounded">
          Conferma il pagamento
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
