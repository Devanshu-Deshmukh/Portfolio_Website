import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', url: personalInfo.social.github, icon: Github, color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', url: personalInfo.social.twitter, icon: Twitter, color: 'hover:text-blue-400' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center md:text-left">
            <button onClick={scrollToTop} className="text-2xl font-bold gradient-text mb-2 hover:opacity-80 transition-opacity">{personalInfo.name}</button>
            <p className="text-gray-400 text-sm">{personalInfo.title}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }} viewport={{ once: true }}
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-full text-gray-400 ${social.color} transition-all duration-300`} aria-label={social.name}>
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{link}</a>
            ))}
          </motion.div>
        </div>

        <div className="my-8 border-t border-gray-800 dark:border-gray-900" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} {personalInfo.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
