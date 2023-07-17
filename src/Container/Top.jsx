import { useState } from 'react'
import { Input } from '@material-tailwind/react'

const Top = () => {
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [email, setEmail] = useState('')
  const [review, setReview] = useState('')
  const [profile_pic, setProfile_pic] = useState('')

  let pumpkin = 'https://api.dicebear.com/6.x/adventurer/svg?seed=Pumpkin'
  let fluffy = 'https://api.dicebear.com/6.x/adventurer/svg?seed=Fluffy'
  let Boo = 'https://api.dicebear.com/6.x/adventurer/svg?seed=Boo'
  let abby = 'https://api.dicebear.com/6.x/adventurer/svg?seed=Abby'

  const handleSubmit = (e) => {
    e.preventDefault()

    const reviews = { name, occupation, email, review, profile_pic }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(reviews),
    }).then(() => {
      return alert('Review Submitted')
    })
  }
  return (
    <div className='flex items-center justify-center h-screen text-center'>
      <form
        onSubmit={handleSubmit}
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
      >
      <h1 className='text-green-500 text-4xl font-bold mb-3'>FEEDBACK</h1>
        <Input
          size='lg'
          type='text'
          color='green'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <Input
          size='lg'
          type='text'
          color='green'
          label='Occupation'
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <br />

        <Input
          size='lg'
          type='email'
          color='green'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <Input
          size='lg'
          label='Comment'
          color='green'
          type='review'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <br />
         <label className='text-white p-3'>Select Avatar : </label>
        <select
          value={profile_pic}
          onChange={(e) => setProfile_pic(e.target.value)}
          className='bg-green-500'
        >
          <option value={pumpkin}>Pumpkin</option>
          <option value={fluffy}>Fluffy</option>
          <option value={Boo}>Boo</option>
          <option value={abby}>Abby</option>
        </select>
        <br />
        <button
          varient='outlined'
          className='outline text-green-500 rounded  px-4 py-1 hover:bg-white hover:text-black mt-6'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Top
