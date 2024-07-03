// index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">
        <About />

        <section id="skills" className="p-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    <Image src="/images/skills/html.png" alt="HTML" width={24} height={24} />
                    Expert: HTML, CSS, JavaScript, React, Tailwind
                  </li>
                  <li>
                    <Image src="/images/skills/bootstrap.png" alt="Bootstrap" width={24} height={24} />
                    Comfortable: Bootstrap, Daisy UI, Mamba UI, MongoDB, Node.js, Express.js, Firebase
                  </li>
                  <li>
                    <Image src="/images/skills/cpp.png" alt="C++" width={24} height={24} />
                    Familiar: C++, Python, Django
                  </li>
                  <li>
                    <Image src="/images/skills/git.png" alt="Git" width={24} height={24} />
                    Tools: Git, GitHub, npm, Chrome DevTools, Vite
                  </li>
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
          </div>
        </section>

        <section id="projects" className="p-8 bg-white shadow-md">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">The Asset Manager</h3>
                <p>Comprehensive Asset Management: Manage assets and track real-time usage.</p>
                <p>User-Friendly Navigation: Dynamic navbar for Employees/HR Managers with quick access to requests and team management.</p>
                <p>Secure and Efficient: Separate registration forms for Employees/HR Managers with subscription packages; ensure secure Stripe payments.</p>
                <p>Technologies Used: HTML, TailwindCSS, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB, Stripe, Vercel</p>
                <p>Links: <a href="#">LiveSite</a>, <a href="#">ServerSideGitHub</a>, <a href="#">ClientSideGitHub</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">The Alt Products</h3>
                <p>Discover Alternatives: Easily find or inquire about alternative products through user-generated queries.</p>
                <p>Interactive Community: Engage by posting queries, receiving recommendations, and updating or deleting your queries.</p>
                <p>Customized Sorting: Sort queries and recommendations to tailor your search experience efficiently.</p>
                <p>Technologies Used: HTML, CSS, Tailwind, Daisy UI, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB</p>
                <p>Links: <a href="#">LiveSite</a>, <a href="#">ServerSideGitHub</a>, <a href="#">ClientSideGitHub</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">The Art Gallery</h3>
                <p>Craft Creation: Easily upload, save, and manage your own craft items with detailed descriptions.</p>
                <p>Category Search: Find your craft items conveniently categorized for quick access.</p>
                <p>Privacy Control: Your craft items are securely stored, visible only to you and the admin.</p>
                <p>Technologies Used: HTML, CSS, Tailwind, Mamba UI, JavaScript, React, Vite, npm, Node.js, Express.js, Firebase, MongoDB</p>
                <p>Links: <a href="#">LiveSite</a>, <a href="#">ServerSideGitHub</a>, <a href="#">ClientSideGitHub</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="p-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p>Bachelor of Science in Computer Science & Engineering</p>
            <p>Darul Ihsan University, 2011</p>
          </div>
        </section>

        <section id="contact" className="p-8 bg-white shadow-md">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
