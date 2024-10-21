import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PickerPanel } from "./PickerPanel";

export function IconPicker() {
  return (
    <div className="flex justify-center w-screen pt-10">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Icon</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PickerPanel />
        </PopoverContent>
      </Popover>
    </div>
  );
}
