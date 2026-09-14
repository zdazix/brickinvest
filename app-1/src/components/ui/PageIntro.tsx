import { NumericText } from "@/components/ui/NumericText";

type PageIntroProps = {
  readonly title: string;
  readonly description: string;
};

export const PageIntro = ({ title, description }: PageIntroProps) => (
  <header className="max-w-3xl">
    <h1 className="text-5xl leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
      <NumericText>{title}</NumericText>
    </h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
      <NumericText>{description}</NumericText>
    </p>
  </header>
);
