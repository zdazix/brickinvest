import { Loader } from "@/components/ui/Loader";
import { Reveal } from "@/components/ui/Reveal";
import { CollectionSection } from "@/pages/home/components/CollectionSection";
import { EditorialSection } from "@/pages/home/components/EditorialSection";
import { HeroSection } from "@/pages/home/components/HeroSection";
import { HomeClosingSection } from "@/pages/home/components/HomeClosingSection";
import { IntroSection } from "@/pages/home/components/IntroSection";
import { LocationSection } from "@/pages/home/components/LocationSection";
import { ReviewsSection } from "@/pages/home/components/ReviewsSection";
import { useHomeQuery } from "@/features/home/queries";

export const HomePage = () => {
  const homeQuery = useHomeQuery();

  if (homeQuery.isError) {
    return (
      <main
        className="grid min-h-dvh place-items-center bg-background"
        id="main-content"
      >
        <p className="text-danger">The page content could not be loaded.</p>
      </main>
    );
  }

  if (!homeQuery.data) {
    return (
      <main aria-busy="true" className="bg-background" id="main-content">
        <Loader
          className="fixed inset-0 z-[60] bg-background"
          label="Preparing the page…"
          mode="page"
        />
      </main>
    );
  }

  const content = homeQuery.data;

  return (
    <main id="main-content">
      <HeroSection image={content.image} />
      <Reveal>
        <IntroSection features={content.features} image={content.image} />
      </Reveal>
      <Reveal>
        <CollectionSection
          cards={content.collectionCards}
          image={content.image}
        />
      </Reveal>
      <Reveal>
        <EditorialSection
          cards={content.editorialCards}
          image={content.image}
        />
      </Reveal>
      <Reveal>
        <ReviewsSection reviews={content.reviews} />
      </Reveal>
      <Reveal>
        <LocationSection />
      </Reveal>
      <Reveal>
        <HomeClosingSection />
      </Reveal>
    </main>
  );
};
