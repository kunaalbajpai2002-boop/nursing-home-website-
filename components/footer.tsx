import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-card mt-16">
      <div className="w-full px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CH</span>
              </div>
              Aggarwal Nursing Home
            </h3>
            <p className="text-sm text-gray-300">
              Dedicated to providing compassionate, professional nursing care with state-of-the-art facilities and highly trained healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>(+91)92666-10335</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>aggarwalnursinghomenarela@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>U-150 Vijay Nagar , Narela , Near Narela Bus Stand , Delhi-110040</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2026 Aggarwal Nursing Home . All Right Reserved . Developed by AI Vantage Tech Services</p>
        </div>
      </div>
    </footer>
  );
}
