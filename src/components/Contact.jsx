import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope, faGift, faPaperPlane, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/mt.eg99@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
          <div className="relative flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing together.
              </p>
              <ul className="flex gap-4">
                <li>
                  <a href="https://github.com/MTI99" target="blank">
                <i className="fa-brands fa-github text-2xl hover:scale-125 duration-75"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mohamedelsamahy/" target="blank">
                <i className="fa-brands fa-linkedin text-2xl hover:scale-125 duration-75"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/HamoUA07" target="blank">
                <i className="fa-brands fa-facebook text-2xl hover:scale-125 duration-75"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:mt.eg99@gmail.com" target="blank">
                <i className="fa-solid fa-envelope text-2xl hover:scale-125 duration-75"></i>
                  </a>
                </li>
                <li>
                  <a href="http://wa.link/m7n4la" target="blank">
                <i className="fa-brands fa-whatsapp text-2xl hover:scale-125 duration-75"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      required
                    />
                    <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      required
                    />
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      required
                    ></textarea>
                    <FontAwesomeIcon icon={faComment} className="absolute left-3 top-4 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative py-3 px-6 rounded-lg font-semibold text-gray-900 transition-all duration-300
                    ${submitted ? "bg-green-400 hover:bg-green-300" : "bg-yellow-400 hover:bg-yellow-300"}
                    disabled:opacity-70 disabled:cursor-not-allowed
                    group overflow-hidden`}
                >
                  <span className={`inline-flex items-center gap-2 transition-transform duration-300
                    ${isSubmitting ? "translate-y-10" : "translate-y-0"}
                    ${submitted ? "translate-y-10" : "translate-y-0"}`}
                  >
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  </span>

                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center -translate-y-10 animate-appear">
                      <FontAwesomeIcon icon={faSpinner} className="w-5 h-5 animate-spin" />
                    </span>
                  )}

                  {submitted && (
                    <span className="absolute inset-0 flex items-center justify-center -translate-y-10 animate-appear">
                      Sent Successfully!
                    </span>
                  )}
                </button>

                {error && <p className="text-red-500 text-center mt-2">حدث خطأ أثناء الإرسال. حاول مرة أخرى.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
