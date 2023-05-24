import { BsFacebook, BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'
import './Footer.css'

export default function Footer() {

    return (
        <>
            <footer>
                <div className="social-icons">
                    <a href="..." target="_blank"><BsFacebook /></a>
                    <a href="..." target="_blank"><BsInstagram /><i /></a>
                    <a href="..." target="_blank"><BsWhatsapp /></a>
                    <a href="..." target="_blank"><BsTelegram /></a>
                </div>
            </footer>
        </>
    )

}