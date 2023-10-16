import React from 'react';

const DashboardCategory = () => {
    return (
        <div>
              <div>
             <div className='w-96 p-7'>
            <h2 className="text-4xl font-bold">Add Category</h2>
            <form className='mt-5'>

            <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Category Title</label>
                <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                </div>
          </div>
               
            <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Product Price</label>
                <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                </div>
          </div>
               

                <div class="col-span-full">
                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Product Details</label>
                <div class="mt-2">
                    <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"></textarea>
                </div>
            
                </div>
             
          
                <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Product Category</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Select</option>
              <option>Body Care</option>
              <option>Skin Care</option>
              <option>Hare Care</option>
              <option>Igiene orale</option>
            </select>
          </div>
        </div>
     

     <div className='mt-4'>
   <label className="label"> <span className="label-text">Product Photo</span></label>
  <div className='mt-3'>
  <label for="file-input" class="sr-only">Choose file</label>
  <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>
  </div>
     </div>

                <input className='btn bg-indigo-500 py-2 px-4 rounded-3xl text-white w-full mt-4' value="Add Product" type="submit" />
            </form>
            </div>
        </div>
        </div>
    );
};

export default DashboardCategory;