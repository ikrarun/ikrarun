import React from 'react'
import { Koulen as Font } from 'next/font/google'

const koulen = Font({ subsets: ['latin'] , weight: '400' })

const navigation = () => {
  return (
      <div style={koulen.style} className='fixed top-0 left-0 right-0 p-3 bg-black font-light text-white'>
          <div className='mx-auto flex items-center w-full max-w-[1200px] justify-between'>
        <h1 className='text-3xl uppercase'>robby daddy</h1>
              <ul className='text-3xl inline-flex gap-4 uppercase'>
                  <li>
                    Essentials
                  </li>
                  <li>About US</li>
              </ul>
          </div>
    </div>
  )
}

export {koulen}
export default navigation
