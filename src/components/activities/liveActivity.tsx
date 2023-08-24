"use client";

import { useState } from "react";
import OnlineButton from "./onlineButton";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Activities, Activity, Spotify, NeoVim, VsCode } from "./types";
import { NeoVimBox, SpotifyBox, VsCodeBox } from "./activities";

export default function LiveActivity() {
  const [online, setOnline] = useState(false);
  const [activities, setActivities] = useState([] as Activities);

  const socket = new WebSocket("wss://api.lanyard.rest/socket");

  socket.addEventListener("error", () => {
    setOnline(false);
  });

  socket.addEventListener("close", () => {
    setOnline(false);
  });

  socket.addEventListener("message", ({ data }) => {
    const lanyard = JSON.parse(data);
    const opcode = lanyard.op;

    if (opcode === 1) {
      socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: "964155459835691038",
          },
        })
      );

      setInterval(() => {
        socket.send(JSON.stringify({ op: 3 }));
      }, lanyard.d.heartbeat_interval);
    }

    if (opcode === 0) {
      if (lanyard.d.discord_status === "online") setOnline(true);
      else setOnline(false);

      setActivities(lanyard.d.activities);
    }
  });

  if (!online) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <OnlineButton />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-8">
          <SheetTitle>
            {/* @ts-ignore */}
            Hey, I am online on Discord, <br /> say hi there.{" "}
          </SheetTitle>
          <SheetDescription>I am @kunalsin9h on discord</SheetDescription>
          <div>
            <p>Other Activities</p>
            <div>
              {activities.length === 0
                ? null
                : activities.map((act: Activity, index: number) => {
                    if (act?.name === "Visual Studio Code")
                      return <VsCodeBox key={index} act={act as VsCode} />;
                    if (act?.name === "Neovim")
                      return <NeoVimBox key={index} act={act as NeoVim} />;
                    if (act?.name === "Spotify")
                      return <SpotifyBox key={index} act={act as Spotify} />;
                  })}
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
