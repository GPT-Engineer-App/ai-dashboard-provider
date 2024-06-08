"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaDatabase, FaUsers, FaChartLine, FaCogs, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [stats, setStats] = useState({
    models: 120,
    providers: 15,
    apiCalls: "1.2M",
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/oneai-logo.png" alt="OneAI Logo" width={120} height={40} />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">API Docs</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Support</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">One API for Multiple AI Providers and Models</h1>
          <p className="text-xl mb-6">Seamlessly integrate with the best AI models and providers using a single API.</p>
          <button onClick={() => scrollToSection("statistics")} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105">Get Started</button>
        </div>
      </header>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="flex justify-around">
            <div>
              <FaDatabase className="text-blue-600 text-6xl mb-2" />
              <h3 className="text-2xl font-semibold">{stats.models}</h3>
              <p className="text-gray-600">AI Models</p>
            </div>
            <div>
              <FaUsers className="text-blue-600 text-6xl mb-2" />
              <h3 className="text-2xl font-semibold">{stats.providers}</h3>
              <p className="text-gray-600">Providers</p>
            </div>
            <div>
              <FaChartLine className="text-blue-600 text-6xl mb-2" />
              <h3 className="text-2xl font-semibold">{stats.apiCalls}</h3>
              <p className="text-gray-600">API Calls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="flex justify-around">
            <div className="max-w-xs transition-transform transform hover:scale-105">
              <FaCogs className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Integrate with multiple AI providers effortlessly.</p>
            </div>
            <div className="max-w-xs transition-transform transform hover:scale-105">
              <FaDatabase className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Robust Models</h3>
              <p className="text-gray-600">Access a wide range of powerful AI models.</p>
            </div>
            <div className="max-w-xs transition-transform transform hover:scale-105">
              <FaChartLine className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Scalable</h3>
              <p className="text-gray-600">Scale your applications with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-around mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
          </div>
          <p className="mt-4">&copy; 2023 OneAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}