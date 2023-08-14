/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderFormComponent = () => {
  const options = [
    {
      value: "Seleziona un Paese/una regione…",
      label: "Seleziona un Paese/una regione…",
    },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options2 = [
    {
      value: "Seleziona un'opzione…",
      label: "Seleziona un'opzione…",
    },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [selectedOption2, setSelectedOption2] = useState(options2[0].value);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  return (
    <div className="py-12 space-y-4">
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Nome *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="Inserisci il tuo nome "
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Cognome</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="Inserisci il tuo cognome"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-semibold">NAZIONE *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <select
            onChange={handleSelectChange}
            value={selectedOption}
            className="focus:outline-0 placeholder:text-sm font-md text-[#64748B] bg-base-200 w-full"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-semibold">VIA E NUMERO *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="indicare SOLO l'indirizzo e il numero civico"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-semibold">PROVINCIA *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <select
            onChange={handleSelectChange2}
            value={selectedOption2}
            className="focus:outline-0 placeholder:text-sm font-md text-[#64748B] bg-base-200 w-full"
          >
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-semibold">COMUNE *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="Indicare solo il COMUNE e non la frazione"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">C.A.P. *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="Inserisci il cap esatto relativo al comune"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">CELLULARE *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="text"
            placeholder="inserisci il cellulare senza spazi"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">INDIRIZZO EMAIL *</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="email"
            placeholder="noah @solonatura.scom"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">DATA DI NASCITA (OPZIONALE)</h3>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
          <input
            type="date"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
      </div>
      <div>
        <p className="text-md font-semibold">
          Inserendo la tua data di nascita dai la possibilità a Solo Natura di
          inviarti notifiche su prodotti adatti a te.
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="ml-2 text-gray-700">
          Spedire a un indirizzo differente
        </span>
      </div>
      <div className="py-6">
        <button
          onClick={() => navigate("/orderPayment")}
          className="bg-[#000000] text-white text-md font-bold hover:cursor-pointer p-4 w-full rounded"
        >
          Vai al pagamento
        </button>
      </div>
    </div>
  );
};

export default OrderFormComponent;
