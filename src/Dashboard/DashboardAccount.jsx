import React from 'react';

const DashboardAccount = () => {
    return (
        <div>
           <div>
              <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white border border-y-indigo-500  border-t-2 rounded-lg shadow-md lg:w-11/12 sm:w-2/3">
                <div className="container mx-auto"> 
                    <div className="flex justify-between items-center w-full px-4 py-2">
                        <div className="text-lg font-bold">
                            All Users
                        </div>
                        <div className="w-1/2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="searching.."
                                className="py-2 px-4 border-2 border-gray-200 outline-none focus:border-indigo-500 rounded-full w-full lg:w-10/12 "
                               
                            />
                        </div>

                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-collapse table-auto">
                            <thead className="">
                                <tr className="text-base font-bold text-left bg-gray-50">
                                    <th className="px-4 py-3 border-b-2 border-blue-500">Name</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Email</th>
                                 
                                  </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">

                                       
                                            <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                                <td className="flex flex-row items-center px-4 py-4">

                                                    <div className="flex-1 pl-1">
                                                        <div className="font-medium dark:text-white">Mamun</div>

                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                </td>
                                                <td className="px-4 py-4">
                                                  
                                                </td>
                                            
                                            </tr>
                                      
                                   
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>  
        </div>
    );
};

export default DashboardAccount;