'use client'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/Icon'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams<{ id: string }>()
    return (
        <main>
            <section className='mx-auto max-w-7xl flex flex-col items-center py-[200px]'>
                <div className='max-w-[880px]'>
                    <h1 className='text-white text-5xl font-semibold text-center mx-auto mb-6 leading-14 tracking-tight'>Solaris Synchrony: a Celestial Odyssey of Hope and Harmony</h1>
                    <p className='text-center text-[#878787] text-lg leading-[26px] tracking-tight font-medium mb-8'>
                        Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping
                    </p>
                    <div className='flex justify-center gap-6'>
                        <Button
                            variant='primary'
                            afterIcon={<Icon className='w-5 h-auto' imgUrl='/play-circle.png' />}
                            className='text-base font-semibold leading-6 tracking-tight'
                        >
                            Watch Trailer
                        </Button>
                        <Button
                            variant='secondary'
                            afterIcon={<Icon className='w-6 h-auto' imgUrl='/watch-list.png' />}
                        >
                            Watch List
                        </Button>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default page