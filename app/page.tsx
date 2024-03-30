import Navbar from "./Components/Navbar";
import Tempreature from "./Components/Temperature/Tempreature";


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
        <div className="flex flex-col"></div>
      </div>
    </main>
  );
}
