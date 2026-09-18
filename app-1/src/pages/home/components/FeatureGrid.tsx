import { FeatureCard } from "@/components/ui/FeatureCard";
import { useLocale } from "@/lib/i18n";

type FeatureGridProps = {
  readonly features: readonly (readonly [string, string])[];
};

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  const { t } = useLocale();

  return (
    <ul
      aria-label={t("keyFeatures")}
      className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {features.map(([title, description], index) => (
        <FeatureCard
          description={description}
          key={`${title}-${index}`}
          title={title}
        />
      ))}
    </ul>
  );
};
