import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            {/* <GraduationCap className="h-8 w-8 text-primary" /> */}
                            <NextImage
                                src="/photo_2025-11-22_09-49-24 (1).ico"
                                alt="Edu Elite Logo"
                                width={150}
                                height={40}
                                className="h-16 w-auto object-contain"
                            />
                            {/* <span className="font-bold text-2xl tracking-tight">Edu Elite</span> */}
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Empowering students to achieve their academic dreams through expert guidance and personalized consultancy services.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#register" className="text-gray-400 hover:text-white transition-colors">Register</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1GaQrBbkps/?mibextid=wwXIfr" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
                            <a href="https://www.instagram.com/_elite_idukki?igsh=ODN1bXJrZWc5ZGIy&utm_source=qr" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
                            <a href="https://www.linkedin.com/in/elite-idukki-98b690392?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Edu Elite Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
