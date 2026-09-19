import React from 'react';

const Status = () => {
    return (
        <section>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 flex-wrap text-center my-16 py-10 bg-white '>
                <li>
                    <h2 className='text-[#0B6553] text-3xl font-bold'>12,400+</h2>
                    <p className='text-gray-600'>Students using StudyFlow</p>
                </li>
                <li>
                    <h2 className='text-[#0B6553] text-3xl font-bold'>1.2M</h2>
                    <p className='text-gray-600'>Stasks checked off</p>
                </li>
                <li>
                    <h2 className='text-[#0B6553] text-3xl font-bold'>89%</h2>
                    <p className='text-gray-600'>Report better focus</p>
                </li>
                <li>
                    <h2 className='text-[#0B6553] text-3xl font-bold'>4.8/5</h2>
                    <p className='text-gray-600'>Average rating</p>
                </li>
            </ul>
        </section>
    );
};

export default Status;