//import React from 'react'
import "./About.css";
import img from '../../assets/images/photogalary/img1.png'

function About() {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="about-text">
            Step into our library—a time-honored institution steeped in history
            and brimming with literary treasures. For decades, we've been the
            heart of our community, a space where avid readers, knowledge
            seekers, and enthusiasts of all ages converge in pursuit of
            enlightenment and entertainment. Our shelves house an eclectic
            collection, ranging from classical masterpieces to the latest
            releases, catering to the diverse tastes and curiosities of our
            patrons. Beyond our extensive catalog, we offer a haven for
            exploration, inviting readers to delve into worlds unknown, unravel
            mysteries, and spark their imaginations through the power of
            storytelling.
            <br />
            <br />
            More than a repository of books, we are custodians of knowledge,
            advocates of literacy, and champions of intellectual curiosity. Our
            passionate team of librarians curates resources, designs engaging
            programs, and fosters an inclusive environment that celebrates the
            joy of reading. Whether you're seeking a quiet corner for
            reflection, engaging in lively discussions at our events, or simply
            browsing our shelves, our library is a vibrant hub where the love
            for literature thrives. <br />
            <br />
            Join us on this literary odyssey as we continue to inspire, educate,
            and connect individuals through the profound magic of words.
            <br />
            <br />
            Your suggestions for improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
