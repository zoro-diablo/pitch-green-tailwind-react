import { useState, useEffect } from 'react'
import ReviewList from './ReviewList'
import ReviewHeader from './ReviewHeader'
import SpeedBar from '../Container/SpeedBar'

const Review = () => {
  const [reviews, setReview] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setReview(data)
      })
  }, [])

  return (
    <div>
      <ReviewHeader />
      <SpeedBar />
      {reviews && <ReviewList reviews={reviews} />}
    </div>
  )
}

export default Review
