function About() {
  return (
    <section className="home-section">
      <div className="header-container">
        <div className="text-container">
          <p className="greetings">Hello world ✨</p>
          <h1>I'm Jenny, Front-End Web Developer.</h1>
          <p className="brand-statement">
            "Inpired by nature and always learning."
          </p>
        </div>
        {/* <img className="jenny-headshot" src={jennyHeadshot} alt="Picture of Jenny Siu" /> */}
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p> Hi, I'm Jenny Siu, a front-end web developer with a passion for creating beautiful, responsive, and user-friendly websites and applications. 
            <br />
            <br />
            I am a recent graduate of the Front-End Web Development Bootcampng my as a developer, where I learnt some of the latest technologies including React. Welcome to my React Portfolio website. 
          </p>
        <a className="resume-link" href="https://docs.google.com/document/d/1JTwIgCrFwqtqXzOJ4nyV_ecF8zuww2FrQxD2MzSqZ_4/edit?usp=sharing" target="_blank">See my resume here</a>
      </div>
    </section>
  )
}

export default About;
