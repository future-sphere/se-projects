import React from 'react';

type Props = {
  children: React.ReactNode,
};

export default function Wrapper({ children }: Props) {
  return (
    <div className='bg-slate-100 min-h-screen pt-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex'>{children}</div>
      </div>
    </div>
  );
}
