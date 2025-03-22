import React from 'react'
import { FaGithubSquare, FaInstagram , FaLinkedin } from 'react-icons/fa'

// const Footer = () => {
  // return (
  //   <div className='max-w-[1300px] mx-auto bg-black flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
  //       <div className='space-y-4'>
  //           <h3 className='text-2xl text-gray-200 font-semibold'>Made with by PRASHANT KUMAR</h3>
  //           <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
  //               <a href="https://github.com/Arsn1323"><FaGithubSquare /></a>
  //               <a href="https://www.instagram.com/ankitrajvr386/profilecard/?igsh=b215YXMzajd3bm1h"><FaInstagram /></a>
  //           </div>

  //       </div>

  //       <p className='text-gray-400'>All rights reserved-2025</p>
        
  //   </div>
  // )
// }


const Footer = () => {
  return (
    <div className='bg-black py-6 md:py-10 text-sm md:text-lg mt-12 w-full'>
        <div className='max-w-[1300px] mx-auto px-6 md:px-12 flex justify-between items-center'>
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>Made with by PRASHANT KUMAR</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-3xl'>
                    <a href="https://github.com/Prashantkumar41"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/prashant-kumar-sw/"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/prashant_kushwaha21?igsh=MWp6dzh5NjBtN2JzMA=="><FaInstagram /></a>
                </div>
            </div>

            <p className='text-gray-400 text-center md:text-left'>All rights reserved-2025</p>
        </div>
    </div>
  );
}

export default Footer