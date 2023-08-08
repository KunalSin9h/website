import WorkBox from "@/components/work/WorkBox";
import TiltBox from "@/components/Tiltbox";

export default function Work() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        <span className="opacity-30">#</span> Projects
      </h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 place-content-evenly">
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
    </>
  );
}
