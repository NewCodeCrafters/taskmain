import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

const ChevronLeftComp = () => {
    const navigate = useNavigate()
  return (
    <Link 
    className='text-primary-300 cursor-pointer border border-primary-300 py-2 px-4 rounded-full w-fit absolute top-6 md:top-10'
    onClick={() => navigate(-1)}>
        <ChevronLeft />
    </Link>
  )
}

export default ChevronLeftComp