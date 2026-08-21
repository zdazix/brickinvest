import { FeatureCard } from "@/components/ui/FeatureCard";

type FeatureGridProps = {
  readonly features: readonly (readonly [string, string])[];
};

export const FeatureGrid = ({ features }: FeatureGridProps) => (
  <ul
    aria-label="Key features"
    className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    {features.map(([title, description], index) => (
      <FeatureCard
        description={description}
        index={index}
        key={title}
        title={title}
      />
    ))}
  </ul>
);
