import { StoreTextBlock as TextBlockType } from "@/lib/types";
import { AlignLeft } from "lucide-react";

export default function StoreTextBlock({
  textBlock,
  primaryColor,
}: {
  textBlock: TextBlockType;
  primaryColor: string;
}) {
  return (
    <div
      className="w-full rounded-2xl p-5 animate-fade-up delay-300"
      style={{
        backgroundColor: `${primaryColor}06`,
        border: `1px solid ${primaryColor}12`,
      }}
    >
      {textBlock.title && (
        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <AlignLeft size={14} style={{ color: primaryColor }} />
          {textBlock.title}
        </h3>
      )}
      <p className="text-[13px] text-gray-500 leading-relaxed">
        {textBlock.content}
      </p>
    </div>
  );
}
