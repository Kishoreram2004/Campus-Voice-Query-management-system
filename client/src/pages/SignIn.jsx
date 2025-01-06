import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading,error: errorMessage} = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const handleChange=(e)=>{
     setFormData({...formData,[e.target.id]:e.target.value.trim()});
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!formData.email || !formData.password){
      dispatch(signInFailure('Fill all the field!'))
    } 
    try {
      dispatch(signInStart)
      const res = await fetch('/api/auth/signin',{  
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(formData),
      })  
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
      }
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate("/")
      }

    } catch (error) {
      dispatch(signInFailure(error.message))
      
    } 
  }
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
                <Label value = "Your email"/>
                <TextInput type='email' placeholder='name@gmail.com' id="email" onChange={handleChange}/>
            </div>
            <div className=''>
                <Label value = "Your password"/>
                <TextInput type='password' placeholder='Password' id="password" onChange={handleChange}/>
            </div>
            <Button className='bg-gradient-to-r from-black via-gray-900 to-gray-600 hover:bg-gradient-to-l to-gray-600 via-gray-900 from-black' disable= {loading} type='submit'>
              {
                loading ?
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
                : "Sign Up"
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Doesn't have an account?
              <Link to="/sign-up" className='text-blue-500'> Sign In</Link>
            </span>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
            )
          }
      </div>
      </div>
    </div>
  )
}


export default SignIn