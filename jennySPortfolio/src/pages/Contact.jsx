import ContactForm from '../components/ContactForm/index.jsx';
// import './styling/Contact.css';


function Contact() {
  return (
    <div className='contact-container'>
      <section className='contact-info'>
        <h1>Get in touch</h1>
        <p className='contact-intro'>I'd love to hear from you. I'm always open to discussing new ideas and projects.</p>
        <p>Email: jenny.siu79@gmail.com</p>
        <div className='contact-links'>
          <a href="https://github.com/jennysiu" target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jenny-siu-534576156/" target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:jenny.siu79@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
      <ContactForm />
    </div>
  )
}

export default Contact;