import { useState } from 'react';
import { 
  Globe, 
  Calendar, 
  Video, 
  ShoppingBag, 
  Image, 
  MessageCircle, 
  Mail, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Camera,
  Facebook
} from 'lucide-react';

const Tiktok = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function LinktreePage() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Linktree URLs
  const links = [
    {
      id: 'website',
      icon: Globe,
      titleEN: 'Official Website',
      titleDE: 'Offizielle Website',
      descEN: 'Explore our full portfolio and stories',
      descDE: 'Entdecken Sie unser gesamtes Portfolio',
      url: 'https://cinebee.ch',
      isFeatured: true,
    },
    {
      id: 'booking',
      icon: Calendar,
      titleEN: 'Book a Session',
      titleDE: 'Termin buchen',
      descEN: 'Submit a booking request & check availability',
      descDE: 'Buchungsanfrage senden & Verfügbarkeit prüfen',
      url: 'https://cinebee.ch/contact#booking-form',
      isFeatured: true,
    },
    {
      id: 'packages',
      icon: Camera,
      titleEN: 'Photography Packages',
      titleDE: 'Fotografie-Angebote',
      descEN: 'View transparent pricing & packages',
      descDE: 'Preise & Angebote im Detail ansehen',
      url: 'https://cinebee.ch/packages',
      isFeatured: false,
    },
    {
      id: 'videos',
      icon: Video,
      titleEN: 'Cinematic Films',
      titleDE: 'Cinematische Videos',
      descEN: 'Watch our latest films on YouTube & Portfolio',
      descDE: 'Sehen Sie unsere neuesten Filme auf YouTube & Portfolio',
      url: 'https://cinebee.ch/videos',
      isFeatured: false,
    },
    {
      id: 'shop',
      icon: ShoppingBag,
      titleEN: 'Fine Art Print Shop',
      titleDE: 'Fine Art Print Shop',
      descEN: 'Bring beautiful Swiss landscapes to your home',
      descDE: 'Bringen Sie die Schweiz zu sich nach Hause',
      url: 'https://cinebee.ch/shop',
      isFeatured: false,
    },
    {
      id: 'gallery',
      icon: Image,
      titleEN: 'Photo Gallery',
      titleDE: 'Foto-Galerie',
      descEN: 'Browse through our curated albums',
      descDE: 'Durchstöbern Sie unsere kuratierten Alben',
      url: 'https://cinebee.ch/gallery',
      isFeatured: false,
    },
  ];

  const socials = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/191AWpmYa5/?mibextid=wwXIfr',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cinebee.ch?igsh=MTM3Y3JoYmhsd3g4Nw%3D%3D&utm_source=qr',
    },
    {
      name: 'TikTok',
      icon: Tiktok,
      url: 'https://www.tiktok.com/@cinebee.ch?_r=1&_t=ZN-95frFH6x8gY-',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/41798611326',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:info.cinebee@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A08] text-[#F5F0E8] flex flex-col items-center justify-between px-5 py-12 relative overflow-hidden font-sans">
      
      {/* Background ambient gold glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-[rgba(232,160,32,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[rgba(232,160,32,0.03)] blur-[120px] pointer-events-none" />

      {/* Header Controls (Language switch) */}
      <div className="w-full max-w-[480px] flex justify-end mb-6 z-10">
        <div className="flex rounded-full border border-[rgba(255,255,255,0.1)] bg-[#0A0A08]/80 backdrop-blur-md overflow-hidden">
          <button
            onClick={() => setLanguage('de')}
            className={`px-3 py-1 text-[9px] font-bold tracking-[0.5px] transition-colors ${
              language === 'de' ? 'bg-white text-[#0A0A08]' : 'text-[rgba(245,240,232,0.5)] hover:text-white'
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-[9px] font-bold tracking-[0.5px] transition-colors ${
              language === 'en' ? 'bg-white text-[#0A0A08]' : 'text-[rgba(245,240,232,0.5)] hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Main Profile Info */}
      <div className="w-full max-w-[480px] flex flex-col items-center text-center z-10 flex-grow justify-center py-6">
        
        {/* Avatar Profile */}
        <div className="relative mb-5 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8A020] to-[#C8860A] opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500" />
          <img 
            src="/images/logos/dp5 - Copy.jpg" 
            alt="CineBee Logo" 
            className="relative w-24 h-24 rounded-full object-contain p-1 bg-[#0A0A08] border-2 border-[#E8A020] shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
          />
        </div>

        {/* Branding Title */}
        <h1 className="text-[26px] font-normal leading-tight tracking-[-0.5px] font-['Playfair_Display'] text-white">
          CineBee
        </h1>
        
        <p className="text-[12px] uppercase tracking-[2px] text-[#E8A020] font-semibold mt-1">
          {language === 'de' ? 'Fotografie & Video' : 'Photography & Video'}
        </p>

        <p className="text-[13px] text-[rgba(245,240,232,0.6)] mt-2 max-w-[320px] leading-[20px]">
          {language === 'de' 
            ? 'Cinematische Geschichten und zeitlose Fotografie in der Schweiz.' 
            : 'Cinematic storytelling and timeless photography across Switzerland.'}
        </p>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-3.5 mt-8">
          {links.map((link, idx) => {
            const Icon = link.icon;
            const title = language === 'de' ? link.titleDE : link.titleEN;
            const desc = language === 'de' ? link.descDE : link.descEN;
            const isHovered = hoveredIndex === idx;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center justify-between p-4 rounded-[4px] border transition-all duration-300 group ${
                  link.isFeatured
                    ? 'bg-[#E8A020] text-[#0A0A08] border-[#E8A020] shadow-[0_4px_20px_rgba(232,160,32,0.15)] hover:bg-[#C8860A] hover:border-[#C8860A]'
                    : 'bg-[#1C1A14]/40 hover:bg-[#1C1A14]/75 text-white border-[rgba(255,255,255,0.08)] hover:border-[rgba(232,160,32,0.3)] shadow-[0_2px_10px_rgba(0,0,0,0.2)]'
                }`}
                style={{
                  transform: isHovered ? 'translateY(-2px)' : 'none',
                }}
              >
                {/* Feature highlight line */}
                {link.isFeatured && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#0A0A08] rounded-l-[4px]" />
                )}

                <div className="flex items-center gap-3.5 text-left">
                  <div className={`p-2.5 rounded-[4px] flex items-center justify-center ${
                    link.isFeatured ? 'bg-[#0A0A08]/10' : 'bg-white/5'
                  }`}>
                    <Icon size={16} className={link.isFeatured ? 'text-[#0A0A08]' : 'text-[#E8A020]'} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold tracking-[0.5px] flex items-center gap-1.5">
                      {title}
                      {link.isFeatured && (
                        <Sparkles size={11} className="animate-pulse" />
                      )}
                    </div>
                    <div className={`text-[11px] mt-0.5 leading-[14px] ${
                      link.isFeatured ? 'text-[#0A0A08]/70' : 'text-[rgba(245,240,232,0.5)]'
                    }`}>
                      {desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <ChevronRight 
                    size={16} 
                    className={`transition-all duration-300 ${
                      link.isFeatured 
                        ? 'text-[#0A0A08] group-hover:translate-x-1' 
                        : 'text-[rgba(245,240,232,0.3)] group-hover:text-white group-hover:translate-x-1'
                    }`} 
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-6 mt-10">
          {socials.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                title={soc.name}
                className="w-11 h-11 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#1C1A14]/30 flex items-center justify-center text-[rgba(245,240,232,0.6)] hover:text-[#E8A020] hover:border-[#E8A020] hover:bg-[#1C1A14]/70 hover:scale-105 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="w-full max-w-[480px] text-center mt-12 z-10">
        <div className="text-[9px] uppercase tracking-[3px] text-[rgba(245,240,232,0.35)]">
          © {new Date().getFullYear()} CineBee. All rights reserved.
        </div>
      </div>

    </div>
  );
}
