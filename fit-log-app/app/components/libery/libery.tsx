import { DataPromise } from '@/app/page'
import React from 'react'
import WorkoutCard from '../workoutCard/workoutCard';
import Link from 'next/link';

export default async function Libery() {


    const data = await DataPromise();

    return (
        <div className='container pt-10 mx-auto'>
            <div className="title py-7 leading-10">
                <h3 className='text-4xl'>THE LIBRARY</h3>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {
                    data.map((items: IDatatype, i: number) => {
                        console.log(items)
                        return (
                            <Link href={`/fit-log/${items.id}`} key={items.id}>
                                <WorkoutCard data={items} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
