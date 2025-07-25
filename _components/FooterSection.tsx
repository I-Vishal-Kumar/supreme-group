import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white text-black font-[Manrope] px-6 md:px-20 py-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Logo */}
                    <div className="min-w-[150px]">
                        <Image
                            src={'/full-logo.png'}
                            height={100}
                            width={120}
                            alt="supreme group"
                        />
                    </div>

                    {/* Link Groups */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-full text-sm">
                        {/* Applications */}
                        <div>
                            <h3 className="font-semibold mb-2">APPLICATIONS</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Apparel</li>
                                <li>Automotive</li>
                                <li>Filtration</li>
                                <li>Customised Solutions</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold mb-2">COMPANY</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Innovation</li>
                                <li>Global Competency</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* More */}
                        <div>
                            <h3 className="font-semibold mb-2">MORE</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Careers</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="font-semibold mb-2">FOLLOW US</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                                <li>Medium</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 pt-8 border-t border-gray-200">
                    <p>©2023. All Rights Reserved.</p>
                    <p>Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.</p>
                </div>
            </div>
        </footer>
    );
}
