import {
  pkmnImages,
  notesImages,
  ticketImages,
  paletImages,
  airbnbImages,
} from "./images";

const unorderedProjects = [
  {
    project_name: "Pokemon Portal",
    titleKey: "projects.items.pokemon.title",
    descriptionKey: "projects.items.pokemon.description",
    disclaimerKey: "projects.items.pokemon.disclaimer",
    images: pkmnImages,
    github_link: "https://github.com/TomasBran/Portal-Pokemon-NextJS",
    deploy_link: "https://portal-pkmn.vercel.app/",
    stack: ["HTML", "CSS", "Javascript", "React", "TailwindCSS", "Next.js"],
    has_backend: true,
  },
  {
    project_name: "Notes App",
    titleKey: "projects.items.notes.title",
    descriptionKey: "projects.items.notes.description",
    disclaimerKey: "projects.items.notes.disclaimer",
    images: notesImages,
    github_link: "https://github.com/TomasBran/Notes-Management-App",
    deploy_link: "",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TailwindCSS",
      "Next.js",
      "Node.js",
      "Nest.js",
    ],
    has_backend: true,
  },
  {
    project_name: "Ticket Bus",
    titleKey: "projects.items.ticket.title",
    descriptionKey: "projects.items.ticket.description",
    disclaimerKey: "projects.items.ticket.disclaimer",
    images: ticketImages,
    github_link: "https://github.com/TomasBran/Ticket-Bus",
    deploy_link: "",
    stack: ["HTML", "CSS", "Javascript", "React", "TailwindCSS", "Node.js"],
    has_backend: false,
  },
  {
    project_name: "Airbnb Clone",
    titleKey: "projects.items.airbnb.title",
    descriptionKey: "projects.items.airbnb.description",
    disclaimerKey: "projects.items.airbnb.disclaimer",
    images: airbnbImages,
    github_link: "https://github.com/TomasBran/Airbnb-Clone",
    deploy_link: "",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TailwindCSS",
      "Java",
      "MySQL",
    ],
    has_backend: false,
  },
  {
    project_name: "Grupo Palet",
    titleKey: "projects.items.palet.title",
    descriptionKey: "projects.items.palet.description",
    disclaimerKey: "projects.items.palet.disclaimer",
    images: paletImages,
    github_link: "https://github.com/TomasBran/Grupo-Palet",
    deploy_link: "",
    stack: ["HTML", "CSS", "Javascript"],
    has_backend: false,
  },
];

const order = [
  "Pokemon Portal",
  "Notes App",
  "Ticket Bus",
  "Airbnb Clone",
  "Grupo Palet",
]; // Cambiar el orden cuando corresponda

const orderMap = Object.fromEntries(order.map((name, index) => [name, index]));

export const projects = [...unorderedProjects]
  .sort(
    (a, b) =>
      (orderMap[a.project_name] ?? Number.MAX_SAFE_INTEGER) -
      (orderMap[b.project_name] ?? Number.MAX_SAFE_INTEGER),
  )
  .map((project, index) => ({
    ...project,
    id: index + 1,
  }));
