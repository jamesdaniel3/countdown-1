import "../styles/About.css";

const About = () => {
  return (
    <>
      <div class="header" style="height: auto">
        <img src="UVA_background.png" alt="Picture of the lawn" />
      </div>
      <div class="content">
        <div id="section-1">About Me</div>
        <p>
          Hi! I'm James and I am a third year student at the University of
          Virginia. I am studying Computer Science and Economics. Outside of
          school, I spend a lot of my time as a TA for a couple of Computer
          Science classes at UVA, and I really enjoy helping people learn. In my
          spare time I like to listen to and play music. I grew up playing
          piano, guitar, and drums, and I'm now starting to build a bit of a
          record collection. Anyone at UVA should check out Roots, Rock, Reggae
          on the corner if they want to buy or just browse some cool records. If
          you want to learn more about me professionally, check out my LinkedIn
          <a
            href="https://www.linkedin.com/in/james-daniel-5b48b01b0/"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;
