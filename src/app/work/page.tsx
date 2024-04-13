import WorkBox from "@/components/work/WorkBox";
import TiltBox from "@/components/Tiltbox";
import ProjectBox from "@/components/work/ProjectBox";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";

export const metadata: Metadata = PageMeta({
  title: "Work & Project",
  description: "Companies, Projects and Open-source projects",
  url: "https://kunalsin9h.com/work/",
});

export default function Work() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        <span className="opacity-30">#</span> Projects
      </h1>
      <div className="grid gap-2 h-full grid-cols-1 md:grid-cols-2">
        <TiltBox>
          <WorkBox
            url="https://github.com/meltred"
            icon="/images/orangewhite.png"
            name="Meltred"
            tagline="AI Research"
            role="Developer & Researcher"
            work="Working on ML Models to suite business growth Uses cases."
          />
        </TiltBox>
        <TiltBox>
          <WorkBox
            url="https://github.com/kunalsin9h/meltcd"
            icon="/images/meltcd.png"
            name="Melt-CD"
            tagline="Continuous Development"
            role="Developer"
            work="Building a reliable GitDevOps Continuous Development platform for docker swarm."
          />
        </TiltBox>
      </div>
      <h1 className="text-xl font-bold">
        <span className="opacity-30">#</span> Open-source Projects
      </h1>
      <ProjectBox
        url="https://github.com/kunalsin9h/secops"
        name="Secops"
        language="TypeScript Rust"
        description="An Ubuntu Desktop Application for managing security."
      />
      <ProjectBox
        url="https://github.com/kunalsin9h/tiddi"
        name="Tiddi"
        language="GoLang"
        description="Tiddi is self hosted image server written in go, it is design to host and server images on blog etc."
      />
      <ProjectBox
        url="https://github.com/kunalsin9h/livejq"
        name="LiveJQ"
        language="Rust"
        description="An alternative jq implementation in rust for continuous parsing without crashing on invalid JSON."
      />
      <ProjectBox
        url="https://github.com/KunalSin9h/git-commit"
        name="Commit"
        language="Shell"
        description="Git commit simulator using Conventional Commits conventions."
      />
      <ProjectBox
        url="https://github.com/KunalSin9h/website"
        name="Website"
        language="TypeScript"
        description="This very website."
      />
    </>
  );
}
