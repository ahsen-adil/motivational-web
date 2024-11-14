"use client"
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDollarSign } from 'react-icons/fa';

export default function ContactSection() {

  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ca06216d-822a-423c-bfc0-51330bdcf7c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
  return (
    <>
      <section className="min-h-screen flex items-stretch text-white">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-4xl font-bold text-left tracking-wide">
              We Value Your Feedback!
            </h1>
            <p className="text-2xl my-4">
              Your experiences and thoughts help us make this platform better for everyone. Tell us how our motivational content has inspired or helped you in your journey. Whether it’s a quote that resonated with you, an article that brought clarity, or a story that motivated you to take action, we’d love to hear about it. Your feedback fuels our mission to spread positivity and growth!
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#fff" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="#fff" />
            </a>
            <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer">
              <FaDollarSign size={24} color="#fff" />
            </a>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="mb-4 text-xl font-sans font-bold">Give Us Your Feedback</h1>
            <form action="" onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                />
                <div className="relative mt-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              </div>
              <div className="px-4 pb-2 pt-4">
                <button type="submit" className="block w-full p-4 text-xl font-bold font-sans rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  Send
                </button>
              </div>
            </form>
            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden">
              <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} color="#fff" />
              </Link>
              <Link href="https://github.com/ahsen-adil" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color="#fff" />
              </Link>
              <Link href="https://www.fiverr.com/ahsen_developer?up_rollout=true" target="_blank" rel="noopener noreferrer">
                <FaDollarSign size={24} color="#fff" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
