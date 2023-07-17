import { Carousel, Typography, Button } from '@material-tailwind/react'

import img1 from '../Assets/Img/green3.jpg'
import img2 from '../Assets/Img/green2.png'
import img3 from '../Assets/Img/original-27cb9c184cfec6fbd1d9843b90668804.png'

export default function Example() {
  return (
    <Carousel className='rounded-xl mt-4'>
      <div className='relative h-[50rem] w-full'>
        <img
          src={img2}
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
          <div className='w-3/4 text-center md:w-2/4'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl bg-black py-2'
            >
              The Beauty of <span className='text-green-600 hover:text-black'>Green</span>
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className='flex justify-center gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[50rem] w-full'>
        <img
          src={img1}
          alt='image 2'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              The Beauty of Cards
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[50rem] w-full'>
        <img
          src={img3}
          alt='image 3'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-end bg-black/75'>
          <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              The Beauty of Blocks
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
