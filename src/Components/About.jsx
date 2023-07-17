import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Example() {
  return (
    <div className='m-1'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-2xl font-bold leading-7 text-green-500 py-2'>
          Applicant Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm leading-6 text-white px-2'>
          Personal details and application.
        </p>
      </div>
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>
              Full name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              Vyshnav K
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>
              Application for
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              React Developer
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>
              Email address
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              vyshnavk117@gmail.com
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>
              Salary expectation
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              5LPA
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>About</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              Front End Developer | Artist | Avid Reader
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white pl-2'>
              Attachments
            </dt>
            <dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <ul
                role='list'
                className='divide-y divide-gray-100 rounded-md border border-gray-200'
              >
                <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                  <div className='flex w-0 flex-1 items-center'>
                    <PaperClipIcon
                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                      <span className='truncate font-medium'>Resume.pdf</span>
                      <span className='flex-shrink-0 text-gray-400'>0.5mb</span>
                    </div>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a
                      href='https://www.canva.com/design/DAFXXzKpato/A_mRD6xAIXnanxab4qEPYQ/view?utm_content=DAFXXzKpato&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className='ml-5'>
        <button className='flex bg-green-600 w-fit items-center gap-1  px-8 py-2 font-bold'>
          <div>
            <p>
              <Link to='/'>Back</Link>
            </p>
          </div>
          <div>
            <Link to='/'><FaArrowAltCircleLeft size={20} /></Link>
          </div>
        </button>
      </div>
    </div>
  )
}
