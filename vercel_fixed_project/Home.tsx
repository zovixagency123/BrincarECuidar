import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, Star as StarIcon, Mail, Phone, Clock, Baby, Puzzle, Send } from 'lucide-react';
import { Rainbow, Cloud } from '../components/Icons';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    navigate(`/#${id}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pastel-pink/20 text-pink-600 font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              <span>Babysitter de Confiança</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-gray-800 leading-tight mb-6">
              Babysitting com <span className="text-pastel-pink">carinho</span> e <span className="text-pastel-green">dedicação</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Olá! Sou a Jessica Silva. Ofereço um ambiente seguro, divertido e educativo para os teus filhos enquanto trabalhas ou descansas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contato')}
                className="px-8 py-4 rounded-full bg-pastel-pink text-white font-bold text-lg hover:bg-pink-400 transition-colors shadow-lg shadow-pink-200"
              >
                Fala Comigo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-pastel-green rounded-[4rem] mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
              <div className="absolute inset-0 bg-pastel-peach rounded-[4rem] mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 bg-pastel-yellow rounded-[4rem] mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
              
              {/* Image Container */}
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative w-full h-full rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl"
              >
                <img
                  src="https://cdn.babysits.com/content/pt/content/como-utilizar-a-plataforma-babysits-como-babysitter-113-1544451368.jpg"
                  alt="Como utilizar a plataforma Babysits"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 border-2 border-pastel-yellow/30"
              >
                <div className="bg-pastel-yellow p-2 rounded-2xl">
                  <StarIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">2 Anos</p>
                  <p className="text-xs text-gray-500">Experiência</p>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 border-2 border-pastel-blue/30"
              >
                <div className="bg-pastel-blue p-2 rounded-2xl">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">100%</p>
                  <p className="text-xs text-gray-500">Amor & Cuidado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Snippet Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-pastel-pink rounded-[4rem] mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute inset-0 bg-pastel-blue rounded-[4rem] mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
                
                <div className="relative w-full h-full rounded-[4rem] overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Jessica Silva"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-display text-gray-800 mb-6">Olá, sou a Jessica! 👋</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sou apaixonada por crianças e dedico a minha vida a proporcionar um ambiente seguro, estimulante e cheio de amor para o seu desenvolvimento. Com 2 anos de experiência na área, o meu objetivo é ser uma extensão do cuidado da tua família.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acredito que cada criança é única e merece atenção personalizada. Trago sempre jogos, atividades criativas e muita energia positiva para cada casa que visito.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/sobre')}
                className="px-8 py-4 rounded-full bg-pastel-blue text-white font-bold text-lg hover:bg-blue-400 transition-colors shadow-lg shadow-blue-200 inline-flex items-center gap-2"
              >
                Conhecer mais sobre mim
                <Heart className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-pastel-beige rounded-b-[50%]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display text-gray-800 mb-4">O que dizem os pais</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A confiança das famílias é o meu maior orgulho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Marta & João',
                child: 'Pais do Leo (3 anos)',
                text: 'A Jessica é maravilhosa! O Leo adora os dias em que ela vem cá a casa. Sentimo-nos 100% tranquilos quando o deixamos com ela. Ela traz sempre jogos novos e muita alegria.',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                childPhoto: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Sofia Costa',
                child: 'Mãe da Inês (6 anos) e do Tiago (1 ano)',
                text: 'Encontrar a Jessica foi uma bênção. Ela consegue gerir as diferentes idades na perfeição e tem sempre atividades criativas planeadas. O Tiago adora o colo dela!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                childPhoto: 'https://picsum.photos/seed/blocks/400/300'
              },
              {
                name: 'Pedro Almeida',
                child: 'Pai da Clara (4 anos)',
                text: 'Profissional, pontual e muito carinhosa. A Clara pergunta sempre quando é que a "Tia Jess" volta. Recomendamos vivamente a todas as famílias!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                childPhoto: 'https://picsum.photos/seed/park/400/300'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-pastel-beige rounded-[3rem] rounded-br-xl p-8 relative shadow-md flex flex-col"
              >
                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-sm">
                  <img src={testimonial.childPhoto} alt={`Foto de ${testimonial.child}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}>
                      <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.child}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/depoimentos')}
              className="px-8 py-4 rounded-full bg-white text-pastel-pink font-bold text-lg hover:bg-pink-50 transition-colors shadow-md border-2 border-pastel-pink inline-flex items-center gap-2"
            >
              Ver mais depoimentos
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-pastel-pink/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-white rounded-b-[50%] z-0"></div>
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 text-pastel-pink opacity-50 w-24 h-24"
        >
          <Cloud />
        </motion.div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border-4 border-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 bg-pastel-peach/30 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-display text-gray-800 mb-6">Vamos conversar!</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    Tens alguma dúvida ou queres agendar uma entrevista? Preenche o formulário ou contacta-me diretamente.
                  </p>
                  
                  <div className="space-y-6">
                    <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer">
                      <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefone / WhatsApp</p>
                        <p className="font-bold text-gray-800 text-lg">+351 912 345 678</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer">
                      <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-bold text-gray-800 text-lg">ola@brincarecuidar.pt</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer">
                      <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Disponibilidade</p>
                        <p className="font-bold text-gray-800 text-lg">Segunda a Sábado</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <Rainbow className="absolute -bottom-20 -right-20 w-64 h-64 opacity-20" />
              </div>
              
              <div className="p-12 lg:p-16 bg-white">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">O teu nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-pastel-pink outline-none transition-all"
                      placeholder="Ex: Maria Santos"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-pastel-pink outline-none transition-all"
                      placeholder="Ex: maria@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-pastel-pink outline-none transition-all resize-none"
                      placeholder="Conta-me um pouco sobre a tua família e o que precisas..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-pastel-pink text-white font-bold text-xl hover:bg-pink-400 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-pink-200"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
