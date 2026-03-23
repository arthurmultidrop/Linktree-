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
    <div className="w-full rounded-2xl bg-white p-5 animate-fade-up delay-300"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
      }}
    >
      <h3 className="text-gray-800 font-semibold text-sm mb-4 flex items-center gap-2">
        <Clock size={14} style={{ color: primaryColor }} />
        Horário de Funcionamento
      </h3>
      <div className="space-y-3">
        {schedule.map((item, index) => {
          const isClosed = item.hours === "Fechado";
          return (
            <div
              key={index}
              className="flex justify-between items-center"
            >
              <span className="text-[13px] text-gray-500">{item.day}</span>
              <span
                className="text-[13px] font-semibold rounded-lg px-2.5 py-1"
                style={{
                  color: isClosed ? "#ef4444" : primaryColor,
                  backgroundColor: isClosed
                    ? "#fef2f2"
                    : `${primaryColor}10`,
                }}
              >
                {item.hours}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
