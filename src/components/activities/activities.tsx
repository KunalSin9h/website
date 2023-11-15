"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NeoVim, Spotify, VsCode } from "./types";
import { Button } from "../ui/button";
import Link from "next/link";
import { Problems } from "../Icons/radix";
import { start } from "repl";

/*
Most of VsCodeBox is similar to NeoVimBox code
*/
export function VsCodeBox({ act }: { act: VsCode }) {
  const [isRepo, setIsRepo] = useState(false);
  const repo = `kunalsin9h/${act.state?.replaceAll("Workspace: ", "")}`;

  hasGithubRepo(repo)
    .then(setIsRepo)
    .catch((_) => setIsRepo(false));

  return (
    <div className="flex flex-col py-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center space-y-2  md:space-x-4">
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
            <ElapsedTimeBox startTime={act.timestamps.start} />
          </div>
        </div>
      </div>
      <Link
        href={`https://github.com/${repo}`}
        className={`${isRepo ? "" : "hidden"} mt-2`}
        target="_black"
      >
        <Button className="w-full">View Repository</Button>
      </Link>
    </div>
  );
}

export function NeoVimBox({ act }: { act: NeoVim }) {
  const [isRepo, setIsRepo] = useState(false);

  const folderName = act.details.replaceAll("In workspace ", "").split(" ")[0];
  const workspaceName = act.details.replaceAll("problems found", "");

  const repo = `kunalsin9h/${folderName}`;

  hasGithubRepo(repo)
    .then(setIsRepo)
    .catch((_) => setIsRepo(false));

  return (
    <div className="flex flex-col py-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center space-y-2  md:space-x-4">
        <Image
          className=""
          src="/images/vim.png"
          alt="Vim Logo"
          width={80}
          height={80}
        />
        <div>
          <div className="font-bold">{act.name}</div>
          <div className="text-sm opacity-80">
            {
              <div className="flex items-center inline-block">
                {workspaceName}
                <span className="ml-1 inline">
                  <Problems />
                </span>
              </div>
            }
          </div>
          <div className="text-sm opacity-80">{act.state}</div>
          <div className="text-sm opacity-80">
            <ElapsedTimeBox startTime={act.timestamps.start} />
          </div>
        </div>
      </div>
      <Link
        href={`https://github.com/${repo}`}
        className={`${isRepo ? "" : "hidden"} mt-2`}
        target="_black"
      >
        <Button className="w-full">View Repository</Button>
      </Link>
    </div>
  );
}

export function SpotifyBox({ act }: { act: Spotify }) {
  return (
    <div className="flex flex-col py-4 w-full">
      <p className="text-xs uppercase my-1 text-green-500 dark:text-green-400">
        Listening to Spotify
      </p>
      <div className="flex flex-col md:flex-row md:items-center space-y-2  md:space-x-4">
        <Image
          className="rounded"
          unoptimized={true}
          src={act.album_art_url}
          alt="Spotify Song album art"
          placeholder="blur"
          blurDataURL={rgbDataURL(255, 255, 255)}
          draggable={false}
          width={80}
          height={80}
        />
        <div>
          <div className="font-bold">{act.song}</div>
          <div className="text-sm opacity-80">
            {"by "} {act.artist}
          </div>
          <div className="text-sm opacity-80">
            {"on "}
            {act.album}
          </div>
        </div>
      </div>
      <Link
        href={`https://open.spotify.com/track/${act.track_id}`}
        target="_black"
        className="w-full mt-2"
      >
        <Button className="w-full flex items-center justify-center space-x-1">
          <Image
            className="dark:invert"
            src="/images/spotify.webp"
            alt="Spotify Logo"
            width={25}
            height={25}
          />
          <span>Play on Spotify</span>
        </Button>
      </Link>
    </div>
  );
}

async function hasGithubRepo(repo: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    return response.status === 200;
  } catch (err) {
    return false;
  }
}

function ElapsedTimeBox({ startTime }: { startTime: number }) {
  const [elapsed, setElapsed] = useState("00:00");
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(elapsedTime(startTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTime]);
  return (
    <div>
      <span className="font-mono font-xs">{elapsed}</span> elapsed
    </div>
  );
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

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
