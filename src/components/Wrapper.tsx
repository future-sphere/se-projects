import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <div className='min-h-screen bg-slate-100 pt-28'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full py-6'>{children}</div>
      </div>
    </div>
  );
}
