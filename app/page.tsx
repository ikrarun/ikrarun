import { koulen } from "./component/navigation";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* <Navigation /> */}
      <div className="w-full flex flex-col items-center justify-center h-[100vh]">
        <div className="relative w-fit text-[16rem] inline-block justify-center items-center mx-auto">
          <h1
            style={koulen.style}
            className="absolute  top-2 left-2 text-white  truncate whitespace-nowrap  select-none"
          >
            robby daddy
          </h1>
          <h1
            style={koulen.style}
            className="relative  whitespace-nowrap text-red-700 font-thin"
          >
            robby daddy
          </h1>
          <h1
            style={koulen.style}
            className="absolute hidden top-0 left-0 text-transparent font-outline-2 whitespace-nowrap select-none"
          >
            robby daddy
          </h1>
        </div>
        <h2 style={font.style} className="text-8xl animate-bounce duration-75 ease-in-out"> Coming Soon...</h2>
      </div>
    </main>
  );
}
