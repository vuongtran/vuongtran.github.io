import Image from "next/image";

const About = (props) => {
  return (
    <>
      <h3>About</h3>

      <Image src="/face_real.jpg" alt="Picture" width={500} height={500} />
      <br />
      <p>I'm working on something new</p>
    </>
  );
};

export default About;
