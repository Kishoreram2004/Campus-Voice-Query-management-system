import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left*/}
        <div className='flex-1'>
          <div className=''><Link to="/" className='text-4xl font-bold dark:text-white flex '> 
          <span className='px-2'>Campus Voice</span> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjcV87iVBssyJG82vfJCdDwS-rm0zU_YDtA&s" className='w-12
          // h-15'></img>
          </Link></div>
          <p className='text-sm mt-5 px-2'>Join Campus Voice to streamline your queries and stay connected with your college's support system effortlessly!</p>
        </div>
        {/*right*/}
      <div className='mx-2 flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
                <Label value = "Your username"/>
                <TextInput type='text' placeholder='Username' id="username"/>
            </div>
            <div className=''>
                <Label value = "Your email"/>
                <TextInput type='email' placeholder='name@gmail.com' id="email"/>
            </div>
            <div className=''>
                <Label value = "Your password"/>
                <TextInput type='password' placeholder='Password' id="password"/>
            </div>
            <Button className='bg-gradient-to-r from-black via-gray-900 to-gray-600 hover:bg-gradient-to-l to-gray-600  via-gray-900 from-black' >Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?
              <Link to="/sign-in" className='text-blue-500'> Sign In</Link>
            </span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp