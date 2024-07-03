// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow mt-16">
        <section id="resume" className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <a href="/path/to/resume.pdf" download className="text-blue-500 underline">Download Resume</a>
        </section>

        <section id="skills" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>Daisy UI</li>
              <li>Mamba UI</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
              <li>C++</li>
              <li>Python</li>
              <li>Django</li>
              <li>Git & GitHub</li>
              <li>npm</li>
              <li>Chrome DevTools</li>
              <li>Vite</li>
              <li>Stripe</li>
              <li>Vercel</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div>
            <h3 className="text-2xl font-semibold">Previous Job/Internship</h3>
            <p>Details about responsibilities, achievements, and technologies used.</p>
          </div>
        </section>

        <section id="projects" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div>
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p>Description, core features, and used technologies.</p>
            <a href="live-project-link" className="text-blue-500 underline">Live Project</a>
            <a href="github-client-repo-link" className="text-blue-500 underline ml-2">GitHub Client</a>
            <a href="github-server-repo-link" className="text-blue-500 underline ml-2">GitHub Server</a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p>Description, core features, and used technologies.</p>
            <a href="live-project-link" className="text-blue-500 underline">Live Project</a>
            <a href="github-client-repo-link" className="text-blue-500 underline ml-2">GitHub Client</a>
            <a href="github-server-repo-link" className="text-blue-500 underline ml-2">GitHub Server</a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p>Description, core features, and used technologies.</p>
            <a href="live-project-link" className="text-blue-500 underline">Live Project</a>
            <a href="github-client-repo-link" className="text-blue-500 underline ml-2">GitHub Client</a>
            <a href="github-server-repo-link" className="text-blue-500 underline ml-2">GitHub Server</a>
          </div>
        </section>

        <section id="education" className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold">Degree Name</h3>
            <p>Institution Name</p>
          </div>
        </section>

        <section id="contact" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
