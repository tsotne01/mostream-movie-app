import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InputField from './input-field'
import Button from './button/button'
import Logo from './logo'

const Footer = () => {
    return (
        <footer>
            <div className="relative w-full h-fit py-32">
                <Image className='w-full absolute top-0 left-0 h-[555px] object-cover -z-1' src="/banner-background.png" alt="banner image" width={1440} height={528} />
                <h2 className='font-semibold text-5xl leading-14 tracking-tight text-center max-w-4xl mb-8 mx-auto'>Unlock Your Cinematic Experience!
                    Ready to Dive Into Movie Magic</h2>
                <p className='text-2xl text-[#878787] font-medium text-center max-w-4xl mx-auto mb-8'>Embark on a journey beyond the ordinary and unlock the door to a world where every frame tells a story and every scene is a masterpiece.</p>
                <div className='mx-auto flex items-center gap-2 w-fit'>
                    <InputField className='h-fit' id='input-email' placeholder='input email' label='input email' noLabel={true} />
                    <Button className='py-3.5' variant='primary'>Subscribe</Button>
                </div>
            </div>

            <div className='bg-[#101010] px-[100px] pt-20 pb-8  flex justify-center gap-6'>
                <div className='max-w-[468px]'>
                    <Logo />
                    <p className='text-[#878787] mt-4 text-base font-medium leading-7 tracking-tight'>where every frame tells a story, and every click opens the door to a world of limitless entertainment. Immerse yourself in a universe of unparalleled movie.</p>
                </div>
                <div>
                    <nav>
                        <ul className='grid grid-cols-4 gap-y-3'>
                            <li className='flex flex-col gap-3 px-8'>
                                <Link href={"/"}>Home</Link>
                                <Link href={"/movies"}>Movies</Link>
                                <Link href={"/tv-shows"}>Tv Shows</Link>
                                <Link href={"/reedem"}>Reedem</Link>
                            </li>
                            <li className='flex flex-col gap-3 px-8'>
                                <Link href={"/about"}>About</Link>
                                <Link href={"/career"}>Career</Link>
                                <Link href={"/investors"}>Investors</Link>
                                <Link href={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li className='flex flex-col gap-3 px-8'>
                                <Link href={"/faq"}>FAQ</Link>
                                <Link href={"/help-center"}>Help Center</Link>
                                <Link href={"/media-center"}>Media Center</Link>
                                <Link href={"/cookie-preferences"}>Cookie Preferences</Link>
                            </li>
                            <li className='flex flex-col gap-3 px-8'>
                                <h3 className='font-semibold text-lg leading-7 tracking-tight'>Stay up to date</h3>
                                <div className='flex gap-4'>
                                    <Image src={"/facebook-icon.png"} alt='facebook icon' width={40} height={40} />
                                    <Image src={"/instagram-icon.png"} alt='instagram icon' width={40} height={40} />
                                    <Image src={"/tiktok-icon.png"} alt='tiktok icon' width={40} height={40} />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='border-[#383838] bg-[#101010] border-t-1 pb-14  flex items-center justify-center pt-8'>
                <div className='flex justify-between gap-7  '>
                    <h4>© 2023 Mostream all rights reserved</h4>
                    <div className='flex gap-3'>
                        <Link href={"/terms-conditions"}>Terms and condition</Link>
                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer