'use client';

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Sent");
    };

    return (
        <section id="contact-us" className="min-h-[80vh] bg-[#0967A4] text-white font-[Manrope] flex items-center justify-center px-6 md:px-20">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 py-16">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
                    <div className="w-10 h-[2px] bg-white mb-6" />
                    <p className="mb-6 text-white/90">For general enquiries</p>

                    <div className="space-y-6 text-white/80 text-sm">
                        <div>
                            <p className="font-semibold">Address :</p>
                            <p>110, 16th Road, Chembur, Mumbai – 400071</p>
                        </div>
                        <div>
                            <p className="font-semibold">Phone :</p>
                            <p>+91 22 25208822</p>
                        </div>
                        <div>
                            <p className="font-semibold">Email :</p>
                            <p>info@supremegroup.co.in</p>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm mb-1">Full name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/50 outline-none text-white py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/50 outline-none text-white py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/50 outline-none text-white py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-transparent border-b border-white/50 outline-none text-white py-2 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-white/90 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
