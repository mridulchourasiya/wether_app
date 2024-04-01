import AirPollution from "./Components/AirPollution/AirPollution";
import Navbar from "./Components/Navbar";
import Sunset from "./Components/Sunset/Sunset";
import Tempreature from "./Components/Temperature/Tempreature";
import Wind from "./Components/Wind/Wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        {/* left Section */}
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Tempreature />
        </div>
        {/* Right section */}
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-col-3 xl:grid-col-4">
            <AirPollution />
            <Sunset />
            <Wind />
          </div>
        </div>
      </div>
    </main>
  );
}
