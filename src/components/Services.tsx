import { Globe, BookOpen, CheckCircle } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Study Abroad",
            description: "Explore top universities worldwide. We assist with university selection, applications, visa processing, and pre-departure briefings.",
            icon: <Globe className="h-10 w-10 text-white" />,
            features: ["University Selection", "Visa Assistance", "Pay Fee After Visa", "Offer Letter in Less Than 48 Hours"],
            color: "bg-blue-600",
        },
        {
            title: "Domestic Consultancy",
            description: "Helping students get into top colleges in Bengaluru, Mysore, Tamil Nadu, Kerala, and Andhra Pradesh, we guide you through local entrance exams, applications, counselling and scholarships",
            icon: <BookOpen className="h-10 w-10 text-white" />,
            features: ["College Admission Proccess", "Free Collage visit before admission", "Ensuring 100% safty for students"],
            color: "bg-amber-500",
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive education consultancy services tailored to your aspirations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-blue-700 font-semibold ">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
