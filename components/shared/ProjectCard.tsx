import { Button } from '@nextui-org/button'
import React from 'react'

export default function ProjectCard({item}:{item:any}) {
    
  return (
    <div className='border border-neutral-600 hover:bg-neutral-900  w-[100%]   lg:w-[30%] rounded-2xl p-4  flex flex-col gap-2'>
        <img src={item.image} className='h-[200px] sm:h-[300px] lg:h-[200px] object-cover rounded-2xl'/>
        <h1 className='text-2xl font-bold'>{item.name}</h1>
        <h1 className='text-1xl font-bold dark:text-neutral-400'>{item.description}</h1>
       <span className='border-neutral-700 border p-1 rounded-lg w-min text-sm text-neutral-600'>{item.tag}</span>
    </div>
  )
}
