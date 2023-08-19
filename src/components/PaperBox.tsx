import Image from "next/image"
import { OpenInNewWindow } from "./Icons/radix";
import Link from "next/link";

export default function PaperBox({
    url,
    image,
    title,
    authors,
    date,
    width,
    height,
}: {
    url: string;
    image: string;
    title: string;
    authors: string[];
    date: string;
    width: number;
    height: number;
}){
    return (
        <div className="flex flex-col rounded w-full border my-4">
            <div className="border w-full ">
                <Image className="bg-cover w-full" src={image} alt={title} width={width} height={height} />
            </div>
            <div className="flex flex-col space-y-1 py-2 px-1">
                <Link href={url}>
                <div className="group font-bold text-md md:text-xl flex items-center hover:underline hover:underline-offset-4 hover:decoration-gray-200">
                    {title}
                    <span className="ml-2 hidden group-hover:block">
                    <OpenInNewWindow />
                    </span>
                </div>
                </Link>
                <div className="flex space-x-2 items-center block text-xs text-gray-600">
                    {
                        authors.map((author, idx) => {
                            return <p className="mr-1" key={idx}>{author}</p>
                        })
                    }
                    <p>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}