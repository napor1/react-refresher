import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PickedInfoBanner } from "../components/PickedInfoBanner";
import { DefaultTabsContent } from "./DefaultTabsContent";
import { OtherTabsContent } from "./OtherTabsContent";

export function PickerPanel() {
  return (
    <div>
      <PickedInfoBanner />
      <Tabs defaultValue="default" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <DefaultTabsContent />
        </TabsContent>
        <TabsContent value="other">
          <OtherTabsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
