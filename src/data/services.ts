export type Service = {
  key: "salud" | "vida" | "auto" | "comercial";
  icon: string;
  title: string;
  excerpt: string;
  modalDescription: string;
  features: string[];
};

export const services: Service[] = [
  {
    key: "salud",
    icon: "fa-solid fa-notes-medical",
    title: "Salud & Gastos Médicos",
    excerpt:
      "Resguardo financiero ante consultas, emergencias, cirugías y hospitalización en clínicas especializadas.",
    modalDescription:
      "Cobertura de salud integral para garantizar la atención médica inmediata que necesitas sin comprometer la estabilidad económica familiar.",
    features: [
      "Atención en clínicas de primer nivel a nivel nacional e internacional.",
      "Cobertura de emergencias, consultas especializadas y cirugías.",
      "Atención médica domiciliaria y asistencia de emergencias.",
      "Asesoría directa en la emisión de cartas avales y reembolsos.",
    ],
  },
  {
    key: "vida",
    icon: "fa-solid fa-people-roof",
    title: "Vida & Patrimonio Familiar",
    excerpt:
      "Garantiza el futuro económico y la tranquilidad de tus seres queridos ante cualquier contingencia.",
    modalDescription:
      "Protección financiera integral para asegurar el bienestar continuo de tus hijos y seres queridos ante contingencias imprevistas.",
    features: [
      "Resguardo financiero a largo plazo para tus beneficiarios.",
      "Cobertura de gastos funerarios.",
      "Liquidación de deudas y compromisos a terceros.",
    ],
  },
  {
    key: "auto",
    icon: "fa-solid fa-car-side",
    title: "Vehicular & Responsabilidad Civil",
    excerpt:
      "Protección para tu vehículo particular o corporativo frente a choques, robos y grúa 24 horas.",
    modalDescription:
      "Tranquilidad al conducir tu vehículo particular o flota de empresa ante cualquier choque, daño o eventualidad vial.",
    features: [
      "Cobertura ante colisiones, pérdidas totales y robos.",
      "Responsabilidad Civil Vehicular (RCV) obligatoria y extendida.",
      "Servicio de grúa y asistencia vial 24 horas al día.",
      "Asesoría técnica inmediata durante accidentes.",
    ],
  },
  {
    key: "comercial",
    icon: "fa-solid fa-store",
    title: "Comercial & Empresarial",
    excerpt:
      "Asegura tu negocio, inventario, local comercial y la salud colectiva de tus trabajadores.",
    modalDescription:
      "Resguardo para locales comerciales, inventarios, mercancías e instalaciones frente a riesgos de incendio o desastres.",
    features: [
      "Protección de infraestructura, mobiliario y mercadería.",
      "Seguros de salud colectivo para colaboradores y empleados.",
      "Responsabilidad civil frente a clientes y terceros.",
      "Protección ante robos y contingencias operativas.",
    ],
  },
];
