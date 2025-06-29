import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and About */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/assets/icons/new.png"
                alt="MCI Logo"
                width={120}
                height={80}
                className="w-auto h-16"
              />
            </Link>
            <div className="flex gap-4 mt-4">
              <span className="text-xs text-gray-500">EST. 2014</span>
              <span className="text-xs text-gray-500">CAC Reg. No. 67767</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              MCI is a non-profit organization established in 2014 and is
              committed to the development of young people to help them realize
              their gifts and potentials EARLY.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-base">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Connect with Brand-Colored Icons */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Connect</h4>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <FaXTwitter className="w-5 h-5 mr-2 text-black" />
                  <span className="text-gray-600 group-hover:text-black transition-colors">
                    X (Twitter)
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <FaFacebook className="w-5 h-5 mr-2 text-[#1877F2]" />
                  <span className="text-gray-600 group-hover:text-[#1877F2] transition-colors">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <FaLinkedin className="w-5 h-5 mr-2 text-[#0A66C2]" />
                  <span className="text-gray-600 group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <FaInstagram className="w-5 h-5 mr-2 text-[#E4405F]" />
                  <span className="text-gray-600 group-hover:text-[#E4405F] transition-colors">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-base">
          <p>&copy; {new Date().getFullYear()} MCI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
