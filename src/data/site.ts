export const SITE = {
  name: "Anahís Filomena Prieto Romero",
  shortName: "Anahís Prieto",
  cardName: "Anahís Filomena Prieto R.",
  tagline: "Asesora de Seguros",
  specialties: "Protección Patrimonial • Salud • Vida • Vehicular",
  description:
    "Atención directa y asesoría especializada en seguros de salud, vida, vehicular y patrimonial en Barquisimeto (Lara) y en todo el país.",
  emails: ["anahisfilomprieto@hotmail.com", "anahisfilomprieto71@gmail.com"],
  tiktok: {
    handle: "@anahis.prieto28",
    url: "https://www.tiktok.com/@anahis.prieto28",
  },
  instagram: {
    handle: "@prietoanahis",
    url: "https://www.instagram.com/prietoanahis",
  },
  address: {
    line1: "Calle 33 casa Y33-11 Urb. Yucatan II",
    line2: "Barquisimeto (Tamaca), Estado Lara",
    line3: "Zona Postal: 3001, Venezuela",
  },
  locationBadge: "Barquisimeto, Estado Lara • Venezuela",
  phoneDisplay: "+58 414-508 9331",
  phoneIntl: "+584145089331",
  whatsappNumber: "584145089331",
  whatsappMessage: "Hola Anahís, deseo recibir asesoría sobre un seguro",
  developer: {
    company: "Gocolin",
    person: "Ing. Anthoan Gonzalez",
    whatsappNumber: "584125641071",
    whatsappMessage: "Hola, le saludo por la página web de Anahís Prieto",
  },
};

export function whatsappUrl(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function developerWhatsappUrl() {
  const d = SITE.developer;
  return `https://wa.me/${d.whatsappNumber}?text=${encodeURIComponent(d.whatsappMessage)}`;
}
