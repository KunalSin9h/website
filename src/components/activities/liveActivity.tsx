"use client";

import { useEffect, useState } from "react";
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
  const [spotify, setSpotify] = useState<Spotify>();
  const [activities, setActivities] = useState([] as Activities);

  useEffect(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("error", () => {
      setOnline(false);
    });

    socket.addEventListener("close", () => {
      setOnline(false);
    });

    socket.addEventListener("message", ({ data }) => {
      console.log(data);
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
          socket.send(
            JSON.stringify({
              op: 3,
            })
          );
        }, lanyard.d.heartbeat_interval);
      }

      if (opcode === 0) {
        if (lanyard.d.discord_status === "online") setOnline(true);
        else setOnline(false);

        if (lanyard.d.listening_to_spotify) setSpotify(lanyard.d.spotify);
        else setSpotify(undefined);

        setActivities(lanyard.d.activities);
      }
    });
  }, []);

  if (!online) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <OnlineButton />
      </SheetTrigger>
      <SheetContent className="text-left overflow-y-scroll">
        <SheetHeader className="mt-8 text-left">
          <SheetTitle>
            Heyy, I am online on Discord, <br /> say hi. @kunalsin9h{" "}
          </SheetTitle>
          <div>
            <p>
              {activities.length === 0 && spotify === undefined
                ? null
                : "Other Activities"}
            </p>
            <div>
              {activities.length === 0
                ? null
                : activities.map((act: Activity, index: number) => {
                    if (act?.name === "Visual Studio Code")
                      return <VsCodeBox key={index} act={act as VsCode} />;
                    if (act?.name === "Neovim")
                      return <NeoVimBox key={index} act={act as NeoVim} />;

                    return null;
                  })}
              {spotify ? <SpotifyBox act={spotify} /> : null}
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
