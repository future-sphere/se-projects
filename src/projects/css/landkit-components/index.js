import { CheckIcon } from '@heroicons/react/outline';

const LandKitComponents = () => {
  return (
    <div className='flex-wrap md:flex pl-5 pt-[10.5rem] bg-white pb-10'>
      <div className='pb-7 bg-white w-fit md:w-[50%] pl-5 pr-[2.25rem]'>
        <div className='text-[2.4rem] max-w-[10em] leading-10 pb-4 pt-6 text-center md:text-left'>
          Welcome to <span className='text-[#345cec]'>Landkit</span>. Develop
          anything.
        </div>
        <div className='text-[#8a9cb9] text-[1.1rem] max-w-[24rem] font-medium text-center md:text-left'>
          Build a beautiful, modern website with flexible Bootstrap components
          built from scratch.
        </div>
        <div className='pt-9 text-center md:text-left'>
          <button className='p-3 px-5 bg-[#345cec] text-[.8rem] text-white rounded-md'>
            View all pages &nbsp; 🡪
          </button>
          <span className='pl-2'>
            <button className='text-[#345cec] bg-[#eaeffd] text-[.8rem] px-4 rounded-md p-3 font-[600]'>
              Documentation
            </button>
          </span>
        </div>
      </div>
      <div className='bg-white w-fit md:w-50% pl-5 pt-5 pb-6'>
        <div className='text-[1.5rem] md:text-[1.7rem] max-w-[13em] leading-10 pb-4 font-thin'>
          The most useful resource
          <span className='text-[#43ba96]'> ever created for developers.|</span>
        </div>
        <div className='text-[#8a9cb9] max-w-[25em] text-[1.05em] pb-7'>
          Using Landkit to build your site means never worrying about designing
          another page or cross browser compatibility. Our ever-growing library
          of components and pre-designed layouts will make your life easier.
        </div>
        <div>
          <div className='flex-wrap md:flex text-[#71cbb2]'>
            <div className='flex-wrap'>
              <div className='flex pr-[4.6rem]'>
                <div className='pr-3.5 pb-5'>
                  <CheckIcon className='w-5 bg-[#e8f5f3] rounded-lg'></CheckIcon>
                </div>
                <div>Lifetime updates</div>
              </div>
              <div className='flex pb-4'>
                <div className='pr-3.5'>
                  <CheckIcon className='w-5 bg-[#e8f5f3] rounded-lg'></CheckIcon>
                </div>
                <div>Tons of assets</div>
              </div>
            </div>
            <div className='flex-wrap'>
              <div className='flex'>
                <div className='pr-3.5 pb-5'>
                  <CheckIcon className='w-5 bg-[#e8f5f3] rounded-lg'></CheckIcon>
                </div>
                <div>Tech Support</div>
              </div>
              <div className='flex'>
                <div className='pr-3.5'>
                  <CheckIcon className='w-5 bg-[#e8f5f3] rounded-lg'></CheckIcon>
                </div>
                <div>Integration Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white w-fit md:w-[50%] pl-5 pt-5 pb-6'>
        <div className='md:text-[1.7em] text-[1.5em] max-w-[24rem]'>
          We have a lot of experience
          <span className='text-[#345cec]'> building Bootstrap themes</span>.
        </div>
        <div className='text-[#8a9cb9] py-5 text-[1.05rem] max-w-[28rem]'>
          We've built well over a dozen Bootstrap themes and sold tens of
          thousands of copies.
        </div>
        <div className='flex-col'>
          <div className='flex pb-7'>
            <div className='pr-5'>
              <svg
                height='45'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fill-rule='evenodd'>
                  <path d='M0 0h24v24H0z'></path>
                  <path
                    d='M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z'
                    fill='#335EEA'
                  ></path>
                  <path
                    d='M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z'
                    fill='#335EEA'
                    opacity='.3'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='flex-col leading-7'>
              <div>Bootstrap users since the beginning</div>
              <div className='text-[#8a9cb9] max-w-[22rem] text-[.92rem]'>
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='pr-5'>
              <svg
                height='45'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fill-rule='evenodd'>
                  <path d='M0 0h24v24H0z'></path>
                  <path
                    d='M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z'
                    fill='#335EEA'
                  ></path>
                  <rect
                    fill='#335EEA'
                    opacity='.3'
                    transform='rotate(15 12 12)'
                    x='11'
                    y='4'
                    width='2'
                    height='16'
                    rx='1'
                  ></rect>
                </g>
              </svg>
            </div>
            <div className='flex-col leading-7'>
              <div>Deep understanding of Bootstrap</div>
              <div className='text-[#8a9cb9] max-w-[22rem] text-[.92rem]'>
                We've watched Bootstrap grow up over the years and understand it
                better than almost anyone.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f1f4f8] w-fit pl-5 py-5 pb-6'>
        <div className='text-[1.7em] leading-10'>
          <div>Stay focused on your business.</div>
          <div className='text-[#345cec]'>
            Let us handle the design<span className='text-black'>.</span>
          </div>
        </div>
        <div className='text-[#536892] max-w-[28rem] text-[1.05em] pt-5 pb-8'>
          You have a business to run. Stop worrying about cross-browser bugs,
          designing new pages, keeping your components up to date. Let us do
          that for you.
        </div>
        <div className='flex'>
          <div className='flex-col'>
            <div className='text-[1.1em]'>100%</div>
            <div className='text-[#536892]'>Satisfaction</div>
          </div>
          <div className='flex-col px-9'>
            <div className='text-[1.1em]'>24/ 7</div>
            <div className='text-[#536892]'>Support</div>
          </div>
          <div className='flex-col'>
            <div className='text-[1.1em]'>100k+</div>
            <div className='text-[#536892]'>Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandKitComponents;
