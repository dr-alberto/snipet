import MarkdownLoader from "../components/MarkdownLoader";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { CircleCheck, ChevronsRight } from "lucide-react";

export const Guide = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const { tool, guide } = useParams<{ guide: string; tool: string }>();
  const [postContent, setPostContent] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [metadata, setMetadata] = useState<{
    header?: string;
    desc?: string;
    urls?: { title: string; url: string }[];
    lastUpdated?: string;
  }>({});

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(`${type} copied!`);
        setTimeout(() => setCopySuccess(""), 2000);
      },
      () => {
        setCopySuccess("Failed to copy");
      }
    );
  };

  useEffect(() => {
    if (metadata.header) {
      document.title = `${metadata.header} · Snipet`; // Change page title
    }
  }, [metadata.header]);

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
            <Link to={`/guides/${tool}`} className="flex items-center gap-x-2">
              More {tool.charAt(0).toUpperCase() + tool.slice(1)} guides
              <ChevronsRight className="w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow order-2 md:order-1">
            <p className="text-muted-foreground mb-6">{metadata.desc}</p>

            <div className="relative mb-4">
              <div className="sm:absolute top-0 right-0 space-y-2 sm:space-y-0 sm:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(postContent, "Text")}
                  className="w-full sm:w-auto"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(markdownContent, "Markdown")}
                  className="w-full sm:w-auto"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Markdown
                </Button>
              </div>
              {copySuccess && (
                <div className="absolute top-20 sm:top-10 right-0 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  {copySuccess}
                </div>
              )}
            </div>

            <div className="mt-16 sm:mt-20">
              <MarkdownLoader
                filename={tool + "/" + guide}
                setPostContent={setPostContent}
                setMarkdownContent={setMarkdownContent}
                setMetadata={setMetadata}
              />
            </div>
          </div>

          <div className="w-full lg:w-64 space-y-6 mt-8 lg:mt-0 order-1 md:order-2">
            <div>
              <h2 className="font-semibold mb-2">Last updated</h2>
              <div className="h-px bg-border mb-2"></div>
              <p className="flex gap-x-2 items-center font-bold text-green-500 text-sm">
                <CircleCheck className="w-4" />
                {metadata.lastUpdated}
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">References</h2>
              <div className="h-px bg-border mb-2"></div>
              {metadata.urls && metadata.urls.map((url) => (
                <ul className="text-sm text-muted-foreground">
                  <li className="space-y-2">
                    <a
                      href={url.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {url.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
