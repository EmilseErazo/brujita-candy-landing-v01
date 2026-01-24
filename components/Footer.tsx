import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-christmas-red/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-christmas-gold">✦</span> Brujita Candy
                        </h3>
                        <p className="text-slate-400 max-w-sm">
                            Dulces mágicos para momentos especiales. Hechos con amor y una pizca de polvo de hadas para encantar tu paladar.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-slate-400 hover:text-christmas-gold transition-colors">Inicio</a></li>
                            <li><a href="#products" className="text-slate-400 hover:text-christmas-gold transition-colors">Pociones</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-christmas-gold transition-colors">Nuestra Magia</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/brujitacandybar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-christmas-red hover:scale-110 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/BrujitacotillonCandyBar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-christmas-red hover:scale-110 transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Brujita Candy Bar. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-1">
                        Hecho con <Heart size={14} className="text-red-500 fill-red-500" /> por <span className="text-white">Emilse Erazo</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
