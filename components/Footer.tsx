import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  contactEmail: string;
  contactPhone: string;
  links: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ contactEmail, contactPhone, links }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <div className="flex items-center mt-2">
              <Mail className="mr-2" aria-hidden="true" />
              <a href={`mailto:${contactEmail}`} className="hover:underline" aria-label="Email us">
                {contactEmail}
              </a>
            </div>
            <div className="flex items-center mt-2">
              <Phone className="mr-2" aria-hidden="true" />
              <a href={`tel:${contactPhone}`} className="hover:underline" aria-label="Call us">
                {contactPhone}
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="hover:underline" aria-label={`Navigate to ${link.name}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;