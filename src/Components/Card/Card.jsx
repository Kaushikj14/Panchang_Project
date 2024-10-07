import React from 'react'

const Card = () => {
  return (
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
                </div>
            <div class="p-4">
                <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Check Panchang
                </h6>
                <input type="text" name="" id="" className='w-full p-2 border border-gray-300 rounded-md' placeholder='Enter the City'/>
                
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
                <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Submit
                </button>
            </div>
        </div>  
  )
}

export default Card
