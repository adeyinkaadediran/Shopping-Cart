import React from 'react'

function Register() {
  return (
    <div className='flex flex-col gap-5 '>
      <div className='flex flex-col gap items-center relative'>
        <h1 className='text-3xl font-medium font-archivo'>Create an Account</h1>
        <p className='text-md font-normal text-gray-500 font-inter'>Join us and start your Journey</p>
      </div>
      <form action="" className='grid grid-cols-2 gap-5'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-xl font-normal font-inter '>First Name</label>
        <input type="text" name="" id="" placeholder='e.g John' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-xl font-normal font-inter'>Last Name</label>
        <input type="text" name="" id="" placeholder='e.g Doe' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
         </div>
       <div className='flex flex-col gap-2'>
         <label htmlFor="" className='text-xl font-normal font-inter'>Username</label>
        <input type="text" name="" id="" placeholder='Your username' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
       </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-xl font-normal font-inter'>Email address</label>
        <input type="text" name="" id="" placeholder='you@rxample.com' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-xl font-normal font-inter'>Password</label>
        <input type="password" name="" id="" placeholder='*******' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
        </div>
        <div className='flex flex-col gap-2'>
           <label htmlFor="" className='text-xl font-normal font-inter'>Confirm Password</label>
         <input type="password" name="" id="" placeholder='*******' className='p-2 rounded-lg border-2 border-[#dee1e6ff]'/>
        </div>
         <button className='grid col-span-full border w-[70%] place-self-center p-3 rounded-md mt-2 items-center font-inter border border-[#dee1e6ff] text-black hover:text-[#171A1FFF]'>Sign Up</button>
      </form>
      <span className='flex gap place-self-center '>
        <p className='text-[#565d6dff] font-inter' >Already have an account?</p>
        <a href="" className='font-inter text-[#636ae8ff] hover:text-[] '>Sign in</a>
      </span>
    </div>
  )
}

export default Register