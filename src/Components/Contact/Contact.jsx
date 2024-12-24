import React from 'react'

function Contact() {
  return (
    // <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
    //     <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
    //         <div className="mt-8 overflow-hidden">
    //             <div className="grid grid-cols-1 md:grid-cols-2">
    //                 <div className="p-6 mr-2 bg-gray-100 sm-rounded-lg">
    //                     <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
    //                         Get in Touch:
    //                     </h1>
    //                     <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
    //                         Fill the form to start a conversation
    //                     </p>

    //                     <div className="flex items-center mt-8 text-gray-600">
    //                             <svg
    //                                 fill="none"
    //                                 stroke="currentColor"
    //                                 stroke-linecap="round"
    //                                 stroke-linejoin="round"
    //                                 stroke-width="1.5"
    //                                 viewBox="0 0 24 24"
    //                                 className="w-8 h-8 text-gray-500"
    //                             >
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     stroke-width="1.5"
    //                                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //                                 />
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     stroke-width="1.5"
    //                                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //                                 />
    //                             </svg>
    //                             <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                                 Acme Inc, Street, State, Postal Code
    //                             </div>
    //                     </div>

    //                     <div className="flex items-center mt-4 text-gray-600">
    //                             <svg
    //                                 fill="none"
    //                                 stroke="currentColor"
    //                                 stroke-linecap="round"
    //                                 stroke-linejoin="round"
    //                                 stroke-width="1.5"
    //                                 viewBox="0 0 24 24"
    //                                 className="w-8 h-8 text-gray-500"
    //                             >
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     stroke-width="1.5"
    //                                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    //                                 />
    //                             </svg>
    //                             <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                                 +44 1234567890
    //                             </div>
    //                     </div>

    //                     <div className="flex items-center mt-2 text-gray-600">
    //                             <svg
    //                                 fill="none"
    //                                 stroke="currentColor"
    //                                 stroke-linecap="round"
    //                                 stroke-linejoin="round"
    //                                 stroke-width="1.5"
    //                                 viewBox="0 0 24 24"
    //                                 className="w-8 h-8 text-gray-500"
    //                             >
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     stroke-width="1.5"
    //                                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //                                 />
    //                             </svg>
    //                             <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                                 info@acme.org
    //                             </div>
    //                     </div>
    //                 </div>

    //                 <form className="p-6 flex flex-col justify-center">
    //                     <div className="flex flex-col">
    //                         <label for="name" className="hidden">Full Name</label>
    //                         <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
    //                     </div>

    //                     <div className="flex flex-col mt-2">
    //                         <label for="email" className="hidden">Email</label>
    //                         <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
    //                     </div>

    //                     <div className="flex flex-col mt-2">
    //                         <label for="tel" className="hidden">Numer</label>
    //                         <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
    //                     </div>

    //                     <button type="submit" className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <section className='flex items-center justify-center h-[450px] p-4 bg-custom-bg2'>
        <div className='flex flex-col md:flex-row items-stretch w-full max-w-6xlshadow-lg bg-custom-bg1 rounded-lg'>
            <div className='flex-1 p-14'>
                <h3 className='text-4xl font-bold text-custom-purple'>Let's discuss <br />on something <span className='text-custom-textCol'>cool</span> together</h3>
                <p className='mt-16 text-xl text-custom-purple font-semibold'>I'm intrested in ..</p>
                <div className='flex flex-wrap gap-4 mt-4'>
                    <button className='text-xl w-1/3 py-2 px-2 bg-custom-purple text-white rounded shadow'>
                        Ecommerce Website
                    </button>
                    <button className='text-xl w-1/3 py-2 px-4 bg-transparent text-custom-purple border-2 border-custom-purple rounded shadow hover:bg-purple-100'>Sass Website</button>
                    <button className='text-xl w-1/3 py-2 px-2 bg-transparent text-custom-purple border-2 border-custom-purple rounded shadow hover:bg-purple-100'>Landing Page</button>
                    <button className='text-xl w-1/4 py-2 px-2 bg-transparent text-custom-purple border-2 border-custom-purple rounded shadow hover:bg-purple-100'>Portfolio</button>
                    <button className='text-xl w-1/4 py-2 px-2 bg-transparent text-custom-purple border-2 border-custom-purple rounded shadow hover:bg-purple-100'>Blog Website</button>
                </div>
            </div>
            <div className='flex-1 p-8 bg-custom-bg1'>
            <form className='space-y-4 w-[350px] ml-auto'>
                <input type="text" placeholder='Your Name' className='w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-custom-purple'/>
                <input type="email" placeholder='Your Email' className='w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-custom-purple'/>
                <textarea placeholder='Your Message' rows="5" className='w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-custom-purple'/>
                <button type='submit' className='flex items-center justify-center w-full py-3 px-6 bg-custom-purple text-white font-bold rounded-lg hover:bg-custom-purple transition duration-300'>
                     Submit
                </button>
            </form>
        </div>
        </div>
    </section>
  );
}

export default Contact