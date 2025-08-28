import Link from 'next/link';
import * as motion from 'motion/react-client';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  };
  return (
    <motion.footer initial="hidden" animate="visible" variants={fadeIn}>
      <div className="hidden md:flex pointer-events-none fixed bottom-0 inset-x-0 items-end justify-between px-5 font-SFMono">
        <ul className="socials-list">
          <li className="social-link">
            <Link href="https://github.com/viniciusbastos-dev" target="_blank">
              <FiGithub />
            </Link>
          </li>
          <li className="social-link">
            <Link href="https://www.linkedin.com/in/vinicius-bastos-silva/" target="_blank">
              <FiLinkedin />
            </Link>
          </li>
        </ul>

        <ul className="socials-list relative">
          <li className="social-link email text-xs md:text-sm">
            <Link href="mailto:viniciusbsilva57@gmail.com">viniciusbsilva57@gmail.com</Link>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
}
