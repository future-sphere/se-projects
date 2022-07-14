import { CheckIcon } from '@heroicons/react/outline';

const LandKitComponentsTwo = () => {
  return (
    <div className='py-5 pl-5 bg-white w-fit lg:pt-[6rem] pt-[10rem]'>
      <div className='text-[1.5rem] md:text-[1.7rem] max-w-[13em] leading-10 pb-4 font-thin'>
        The most useful resource
        <span className='text-[#43ba96]'> ever created for developers.|</span>
      </div>
      <div className='text-[#8a9cb9] max-w-[25em] text-[1.05em] pb-7'>
        Using Landkit to build your site means never worrying about designing
        another page or cross browser compatibility. Our ever-growing library of
        components and pre-designed layouts will make your life easier.
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
  );
};

export default LandKitComponentsTwo;
