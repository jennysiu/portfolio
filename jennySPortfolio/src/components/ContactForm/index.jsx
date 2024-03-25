import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import "./style.css"

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  const submitHandler = (e) =>{
    e.preventDefault();
    let myForm = e.target;
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        navigate('/contact')
        setShowModal(true);
        e.target.reset();
      })


      .catch((error) => alert(error));
  }

  const closeModal = () => {
    setShowModal(false)
    
  };
  
  return (
    <>
    {/* <form name="contact" method="POST" data-netlify="true" onSubmit={submitHandler} netlify-honeypot="bot-field"> */}
      {/* hidden input to help netlify identify the form */}
      {/* <input type="hidden" name="form-name" value="contact" />
      

      <h2 className='send-a-message'>Send me a message</h2>
      <div className='contact-details'>
        <div className='email'>
          <input type="form-email" name="email" placeholder="Enter email"/>
          <p className='email-sidenote'>I'll never share your email with anyone else.</p>
        </div>
        <input type="text" name="name" placeholder="Name" className='form-name'/>
      </div>
        <input type="text" name="subject" placeholder="Subject"/>
        <textarea name="message" placeholder="Message" className='form-message'></textarea>
        <button className="submit-button"type="submit">Send Message</button>
    </form> */}

{/* 
    <Modal className="modal" show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Message Received</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Thanks for your message, your message has been submitted successfully. I will be in touch soon!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} >Close</Button>
      </Modal.Footer>
    </Modal> */}

    </>
  )
}

export default ContactForm;
