import React from 'react'
import { Link } from 'react-router-dom'
import card5 from '../../assets/images/card5.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import card4 from '../../assets/images/card4.png'
import github from '../../assets/images/github.png'

function Projects() {
  return (
    <div className='bg-custom-bg2 py-8'>
        <div className='mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold text-[#301d4f] mb-6'>My Projects</h2>
            <p className='text-2xl text-[#301d4f] mb-10'>Some Things I've built so far</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Card1 */}
                <a
                    href='https://github.com/CodeWithPiyush0/TuneWave'
                    className='flex flex-col items-center gap-4 bg-[#d9cfeb] border-2 border-white rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
                >
                    <img className='w-full rounded-md' src={card5} alt="Tunewave" />
                    <h3 className='text-2xl font-bold text-[#301d4f]'>TuneWave</h3>
                    <p className='text-lg text-[#301d4f]'>Online Music Website</p>
                    <div className='flex items-center gap-2 bg-[#301d4f] text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-[#2a173c] w-full justify-center'>
                        <img className='w-8 h-8 bg-white p-1 rounded-full shadow-md' src={github} alt="Github" />
                        View Code
                    </div>
                </a>
                {/* Card2 */}
                <a
                    href='https://codewithpiyush0.github.io/restaurant-website/'
                    className='flex flex-col items-center gap-4 bg-[#d9cfeb] border-2 border-white rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
                >
                    <img className='w-full rounded-md' src={card1} alt="FoodHub" />
                    <h3 className='text-2xl font-bold text-[#301d4f]'>FOOD HUB</h3>
                    <p className='text-lg text-[#301d4f]'>Restaurant Website</p>
                    <div className='flex items-center gap-2 bg-[#301d4f] text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-[#2a173c] w-full justify-center'>
                        <img className='w-8 h-8 bg-white p-1 rounded-full shadow-md' src={github} alt="Github" />
                        View Code
                    </div>
                </a>
                {/* Card3 */}
                <a
                    href='#'
                    className='flex flex-col items-center gap-4 bg-[#d9cfeb] border-2 border-white rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
                >
                    <img className='w-full rounded-md' src={card2} alt="Login and Signup" />
                    <h3 className='text-2xl font-bold text-[#301d4f]'>Login and Signup</h3>
                    <p className='text-lg text-[#301d4f]'>Made using React</p>
                    <div className='flex items-center gap-2 bg-[#301d4f] text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-[#2a173c] w-full justify-center'>
                        <img className='w-8 h-8 bg-white p-1 rounded-full shadow-md' src={github} alt="Github" />
                        View Code
                    </div>
                </a>
                {/* Card4 */}
                <a
                    href='#'
                    className='flex flex-col items-center gap-4 bg-[#d9cfeb] border-2 border-white rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
                >
                    <img className='w-full rounded-md' src={card3} alt="Parallax Website" />
                    <h3 className='text-2xl font-bold text-[#301d4f]'>Parallax Website</h3>
                    <p className='text-lg text-[#301d4f]'>Parallax Website using HTML and CSS</p>
                    <div className='flex items-center gap-2 bg-[#301d4f] text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-[#2a173c] w-full justify-center'>
                        <img className='w-8 h-8 bg-white p-1 rounded-full shadow-md' src={github} alt="Github" />
                        View Code
                    </div>
                </a>
                {/* Card5 */}
                <a
                    href='https://codewithpiyush0.github.io/Superheroes-World/'
                    className='flex flex-col items-center gap-4 bg-[#d9cfeb] border-2 border-white rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
                >
                    <img className='w-full rounded-md' src={card4} alt="Superhero World" />
                    <h3 className='text-2xl font-bold text-[#301d4f]'>Superhero World Website</h3>
                    <p className='text-lg text-[#301d4f]'>Get to know about superheroes</p>
                    <div className='flex items-center gap-2 bg-[#301d4f] text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-[#2a173c] w-full justify-center'>
                        <img className='w-8 h-8 bg-white p-1 rounded-full shadow-md' src={github} alt="Github" />
                        View Code
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects