import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-20 w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-600 pb-14 pt-14 ">






        <div className="md:max-w-96 ">
          <img alt="" className="h-11" src={assets.Agrologo} />
          <p className="mt-6 text-sm">
            🚜 AgroLink bridges the gap between farmers and markets for better
            prices and better lives.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-9 w-auto"
            />
            <img
              src={assets.appStore}
              alt="app store"
              className="h-9 w-auto border"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-white">Menu</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  List & Sell
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white">Contact Us</h2>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} /> +91-7620691091
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                sahilwankhede72@example.com
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5 text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
