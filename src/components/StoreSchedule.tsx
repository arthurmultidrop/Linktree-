import { StoreSchedule as ScheduleType } from "@/lib/types";

export default function StoreSchedule({
  schedule,
  primaryColor,
}: {
  schedule: ScheduleType[];
  primaryColor: string;
}) {
  return (
    <div
      className="w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 animate-fade-in-up opacity-0"
      style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
    >
      <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
        <span>🕐</span> Horário de Funcionamento
      </h3>
      <div className="space-y-2">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-white/70">{item.day}</span>
            <span
              className="font-medium"
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
