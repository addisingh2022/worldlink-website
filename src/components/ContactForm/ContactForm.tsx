"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Always check if response is ok before parsing JSON
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();

      if (data.result === "success") {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage("Failed to send message: " + (data.message || "Unknown error"));
        setSuccessMessage("");
      }
    } catch (error) {
      let message = "An error occurred. Please try again later.";
      if (error instanceof Error) message = error.message;
      setErrorMessage(message);
      setSuccessMessage("");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>

        {successMessage && <p className="text-green-600 font-semibold mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            required
          />
          <input
            type="text"
            placeholder="Your Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.result === "success") {
//         setSuccessMessage("Message sent successfully!");
//         setErrorMessage("");
//         setForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setErrorMessage("Failed to send message: " + (data.message || "Unknown error"));
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       let message = "An error occurred. Please try again later.";
//       if (error instanceof Error) {
//         message = error.message;
//       }
//       setErrorMessage(message);
//       setSuccessMessage("");
//       console.error("Submit error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-50" id="contact">
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>

//         {successMessage && <p className="text-green-600 font-semibold mb-4">{successMessage}</p>}
//         {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}

//         <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Your Phone"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             rows={4}
//             required
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: ""});
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.result === "success") {
//         setSuccessMessage("Message sent successfully!");
//         setErrorMessage("");
//         setForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setErrorMessage("Failed to send message: " + (data.message || "Unknown error"));
//         setSuccessMessage("");
//       }
//     } catch (error: any) {
//       setErrorMessage("An error occurred. Please try again later.");
//       setSuccessMessage("");
//       console.error("Submit error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-50" id="contact">
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>

//         {successMessage && <p className="text-green-600 font-semibold mb-4">{successMessage}</p>}
//         {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}

//         <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Your Phone Number"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
//             rows={4}
//             required
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
