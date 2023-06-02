import { BsFacebook, BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'
import './Footer.css'

export default function Footer() {

    return (
        <>
            <footer>
                <div className="social-icons">
                    <a href="https://www.facebook.com/davi.atrock/" target="_blank"><BsFacebook /></a>
                    <a href="https://www.instagram.com/" target="_blank"><BsInstagram /><i /></a>
                    <a href="https://web.whatsapp.com/" target="_blank"><BsWhatsapp /></a>
                    <a href="https://web.telegram.org/" target="_blank"><BsTelegram /></a>
                </div>
            </footer>
        </>
    )

}