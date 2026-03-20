import { Clock } from "lucide-react";
import { StoreSchedule as ScheduleType } from "@/lib/types";

export default function StoreSchedule({
  schedule,
  primaryColor,
}: {
  schedule: ScheduleType[];
  primaryColor: string;
}) {
  return (
    <div className="w-full rounded-xl border border-neutral-800/60 bg-neutral-900/50 p-5">
      <h3 className="text-neutral-200 font-medium text-sm mb-4 flex items-center gap-2">
        <Clock size={14} className="text-neutral-500" />
        Horário de Funcionamento
      </h3>
      <div className="space-y-2.5">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-neutral-400">{item.day}</span>
            <span
              className="font-medium text-xs"
              style={{
                color: item.hours === "Fechado" ? "#ef4444" : primaryColor,
              }}
            >
              {item.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
