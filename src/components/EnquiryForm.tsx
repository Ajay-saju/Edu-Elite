"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Enquiry Data:", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                                    <p className="mt-1 text-gray-600">info@eduelite.com</p>
                                    <p className="text-gray-600">support@eduelite.com</p>
                                </div>
                            </div>
                            {/* Add more contact info if needed */}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        {status === "success" ? (
                            <div className="text-center py-8">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for contacting us.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-primary font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="enquiry-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="enquiry-name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="enquiry-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="enquiry-email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
