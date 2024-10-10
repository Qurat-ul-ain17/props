import React from 'react'

interface Tprops{
  name:string,
  rollNumber:number,
}

const StudentCard = (props:Tprops) => {
  return (
    <div className=' bg-gradient-to-r from-blue-500 to-green-500 bg-gray-400 rounded-lg p-10 max-w-max mx-auto'>
      <h1 className='text-4xl font-bold'>Student ID Card</h1>
      <p className='text-4xl'>Name:{props.name}</p>
      <p className='text-4xl'>Roll Number:{props.rollNumber}</p>
      <p className='text-4xl'>Day:Monday(2-5pm)</p>
      <p className='text-4xl'>Center:Governor House Karachi</p>
    
    </div>
  )
}


export default StudentCard
