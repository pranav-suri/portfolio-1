import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
    return (
        <section id="about" className="section-wrapper">
            <SectionHeader title="About" dir="l" />
            <div className={styles.about}>
                <div>
                    <Reveal>
                        <p
                            className={`${styles.aboutText} ${styles.highlightFirstLetter}`}
                        >
                            Hey! I’m Pranav. I’m currently a computer science
                            student and an all-round developer based in Pune,
                            Maharashtra. My main focus is on API integrations
                            and backend development, especially in TypeScript
                            and Python, though I’m always open to working with
                            the best tools for the job.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            I’m working on various projects that span everything
                            from data management solutions to interactive apps.
                            Right now, I’m diving deep into GraphQL, MongoDB,
                            and AWS to improve efficiency and scalability in my
                            applications.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            Outside of coding, you’ll often find me at the gym
                            or tinkering with side projects, always aiming to
                            learn something new. I’m also passionate about
                            helping others get started with APIs, and I’ve
                            hosted a few workshops on API development with Flask
                            and Postman.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            I’m open to exploring roles where I can merge my
                            skills in backend development and data management to
                            create meaningful, scalable solutions. If you think
                            I could be a good fit for your team, let’s connect
                            🔗
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className={styles.links}>
                            <div className={styles.linksText}>
                                <span>My links</span>
                                <AiOutlineArrowRight />
                            </div>
                            <MyLinks />
                        </div>
                    </Reveal>
                </div>
                <Stats />
            </div>
        </section>
    );
};
