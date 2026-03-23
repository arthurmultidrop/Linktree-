import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getStore, getAllSlugs } from "@/data/stores";
import StoreHeader from "@/components/StoreHeader";
import StoreLinks from "@/components/StoreLinks";
import StorePromos from "@/components/StorePromos";
import StoreProducts from "@/components/StoreProducts";
import StoreTextBlock from "@/components/StoreTextBlock";
import StoreInfo from "@/components/StoreInfo";
import StoreSocials from "@/components/StoreSocials";
import StoreFooter from "@/components/StoreFooter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) return {};

  return {
    title: `${store.name} | TopFind`,
    description: store.tagline,
    openGraph: {
      title: store.name,
      description: store.tagline,
      type: "website",
    },
  };
}

export default async function StorePage({ params }: PageProps) {
  const { slug } = await params;
  const store = getStore(slug);

  if (!store) {
    notFound();
  }

  const { primaryColor } = store.theme;
  const bgColor = store.theme.bgColor || "#ffffff";

  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-[480px] mx-auto px-5 pt-6 pb-8 flex flex-col items-center gap-7">
        {/* 1. Header — banner + profile photo + name + bio */}
        <StoreHeader store={store} />

        {/* 2. Promos */}
        {store.promos && store.promos.length > 0 && (
          <StorePromos promos={store.promos} primaryColor={primaryColor} />
        )}

        {/* 3. Link buttons */}
        <StoreLinks links={store.links} primaryColor={primaryColor} />

        {/* 4. Product gallery — carousel */}
        {store.products && store.products.length > 0 && (
          <StoreProducts products={store.products} primaryColor={primaryColor} />
        )}

        {/* 5. Text block */}
        {store.textBlock && (
          <StoreTextBlock
            textBlock={store.textBlock}
            primaryColor={primaryColor}
          />
        )}

        {/* 6. Schedule + Features — combined card */}
        <StoreInfo
          schedule={store.schedule}
          features={store.features}
          primaryColor={primaryColor}
        />

        {/* 7. Social media — circle icons */}
        {store.socialMedia && (
          <StoreSocials
            socialMedia={store.socialMedia}
            primaryColor={primaryColor}
          />
        )}

        {/* 8. Footer */}
        <StoreFooter store={store} />
      </div>
    </main>
  );
}
