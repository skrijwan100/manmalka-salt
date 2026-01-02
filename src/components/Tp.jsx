import React, { useState, useEffect } from 'react';
import { Award, Code, Handshake, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

const TechnicalPartner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Cutting-edge web solutions and applications"
    },
    {
      icon: Sparkles,
      title: "Digital Innovation",
      description: "Transforming businesses through technology"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Proven track record in tech solutions"
    }
  ];

  return (
    <div className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-linear(0deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px),
            repeating-linear-linear(90deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px)
          `
        }}></div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-400/30 backdrop-blur-sm">
            <Handshake className="w-4 h-4 mr-2" />
            Powered By Technology
          </div>
        </div>

        {/* Main Content Container */}
        <div className={`bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="">
            {/* Left Side - Main Message */}
            <div className="p-8 md:p-12  justify-center bg-linear-to-br from-blue-600/20 to-purple-600/20">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
                  Technical Partner
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Bitnextro Solutions Pvt Ltd
                </h2>
                <div className="w-24 h-1.5 bg-linear-to-r from-blue-400 to-purple-400 rounded-full mb-6"></div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Our trusted technology partner, delivering innovative digital solutions and powering our online presence with cutting-edge web technologies.
                </p>
              </div>

              {/* Partnership Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-slate-300">Reliable</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-sm text-slate-300">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
               <a href="https://www.bitnextro.com/" target='_blank'> <button className="group flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechnicalPartner;