import Image from "next/image";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";

export const metadata: Metadata = PageMeta({
  title: "System & Tools",
  description: "Operating Systems, Editors, Desktop Environments & Other Tools",
  url: "https://kunalsin9h.com/system/",
});

export default function System() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> My Daily Drivers
      </p>
      <p>
        These are the things which is use for my day-to-day development.
        Starting with the{" "}
        <span className="font-bold italic">Operating System, </span>I have used
        Windows for nearly 6 months, in my initial days, and then switched to
        Ubuntu, which i have used for nearly a year.
      </p>
      <p>
        And for 1 year, i have used{" "}
        <a
          href="https://archlinux.org/"
          target="_black"
          className="underline underline-offset-4 hover:decoration-pink-400"
        >
          Arch Linux
        </a>
        . It is a linux distro which is most bleeding edge, in terms os kernel
        version, feature etc. But since then i am using Windows, mostly due to
        some requirements in developing desktop applications.
        <br />
      </p>
      <p>This is my tweet when i switched to arch linux, it was not easy.</p>
      <Image
        alt="Screenshot of tweet showing my arch install"
        src="/images/arch-tweet.webp"
        width={594}
        height={576}
        className="rounded"
      />
      <p>
        It took me 45 minutes to just connect to wifi, I was prepared for
        future!. Since then it is working fine, though i have to install lots of
        packages, like package for <strong>fonts</strong> and many more.
      </p>
      <p>
        This is my current <strong>neofetch</strong>
      </p>
      <Image
        src="/images/neofetch.webp"
        alt="Screenshot of neofetch command on my arch os"
        width={1057}
        height={744}
        className="rounded"
      />
      <p>
        With the <strong>Kernel</strong> version <strong>6.4.3</strong>. I
        don&apos;t know any linux distro will give this latest version of
        kernel.
      </p>
      <p>
        Few arch linux stuff what i wrote on my <strong>github gist</strong>,
        which help while i was setting up is{" "}
        <a
          href="https://gist.github.com/KunalSin9h/3bad782b71d89cb0baae58c7ace334d2"
          target="_black"
          className="underline underline-offset-4 hover:decoration-pink-400 "
        >
          here
        </a>
      </p>
      <p className="text-xl font-bold">
        <span className="opacity-30">#</span> Arch + i3
      </p>
      <p>
        I use{" "}
        <a
          href="https://i3wm.org/"
          target="_black"
          className="font-bold underline underline-offset-4 hover:decoration-pink-400 "
        >
          i3wm
        </a>{" "}
        (window manager) on my Arch, as Arch does not come with its own desktop
        environment.
      </p>
      <p>
        My <strong>i3wm</strong> config is{" "}
        <a
          href="https://github.com/KunalSin9h/.dotfiles/tree/master/i3"
          target="_black"
          className="underline underline-offset-4 hover:decoration-pink-400 "
        >
          here
        </a>
      </p>
      <p>Some image of i3 are...</p>
      <Image
        src="/images/i3.webp"
        alt="Screenshot of i3wm"
        width={1920}
        height={1080}
        className="rounded"
      />
      <Image
        src="/images/fulli3.webp"
        alt="Screenshot of i3wm"
        width={1920}
        height={1080}
        className="rounded"
      />
      <p className="text-2xl font-bold">
        <span className="opacity-30">#</span> vim + vscode
      </p>
      <p>
        I use vim (not neovim) and vscode in mix, cause either i am just editing
        some files or writing entire project, I that case vim + vscode suits for
        need. Though i need vim key bindings in vscode.
      </p>
      <p>
        My <strong>vim</strong> config file is{" "}
        <a
          href="https://github.com/KunalSin9h/.dotfiles/tree/master/vim"
          target="_black"
          className="underline underline-offset-4 hover:decoration-pink-400"
        >
          here
        </a>
      </p>
      <p className="text-2xl font-bold">
        <span className="opacity-30">#</span> /etc
      </p>
      <p>
        <strong>Tmux</strong> for terminal multiplexer, <strong>Neomutt</strong>{" "}
        for email client, <strong>zathura</strong> for pdfs,{" "}
        <strong>zsh</strong> as shell, <strong>urxvt</strong> as terminal.
      </p>
      <p>
        Config of everything above is{" "}
        <a
          href="https://github.com/KunalSin9h/.dotfiles"
          className="underline underline-offset-4 hover:decoration-pink-400"
        >
          KunalSin9h/.dotfiles
        </a>
      </p>
      <div className="py-8">...will add more in future, see you soon :)</div>
    </>
  );
}
