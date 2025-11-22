import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">



                    {/* Left Side - Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for Hero Image - Replace src with actual image */}
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">Hero Image Placeholder</span>
                            </div>
                            <NextImage
                                src="/HeroImage.jpg"
                                alt="Students studying"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative elements behind image */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-primary/10 rounded-3xl -rotate-6"></div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-center lg:text-right order-1 lg:order-2">
                        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">


                            <p className="font-normal md:font-bold text-5xl ...">Shape Your Future with</p>
                            <br />
                            <span className="text-green-600">Elite Education</span>
                        </h1>
                        <p className="text-center text-lg md:text-xl text-gray-600 mb-8 leading-relaxed ml-auto max-w-2xl">
                            Your Partner From Admission to Graduation, Guiding You Through Every Step of Your Education Journey For Study Abroad & Domestic Education.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-center gap-4">
                            <Link
                                href="#register"
                                className="
                  inline-flex items-center justify-center px-8 py-3 
                  border border-transparent text-base font-medium rounded-full 
                  bg-green-500 hover:bg-green-600 text-white 
                  transition-all shadow-lg hover:shadow-xl
                "
                            >
                                Start Your Journey
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        </section>
    );
}
