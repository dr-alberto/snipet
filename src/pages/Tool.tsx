import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { loadToolGuides, Guide } from "@/utils/loadGuides";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

import { ToolGrid } from "@/components/ToolGrid";

export const Tool = () => {
  const { tool } = useParams<{ tool: string }>();
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const guides = loadToolGuides(tool);
    setGuides(guides);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              src={`/${tool}.png`}
              alt={`${tool} Icon`}
              className="h-8 w-auto mr-4"
            />
            <h2 className="text-4xl font-bold">
              {tool.charAt(0).toUpperCase() + tool.slice(1)}
            </h2>
          </div>
          <Button variant="link" className="mt-4 md:mt-0 md:ml-auto">
            <Link to="/" className="flex items-center gap-x-2">
              More guides
              <ChevronsRight className="w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <ToolGrid tool={tool} guides={guides} />

          <div className="w-full lg:w-64 space-y-6 mt-8 lg:mt-0"></div>
        </div>
      </div>
    </div>
  );
};
