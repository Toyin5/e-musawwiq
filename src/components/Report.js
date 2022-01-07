import React from 'react'
import "./Report.css"
import Header from "./Header"

export default function Report() {
    return (
        <div>
        <Header />
        <h3>Report a bug</h3>
        <div className='report'>
            <form>
                <div className='report_form'>
                    <div className='input_fields'>
                        <input type="text" className='input' placeholder='Name' />
                        <input type="phone" className='input' placeholder='Phone' />
                        <input type="email" className='input' placeholder='Email address' />
                        <input type="text" className='input' placeholder='Subject' />
                    </div>
                    <div className='msg'>
                        <textarea placeholder='Your report here...'></textarea>
                        <button className='submit' type="submit" name='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
