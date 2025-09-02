"use client";
import { Link } from "lucide-react";
import { motion } from "framer-motion";
import Squares from "@/components/animations/squares-bg";
import SplashCursor from "@/components/animations/splash-cursor";
import GradualBlurBottom from "@/components/GradualBlurBottom";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import WorkHistoryItem from "@/components/WorkHistoryItem";
import GradualBlurMemo from "@/components/animations/gradual-blur";
import TrueFocus from "@/components/animations/true-fouse";
import { FaXTwitter } from "react-icons/fa6";
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
      "Led the front-end work from the project inception.",
      "Maintained a browser extension, widget and web application as a monorepo.",
      "Architected a highly complex real-estate map service.",
      "Implemented a sophisticated data grid of property comparables.",
    ],
  },
  {
    role: "Application Support",
    company: "DHL Express (Thailand) Limited.",
    location: "Thailand",
    type: "Contract",
    date: "Dec 2024 - Mar 2025",
    points: [
      "Was solving complex problems using the latest Web Standards.",
      "Architected the product's front-end structure.",
      "Accomplished the development of sophisticated UI components.",
      "Developed the open-source component library.",
      "Crafted responsive marketing landing pages.",
    ],
  },
  {
    role: "Director / Lead Programmer",
    company: "VANICHIEN Studios",
    location: "Worldwide",
    type: "Volunteer",
    date: "Jun 2025 - Present",
    points: [
      "Was solving complex problems using the latest Web Standards.",
      "Architected the product's front-end structure.",
      "Accomplished the development of sophisticated UI components.",
      "Developed the open-source component library.",
      "Crafted responsive marketing landing pages.",
    ],
  },
];

export default function Home() {
  return (
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
              sentence="chotnatthana SenpaiCha"
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
          JavaScript, and Lua, with experience across MacOS, Windows, and Linux.
          I enjoy turning complex problems into efficient solutions, applying
          software design principles and networking knowledge to build reliable
          and innovative applications. Always eager to learn and explore new
          technologies.
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
          <a href="http://github.com/SenpaiCha" target="_blank">
            <SkillBadge name="SenpaiCha" icon={<SiGithub />} />
          </a>
          <a href="https://x.com/zCha_e" target="_blank">
            <SkillBadge name="@zCha_e" icon={<FaXTwitter />} />
          </a>
          <a
            href="https://www.roblox.com/users/52009157/profile"
            target="_blank"
          >
            <SkillBadge name="Cha_za" icon={<SiRoblox />} />
          </a>
        </div>

        <section id="Contact">
          <h3 className="text-2xl font-bold mb-1 flex left">Contact</h3>
          <p className="mb-6 text-gray-300 flex left">
            You can reach me via email or on social media.
          </p>
          <div className="flex flex-wrap gap-2 mb-30">
            <a href="mailto:cha_za@clannect.tech" target="_blank">
              <SkillBadge
                name="cha_za@clannect.tech"
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
            JavaScript, and Lua, across MacOS, Windows, and Linux platforms. I
            have a strong foundation in software analysis and design
            methodologies, including the Software Development Life Cycle (SDLC),
            and a keen interest in networking technologies, such as TCP/IP,
            routing, and switching. I am passionate about building efficient,
            scalable, and innovative software solutions.
          </p>
        </section>

        <SectionTitle title="Skills" />
        <p className="mb-6 text-gray-300">
          Here are the frameworks, libraries, services, runtimes, and tools I
          have experience with. This is not complete list. My skill set is
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
        <br />
      </motion.main>
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
      {/* Custom cursor */}
      <SplashCursor />
    </div>
  );
}
