import { NumericText } from "@/components/ui/NumericText";

type NewsCardProps = {
  readonly article: {
    readonly category: string;
    readonly date: string;
    readonly title: string;
    readonly summary: string;
    readonly image: string;
  };
};

export const NewsCard = ({ article }: NewsCardProps) => (
  <article className="overflow-hidden rounded-[2rem] border border-border/60 bg-surface">
    <img
      alt=""
      className="aspect-[4/3] w-full object-cover"
      decoding="async"
      height="675"
      loading="lazy"
      src={article.image}
      width="900"
    />
    <div className="p-6 sm:p-7">
      <div className="flex justify-between gap-4 text-xs text-muted-foreground">
        <span>
          <NumericText>{article.category}</NumericText>
        </span>
        <time>
          <NumericText>{article.date}</NumericText>
        </time>
      </div>
      <h2 className="mt-5 text-2xl tracking-[-0.025em]">
        <NumericText>{article.title}</NumericText>
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        <NumericText>{article.summary}</NumericText>
      </p>
    </div>
  </article>
);
