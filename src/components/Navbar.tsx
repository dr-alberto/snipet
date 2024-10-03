import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full flex p-4 px-8 sm:px-16 md:px-32 lg:px-48 border-b">
      <a href="/">
        <img src={"/snipet-logo.svg"} className="w-10" />
      </a>
      <Button variant="link" className="ml-auto">
        <Link to={'https://github.com/dr-alberto/snipet'} target="_blank" className="flex items-center gap-x-2 my-auto">
          {" "}
          GitHub
          <ChevronsRight className="w-4" />
        </Link>
      </Button>
    </nav>
  );
};
