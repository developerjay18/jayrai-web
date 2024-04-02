import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import { BiSolidPhoneCall } from 'react-icons/bi';

export const whatsappLink = `https://wa.me/+916351468706?text=${'Hey! I came from your website and I want a website for my business.'}`;

const instaLink = `https://www.instagram.com/jayrai.web/?message=${'Hey! I came from your website and I want a website for my business.'}`;

export const contactData = [
  {
    text: 'Whatsapp Now',
    icon: <AiOutlineWhatsApp className="text-3xl" />,
    link: whatsappLink,
  },
  {
    text: 'Contact on Insta',
    icon: <AiOutlineInstagram className="text-3xl" />,
    link: instaLink,
  },
  {
    text: '+91 6351468706',
    icon: <BiSolidPhoneCall className="text-3xl" />,
    link: 'tel:+916351468706',
  },
];
