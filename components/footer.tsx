import type { NextPage } from 'next'
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'

const Footer: NextPage = () => {

    return (
    <>
        <footer className={footerStyles.footer}>
            <div className={footerStyles.mainFooter}>
                <ul id={footerStyles.list}>
                <li className={footerStyles.elementsli}>Home</li>
                <li className={footerStyles.elementsli}>Terms and Conditions</li>
                <li className={footerStyles.elementsli}>Privacy Policy</li>
                <li className={footerStyles.elementsli}>Collection Statement </li>
                <li className={footerStyles.elementsli}>Help </li>
                <li className={footerStyles.elementsli}>Manage Account</li>
                </ul>
                <span className={footerStyles.copyright}>Copyright © 2016 DEMO Streaming. All Rights Reserved.</span>
            </div>
            <div className={footerStyles.secondaryFooter}>
                <div className={footerStyles.socialMedia}>
                <Image src="/facebook-white.svg" alt="Facebook" className={(footerStyles.images, footerStyles.imagesFacebook)} width={15} height={15}/>
                <Image src="/twitter-white.svg" alt="Twitter" className={footerStyles.images} width={30} height={30}/>
                <Image src="/instagram-white.svg" alt="Instagram" className={footerStyles.images} width={30} height={30}/>
                </div>
                <div className={footerStyles.mobileLinks}>
                <Image src="/app-store.svg" alt="Facebook" className={footerStyles.images} width={150} height={150}/>
                <Image src="/play-store.svg" alt="Twitter" className={footerStyles.images} width={150} height={150}/>
                <Image src="/windows-store.svg" alt="Instagram" className={footerStyles.images} width={120} height={120}/>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer