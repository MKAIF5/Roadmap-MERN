import React from 'react'
import sql from "./assets/sql.svg"

const Banner = () => {
    return (
        <>
            <div className='bg-[#facc15] w-full h-9 flex justify-center items-center
            gap-5'>
                <div className='flex items-center gap-1'>
                    <img className='w-4 h-4' src={sql} alt="" />
                    <p className='text-base font-medium'>Master SQL with our new paid course</p>
                </div>
                <div className='w-36 h-6 bg-black text-white rounded-xl flex
                items-center justify-center uppercase'>
                    <p className='text-sm font-medium'>Start Learning →</p>
                </div>
            </div>
        </>
    )
}

export default Banner
