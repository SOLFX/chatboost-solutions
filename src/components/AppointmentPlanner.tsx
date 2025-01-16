import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";

export const AppointmentPlanner = () => {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      toast({
        title: "Afspraak gepland",
        description: `Uw afspraak is gepland voor ${format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })}`,
      });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white hover:bg-primary/90">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Plan een afspraak
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Plan een afspraak</DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            locale={nl}
            disabled={{ before: new Date() }}
            className="mx-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};