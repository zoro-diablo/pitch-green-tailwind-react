import img from '../Assets/Img/logo.jpg'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2022',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:img,
    },
  },
  {
    id: 2,
    title: 'How to improve your SEO',
    href: '#',
    description:
      'Adipisci velit in id. Magni quos voluptas qui rem eum ipsa. Doloribus aut ratione. Qui tempora omnis occaecati est rem. Ut asperiores voluptas velit ratione dolorem sequi.',
    date: 'Apr 5, 2020',
    datetime: '2020-04-05',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Jennifer Lewis',
      role: 'SEO Specialist',
      href: '#',
      imageUrl:img
    },
  },
  {
    id: 3,
    title: 'Mastering social media marketing',
    href: '#',
    description:
      'Ducimus qui est. Amet in qui at. Est voluptatem ut velit autem corrupti. Molestiae consectetur provident quia. Deserunt aut est dolores.',
    date: 'May 12, 2023',
    datetime: '2020-05-12',
    category: { title: 'Social Media', href: '#' },
    author: {
      name: 'Jessica Cooper',
      role: 'Social Media Strategist',
      href: '#',
      imageUrl:img,
    },
  },
]

export default function Example() {
  return (
    <div className='bg-green-500 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-2 text-lg leading-8 text-black'>
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='flex items-center gap-x-4 text-xs'>
                <time dateTime={post.datetime} className='text-black'>
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100'
                >
                  {post.category.title}
                </a>
              </div>
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-black underline group-hover:text-gray-600'>
                  <a href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-black'>
                  {post.description}
                </p>
              </div>
              <div className='relative mt-8 flex items-center gap-x-4'>
                <img
                  src={post.author.imageUrl}
                  alt=''
                  className='h-10 w-10 rounded-full bg-gray-50'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold text-black'>
                    <a href={post.author.href}>
                      <span className='absolute inset-0' />
                      {post.author.name}
                    </a>
                  </p>
                  <p className='text-black'>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
