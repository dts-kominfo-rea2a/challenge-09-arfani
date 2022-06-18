// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div className='contact' style={props.reverse ? {flexDirection: 'row-reverse'} : null}>
            <img src={props.data.photo} alt={props.data.name} />
            <div className="detail">
                <div className="name">{props.data.name}</div>
                <div className="phone">{props.data.phone}</div>
                <div className="email">{props.data.email}</div>
            </div>
        </div>
    )
}

export default Contact;