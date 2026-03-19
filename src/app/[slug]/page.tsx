import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getStore, getAllSlugs } from "@/data/stores";
import StoreHeader from "@/components/StoreHeader";
import StoreLinks from "@/components/StoreLinks";
import StoreSchedule from "@/components/StoreSchedule";
import StoreFeatures from "@/components/StoreFeatures";
import StorePromos from "@/components/StorePromos";
import StoreFooter from "@/components/StoreFooter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) return {};

  return {
    title: `${store.name} | NFC Card`,
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

  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{
        background: `linear-gradient(180deg, ${store.theme.bgGradientFrom} 0%, ${store.theme.bgGradientTo} 50%, ${store.theme.bgGradientFrom} 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: store.theme.primaryColor }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: store.theme.secondaryColor }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-12 space-y-8">
        <StoreHeader store={store} />

        {store.promos && store.promos.length > 0 && (
          <StorePromos promos={store.promos} primaryColor={store.theme.primaryColor} />
        )}

        <StoreLinks links={store.links} primaryColor={store.theme.primaryColor} />

        {store.features && store.features.length > 0 && (
          <StoreFeatures features={store.features} primaryColor={store.theme.primaryColor} />
        )}

        {store.schedule && store.schedule.length > 0 && (
          <StoreSchedule schedule={store.schedule} primaryColor={store.theme.primaryColor} />
        )}

        <StoreFooter store={store} />
      </div>
    </main>
  );
}
