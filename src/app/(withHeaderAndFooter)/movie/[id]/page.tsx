'use client'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/Icon'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams<{ id: string }>()
    return (
        <>
            <section className='mx-auto max-w-7xl flex flex-col items-center py-[200px]'>

                <Image className='absolute top-0 left-0 -z-10 object-cover max-h-[796px] w-full object-center' src={'/celestar-chisper.png'} alt="celestar chisper" width={1920} height={1024} />
                <div className='absolute max-h-[796px] w-full inset-0 bg-gradient-to-b from-black/100 from-5% via-black/60 to-black/100 to-95% -z-9'></div>
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
            <section className='bg-[#000000] px-24 py-20 '>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-5xl font-semibold leading-14 tracking-tight mb-6'>Synopsys of the Movie</h2>
                    <p className='mb-4 text-[#878787] text-2xl font-medium leading-8 tracking-tight'>
                        "In the not-so-distant future, as Earth teeters on the brink of collapse, 'Solaris Synchrony' unveils a riveting narrative that transcends the boundaries of time and space. Amidst the shadows of a fading world, a consortium of brilliant scientists embarks on a race against impending doom”
                    </p>
                    <p className='mb-4 text-[#878787] text-2xl font-medium leading-8 tracking-tight'>
                        Their audacious mission: to forge a symbiotic connection between the collective consciousness of humanity and a burgeoning solar system on the precipice of creation. As the last glimmers of hope flicker against the backdrop of a dying Earth, the 'Solaris Synchrony' becomes an epic saga of sacrifice, courage, and the indomitable spirit of exploration.
                    </p>
                    <p className='mb-4 text-[#878787] text-2xl font-medium leading-8 tracking-tight'>
                        Journey with us through the cosmic tapestry, where the interplay of science and the human spirit takes center stage. Encounter the characters who dare to defy the boundaries of existence, confronting the existential questions that echo through the vastness of the universe.
                    </p>
                </div>
            </section>
        </>
    )
}

export default page