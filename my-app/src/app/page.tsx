"use client";

import { motion } from "framer-motion";
import Squares from "@/components/animations/squares-bg";
import SplashCursor from "@/components/animations/splash-cursor";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import WorkHistoryItem from "@/components/WorkHistoryItem";
import GradualBlurMemo from "@/components/animations/gradual-blur";
import TrueFocus from "@/components/animations/true-fouse";
import { FaReact, FaMicrosoft, FaGit } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiFlutter,
  SiFigma,
  SiDotnet,
  SiPython,
  SiLua,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiDiscord,
  SiCloudflare,
  SiGithub,
  SiMailboxdotorg,
  SiRoblox,
  SiLinkedin,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

const workHistoryData = [
  {
    role: "Technical Engineer",
    company: "Advice IT Infinite Company Limited. (U072)",
    location: "Thailand",
    type: "Contract",
    date: "Jan 2019 - May 2019",
    points: [
      "Diagnose and repair hardware issues including motherboards, storage drives, RAM, and peripherals.",
      "Install, configure, and update operating systems, applications, and security software.",
      "Perform routine system maintenance and preventive checks to ensure reliability.",
      "Troubleshoot and resolve network connectivity and peripheral device issues.",
    ],
  },
  {
    role: "Application Support",
    company: "DHL Express (Thailand) Limited.",
    location: "Thailand",
    type: "Contract",
    date: "Dec 2024 - Mar 2025",
    points: [
      "Monitor application performance, perform regular maintenance, and escalate issues as needed.",
      "Investigate and resolve software-related problems, including bug fixes and configuration issues.",
      "Coordinate with developers, vendors, and infrastructure teams to resolve complex incidents.",
      "Document support processes, troubleshooting steps, and solutions for knowledge sharing.",
      "Develop an application following requirements from business stakeholders.",
    ],
  },
  {
    role: "Director / Lead Programmer",
    company: "VANICHIEN Studios",
    location: "Worldwide",
    type: "Volunteer",
    date: "Jun 2025 - Present",
    points: [
      "Define and drive the technical vision and architecture for current and future game projects.",
      "Lead, mentor, and support a team of programmers, fostering collaboration and technical growth.",
      "Write, review, and maintain clean, efficient, and scalable code.",
      "Collaborate with designers, artists, and producers to translate creative ideas into functional systems.",
      "Establish and enforce coding standards, workflows, and best practices across the studio.",
      "Manage technical risks, troubleshoot complex issues, and optimize game performance.",
    ],
  },
];

