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
    text: "Acordos antenupciais, divorcios, partilha mortis causa, partilha subsquente a divórcio.",
    icon: family,
  },
  {
    id: "court",
    title: "Registos e Notariado",
    text: "Georrefernciação - BUPI, Registo predial, Registo comercial, Registo automóvel, Elaboração de contratos, Documentos particulares autenticados (compra e venda, doação), Procurações, Autenticação de documentos, Reconhecimento de assinaturas, Certificação de fotocópias.",
    icon: approval,
  },
  {
    id: "justice",
    title: "Direito Comercial",
    text: "Constituição de empresas, Alteração do pacto social, entre outros.",
    icon: justica,
  },
  {
    id: "approval",
    title: "Direito do Trabalho",
    text: "Elaboração de contratos de trabalho, direitos e deveres do trabalhador/empregador.",

    icon: court,
  },
  {
    id: "building",
    title: "Direito Fiscal",
    text: "Avaliações prediais - Modelo 1 do IMI, Imposto de selo, IMT, Legalização de viaturas estrangeiras.",
    icon: handshake,
  },
];

export const texts = {
  header_main1:
    "Licenciada em Solicitadoria, inscrita na OSAE desde Junho de 2021.",
  header_p1: "Delegação Concelhia de Viana do Castelo",
  header_p2: "CP 8720",
};

export const contacts = {
  address: "Rua Dr. Ribeiro da Silva 39",
  postalCode: "4900-454 Viana do Castelo",
  country: "Portugal",
  phones: ["+351 910 805 136"],
  emails: ["gabrielapintosolicitadora@gmail.com"],
  schedule: "Segunda - Sexta: 09:00h - 19:00h",
};
