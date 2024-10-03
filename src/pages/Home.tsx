import { SearchBar } from "@/components/SearchBar";
import HomeGrid from "@/components/HomeGrid";
import { Navbar } from "@/components/Navbar";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { useState, useEffect } from "react";
import { CircleHelp } from "lucide-react";

export const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const isDialogClosed = localStorage.getItem("wdc");
    // Only show dialog if the user hasn't closed it before
    if (!isDialogClosed) {
      setOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <WelcomeDialog open={open} setOpen={setOpen} />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center p-4 mt-48">
        <h1 className="text-6xl mb-2 text-gray-800">Snipet</h1>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
          Find and copy common development snippets to use in your documentation
        </p>

        {/* Search container */}
        <div className="w-full max-w-md">
          <div className="flex flex-col h-[450px]">
            {/* Search bar with integrated button */}
            <div
              className="mb-2 text-sm flex gap-x-1 items-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <CircleHelp className="w-4 h-4" />
              Help
            </div>
            <SearchBar />
          </div>
        </div>

        <div className="mt-8 mb-48 flex-grow w-full">
          {/* HomeGrid positioned after the search bar */}
          <div className="w-full max-w-7xl mx-auto">
            <HomeGrid />
          </div>
        </div>
      </main>
    </div>
  );
};
