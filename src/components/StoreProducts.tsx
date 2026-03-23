"use client";

import Image from "next/image";
import { StoreProduct } from "@/lib/types";

export default function StoreProducts({
  products,
  primaryColor,
}: {
  products: StoreProduct[];
  primaryColor: string;
}) {
  return (
    <div className="w-full animate-fade-up delay-200">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-none w-40 snap-start rounded-2xl bg-white overflow-hidden shadow-sm"
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Product image */}
            <div className="relative w-full h-36 bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <h4 className="text-sm font-semibold text-gray-800 truncate">
                {product.title}
              </h4>
              {product.description && (
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              )}
              {product.price && (
                <p
                  className="text-sm font-bold mt-2"
                  style={{ color: primaryColor }}
                >
                  {product.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
