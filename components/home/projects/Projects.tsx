import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

// TODO: Add links
const projects = [
  {
    title: "Institute Feedback System",
    imgSrc: "project-imgs/institute-feedback.jpg",
    code: "#",
    projectLink: "#",
    tech: ["HTML", "CSS", "Javascript", "PHP", "Apache"],
    description:
      "A platform for collecting and analyzing student and faculty feedback across the institute. Built with real-time data visualization and custom reporting features.",
    modalContent: (
      <>
        <p>
          The Institute Feedback System is a centralized platform designed to collect, analyze, and
          visualize feedback from students and faculty members. It features real-time reporting,
          secure data handling, and customized feedback forms.
        </p>
        <p>
          The project is built using HTML, CSS, Javascript for the frontend and PHP for the backend,
          and MySQL as the primary database. The application is hosted on a Server in my college.
        </p>
        <p>
          This project allowed me to improve my skills in building scalable web applications and
          handling complex data structures.
        </p>
      </>
    ),
  },
  {
    title: "Timetable Manager",
    imgSrc: "project-imgs/timetable-manager.png",
    code: "https://github.com/MatricalDefunkt/timetable-manager",
    projectLink: "#",
    tech: ["TypeScript", "React", "Sequelize", "MySQL"],
    description:
      "A comprehensive tool to create, edit, and manage timetables for educational institutes, with automatic conflict resolution.",
    modalContent: (
      <>
        <p>
          The Timetable Manager is a full-featured application for creating and managing class
          schedules. It includes automatic conflict resolution, drag-and-drop editing, and real-time
          updates.
        </p>
        <p>
          I developed the project using TypeScript and React for the frontend, Prisma for ORM, and
          Postgres as the main database. The system is capable of handling complex relational data
          and is designed to be highly scalable.
        </p>
        <p>
          This project was challenging but incredibly rewarding, as it pushed me to optimize
          database queries and design an intuitive user interface.
        </p>
      </>
    ),
  },
  {
    title: "Handfont",
    imgSrc: "project-imgs/handfont.png",
    code: "https://github.com/devvratsaini/handfont",
    projectLink: "https://www.youtube.com/watch?v=bPF9YTvGUec",
    tech: ["React", "Javascript", "Node"],
    description:
      "An innovative tool that captures and converts handwriting samples into a usable digital font, customizable for personal use.",
    modalContent: (
      <>
        <p>
          Handfont is a unique project that leverages image processing and machine learning to
          convert handwritten samples into a digital font. The application uses Javascript and Image
          Processing to chreat character patterns and generate a font file.
        </p>
        <p>
          The project was built in 2 days in my first ever hackathon exciting opportunity to work
          with image processing, allowing me to build something fun for users.
        </p>
        <p>
          This tool is a creative solution for preserving unique handwriting styles in a digital
          format, offering users a personalized touch in their digital communications.
        </p>
      </>
    ),
  },
  {
    title: "Smart Greenhouse Model",
    imgSrc: "#",
    code: "https://github.com/pranav-suri/greenhouse-arduino-nodemcu", // Replace with actual link if available
    projectLink: "#", // Replace with actual link if available
    tech: ["Arduino", "Python", "Sensors"],
    description:
      "An IoT-based model for monitoring and controlling environmental conditions in a greenhouse, enhancing plant growth efficiency.",
    modalContent: (
      <>
        <p>
          The Smart Greenhouse Model is an IoT-based solution for real-time monitoring and control
          of a greenhouse environment. The system uses sensors to track temperature, humidity, and
          soil moisture, and automatically adjusts settings to maintain optimal conditions.
        </p>
        <p>
          Built using Arduino for hardware control and Arduino Cloud for data processing, this
          project emphasizes the use of IoT for sustainable agriculture.
        </p>
        <p>
          This project was an incredible learning experience in combining hardware and software, and
          it provided hands-on insights into IoT and environmental automation.
        </p>
      </>
    ),
  },
];
