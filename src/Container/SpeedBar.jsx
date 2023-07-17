import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from '@material-tailwind/react'
import {
  PlusIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

import { HiBookOpen, HiPaperClip, HiChatBubbleLeftRight } from 'react-icons/hi2'

import { BiCodeAlt } from 'react-icons/bi'

import { Link } from 'react-router-dom'

export default function DefaultSpeedDial() {
  return (
    <div className='relative h-fit w-full'>
      <div className='fixed bottom-0 left-10 top-20'>
        <SpeedDial placement='top'>
          <SpeedDialHandler>
            <IconButton size='lg' className='rounded-full bg-green-500'>
              <PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <Link to='/'>
                <HomeIcon className='h-5 w-5' />
              </Link>
            </SpeedDialAction>
            <SpeedDialAction>
              <Link to='/product'>
                <HiBookOpen className='h-5 w-5' />
              </Link>
            </SpeedDialAction>
            <SpeedDialAction>
              <Link to='/contact'>
                <HiPaperClip className='h-5 w-5' />
              </Link>
            </SpeedDialAction>
            <SpeedDialAction>
              <Link to='/review'>
                <HiChatBubbleLeftRight className='h-5 w-5' />
              </Link>
            </SpeedDialAction>
            <SpeedDialAction>
              <Link to='/about'>
                <BiCodeAlt className='h-5 w-5' />
              </Link>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  )
}
