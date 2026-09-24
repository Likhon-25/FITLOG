import { getAllGimData } from '@/lib/app';
import { IGym } from '@/types/Gym.type';
import React from 'react';
import HomeLibraryCard from '../shared/HomeLibraryCard';

const HomeLibrary = async () => {
    const getGimData = await getAllGimData()
    console.log(getGimData);
    return (
        <div className=' container mx-auto '>
            <h2 className='font-bold text-4xl  '>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] mb-[32px]'>Twelve lifts covering every major muscle group.</p>

            <div className='grid grid-cols-3 container mx-auto gap-6'>
                {
                    getGimData.map((data : IGym) => {
                        return <HomeLibraryCard key={data.id}  data={data} />
                    })
                }
            </div>
        </div>
    );
};

export default HomeLibrary;