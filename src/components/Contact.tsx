'use client';

import { useEffect, useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:viniciusbastos.dev@outlook.com?subject=${subject}&body=${body}`);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'viniciusbastosilva57@gmail.com',
      link: 'mailto:viniciusbastosilva57@gmail.com',
    },
    {
      icon: <SiWhatsapp className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+55 (73) 9 9171-3981',
      link: 'https://wa.me/5573991713981',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/vinicius-bastos-silva',
      link: 'https://linkedin.com/in/vinicius-bastos-silva',
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: '@viniciusbastos-dev',
      link: 'https://github.com/viniciusbastos-dev',
    },
    /*     {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Localização',
      value: 'Belo Horizonte, MG',
      link: null,
    }, */
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div ref={containerRef} className="w-full opacity-0 animate-fade-in-up animation-delay-300">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-SFMono text-lg text-green-700">03.</span>
          <h2 className="font-SFMono text-4xl font-bold text-lightest-slate">Contato</h2>
          <div className="flex-1 h-px ml-8 bg-slate-700"></div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#ccd6f6' }}>
            Vamos trabalhar juntos?
          </h3>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#8892b0' }}>
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo e vamos
            conversar sobre como posso ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start">
          {/* Contact Form */}
          <div ref={formRef} className="w-full lg:max-w-lg opacity-0 transition-all duration-700">
            <div
              className="group relative overflow-hidden backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor: '#112240',
                borderColor: '#233554',
              }}
            >
              <div className="absolute inset-0 bg-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h4 className="font-bold mb-6 text-2xl relative z-10" style={{ color: '#64ffda' }}>
                Envie uma mensagem
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#a8b2d1' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-200 focus:outline-none focus:border-green-700"
                    style={{
                      backgroundColor: '#0a192f',
                      borderColor: '#233554',
                      color: '#ccd6f6',
                    }}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#a8b2d1' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-200 focus:outline-none focus:border-green-700"
                    style={{
                      backgroundColor: '#0a192f',
                      borderColor: '#233554',
                      color: '#ccd6f6',
                    }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#a8b2d1' }}>
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-200 focus:outline-none focus:border-green-700 resize-none"
                    style={{
                      backgroundColor: '#0a192f',
                      borderColor: '#233554',
                      color: '#ccd6f6',
                    }}
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                  style={{
                    backgroundColor: '#64ffda',
                    color: '#0a192f',
                  }}
                >
                  <FiSend className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="w-full lg:max-w-lg opacity-0 transition-all duration-700">
            <h4 className="font-bold mb-8 text-2xl" style={{ color: '#a8b2d1' }}>
              Informações de Contato
            </h4>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="group relative overflow-hidden backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:border-green-700"
                  style={{
                    backgroundColor: '#112240',
                    borderColor: '#233554',
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#0a192f', color: '#64ffda' }}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium mb-1" style={{ color: '#ccd6f6' }}>
                        {info.label}
                      </h5>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200 hover:text-green-700"
                          style={{ color: '#8892b0' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: '#8892b0' }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8 text-center">
              <p className="text-sm mb-4" style={{ color: '#8892b0' }}>
                Ou me encontre nas redes sociais:
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/vinicius-bastos-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: '#112240', color: '#64ffda' }}
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/vinicius-bastos-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: '#112240', color: '#64ffda' }}
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:viniciusbastosilva57@gmail.com"
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: '#112240', color: '#64ffda' }}
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
