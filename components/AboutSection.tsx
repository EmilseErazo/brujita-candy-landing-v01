'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Star, Calendar } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-magic-purple/5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                        >
                            Nuestra <span className="text-magic-purple">Historia Mágica</span>
                        </motion.h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-magic-purple to-magic-orange mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                        >
                            <Image
                                src="/images/emilse-forest.jpg"
                                alt="Emilse en decoración temática del bosque"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
                                <p className="text-white font-medium">Emilse, fundadora y corazón de Brujita</p>
                            </div>
                        </motion.div>

                        {/* Text Part 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-slate-300 text-lg leading-relaxed"
                        >
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-magic-purple first-letter:mr-2 float-left">
                                ¡Hola! Soy Emilse, el corazón y la brujita fundadora de este sueño.
                            </p>
                            <p>
                                Todo comenzó con un hechizo de amor: la preparación del bautismo de mi hija Emma, allá por el <span className="text-white font-bold">12 de octubre de 2015</span>. Lo que nació como una mamá queriendo crear un día mágico para su nena, pronto se convirtió en mi más grande pasión.
                            </p>
                            <p>
                                Recuerdo nuestros inicios con mucho cariño, publicando nuestros trabajos de cotillón y usando las mesas de los salones, sin fondos, pero con un corazón lleno de ideas. El gran salto lo dimos para el primer añito de Emma, el <span className="text-white font-bold">5 de junio de 2016</span>, cuando estrenamos nuestras primeras mesas estilo Luis XV y fondos de tela que cambiaron todo.
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="p-3 bg-magic-purple/20 rounded-full">
                                    <Star className="text-magic-purple" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Certificación Internacional</h4>
                                    <p className="text-sm">Party Designer Latinoamérica (2024)</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Part 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-slate-300 text-lg leading-relaxed order-2 lg:order-1"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">¿Por qué "Brujita"? 🧙‍♀️</h3>
                            <p>
                                El nombre es un homenaje a mi Emma, que de pequeña era la "brujita" de la casa por sus cabellos rebeldes que se negaban a ser peinados. Nuestro logo es una caricatura hecha a partir de una foto suya, el alma de este emprendimiento.
                            </p>
                            <p>
                                Este sueño no sería posible sin mi equipo mágico: mi esposo, mi gran compañero de aventuras; mi papá "Nene", el genio que soluciona y materializa cada idea; y mi mamá Susana, la artista detrás de las costuras. Y por supuesto, mis hijos Agustín, Emma y Felipe, ¡mis pequeños grandes ayudantes!
                            </p>
                            <p className="font-medium text-white italic border-l-4 border-magic-orange pl-4 my-6">
                                "Cuando elegís Brujita Candy Bar, estás invitando a tu festejo a una familia que pone el corazón en cada detalle."
                            </p>
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 order-1 lg:order-2"
                        >
                            <Image
                                src="/images/emilse-toystory.jpg"
                                alt="Decoración temática Toy Story"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
                                <p className="text-white font-medium">Creando mundos mágicos para tus eventos</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
