import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">

      <Head>
        <title>Abu Taher Md. Shahin - Portfolio</title>
        <meta name="description" content="Abu Taher Md. Shahin's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow mt-16">
        <section id="about" className="p-8 bg-white shadow-md rounded-lg mx-auto max-w-5xl">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/3">
              <Image 
                src="/images/photo.jpeg"
                alt="Profile Photo" 
                width={300} 
                height={300} 
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-2">Abu Taher Md. Shahin</p>
              <p className="text-lg mb-2">Front End Web Developer</p>
              <p className="mb-4">Malibagh, Dhaka</p>
              <p className="text-lg">
                I am a dedicated Front End Developer with a strong foundation in HTML, CSS, and JavaScript, and extensive experience with React and Tailwind CSS. I am passionate about building responsive and user-friendly web applications, and I am constantly seeking opportunities to learn and grow in the field of web development.
              </p>
            </div>
          </div>
        </section>

        <section id="resume" className="p-8 bg-white shadow-md rounded-lg mt-8 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <a 
            href="https://drive.google.com/file/d/1JLG1qXF6pWI22vNHynLRc_tERa44A1L9/view" 
            download 
            className="text-blue-500 underline"
          >
            Download Resume
          </a>
        </section>

        <section id="skills" className="p-8 bg-white shadow-md rounded-lg mt-8 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Expert: HTML, CSS, JavaScript, React, Tailwind</li>
                <li>Comfortable: Bootstrap, Daisy UI, Mamba UI, MongoDB, Node.js, Express.js, Firebase</li>
                <li>Familiar: C++, Python, Django</li>
                <li>Tools: Git, GitHub, npm, Chrome DevTools, Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Extra Skills</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Hardworking</li>
                <li>Quick learner</li>
                <li>Active listening</li>
                <li>Teamwork</li>
                <li>Management</li>
                <li>Leadership</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="p-8 bg-white shadow-md rounded-lg mt-8 mx-auto max-w-5xl">
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
            <a href="https://asset-manager-54e54.web.app/" className="text-blue-500 underline">Live Site</a>
            <a href="https://github.com/ataher83/asset-manager-server" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="https://github.com/ataher83/asset-manager-client" className="text-blue-500 underline ml-2">GitHub Client</a>
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
            <a href="https://the-alt-products.web.app/" className="text-blue-500 underline">Live Site</a>
            <a href="https://github.com/ataher83/alt-products-server" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="https://github.com/ataher83/alt-products-client" className="text-blue-500 underline ml-2">GitHub Client</a>
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
            <a href="https://the-art-gallery-74571.web.app/" className="text-blue-500 underline">Live Site</a>
            <a href="https://github.com/ataher83/art-gallery-server" className="text-blue-500 underline ml-2">GitHub Server</a>
            <a href="https://github.com/ataher83/art-gallery-client" className="text-blue-500 underline ml-2">GitHub Client</a>
          </div>
        </section>

        <section id="education" className="p-8 bg-white shadow-md rounded-lg mt-8 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science & Engineering</h3>
            <p>Darul Ihsan University, Dhaka</p>
          </div>
        </section>

        <section id="contact" className="p-8 bg-white shadow-md rounded-lg mt-8 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div>
            <p>Email: <a href="mailto:taher83@gmail.com" className="text-blue-500 underline">taher83@gmail.com</a></p>
            <p>Cell: 01749117640</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/abutahershahin/" className="text-blue-500 underline">Your LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/ataher83" className="text-blue-500 underline">Your GitHub Profile</a></p>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
