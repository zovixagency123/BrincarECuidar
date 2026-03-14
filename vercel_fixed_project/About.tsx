import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Star as StarIcon, Award, BookOpen } from 'lucide-react';
import { Rainbow, Bear, Cloud, Sun } from '../components/Icons';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 bg-white min-h-[80vh] relative overflow-hidden">
      {/* Background Elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 opacity-30"><Cloud /></motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-40 right-20 opacity-30"><StarIcon className="w-16 h-16 text-yellow-400" /></motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-40 left-20 opacity-20"><Sun className="w-24 h-24 text-pastel-yellow" /></motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-display text-gray-800 mb-6">A Minha História</h1>
          <div className="w-24 h-2 bg-pastel-pink mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-pastel-peach shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Jessica Silva"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <Bear className="absolute -bottom-8 -right-8 w-24 h-24 text-pastel-pink opacity-80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-600"
          >
            <h2 className="text-3xl font-display text-gray-800">O Porquê de Começar</h2>
            <p>
              Sempre tive uma ligação muito especial com o mundo infantil. Desde cedo percebi que a minha vocação era cuidar, ensinar e aprender com as crianças.
            </p>
            <p>
              A ideia do <strong>Brincar e Cuidar</strong> nasceu quando notei a dificuldade que muitos pais enfrentam para encontrar alguém de verdadeira confiança, que não apenas "tome conta", mas que participe ativamente no desenvolvimento dos teus filhos de forma lúdica.
            </p>
            <p>
              Decidi transformar a minha paixão na minha profissão. Com 2 anos de experiência intensa e dedicada, cada dia é uma nova aventura e uma oportunidade de fazer a diferença na vida de uma família, trazendo tranquilidade aos pais e alegria aos mais pequenos.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                'Certificação em Primeiros Socorros Pediátricos',
                'Experiência com recém-nascidos a pré-adolescentes',
                'Atividades lúdicas e educativas',
                'Referências disponíveis sob pedido'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-pastel-green/20 p-1 rounded-full">
                    <StarIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pastel-beige rounded-[3rem] p-10 md:p-16 shadow-lg relative overflow-hidden"
        >
          <Rainbow className="absolute -top-10 -right-10 w-40 h-40 opacity-20" />
          <h2 className="text-3xl font-display text-gray-800 mb-8 text-center">A Minha Filosofia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm text-center">
              <div className="bg-pastel-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Afeto e Segurança</h3>
              <p className="text-sm text-gray-600">Um ambiente seguro e cheio de carinho é a base para qualquer criança florescer e sentir-se bem.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm text-center">
              <div className="bg-pastel-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Aprender Brincando</h3>
              <p className="text-sm text-gray-600">A brincadeira é a linguagem da criança. Através dela, exploramos o mundo e desenvolvemos novas capacidades.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm text-center">
              <div className="bg-pastel-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Respeito à Individualidade</h3>
              <p className="text-sm text-gray-600">Cada criança tem o seu ritmo. Adapto as minhas abordagens para respeitar a personalidade de cada um.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
