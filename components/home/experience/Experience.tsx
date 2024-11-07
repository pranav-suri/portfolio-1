import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Project Human City (PHC)",
    position: "Full Stack Intern",
    time: "June 2024 - December 2024",
    location: "Remote",
    description:
      "Led a team of interns to build new features and applications for PHC. Worked on various projects that spanned everything from management solutions to interactive apps.",
    tech: ["React", "Node", "Typescript", "Git", "MongoDB", "GraphQL"],
  },
  {
    title: "SIT Pune",
    position: "Full Stack Intern",
    time: "2023 - 2024",
    location: "Pune, Maharashtra",
    description:
      "Worked on managing and developing the college feedback system. Successfully gathered feedback from over 3000 students several times during the academic year.",
    tech: ["PHP", "Apache", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "CodeX",
    position: "Technical Executive",
    time: "2023 - Present",
    location: "Pune, Maharashtra",
    description:
      "Conducted workshops and developed technical projects as part of the CodeX team, helping students gain hands-on experience in programming and project development.",
    tech: [],
  },
  {
    title: "ACM Student Chapter",
    position: "Web Development Head",
    time: "2023 - Present",
    location: "Pune, Maharashtra",
    description:
      "Organized and led workshops on API development, focusing on practical applications and hands-on coding sessions to build foundational web development skills.",
    tech: [],
  },
];
