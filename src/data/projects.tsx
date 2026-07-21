import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,

} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <TbDeviceMobileCode />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  dotnet: {
    title: ".NET Core",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  signalr: {
    title: "SignalR",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>S</strong>R
      </span>
    ),
  },
  webrtc: {
    title: "WebRTC",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>W</strong>RTC
      </span>
    ),
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "mern-chat",
    category: "Real-time Communication",
    title: "PERN Stack Chat Platform",
    src: "/assets/projects-screenshots/mern-chat/mern1.png",
    screenshots: [
      "mern1.png", "mern2.png", "mern3.png", "mern4.png", "mern5.png",
      "mern6.png", "mern7.png", "mern8.png", "mern9.png", "mern10.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.dotnet,
      ],
    },
    github: "https://github.com/veerunjoys/chatappfrontend",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-Time Chat and Management Platform
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack communication platform built with the PERN Stack,
            featuring real-time messaging, private and public room structure,
            typing indicators, file sharing, and PWA support.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Messaging
          </TypographyH3>
          <p className="font-mono mb-2">
            Instant message delivery, typing indicators, and online status
            tracking with Socket.io. Flexible communication with private and
            public room structures.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mern-chat/mern1.png`,
              `${BASE_PATH}/mern-chat/mern2.png`,
              `${BASE_PATH}/mern-chat/mern3.png`,
              `${BASE_PATH}/mern-chat/mern4.png`,
              `${BASE_PATH}/mern-chat/mern5.png`,
              `${BASE_PATH}/mern-chat/mern6.png`,
              `${BASE_PATH}/mern-chat/mern7.png`,
              `${BASE_PATH}/mern-chat/mern8.png`,
              `${BASE_PATH}/mern-chat/mern9.png`,
              `${BASE_PATH}/mern-chat/mern10.png`
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Security and Management
          </TypographyH3>
          <p className="font-mono mb-2">
            Includes security and management features such as JWT, refresh
            tokens, 2FA, email verification, rate limiting, and a role-based
            admin panel.
          </p>
          <TypographyH3 className="my-4 mt-8">File Sharing & PWA</TypographyH3>
          <p className="font-mono mb-2">
            File upload and sharing support, with a native app-like experience
            on mobile devices via Progressive Web App (PWA).
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-resume-analyzer",
    category: "AI-Integrated Recruiting Platform",
    title: "AI Resume Analyzer",
    src: "/assets/projects-screenshots/ai-resume-analyzer/hero-banner-group.webp",
    screenshots: ["hero-banner-group.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
      ],
    },
    github: "https://github.com/veerunjoys/AI-Resume_Analyzer",
    live: "https://ai-resume-analyzer-plum-delta.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Integrated Recruiter Workspace
          </TypographyP>
          <TypographyP className="font-mono">
            A recruiter-facing platform for tracking candidates, uploading
            resumes for AI-powered parsing and scoring, and matching
            candidates against open jobs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            AI Resume Parsing & Scoring
          </TypographyH3>
          <p className="font-mono mb-2">
            Uploaded resumes (PDF/DOCX) are parsed with Google Gemini into
            structured fields, and each candidate gets an AI-generated
            quality analysis covering strengths, weaknesses, missing skills,
            and an overall recommendation.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/ai-resume-analyzer/hero-banner-group.webp`]}
          />
          <TypographyH3 className="my-4 mt-8">
            Resumable Uploads & Real-Time Updates
          </TypographyH3>
          <p className="font-mono mb-2">
            Chunked, resumable resume uploads with a live progress tracker,
            plus a WebSocket connection that pushes candidate and
            upload-status changes to the UI instantly. Offline actions are
            queued locally and synced once connectivity returns.
          </p>
        </div>
      );
    },
  },
  {
    id: "ticket-booking",
    category: "Event Booking Platform",
    title: "Ticket Booking Application",
    src: "/assets/projects-screenshots/ticket-booking/booking-tickets-online.webp",
    screenshots: ["booking-tickets-online.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    github: "https://github.com/veerunjoys/TicketBooking-frontend",
    live: "https://ticket-booking-frontend-rho.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack Event Ticket Booking Platform
          </TypographyP>
          <TypographyP className="font-mono">
            A MERN stack application that lets users browse events, reserve
            seats, pay through an in-app wallet, and manage bookings, backed
            by an admin dashboard for managing events, seats, and refunds.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Concurrency-Safe Booking
          </TypographyH3>
          <p className="font-mono mb-2">
            The backend uses MongoDB transactions to guarantee a seat can
            never be double-booked and wallet deductions never happen more
            than once, even under simultaneous requests.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/ticket-booking/booking-tickets-online.webp`]}
          />
          <TypographyH3 className="my-4 mt-8">
            Guest Booking & Live Seat Availability
          </TypographyH3>
          <p className="font-mono mb-2">
            Users can reserve seats before logging in, with holds
            automatically transferred to their account after authentication.
            The seat map polls every 4 seconds for near real-time
            availability updates.
          </p>
        </div>
      );
    },
  },
];
export default projects;
