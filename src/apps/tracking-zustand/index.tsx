import { Things } from "./components";
import { DataProvider } from "./data";

export default function Page() {
  return (
    <DataProvider>
      <Things />
    </DataProvider>
  );
}
