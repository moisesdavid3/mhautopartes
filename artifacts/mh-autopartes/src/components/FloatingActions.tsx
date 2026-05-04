import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { randomWaLink } from "@/lib/whatsapp";

const actions = [
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: () => randomWaLink("Hola MH Autopartes, quisiera hacer una consulta"),
    bg: "#25D366",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: () => "https://instagram.com/mhautopartes",
    bg: "linear-gradient(135deg, #E1306C, #F77737)",
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    href: () => "https://facebook.com/Mhautopartes",
    bg: "#1877F2",
  },
  {
    label: "(604) 444 56 65",
    icon: Phone,
    href: () => "tel:6044445665",
    bg: "#215BE1",
  },
];

export function FloatingActions() {
  return (
    <div
      style={{ position: "fixed", right: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 9999 }}
      className="flex flex-col gap-2 items-center"
    >
      {actions.map(({ label, icon: Icon, href, bg }, i) => (
        <motion.a
          key={label}
          href={href()}
          target={label !== "(604) 444 56 65" ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.2 }}
          style={{ background: bg }}
          className="w-10 h-10 flex items-center justify-center text-white rounded-full shadow-lg"
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
