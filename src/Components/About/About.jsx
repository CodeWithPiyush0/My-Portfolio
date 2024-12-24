import React from 'react'
import grid1 from '../../assets/images/grid1.png'
import grid2 from '../../assets/images/grid2.png'
import grid3 from '../../assets/images/grid3.png'
import grid4 from '../../assets/images/grid4.png'
import grid5 from '../../assets/images/grid5.png'
import grid6 from '../../assets/images/grid6.png'
import grid7 from '../../assets/images/grid7.png'
import grid8 from '../../assets/images/grid8.png'

function About() {
  return (
    // <div className="py-16 bg-bg1 bg-cover bg-center h-screen">
    //     <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    //         <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
    //             <div className="md:5/12 lg:w-5/12">
    //                 <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" />
    //             </div>
    //             <div className="md:7/12 lg:w-6/12">
    //                 <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
    //                     React development is carried out by passionate developers
    //                 </h2>
    //                 <p className="mt-6 text-gray-600">
    //                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
    //                     accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
    //                     aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
    //                 </p>
    //                 <p className="mt-4 text-gray-600">
    //                     Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
    //                     Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className='bg-bg1 relative bg-cover bg-center p-16 h-screen'>
            <div className='absolute top-16 left-8 mb-8 ml-8 pr-2 w-2/3 md:w-1/2'>
                <h2 className='text-4xl font-bold text-custom-purpl2 mb-4'>About me</h2>
                <p className='text-custom-purpl2 text-xl pr-28'>
                    As A Web Developer, My Primary Responsibility Is To Design And Develop Web Pages That Provide
                    Responsive, User-Friendly Experiences. My Focus Is On Creating Solutions That Cater To The Needs
                    Of Users, Ensuring An Optimal And Engaging Online Experience.
                </p>
            </div>
            <div className='absolute py-24 right-16 mt-20'>
                <h2 className='text-4xl font-bold text-custom-purpl2 mb-4'>My Skills</h2>
                <p className='text-custom-purpl2 text-lg mb-6'>Technologies I've been working with recently:</p>
                <div className='grid grid-cols-4 gap-6 justify-items-end'>
                    <img src={grid1} alt="img1" className='w-16 h-16 rounded-lg' />
                    <img src={grid2} alt="img2" className='w-16 h-16 rounded-lg' />
                    <img src={grid3} alt="img3" className='w-16 h-16 rounded-lg' />
                    <img src={grid4} alt="img4" className='w-16 h-16 rounded-lg' />
                    <img src={grid5} alt="img5" className='w-16 h-16 rounded-lg' />
                    <img src={grid6} alt="img6" className='w-16 h-16 rounded-lg' />
                    <img src={grid7} alt="img7" className='w-16 h-16 rounded-lg' />
                    <img src={grid8} alt="img8" className='w-16 h-16 rounded-lg' />
                </div>
            </div>
        </div>
  );
}

export default About