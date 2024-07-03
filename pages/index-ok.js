// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Abu Taher Md. Shahin - Portfolio</title>
        <meta name="description" content="Abu Taher Md. Shahin's portfolio website" />
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
              <li>Expert: HTML, CSS, JavaScript, React, Tailwind</li>
              <li>Comfortable: Bootstrap, Daisy UI, Mamba UI, MongoDB, Node.js, Express.js, Firebase</li>
              <li>Familiar: C++, Python, Django</li>
              <li>Tools: Git, GitHub, npm, Chrome DevTools, Vite</li>
              <li>Extra Skills: Hardworking, Quick learner, Active listening, Teamwork, Management, Leadership, Adaptability</li>
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
            <h3 className="text-2xl font-semibold">The Asset Manager (Assets & Product Management Website)</h3>
            <p>Key Features:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Comprehensive Asset Management: Manage assets and track real-time usage.</li>
              <li>User-Friendly Navigation: Dynamic navbar for Employees/HR Managers with quick access to requests and team management.</li>
              <li>Secure and Efficient: Separate registration forms for Employees/HR Managers with subscription packages; ensure secure Stripe payments.</li>
            </ul>
            <p>Technologies Used: HTML, TailwindCSS, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB, Stripe, Vercel</p>
            <a href="LiveSite" className="text-blue-500 underline">Live Site</a>
            <a href="ServerSideGitHub" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="ClientSideGitHub" className="text-blue-500 underline ml-2">GitHub Client</a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">The Alt Products (Alternative Product Searching Website)</h3>
            <p>Key Features:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Discover Alternatives: Easily find or inquire about alternative products through user-generated queries.</li>
              <li>Interactive Community: Engage by posting queries, receiving recommendations, and updating or deleting your queries.</li>
              <li>Customized Sorting: Sort queries and recommendations to tailor your search experience efficiently.</li>
            </ul>
            <p>Technologies Used: HTML, CSS, Tailwind, Daisy UI, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB</p>
            <a href="LiveSite" className="text-blue-500 underline">Live Site</a>
            <a href="ServerSideGitHub" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="ClientSideGitHub" className="text-blue-500 underline ml-2">GitHub Client</a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">The Art Gallery (Art & Craft Store Website)</h3>
            <p>Key Features:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Craft Creation: Easily upload, save, and manage your own craft items with detailed descriptions.</li>
              <li>Category Search: Find your craft items conveniently categorized for quick access.</li>
              <li>Privacy Control: Your craft items are securely stored, visible only to you and the admin.</li>
            </ul>
            <p>Technologies Used: HTML, CSS, Tailwind, Mamba UI, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB</p>
            <a href="LiveSite" className="text-blue-500 underline">Live Site</a>
            <a href="ServerSideGitHub" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="ClientSideGitHub" className="text-blue-500 underline ml-2">GitHub Client</a>
          </div>
        </section>

        <section id="education" className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science & Engineering</h3>
            <p>Darul Ihsan University, 2011</p>
          </div>
        </section>

        <section id="contact" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div>
            <p>Email: <a href="mailto:taher83@gmail.com" className="text-blue-500 underline">taher83@gmail.com</a></p>
            <p>Cell: 01749117640</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" className="text-blue-500 underline">Your LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/your-profile" className="text-blue-500 underline">Your GitHub Profile</a></p>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
