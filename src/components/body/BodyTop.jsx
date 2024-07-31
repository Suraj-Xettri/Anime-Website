import React from 'react'

const BodyTop = () => {
  return (
    <div className="px-24 box-border flex justify-between items-center text-white bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center h-[480px] md:h-[600px] lg:h-[400px]">
        <div className='w-[489px]'>
          <p className='text-4xl font-bold '>
          Lorem Ipsum
          </p>
          <p className='leading-[16px] mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio dicta laborum dolorem ad vel aliquid ipsam iusto molestiae velit quam ex minima optio beatae atque blanditiis, iste maxime repudiandae!

          </p>

          <button className='px-3 py-2 mt-10 text-2xl font-bold rounded-md bg-[#B31B1B]'>Explore More</button>

        </div>

        <div className='h-[364px] w-[300px] rounded-md'>
          <img src="/gojo.png" alt="" className='rounded-md w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default BodyTop