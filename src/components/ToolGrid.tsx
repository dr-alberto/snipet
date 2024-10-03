import React from "react";
import { Guide } from "@/utils/loadGuides";

interface ToolGridProps {
  guides: Guide[];
  tool: string;
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tool, guides }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
      {guides.map((guide, index) => (
        <a
          href={`/guides/${guide.fullPath}`}
          key={index}
          className="group block p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition"
        >
          <div className="flex flex-col justify-center">
            <img
              src={`/${tool}.png`}
              alt={guide.title}
              className="w-12 h-12 object-contain mb-4"
            />
            <h2 className="text-xl group-hover:text-blue-600">
              {guide.title.charAt(0).toUpperCase() + guide.title.slice(1)}
            </h2>
          </div>
        </a>
      ))}
    </div>
  );
};
