import React ,{useState} from 'react'
import './style.css'
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    
    

    return (
        <>
        <div className='contact'>
        <h2>Contact Us!!!</h2>
        <img src='https://img.favpng.com/8/10/1/avatar-image-computer-icons-likengo-png-favpng-szcsHZgZRX618rsHZNRncnnev.jpg'></img>
        <div className='content'>
        <label>Name</label><br></br>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /><br></br>
        <label>EMAIL</label><br></br>
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
       <br></br>
        <label> Your message</label><br></br>
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <br></br>
        <button onClick={submit}>Send Message</button>
        <br></br>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
    </div>
    </div>
    </>
    );
};
export default Contact;