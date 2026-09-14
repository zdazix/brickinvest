import { NumericText } from "@/components/ui/NumericText";

type PageIntroProps = {
  readonly title: string;
  readonly description: string;
};

export const PageIntro = ({ title, description }: PageIntroProps) => (
  <header className="max-w-3xl">
    <h1 className="text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
      <NumericText>{title}</NumericText>
    </h1>
    <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">
      <NumericText>{description}</NumericText>
    </p>
  </header>
);
