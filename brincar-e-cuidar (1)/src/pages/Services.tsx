import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Baby, Puzzle, BookOpen, Music, Heart, Clock, ShieldCheck, Coffee } from 'lucide-react';
import { Cloud, Rainbow, Star } from '../components/Icons';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      title: 'Babysitting Regular',
      description: 'Apoio diário ou semanal para pais que precisam de tempo para trabalhar ou descansar.',
      color: 'bg-pastel-pink/20',
      borderColor: 'border-pastel-pink/30'
    },
    {
      icon: <Puzzle className="w-8 h-8 text-green-500" />,
      title: 'Atividades Lúdicas',
      description: 'Jogos educativos, artes e trabalhos manuais adaptados à idade de cada criança.',
      color: 'bg-pastel-green/20',
      borderColor: 'border-pastel-green/30'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'Apoio Escolar',
      description: 'Ajuda nos trabalhos de casa e revisão de matérias para crianças do ensino básico.',
      color: 'bg-pastel-blue/20',
      borderColor: 'border-pastel-blue/30'
    },
    {
      icon: <Music className="w-8 h-8 text-yellow-500" />,
      title: 'Expressão Musical',
      description: 'Momentos divertidos com canções e ritmos para estimular a criatividade.',
      color: 'bg-pastel-yellow/20',
      borderColor: 'border-pastel-yellow/30'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Horários Flexíveis',
      description: 'Disponibilidade para noites, fins de semana e situações de emergência.',
      color: 'bg-pastel-peach/20',
      borderColor: 'border-pastel-peach/30'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: 'Ambiente Seguro',
      description: 'Supervisão constante e atenção redobrada a todas as regras de segurança.',
      color: 'bg-purple-100',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-pastel-beige/20 pt-24 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 opacity-30"><Cloud /></motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-40 right-20 opacity-30"><Star className="w-16 h-16 text-yellow-400" /></motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 left-20 opacity-20"><Rainbow className="w-32 h-32" /></motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-display text-gray-800 mb-6"
          >
            Os Meus Serviços
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ofereço uma variedade de serviços personalizados para garantir que o teu filho se sinta feliz, seguro e estimulado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-[3rem] p-8 shadow-md border-2 ${service.borderColor} flex flex-col items-center text-center group transition-all hover:shadow-xl`}
            >
              <div className={`p-6 rounded-3xl ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/60 backdrop-blur-sm rounded-[4rem] p-12 text-center border-2 border-pastel-pink/20 shadow-lg"
        >
          <Heart className="w-12 h-12 text-pastel-pink mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-display text-gray-800 mb-4">Precisas de algo específico?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada família é única. Entra em contacto comigo para discutirmos as necessidades específicas dos teus filhos e criarmos um plano à medida.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/#contato'}
            className="px-10 py-4 rounded-full bg-pastel-pink text-white font-bold text-lg shadow-lg shadow-pink-200 hover:bg-pink-400 transition-colors"
          >
            Pedir Orçamento Personalizado
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
