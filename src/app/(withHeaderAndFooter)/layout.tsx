import Footer from '@/components/ui/footer/footer'
import Header from '@/components/ui/header/header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }):React.JSX.Element => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout