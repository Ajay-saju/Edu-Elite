"use client";

import { useState, useMemo, useEffect } from "react";
import { Send } from "lucide-react";
import countryList from "react-select-country-list";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        country: "",
        studyType: "abroad", // 'abroad' | 'domestic'
        state: "",
        city: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStudyTypeChange = (type: string) => {
        setFormData((prev) => ({
            ...prev,
            studyType: type,
            country: type === 'domestic' ? 'India' : ''
        }));
    };

    const options = useMemo(() => countryList().getData(), []);

    const handleCountryChange = (selectedOption: any) => {
        setFormData((prev) => ({ ...prev, country: selectedOption ? selectedOption.label : "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Registration Success:", result);
                setStatus("success");
                setFormData({
                    name: "", email: "", phone: "", course: "", country: "",
                    studyType: "abroad", state: "", city: ""
                });
            } else {
                console.error("Registration Error:", result.error);
                setStatus("error");
                // Optionally show the error message to the user
                // alert(result.error); 
            }
        } catch (error) {
            console.error("Network Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="register" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-primary py-6 px-8">
                        <h2 className="text-2xl font-bold text-white">Student Registration</h2>
                        <p className="text-blue-100">Join us to kickstart your educational journey.</p>
                    </div>

                    <div className="p-8">
                        {status === "success" ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                                <p className="text-gray-600">We have received your details and will contact you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-primary font-medium hover:underline"
                                >
                                    Register another student
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Study Type Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">I am interested in:</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => handleStudyTypeChange('abroad')}
                                            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${formData.studyType === 'abroad'
                                                ? 'border-primary bg-primary/5 text-primary'
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                }`}
                                        >
                                            Study Abroad
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleStudyTypeChange('domestic')}
                                            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${formData.studyType === 'domestic'
                                                ? 'border-secondary bg-secondary/5 text-secondary-foreground' // Using secondary color for domestic
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                }`}
                                        >
                                            Domestic Education
                                        </button>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="+1 234 567 8900"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                                        <input
                                            type="text"
                                            id="course"
                                            name="course"
                                            required
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="Computer Science, MBA, etc."
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="Your State"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="Your City"
                                        />
                                    </div>
                                </div>

                                {formData.studyType === 'abroad' && (
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
                                        <Select
                                            options={options}
                                            value={options.find((opt: { label: string; value: string }) => opt.label === formData.country)}
                                            onChange={handleCountryChange}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            placeholder="Select a country..."
                                            styles={{
                                                control: (base: any) => ({
                                                    ...base,
                                                    borderColor: '#d1d5db', // gray-300
                                                    borderRadius: '0.5rem', // rounded-lg
                                                    paddingTop: '2px',
                                                    paddingBottom: '2px',
                                                    boxShadow: 'none',
                                                    '&:hover': {
                                                        borderColor: '#d1d5db'
                                                    },
                                                    '&:focus-within': {
                                                        borderColor: 'transparent',
                                                        boxShadow: '0 0 0 2px var(--color-primary)'
                                                    }
                                                }),
                                                input: (base: any) => ({
                                                    ...base,
                                                    color: '#111827', // gray-900
                                                }),
                                                singleValue: (base: any) => ({
                                                    ...base,
                                                    color: '#111827', // gray-900
                                                }),
                                                option: (base: any, state: any) => ({
                                                    ...base,
                                                    color: '#111827', // gray-900
                                                    backgroundColor: state.isSelected ? '#e5e7eb' : state.isFocused ? '#f3f4f6' : 'white',
                                                }),
                                            }}
                                        />
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {status === "submitting" ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        "Register Now"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
