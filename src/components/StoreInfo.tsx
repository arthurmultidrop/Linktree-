import { Clock } from "lucide-react";
import { StoreSchedule } from "@/lib/types";

export default function StoreInfo({
  schedule,
  features,
  primaryColor,
}: {
  schedule?: StoreSchedule[];
  features?: string[];
  primaryColor: string;
}) {
  if (!schedule?.length && !features?.length) return null;

  return (
    <div
      className="w-full rounded-2xl bg-white p-5 animate-fade-up delay-300"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* Schedule */}
      {schedule && schedule.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Clock size={14} style={{ color: primaryColor }} />
            Horário de Funcionamento
          </h3>
          <div className="space-y-2.5">
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
      )}

      {/* Divider */}
      {schedule?.length && features?.length ? (
        <div className="border-t border-gray-100 my-4" />
      ) : null}

      {/* Features */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                color: primaryColor,
                backgroundColor: `${primaryColor}10`,
              }}
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
