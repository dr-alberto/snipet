import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Remarkable } from "remarkable";
import DOMPurify from "dompurify"; // Sanitize HTML to prevent XSS attacks
import { useNavigate } from "react-router-dom";

const md = new Remarkable({
  html: true, // Allow HTML tags in markdown
  breaks: true, // Convert line breaks to <br>
  typographer: true, // Enable smart quotes, dashes, etc.
});

interface MarkdownLoaderProps {
  filename: string;
  setPostContent: Dispatch<SetStateAction<string>>;
  setMarkdownContent: Dispatch<SetStateAction<string>>;
  setMetadata: Dispatch<
    SetStateAction<{ title?: string; url?: string; lastUpdated?: string }>
  >;
}

const extractFrontMatter = (markdown: string) => {
  const frontMatterRegex = /^---\n([\s\S]+?)\n---/;
  const match = markdown.match(frontMatterRegex);
  let metadata: {
    header?: string;
    desc?: string;
    urls?: { title: string; url: string }[];
    lastUpdated?: string;
  } = {};
  let content = markdown;

  if (match) {
    const rawMetadata = match[1];
    metadata = rawMetadata
      .split("\n")
      .reduce((acc: any, line, index, lines) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim();
          let value = line.slice(colonIndex + 1).trim();

          // Handle the `urls` field, which is a list of objects
          if (key === "urls") {
            const urls: { title: string; url: string }[] = [];
            for (let i = index + 1; i < lines.length; i++) {
              const urlLine = lines[i].trim();
              if (urlLine.startsWith("- title:")) {
                const title = urlLine.replace("- title:", "").trim();
                const url = lines[i + 1].replace("url:", "").trim();
                urls.push({ title, url });
                i++; // Skip the next line as it's part of the current object
              }
              if (urlLine === "") break; // Stop if an empty line is encountered
            }
            acc[key] = urls;
          } else {
            // Handle regular key-value pairs
            acc[key] = value;
          }
        }
        return acc;
      }, {});

    // Remove front matter from content
    content = markdown.replace(frontMatterRegex, "").trim();
  }

  return { metadata, content };
};

const MarkdownLoader: React.FC<MarkdownLoaderProps> = ({
  filename,
  setPostContent,
  setMarkdownContent,
  setMetadata,
}) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // Dynamically load and render the markdown file
  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const fileName = `/guides/${filename}.md`;
        const response = await fetch(fileName);

        if (!response.ok) {
          throw new Error(
            `Failed to load markdown file: ${response.status} ${response.statusText}`
          );
        }

        const rawMarkdown = await response.text();

        // Check if the response is actually a markdown file by validating the content type
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("text/markdown")) {
          throw new Error(`Expected markdown file, but got: ${contentType}`);
        }

        // Parse the front matter (metadata) and markdown content
        const { metadata, content: markdownContent } =
          extractFrontMatter(rawMarkdown);
        setMetadata(metadata);

        // Set markdown and text content
        setMarkdownContent(markdownContent);

        const htmlContent = md.render(markdownContent);

        // Sanitize the HTML
        const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);

        const plainTextContent = markdownContent
          .replace(/[#*_`>\-!\[\]\(\)]+/g, "") // Remove markdown syntax
          .replace(/\n{2,}/g, "\n") // Normalize line breaks
          .trim();

        // Set the plain text content
        setPostContent(plainTextContent);

        // Update the content state
        setContent(sanitizedHtmlContent);
      } catch (error) {
        navigate("/");
      }
    };

    loadMarkdown();
  }, [filename, setPostContent, setMarkdownContent]);

  return (
    <div className="markdown-body">
      {/* Render the parsed markdown content as HTML */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MarkdownLoader;
