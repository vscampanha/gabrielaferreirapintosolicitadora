import { court, family, handshake, justica, approval } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Serviços",
  },
  {
    id: "contacts",
    title: "Contactos",
  },
];

export const services = [
  {
    id: "family",
    title: "Direito da Familia e Sucessões",
    text: "Casamentos, Acordos Antenupciais, Divórcios, Partilhas mortis causa, Partilhas subsquentes a divórcio.",
    icon: family,
  },
  {
    id: "court",
    title: "Registos e Notariado",
    text: "Georrefernciação - BUPI, Registo Predial, Registo Comercial, Registo Automóvel, Elaboração de contratos, Documentos Particulares Autenticados (compra e venda, doação, partilha, entre outros), Procurações, Reconhecimento de assinaturas, Certificação de fotocópias.",
    icon: approval,
  },
  {
    id: "justice",
    title: "Direito Comercial",
    text: "Constituição de Empresas, Alteração do Pacto Social, entre outros.",
    icon: justica,
  },
  {
    id: "approval",
    title: "Direito do Trabalho",
    text: "Direitos e deveres do trabalhador/empregador. Elaboração de contratos de trabalho.",
    icon: court,
  },
  {
    id: "building",
    title: "Direito Fiscal",
    text: "Avaliações Prediais, IMI, Imposto de selo, IMT.",
    icon: handshake,
  },
];

export const texts = {
  header_main1: "Licenciada em Solicitadoria.",
  header_main2: "Associada da OSAE desde Junho de 2021.",
  header_p1: "Cédula Profissional",
  header_p2: "8720",
};

export const contacts = {
  address: "Rua Dr. Ribeiro da Silva 39",
  postalCode: "4900-454 Viana do Castelo",
  country: "Portugal",
  phones: ["+351 910 805 136"],
  emails: ["gabrielapintosolicitadora@gmail.com"],
  schedule: "Segunda - Sexta: 09:00h - 19:00h",
};
