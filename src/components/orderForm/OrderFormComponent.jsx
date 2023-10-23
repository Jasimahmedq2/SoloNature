/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddShippingAddressMutation, useGetShippingAddressQuery } from "../../redux/features/product/productApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const OrderFormComponent = () => {
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth)

  const [addShippingAddress, { isLoading, isSuccess, isError }] = useAddShippingAddressMutation()
  const { data: SData, isLoading: SIsLoading, isSuccess: SIsSuccess } = useGetShippingAddressQuery(token)


  // const [isChecked, setIsChecked] = useState(false);
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

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onsubmit = async (data) => {
    console.log(data)
    const shippingInfo = {
      token,
      info: data
    }
    await addShippingAddress(shippingInfo)
  }





  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  useEffect(() => {
    if (SIsSuccess) {
      if (SData?.data) {
        reset({
          name: SData?.data?.name,
          surname: SData?.data?.surname,
          nation: SData?.data?.nation,
          streetAddress: SData?.data?.streetAddress,
          municipality: SData?.data?.municipality,
          postalCode: SData?.data?.postalCode,
          phoneNumber: SData?.data?.phoneNumber,
          email: SData?.data?.email,
          birthday: SData?.data?.birthday,

        })
      }
    }
  }, [SData, reset])

  useEffect(() => {
    if (isError) {
      toast.error("something went wrong")
    }
    if (isSuccess) {
      toast.success("shipping address added")
      navigate("/orderPayment")
    }
  }, [isLoading, isSuccess, isError, navigate])

  return (
    <div className="py-12 space-y-4">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">Nome *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register("name", { required: "name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              placeholder="Inserisci il tuo nome "
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">Cognome</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register('surname', { required: "surname is required" })}
              aria-invalid={errors.surname ? "true" : "false"}
              type="text"
              placeholder="Inserisci il tuo cognome"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#23272d] bg-base-200 w-full"
            />
          </div>
          {errors.surname && <p className="text-red-400 text-sm">{errors.surname.message}</p>}
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">NAZIONE *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <select
              {...register('nation', { required: "nation is required" })}
              aria-invalid={errors.nation ? "true" : "false"}
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
          {errors.name && <p className="text-red-400 text-sm">{errors.nation.message}</p>}
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">VIA E NUMERO *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register("streetAddress", { required: "streetAddress is required" })}
              aria-invalid={errors.streetAddress ? "true" : "false"}
              type="text"
              placeholder="indicare SOLO l'indirizzo e il numero civico"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.streetAddress && <p className="text-red-400 text-sm">{errors.streetAddress.message}</p>}
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">PROVINCIA *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <select
              {...register("province", { required: "PROVINCIA is required" })}
              aria-invalid={errors.province ? "true" : "false"}
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
          {errors.province && <p className="text-red-400 text-sm">{errors.province.message}</p>}
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">COMUNE *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register('municipality', { required: "municipality is required" })}
              aria-invalid={errors.municipality ? "true" : "false"}
              type="text"
              placeholder="Indicare solo il COMUNE e non la frazione"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.municipality && <p className="text-red-400 text-sm">{errors.municipality.message}</p>}
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">C.A.P. *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register('postalCode', {
                required: 'postalCode is required'
              })}
              aria-invalid={errors.postalCode ? "true" : "false"}
              type="text"
              placeholder="Inserisci il cap esatto relativo al comune"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.postalCode && <p className="text-red-400 text-sm">{errors.postalCode.message}</p>}
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">CELLULARE *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register("phoneNumber", { required: "phone number is required" })}
              aria-invalid={errors?.phoneNumber ? "true" : "false"}
              type="text"
              placeholder="inserisci il cellulare senza spazi"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.phoneNumber && <p className="text-red-400 text-sm">{errors.phoneNumber.message}</p>}
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">INDIRIZZO EMAIL *</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register("email", { required: "email is required" })}
              aria-invalid={errors?.email ? "true" : "false"}
              type="email"
              placeholder="noah @solonatura.scom"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
            />
          </div>
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold">DATA DI NASCITA (OPZIONALE)</h3>
          <div className="flex items-center space-x-2 bg-base-200 p-4  border border-[#CBD5E1] w-full">
            <input
              {...register("birthday")}
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
            {...register("deferentShipAddress")}

            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          // checked={isChecked}
          // onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-gray-700">
            Spedire a un indirizzo differente
          </span>
        </div>
        <div className="py-6">
          <button
            type="submit"
            className="bg-[#000000] text-white text-md font-bold hover:cursor-pointer p-4 w-full rounded"
          >
            Vai al pagamento
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderFormComponent;
