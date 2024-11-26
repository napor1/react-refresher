import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";

const Page1 = () => <div>Page One</div>;
const Page2 = () => <div>Page Two</div>;

export default function Page() {
  const [currPage, setCurrPage] = useState("pageOne");
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (page: string) => {
    startTransition(() => {
      setCurrPage(page);
    });
  };

  const renderPage = () => {
    switch (currPage) {
      case "pageOne":
        return <Page1 />;
      case "pageTwo":
        return <Page2 />;
      default:
        return <div>Unknown page</div>;
    }
  };

  return (
    <div>
      <nav>
        <Button onClick={() => handleNavigation("pageOne")}>Page One</Button>
        <Button onClick={() => handleNavigation("pageTwo")}>Page Two</Button>
      </nav>
      {isPending && <p>loading...</p>}
      {renderPage()}
    </div>
  );
}
