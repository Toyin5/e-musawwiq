import React from 'react'
import Header from "./Header"
import "./Contact.css"

function Contact() {
    return (
        <div className='contact'>
        <Header />
            <form>
                <label>Name: 
                    <input type="text" name='name' />
                </label>
                <br/>
                <label>Email: 
                    <input type="email" name='email' />
                </label>
                <br/>
                <label>Your message:
                    <textarea placeholder='Your report here...'></textarea>
                </label>
                <br/>
                <button type="submit" name='submit'>Submit</button>
            </form>
            <div className='contact-details'>
            </div>
        </div>
    )
}

export default Contact
