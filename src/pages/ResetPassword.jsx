import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { resetPasswordSchema } from '../schemas/auth.schema'
import eyeon from "../assets/eye-on.svg";
import eyeoff from "../assets/eye-off.svg";
import ChevronLeftComp from '../components/ChevronLeft'
import TextInput from '../components/Input'
import { Lock } from 'lucide-react'
import Button from '../components/Button'
import { useLocation, useNavigate } from 'react-router'
import { resetPassword } from '../utils/api'
import { routes } from '../utils/constant';

const ResetPassword = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword ] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const otp = location.state?.otp
  const email = location.state?.email

  function handlePassword() {
    setShowPassword(prev => !prev)
  }

  function handleConfirmPassword() {
    setShowConfirmPassword(prev => !prev)
  }

  const {
    handleSubmit,
    register,
    formState : { errors }
  } = useForm({
    resolver : zodResolver(resetPasswordSchema),
    values : {
      password : '',
      confirmPassword : ''
    }
  })

  const handleSubmitFunc = async (val) => {
    try {
      setIsLoading(true)
      await resetPassword({
        email,
        otp,
        newPassword : val.password
      });
      setSuccess(true)
      navigate(routes.login)
      
      setError(null)
    } catch (err) {
      console.error(err);
      setSuccess(false);
      setError(err.response?.data || 'An Error Occured')
    } finally {
      setIsLoading(false)
    }
  }

  const errorHandler = (err) => {
    console.log(err)
  }

  useEffect(() => {
    if(!otp && !email) {
      navigate(routes.forgotpassword)
    }
  }, [email, otp, navigate])
  return (
    <section className='w-full max-w-[500px] relative'>
        <ChevronLeftComp />
      <div className='flex flex-col gap-5 items-center '>
        <div className='flex flex-col gap-2 items-center'>
          <div className='relative'>
            <img 
            src='/images/logo.svg' 
            alt="logo"
            className="p-[12px] m-auto md:grid w-20 h-24" 
            />
    
          </div>
          <h1 className='heading-3 capitalize'>set new password</h1>
          <p className='text-sm text-neutral-600'>Must be at least 8 characters</p>
        </div>
        <form 
        className='w-full flex flex-col gap-4'
        onSubmit={handleSubmit(handleSubmitFunc, errorHandler)}>
           <TextInput 
              { ...register('password') }
              leftIcon={<Lock />}
              type = {
                showPassword ? 'text' : 'password'
              }
              placeholder='Your password'
              className="w-full body-small-medium text-neutral-900"
              rightIcon={
                <img src={
                  showPassword ? eyeon : eyeoff
                } 
                onClick={handlePassword}
                />
              }
              errorBorder="border-error-100"
              label="Password"
              error={ errors.password?.message }
            />
           <TextInput 
              { ...register('confirmPassword') }
              leftIcon={<Lock />}
              placeholder='Input your password to confirm'
              className="w-full body-small-medium text-neutral-900"
              errorBorder="border-error-100"
              label="Password"
              rightIcon={
                <img src={
                  showConfirmPassword ? eyeon : eyeoff
                } 
                onClick={handleConfirmPassword} />
              }
              type = {
                showConfirmPassword ? 'text' : 'password'
              }
              error={ errors.confirmPassword?.message }
            />
            <Button
                className="w-full mt-3 h-10"
                type="submit"
                isDisabled={isLoading}
              >
                {" "}
                Reset Password
            </Button>
        </form>
      
      </div>
    </section>
  )
}

export default ResetPassword