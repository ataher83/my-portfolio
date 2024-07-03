// components/About.js
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="p-8 bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <Image 
            src="https://avatars.githubusercontent.com/u/141751330?s=400&u=5119a8ee6ad778913068d1aebe94ee850460675b&v=4" 
            // alt="Profile Photo" 
            width={300} 
            height={300} 
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Abu Taher Md. Shahin</h1>
          <p className="text-2xl mb-2">Front End Web Developer</p>
          <p className="mb-4">Malibagh, Dhaka</p>
          <p>
            I am a dedicated Front End Developer with a strong foundation in HTML, CSS, and JavaScript, and extensive experience with React and Tailwind CSS. I am passionate about building responsive and user-friendly web applications, and I am constantly seeking opportunities to learn and grow in the field of web development.
          </p>
        </div>
      </div>
    </section>
  );
}
