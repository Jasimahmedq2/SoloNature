
const ProfileFive = () => {
    return (
        <div className='mx-8'>
             <div className='flex items-center gap-24 mt-6'>
                <img className='h-9 w-9' src="https://cdn-icons-png.flaticon.com/128/3877/3877262.png" alt=""  />
                <h2 className='font-bold text-black text-[22px] text-center'>Indirizzi</h2>
              </div> 

              <div className='mt-10 bg-[#F1F5F9] w-80 px-2 py-3 shadow-md gap-6'>
                <div className='ml-16 font-bold text-[19px]'>Noah Potter</div>

                <div className='flex row gap-4 mx-2 items-center'>
                <div className=''>
                    <img className='h-9 w-12' src="https://cdn-icons-png.flaticon.com/128/263/263115.png" alt=""  />
                </div>


                <div>
                    <h2>4517 Washington Ave. Manchester, Kentucky 39495</h2>
        
                    
                </div>

                </div>
                <div className='ml-14 text-black font-normal'>+1 9871230000</div>
           
                <div className='ml-14 text-[#A05611] underline font-bold text-[19px]'>Noah Potter</div>
              </div>
              <div className=" flex justify-start mt-6">
              <button className="bg-[#ECDFCE] text-black font-semibold py-2 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-normal">Aggiungi nuovo indirizzo</button>
              </div>
        </div>
    );
};

export default ProfileFive;