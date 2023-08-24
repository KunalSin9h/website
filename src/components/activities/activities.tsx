import Image from "next/image";
import { NeoVim, Spotify, VsCode } from "./types";
import { Button } from "../ui/button";
import Link from "next/link";

export function VsCodeBox({ act }: { act: VsCode }) {
  const repo = `https://github.com/kunalsin9h/${act.state.replaceAll(
    "Workspace: ",
    ""
  )}`;

  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex items-center justify-start space-x-8">
        <Image
          className=""
          src="/images/vscode.png"
          alt="VsCode Logo"
          width={80}
          height={80}
        />
        <div>
          <div className="font-bold">{act.name}</div>
          <div className="text-sm opacity-80">{act.details}</div>
          <div className="text-sm opacity-80">{act.state}</div>
          <div className="text-sm opacity-80">
            {elapsedTime(act.timestamps.start)} elapsed
          </div>
        </div>
      </div>
      <Link
        href={repo}
        className={`${hasGithubRepo(repo)
          .then((res) => {
            if (res) return "";
            else return "hidden";
          })
          .catch((_) => {
            return "hidden";
          })} w-full my-2`}
        target="_black"
      >
        <Button className="w-full">
          {act.buttons ? act.buttons[0] : null}
        </Button>
      </Link>
    </div>
  );
}

export function NeoVimBox({ act }: { act: NeoVim }) {
  return <p>{act.name}</p>;
}

export function SpotifyBox({ act }: { act: Spotify }) {
  return <p>{act.name}</p>;
}

async function hasGithubRepo(repo: string): Promise<boolean> {
  const response = await fetch(repo);
  return response.status === 200;
}

// startTime and Date.now are in meiliseconds
function elapsedTime(startTime: number): string {
  let timeDifference = Date.now() - startTime;
  const hr = Math.floor(timeDifference / (60 * 60 * 1000));
  timeDifference = timeDifference % (60 * 60 * 1000);
  const minutes = Math.floor(timeDifference / (60 * 1000));
  timeDifference = timeDifference % (60 * 1000);
  const sec = Math.floor(timeDifference / 1000);

  return `${hr !== 0 ? hr + ":" : ""}${minutes !== 0 ? minutes + ":" : ""}${
    sec !== 0 ? sec : ""
  }`;
}
