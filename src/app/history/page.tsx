import Ansistors from "@/components/Ansistors";
import BlurImage from "@/components/BlurImage";
import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";

export const metadata: Metadata = PageMeta({
  title: "My Ancestral History",
  description: "",
  url: "https://kunalsin9h.com/history/",
  image: "https://i.imgur.com/Bwu9QAr.jpeg",
});

export default function Ancestors() {
  return (
    <div>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> My Ancestral History
      </p>
      <br />
      My ancestors were from{" "}
      <a
        className="text-blue-400"
        href="https://en.wikipedia.org/wiki/Baiswara"
      >
        Baiswara
      </a>
      , it is a subregion of{" "}
      <a
        className="text-blue-400"
        href="https://en.wikipedia.org/wiki/Oudh_State"
      >
        Awadh
      </a>{" "}
      in Uttar Pradesh, India, which includes parts of Unnao and Raebareli
      districts. Baiswara got its name because{" "}
      <a
        className="text-blue-400"
        href="https://en.wikipedia.org/wiki/Bais_(clan)"
      >
        Bais
      </a>{" "}
      Rajputs dominated this area. This is the Rajput Clan i belong to.
      <br />
      <BlurImage
        src="/images/history/oudh.jpg"
        className="rounded"
        alt="Oudh Region map"
        width={1200}
        height={918}
      />
      <br />
      <p>
        It was a Mughal state, then an independent kingdom ruled by Bais Rajput
        King Maharaja Rao Ram Baksh Singh. Finally, it came under British
        control after annexation by the British in 1856. The king participated
        in the 1858 revolt against the British. He was one of the leaders of the
        Sepoy Mutiny and a close associate of Nana Sahib. He was hanged by the
        British on 28 December 1857 for taking part in the revolt and being
        found guilty of killing British soldiers.
      </p>
      <br />
      <p>
        My ancestors migrated to Bihar due to the Mughal atrocities they faced.
        With this movement and re-establishment, only ancestors who were in
        Bihar are known to us. For more than 200-300 years, we have been living
        in Bihar. The first establishment was in Khajuri Village in Saran
        District, where we were engaged in large-scale farming. Then we moved to
        Usri Paharpur village after selling our land, due to the mafia raj
        there. Since then, farming has not been a major area of occupation.
      </p>
      <br />
      <p className="font-semibold text-xl">Ancestors</p>
      <ul className="flex flex-col gap-6">
        <Ansistors
          image="/images/history/notv.png"
          name="Bheka Singh"
          place="Khajuri"
          alive={false}
          description="A farmer who had 3 sons."
        />
        <Ansistors
          image="/images/history/notv.png"
          name="Yashoda Singh"
          place="Khajuri"
          alive={false}
          description="Son of Bheka Singh, also a farmer who had 6 sons."
        />
        <Ansistors
          image="/images/history/notv.png"
          name="Janak Singh"
          place="Khajuri"
          wife="Shanjira Devi"
          alive={false}
          description="Son of Yashoda Singh, also a farmer who had 1 son."
        />
        <Ansistors
          image="/images/history/notv.png"
          name="Hem Narayan Singh"
          born="1915"
          place="Khajuri & Paharpur"
          wife="Dharora Devi"
          alive={false}
          description="Son of Janak Singh, also a farmer who has 2 sons. Married in 1934"
        />
        <Ansistors
          image="/images/history/raghaw.jpeg"
          name="Raghaw Singh"
          born="1949"
          place="Paharpur"
          wife="Sia Sundar Devi"
          alive={true}
          description="My grandfather, son of Hem Narayan Singh, also a farmer, highly educated in Hindu Grants, fought lots of court battels for Land. He has 4 sons and 2 doughter. Married in 1968"
        />
        <Ansistors
          image="/images/history/mksingh.png"
          name="Mrityunjay Singh"
          born="1978"
          place="Bhopal"
          wife="Monika Devi"
          alive={true}
          description="My father, Son of Raghaw Singh. A businessman who has 2 sons and 1 doughter. Married in 2000"
        />
        <Ansistors
          image="/images/history/kunal.jpeg"
          name="Kunal Singh"
          born="2002"
          alive={true}
          place="Bhopal"
          description="This is me, elder son of Mrityunjay Singh. A Software Engineer."
        />
      </ul>
      <br />
      <p>
        That&apos;s what we know so far. I will update this page upon gaining
        more knowledge.
      </p>
      <p>
        In particular, the life of my grandfather, Mr. Raghaw Singh, is very
        interesting. I will write a short biography in the future.
      </p>
      <br />
      <br />
      <strong>References (links)</strong>
      <br />
      <ul className="text-blue-400">
        <li>
          <a target="_black" href="https://en.wikipedia.org/wiki/Oudh_State">
            Oudh State on wikipedia
          </a>
        </li>
        <li>
          <a target="_black" href="https://en.wikipedia.org/wiki/Baiswara">
            Baiswara on wikipedia
          </a>
        </li>
        <li>
          <a
            target="_black"
            href="https://en.wikipedia.org/wiki/Baiswada_State"
          >
            Baiswada State on wikipedia
          </a>
        </li>
        <li>
          <a target="_black" href="https://en.wikipedia.org/wiki/Bais_(clan)">
            Bais Rajput clan on wikipedia
          </a>
        </li>
        <li>
          <a
            target="_black"
            href="https://en.wikipedia.org/wiki/Ram_Baksh_Singh"
          >
            Ram Baksh Singh on wikipedia
          </a>
        </li>
      </ul>
      <br />
    </div>
  );
}
