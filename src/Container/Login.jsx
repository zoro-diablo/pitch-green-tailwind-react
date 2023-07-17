import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react'

export default function Example({text}) {
  return (
    <Card className='w-96 bg-green-600' >
      
      <CardBody className='flex flex-col gap-4'>
        <Input label='Email' size='lg' color='black' />
        <Input label='Password' size='lg' color='black' />
        <div className='-ml-2.5'>
          <Checkbox label='Remember Me' color='indigo' className='text-black bg-black' defaultChecked/>
        </div>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button variant='outlined' ripple={true} fullWidth className='text-white bg-black border-white'>
         {text}
        </Button>
        
      </CardFooter>
    </Card>
  )
}