export default function Home() {
  return (
    <section
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
    >
      <div style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          {/* Soft animated squares */}
          <Squares
            speed={0.2} // slower for smooth movement
            squareSize={40} // smaller squares
            direction="diagonal"
            borderColor="rgba(255,255,255,0.1)" // subtle border
            hoverFillColor="rgba(247,164,8,0.1)" // very light hover accent
          />

          {/* Main content */}
          <motion.main
            className="relative z-10 text-center px-4 max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <section id="Home">
              <div className="mt-35">
                <TrueFocus
                  sentence="chot natthana"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#F7A408"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
            </section>

            <br />
            <p className="mb-6 text-gray-300">
              Hi! I’m a passionate software engineer skilled in C#, C++, Python,
              JavaScript, and Lua, with experience across MacOS, Windows, and
              Linux. I enjoy turning complex problems into efficient solutions,
              applying software design principles and networking knowledge to
              build reliable and innovative applications. Always eager to learn
              and explore new technologies.
            </p>
            <br />

            <div className="mb-10 flex justify-center">
              <svg
                width="60%"
                height="20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 L10,0 L20,5 L30,0 L40,5 L50,0 L60,5 L70,0 L80,5 L90,0 L100,5"
                  fill="none"
                  stroke="#F7A408"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex left">Find me on</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              <a href="http://github.com/chotnatthana" target="_blank">
                <SkillBadge name="Github" icon={<SiGithub />} />
              </a>
              <a
                href="https://www.linkedin.com/in/natthanachot-parnpa-17881a31b/"
                target="_blank"
              >
                <SkillBadge name="LinkedIn" icon={<SiLinkedin />} />
              </a>
              <a
                href="https://www.roblox.com/users/52009157/profile"
                target="_blank"
              >
                <SkillBadge name="ROBLOX" icon={<SiRoblox />} />
              </a>
            </div>

            <section id="Contact">
              <h3 className="text-2xl font-bold mb-1 flex left">Contact</h3>
              <p className="mb-6 text-gray-300 flex left">
                You can reach me via email or on social media.
              </p>
              <div className="flex flex-wrap gap-2 mb-30">
                <a href="mailto:contact@chotnatthana.online" target="_blank">
                  <SkillBadge
                    name="contact@chotnatthana.online"
                    icon={<SiMailboxdotorg />}
                  />
                </a>
                <SkillBadge name="cha_za" icon={<SiDiscord />} />
              </div>
            </section>

            <section id="Resume">
              <SectionTitle title="My Resume / CV" />
              <p className="mb-6 text-gray-300">
                I am a versatile software engineer with expertise in multiple
                programming languages and frameworks, including C#, C++, Python,
                JavaScript, and Lua, across MacOS, Windows, and Linux platforms.
                I have a strong foundation in software analysis and design
                methodologies, including the Software Development Life Cycle
                (SDLC), and a keen interest in networking technologies, such as
                TCP/IP, routing, and switching. I am passionate about building
                efficient, scalable, and innovative software solutions.
              </p>
            </section>

            <SectionTitle title="Skills" />
            <p className="mb-6 text-gray-300">
              Here are the frameworks, libraries, services, runtimes, and tools
              I have experience with. This is not complete list. My skill set is
              always evolving.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <SkillBadge name="Next.js" icon={<SiNextdotjs />} />
              <SkillBadge name="React" icon={<FaReact />} />
              <SkillBadge name="Tailwind" icon={<RiTailwindCssFill />} />
              <SkillBadge name="MySQL" icon={<SiMysql />} />
              <SkillBadge name="MongoDB" icon={<SiMongodb />} />
              <SkillBadge name="Flutter" icon={<SiFlutter />} />
              <SkillBadge name="React Native" icon={<TbBrandReactNative />} />
              <SkillBadge name="Figma" icon={<SiFigma />} />
              <SkillBadge name="Visio" icon={<FaMicrosoft />} />
              <SkillBadge name="Power BI" icon={<FaMicrosoft />} />
              <SkillBadge name="Power Automate" icon={<FaMicrosoft />} />
              <SkillBadge name="Office" icon={<FaMicrosoft />} />
              <SkillBadge name="Git" icon={<FaGit />} />
              <SkillBadge name="dotNET" icon={<SiDotnet />} />
              <SkillBadge name="Python" icon={<SiPython />} />
              <SkillBadge name="Lua" icon={<SiLua />} />
              <SkillBadge name="Javascript" icon={<SiJavascript />} />
              <SkillBadge name="Node" icon={<SiNodedotjs />} />
              <SkillBadge name="Express" icon={<SiExpress />} />
              <SkillBadge name="DiscordJS" icon={<SiDiscord />} />
              <SkillBadge name="Cloudflare" icon={<SiCloudflare />} />
              <SkillBadge name="Rojo" />
              {/* Add more badges here */}
            </div>

            <SectionTitle title="Work History" />
            <div className=" text-white p-8">
              <div className="relative border-l border-gray-600 pl-6">
                {workHistoryData.map((job, index) => (
                  <WorkHistoryItem
                    key={index}
                    role={job.role}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    date={job.date}
                    points={job.points}
                  />
                ))}
              </div>
            </div>
          </motion.main>
        </div>
      </div>
      {/* Custom cursor */}
      <SplashCursor />
      <GradualBlurMemo
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
