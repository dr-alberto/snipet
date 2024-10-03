import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { loadGuides, Guide } from "@/utils/loadGuides";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const guidesData = loadGuides();
    setGuides(guidesData);
  }, []);

  const filteredGuides = searchTerm
    ? guides
        .map((guide) => {
          const searchWords = searchTerm.toLowerCase().split(" ");
          const title = guide.title.toLowerCase().split("-").join(" ");

          // Count how many search words match the guide title
          const matchCount = searchWords.reduce((count, word) => {
            return title.includes(word) ? count + 1 : count;
          }, 0);

          return { ...guide, matchCount };
        })
        // Filter out guides with no matches
        .filter((guide) => guide.matchCount > 0)
        // Sort by relevance (most matches first)
        .sort((a, b) => b.matchCount - a.matchCount)
        // Limit the results to 10 guides
        .slice(0, 10)
    : []; // Return an empty array if searchTerm is empty

  return (
    <>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-20 bg-white"
        />
        <Button className="absolute right-0 top-0 bottom-0 rounded-l-none">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Search results */}
      <div className="mt-1 bg-white rounded-md shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredGuides.map((guide, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <Link to={`/guides/${guide.fullPath}`} className="block">
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
