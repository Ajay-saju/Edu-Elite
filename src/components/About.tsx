import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for an image. Using a colored div for now if no image is available, 
                 but in a real app, use next/image with a real source. 
                 I'll use a gradient placeholder. */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-90 flex items-center justify-center text-white text-2xl font-bold">
                            Elite Education Team
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Edu Elite</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We are an educational consultancy with 16 years of experience in the admission field. Our priority is student safety, proper guidance, and quality education.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our expert counselors help students understand their options and choose the right courses for higher studies. We have branches in Kerala, Tamil Nadu, and Karnataka, making our services easy to access.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We offer free college visits before admission, and our team will guide you through every step of the application and admission process.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Even after admission, you can contact us anytime for support—we are always here to help you.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">45000+</h4>
                                <p className="text-gray-600">Students Placed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">700+</h4>
                                <p className="text-gray-600">Partner Universities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
