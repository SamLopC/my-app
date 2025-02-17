/**
 * This code was generated by Builder.io.
 */
import React from 'react'

function Navigation() {
  const navItems = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'Platform', hasDropdown: true },
    { label: 'Developers', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Demo', hasDropdown: false },
  ]

  return (
    <nav className='flex z-0 flex-col justify-center items-center self-stretch px-32 py-3.5 min-w-[240px] w-[952px] max-md:px-5 max-md:max-w-full'>
      <ul className='flex flex-wrap gap-2 pr-3 w-full max-w-[700px] max-md:max-w-full'>
        {navItems.map((item, index) => (
          <li key={index} className='flex gap-0.5'>
            <div className='flex flex-col'>
              <div className='flex flex-col py-1 w-full'>
                {item.hasDropdown && (
                  <div className='flex overflow-hidden flex-col justify-center items-start py-1.5 pr-28 min-h-[20px] max-md:pr-5'>
                    <img
                      loading='lazy'
                      src={`http://b.io/ext_${46 + index}-`}
                      alt=''
                      className='object-contain w-2 aspect-square'
                    />
                  </div>
                )}
                <div className='z-10 self-center text-sm tracking-wide leading-5 uppercase text-slate-800'>
                  {item.label}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
