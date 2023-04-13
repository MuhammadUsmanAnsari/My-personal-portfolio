import React, { useState } from 'react'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { firestore } from 'config/Firebase'
import { Element } from 'react-scroll'

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
}
export default function Contact() {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)

    //handle change function
    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    //handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        var { name, email, subject, message } = state;
        name = name.trim()
        email = email.trim()
        subject = subject.trim()
        message = message.trim()

        if (name.length < 3) {
            return window.toastify("Please type minimum 3 characters in name", "error")
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email.match(mailformat)) {
            return window.toastify("You have entered an invalid email address", "error")
        }
        if (subject.length < 5) {
            return window.toastify("Please type minimum 5 characters in subject", "error")
        }
        if (message.length < 10) {
            return window.toastify("Please type minimum 10 characters in message", "error")
        }

        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            dateCreated: serverTimestamp(),

        }

        setData(data)
    }

    const setData = async (data) => {
        setLoading(true)
        await setDoc(doc(firestore, "contact-us", data.email), data, { merge: true });
        setLoading(false)
        setState(initialState)
        window.toastify("Submitted successfully", "success")
    }



    return (
        <>
            <Element name='contact-section' id='contact-section' >
                <h2 className='text-info text-center my-5 py-5 fw-bold '>CONTACT</h2>
                <div id='contact-stylling' >
                    <div className='container'>
                        <div className="row row-cols-1 row-cols-md-2 rounded-4 py-5 ">
                            <div className="col px-2 px-sm-4 px-md-5">
                                <h2 className='my-5 fw-bold'>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-group'>
                                        <Input placeholder="Your Name" name='name' value={state.name} className='bg-transparent text-white border-info py-2' onChange={handleChange} />
                                    </div>
                                    <div className='input-group'>
                                        <Input placeholder="Enter Email" name='email' value={state.email} className='bg-transparent text-white border-info py-2 my-4' onChange={handleChange} />
                                    </div>
                                    <div className='input-group'>
                                        <Input placeholder="Subject" name='subject' value={state.subject} className='bg-transparent text-white border-info py-2 mb-4' onChange={handleChange} />
                                    </div>
                                    <div className='input-group'>
                                        <TextArea maxLength={100} rows="4" name='message' value={state.message} placeholder="Type your Message (max 0-100 characters)" className='bg-transparent text-white border-info py-2 mb-4' onChange={handleChange} />
                                    </div>
                                    <button className='btn btn-dark px-5 py-2 fs-5 rounded-0 button-styling' disabled={loading}>
                                        {loading
                                            ? <div className="spinner-border spinner-border-sm text-primary " role="status"></div>
                                            : "Send Message"
                                        }</button>
                                </form>
                            </div>
                            <div className="col mt-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d658.2249644810327!2d73.05164588694534!3d31.44657180964475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzQ3LjgiTiA3M8KwMDMnMDcuMiJF!5e0!3m2!1sen!2s!4v1678909233909!5m2!1sen!2s" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    )
}
