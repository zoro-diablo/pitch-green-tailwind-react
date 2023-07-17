import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Popover,
  PopoverHandler,
  PopoverContent,
  Input
} from '@material-tailwind/react'

import Login from '../Container/Login'

import { FiFeather } from 'react-icons/fi'


export default function Example() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white hover:underline decoration-green-500 decoration-2'>
          <Link to='/product'>Product</Link>
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white hover:underline decoration-green-500 decoration-2'>
          <Link to='/contact'>Feedback</Link>
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center text-white hover:underline decoration-green-500 decoration-2'>
          <Link to='/review'>Review</Link>
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        
        <a href='#' className='flex items-center text-white hover:underline decoration-green-500 decoration-2'>
          <Link to='/about'>About Me</Link>
        </a>
      </Typography>
    </ul>
  )

  return (
    <Navbar
      className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 from-blue-gray-900 to-blue-gray-800 mt-4'
      variant='gradient'
      color='blue-gray'
    >
      <div className='container mx-auto flex items-center justify-between text-white'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 ml-2 cursor-pointer py-1.5'
        >
          <FiFeather
            size={25}
            className='hover:text-green-400 ease-in-out transition duration-700'
          />
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        <div>
           <Popover placement='bottom'>
            <PopoverHandler>
          <Button
            variant='gradient'
            color='green'
            size='sm'
            className='hidden lg:inline-block'
          >
            <span>Sign Up</span>
          </Button>
          </PopoverHandler>
            <PopoverContent className='bg-black mt-1'>
              <Login text='Sign up'/>
            </PopoverContent>
          </Popover>
          <Popover placement='bottom'>
            <PopoverHandler>
              <Button
                variant='text'
                color='green'
                size='sm'
                className='hidden lg:inline-block mx-2'
              >
                <span>Log In</span>
              </Button>
            </PopoverHandler>
            <PopoverContent className='bg-black mt-1'>
              <Login text='Log in'/>
            </PopoverContent>
          </Popover>
        </div>

        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className='container mx-auto'>
          {navList}
          <Popover placement='bottom'>
            <PopoverHandler>
          <Button
            variant='gradient'
            color='green'
            size='sm'
            fullWidth
            className='mb-2'
          >
            <span>Sign Up</span>
          </Button>
          </PopoverHandler>
            <PopoverContent className='bg-black mt-1'>
              <Login text='Sign up'/>
            </PopoverContent>
          </Popover>
          <Popover placement='bottom'>
            <PopoverHandler>
          <Button
            variant='text'
            color='green'
            size='sm'
            fullWidth
            className='mb-2'
          >
            <span>Log In</span>
          </Button>
          </PopoverHandler>
            <PopoverContent className='bg-black mt-1'>
              <Login text='Log in'/>
            </PopoverContent>
          </Popover>
        </div>
      </MobileNav>
    </Navbar>
  )
}
