export interface Guide {
  title: string;
  fullPath: string;
  tool: string;
  logo: string;
}

export interface Tool {
  name: string;
  logo: string;
}

export const guides = import.meta.glob("/public/guides/**/*.md", {
  eager: true,
}) as Record<string, { default: string }>;

export const loadGuides = (): Guide[] => {
  return Object.keys(guides).map((path) => {
    const fileName = path.split("/").pop()?.replace(".md", "") || ""; // Extract the title
    const parentFolder = path.split("/")[3]; // Adjust based on your folder structure
    const title = fileName.replaceAll("-", " ");

    return {
      title,
      fullPath: `${parentFolder}/${fileName}`,
      tool: parentFolder,
      logo: `${parentFolder}.png`,
    };
  });
};

export const loadToolGuides = (tool: string): Guide[] => {
  const allGuides = loadGuides(); // Get the guides from the existing loadGuides function

  // Extract unique tools from the guides
  const toolGuides = allGuides.filter((guide) => guide.tool === tool);

  return toolGuides;
};

export const loadTools = (): Tool[] => {
  const allGuides = loadGuides(); // Get the guides from the existing loadGuides function

  // Extract unique tools from the guides
  const uniqueTools = Array.from(
    new Map(
      allGuides.map((guide) => [
        guide.tool,
        {
          name: guide.tool.charAt(0).toUpperCase() + guide.tool.slice(1),
          logo: guide.logo,
        },
      ])
    ).values()
  );

  return uniqueTools;
};
