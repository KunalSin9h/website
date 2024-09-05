import BlurImage from "./BlurImage";

interface props {
  image: string;
  name: string;
  born?: string;
  place: string;
  wife?: string;
  alive: boolean;
  description: string;
}

export default function Ansistors(props: props) {
  return (
    <div className="grid grid-cols-4">
      <BlurImage
        src={props.image}
        alt="Person image"
        width={130}
        height={160}
        className="rounded"
      />
      <div className="col-span-3 px-2">
        <p className="font-bold">{props.name}</p>
        <div className="flex gap-4 items-center text-green-600">
          <p className={`${props.born ? "block" : "hidden"}`}>
            Born: <span className="text-black">{props.born}</span>
          </p>
          <p>
            {props.alive ? "Living in" : "Lived in"}:{" "}
            <span className="text-black">{props.place}</span>
          </p>
          <p className={`${props.wife ? "block" : "hidden"}`}>
            Wife: <span className="text-black">{props.wife}</span>
          </p>
        </div>
        <p className="text-slate-500">{props.description}</p>
      </div>
    </div>
  );
}
