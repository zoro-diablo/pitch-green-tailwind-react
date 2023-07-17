import img1 from '../Assets/Img/pro1.jpg'
import img2 from '../Assets/Img/pro2.jpg'
import img3 from '../Assets/Img/pro3.jpg'
import img4 from '../Assets/Img/pro4.jpg'

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]

export default function Example() {
  return (
    <div className='bg-black'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-green-600 sm:text-4xl'>
            Technical Specifications
          </h2>
          <p className='mt-4 text-gray-500'>
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='border-t border-gray-200 pt-4'>
                <dt className='font-medium text-green-300'>{feature.name}</dt>
                <dd className='mt-2 text-sm text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          <img
            src={img1}
            alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src={img2}
            alt='Top down view of walnut card tray with embedded magnets and card groove.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src={img3}
            alt='Side of walnut card tray with card groove and recessed card area.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src={img4}
            alt='Walnut card tray filled with cards and card angled in dedicated groove.'
            className='rounded-lg bg-gray-100'
          />
        </div>
      </div>
    </div>
  )
}