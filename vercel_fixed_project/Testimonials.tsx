import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Star as StarIcon } from 'lucide-react';
import { Cloud, Rainbow } from '../components/Icons';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: 'Ana & Rui',
      child: 'Pais dos gémeos Lucas e Mateus (2 anos)',
      text: 'Cuidar de gémeos não é fácil, mas a Jessica fá-lo parecer simples! Tem uma paciência infinita e uma energia contagiante. Os meninos adoram as atividades musicais que ela faz.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/art/400/300'
    },
    {
      name: 'Família Silva',
      child: 'Pais da Beatriz (8 anos)',
      text: 'A Jessica tem sido fundamental no apoio escolar da Beatriz. As notas melhoraram e ela agora adora fazer os trabalhos de casa porque a Jessica torna tudo divertido.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/nature/400/300'
    },
    {
      name: 'Carla Mendes',
      child: 'Mãe do Tomás (5 anos)',
      text: 'A Jessica é um doce de pessoa e muito responsável. O Tomás adora as histórias que ela conta antes de dormir. Sinto-me muito tranquila quando a Jessica está com ele.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/books/400/300'
    },
    {
      name: 'Sérgio & Marta',
      child: 'Pais da Alice (4 anos)',
      text: 'A Alice é muito tímida, mas a Jessica soube conquistar a confiança dela logo no primeiro dia. Agora a Alice pergunta sempre quando é que a "mana Jessica" volta!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/play/400/300'
    },
    {
      name: 'Família Oliveira',
      child: 'Pais do Pedro (6 anos)',
      text: 'Excelente profissional! A Jessica ajudou-nos imenso com a rotina de sono do Pedro. É muito pontual, educada e nota-se que adora o que faz.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/sleep/400/300'
    },
    {
      name: 'Patrícia Santos',
      child: 'Mãe da Sofia (10 meses)',
      text: 'Estava muito nervosa por deixar a minha bebé pela primeira vez, mas a Jessica enviou-me fotos e atualizações constantes. Foi um alívio enorme encontrar alguém tão atenciosa.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      childPhoto: 'https://picsum.photos/seed/baby/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-pastel-beige/20 pt-24 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 opacity-30"><Cloud /></motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-40 right-20 opacity-30"><StarIcon className="w-16 h-16 text-yellow-400" /></motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 left-20 opacity-20"><Rainbow className="w-32 h-32" /></motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-display text-gray-800 mb-6"
          >
            Mais Depoimentos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Lê o que mais famílias dizem sobre a minha dedicação e carinho com os teus filhos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[3rem] rounded-br-xl p-8 relative shadow-md flex flex-col border-2 border-transparent hover:border-pastel-pink/30"
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
      </div>
    </div>
  );
}
