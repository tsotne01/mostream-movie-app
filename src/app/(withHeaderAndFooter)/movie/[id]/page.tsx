'use client'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/Icon'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams<{ id: string }>()
    return (
        <main>
            <section>
                <h1>Solaris Synchrony: a Celestial Odyssey of Hope and Harmony</h1>
                <p>Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping </p>
                <Button variant='primary' afterIcon={<Icon imgUrl='/play-circle.png'/>}>Watch Trailer</Button>
            </section>
        </main>
    )
}

export default page