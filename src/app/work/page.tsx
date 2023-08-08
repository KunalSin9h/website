import WorkBox from "@/components/work/WorkBox";
import TiltBox from "@/components/Tiltbox";
import ProjectBox from "@/components/work/ProjectBox";

export default function Work() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        <span className="opacity-30">#</span> Projects
      </h1>
      <div className="grid gap-2 h-full grid-cols-1 md:grid-cols-2">
        <TiltBox>
          <WorkBox
            url="https://github.com/dearapp"
            icon="/images/dearapp.png"
            name="DearApp"
            tagline="Consumer Social"
            role="Co-Founder & Backend Developer"
            work="Building systems to facilitate realtime messaging, feed and social connections."
          />
        </TiltBox>
        <TiltBox>
          <WorkBox
            url="https://github.com/meltred"
            icon="/images/meltred.png"
            name="Meltred"
            tagline="Software Deployment"
            role="Founder & Developer"
            work="Building full stack application for managing and deploying software with ease on own machines."
          />
        </TiltBox>
      </div>
      <h1 className="text-xl font-bold">
        <span className="opacity-30">#</span> Open-source Projects
      </h1>
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
