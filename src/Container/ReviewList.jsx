import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react'

const ReviewList = ({ reviews }) => {
  return (
    <div className='p-5 bg-green-500 grid md:grid-cols-3 justify-center align-middle'>
      {reviews.map((review) => {
        return (
          <Card
            color='transparent'
            shadow={false}
            className='w-full max-w-[26rem] justify-center align-middle ml-9'
            key={review.id}
          >
            <CardHeader
              color='transparent'
              floated={false}
              shadow={false}
              className='mx-0 flex items-center gap-4 pt-0 pb-8'
            >
              <Avatar
                size='lg'
                variant='circular'
                src={review.profile_pic}
                alt={review.name}
              />
              <div className='flex w-full flex-col gap-0.5'>
                <div className='flex items-center justify-between'>
                  <Typography variant='h5' color='blue-gray'>
                    {review.name}
                  </Typography>
                  
                </div>
                <Typography color='blue-gray'>{review.occupation}</Typography>
                <Typography color='blue-gray' className='text-xs'>{review.email}</Typography>
              </div>
            </CardHeader>
            <CardBody className='mb-6 p-0'>
              <Typography className='text-white'>&quot;{review.review}&quot;</Typography>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default ReviewList
