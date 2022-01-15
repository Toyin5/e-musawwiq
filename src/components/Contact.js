import React from 'react'
import Header from "./Header"
import {FaTelegram, FaFacebook, FaWhatsapp} from "react-icons/fa"
import "./Contact.css"
import { IconButton } from '@material-ui/core'

function Contact() {
    return (
        <div>
        <Header />
        <div className='contact'>
            <div className='contact-text'>
                <h1>Do you want to advertise your Products?</h1>
                <p>Contact us on these links</p>
                <div className="contact-links">
                    <IconButton><a href="https:t.me?"><FaTelegram fill='#968282' /></a></IconButton>
                    <IconButton><a href="https:t.me?"><FaWhatsapp  fill='#968282' /></a></IconButton>
                    <IconButton><a href="https:t.me?"><FaFacebook   fill='#968282' /></a></IconButton>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact
