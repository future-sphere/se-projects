import { CheckIcon } from '@heroicons/react/outline';

const LandKitComponentsTwo = () => {
  return (
    <div className='py-5 pt-40 pl-5 w-fit lg:pt-24'>
      <div className='text-2xl md:text-3xl max-w-[13em] leading-10 pb-4 font-thin'>
        The most useful resource
        <span className='text-[#43ba96]'> ever created for developers.|</span>
      </div>
      <div className='text-slate-500 max-w-[25em] text-[1.05em] pb-7'>
        Using Landkit to build your site means never worrying about designing
        another page or cross browser compatibility. Our ever-growing library of
        components and pre-designed layouts will make your life easier.
      </div>
      <div>
        <div className='flex-wrap md:flex text-[#71cbb2]'>
          <div className='flex-wrap'>
            <div className='flex pr-20'>
              <div className='pr-3.5 pb-5'>
                <CheckIcon className='w-5 rounded-lg bg-slate-100'></CheckIcon>
              </div>
              <div>Lifetime updates</div>
            </div>
            <div className='flex pb-4'>
              <div className='pr-3.5'>
                <CheckIcon className='w-5 rounded-lg bg-slate-100'></CheckIcon>
              </div>
              <div>Tons of assets</div>
            </div>
          </div>
          <div className='flex-wrap'>
            <div className='flex'>
              <div className='pr-3.5 pb-5'>
                <CheckIcon className='w-5 rounded-lg bg-slate-100'></CheckIcon>
              </div>
              <div>Tech Support</div>
            </div>
            <div className='flex'>
              <div className='pr-3.5'>
                <CheckIcon className='w-5 rounded-lg bg-slate-100'></CheckIcon>
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
