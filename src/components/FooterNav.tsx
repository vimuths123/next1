"use client";
import React from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterNav = () => {

    const pathname = usePathname();

    return (
        <div className="gap-[40px] flex items-center">
            <Link href="/" className={`${ pathname === '/' ? 'font-bold' : 'font-normal' } text-[#333] text-[16px] font-medium no-underline`}>
                Home
            </Link>
            <Link href="/about" className={`${ pathname === '/about' ? 'font-bold' : 'font-normal' } text-[#333] text-[16px] font-medium no-underline`}>
                About
            </Link>
            <Link href="/pricing" className={`${ pathname === '/pricing' ? 'font-bold' : 'font-normal' } text-[#333] text-[16px] font-medium no-underline`}>
                Pricing
            </Link>
            <Link href="/mission" className={`${ pathname === '/mission' ? 'font-bold' : 'font-normal' } text-[#333] text-[16px] font-medium no-underline`}>
                Mission
            </Link>
        </div>
    )
}

export default FooterNav