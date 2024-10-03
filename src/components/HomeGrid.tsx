import { useEffect, useState } from "react";
import { loadTools, Tool } from "@/utils/loadGuides";

// HomeGrid component
const HomeGrid = () => {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const toolsData = await loadTools();
      setTools(toolsData);
    };
    fetchGuides();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center mb-16">Find guides for any tool</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((guide, index) => (
          <a
            href={`/guides/${guide.name.toLowerCase()}`}
            key={index}
            className="group block p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={guide.logo}
                alt={guide.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-center group-hover:text-blue-600">
                {guide.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default HomeGrid;
