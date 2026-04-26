import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });
  };


    const openWhatsApp = () => {
        window.open(
            "https://wa.me/6306424265?text=Hello%20Satyam%2C%20I%20want%20to%20connect",
            "_blank"
        );
    };

  return (
    <div className="px-6 md:px-28 py-10 md:py-20 text-white">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
        <div className="relative inline-block px-4 py-1 text-[#FF014F] text-sm md:text-lg mb-6 md:mb-10">
            <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-700"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-700"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-700"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-700"></span> 
            Contact With Me
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200">Contact With Me</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Get in touch for full-stack development solutions — from building robust backend APIs to crafting responsive frontends.
        </p>
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT FORM */}
            <div className="relative border border-gray-800 p-6 md:p-10 flex-1 order-2 lg:order-1">
                {/* Corner Borders */}
                <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-rose-500"></span>
                <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-rose-500"></span>
                <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-rose-500"></span>
                <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-rose-500"></span>

                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Send me a message</h2>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-black border border-gray-800 p-4 rounded-md outline-none focus:border-rose-500 w-full"
                    />
                    <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-black border border-gray-800 p-4 rounded-md outline-none focus:border-rose-500 w-full"
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-800 p-4 rounded-md outline-none focus:border-rose-500"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-800 p-4 rounded-md outline-none focus:border-rose-500"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-black border border-gray-800 p-4 rounded-md outline-none focus:border-rose-500"
                ></textarea>

                <button
                    type="submit"
                    className="w-full md:w-auto bg-rose-500 px-8 py-3 rounded-full hover:scale-105 transition-all text-sm md:text-base font-bold"
                >
                    Send Message →
                </button>
                </form>
            </div>

            {/* RIGHT SIDE (Info Blocks) */}
            <div className="relative border border-gray-800 py-10 px-6 space-y-10 w-full lg:w-fit order-1 lg:order-2">
                {/* Corner Borders */}
                <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-rose-500"></span>
                <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-rose-500"></span>
                {/* Desktop specific bottom borders */}
                <span className="hidden lg:block absolute -bottom-10 left-0 w-6 h-6 border-l-2 border-b-2 border-rose-500"></span>
                <span className="hidden lg:block absolute -bottom-10 right-0 w-6 h-6 border-r-2 border-b-2 border-rose-500"></span>
                {/* Mobile specific bottom borders */}
                <span className="lg:hidden absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-rose-500"></span>
                <span className="lg:hidden absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-rose-500"></span>

                {/* Block 1 */}
                <div className="text-center lg:text-left">
                <Phone className="text-rose-500 mb-2 mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Project Discussion</h3>
                <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto lg:mx-0">
                    Want to build scalable web apps? Let’s discuss your idea.
                </p>
                <p className="text-gray-300 mt-2 font-mono">+91 6306424265</p>
                </div>

                {/* Block 2 */}
                <div className="text-center lg:text-left">
                <Mail className="text-rose-500 mb-2 mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Email Me</h3>
                <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto lg:mx-0">
                    Reach out for collaboration or technical queries.
                </p>
                <p className="text-gray-300 mt-2 break-all font-mono">sharma.satyam121104@gmail.com</p>
                </div>

                {/* Block 3 */}
                <div className="text-center lg:text-left">
                <MessageCircle className="text-rose-500 mb-2 mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Let’s Connect</h3>
                <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto lg:mx-0">
                    Chat about full-stack development or real-time systems.
                </p>
                <button onClick={openWhatsApp} className="mt-8 bg-rose-500 px-6 py-3 rounded-full hover:opacity-90 transition text-sm font-bold">
                    Start Conversation →
                </button>
                </div>
            </div>

        </div>

        {/* Toast */}
        {showToast && (
        <div className="fixed bottom-5 right-5 left-5 md:left-auto md:bottom-10 md:right-10 bg-rose-500 px-6 py-3 rounded-lg shadow-lg text-center z-50">
            Message Sent Successfully!
        </div>
        )}
      
        <div className="h-10 lg:hidden"></div>
    </div>
  );
};

export default Contact;