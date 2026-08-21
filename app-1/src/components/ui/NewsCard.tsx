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
      loading="lazy"
      src={article.image}
    />
    <div className="p-6 sm:p-7">
      <div className="flex justify-between gap-4 text-xs text-muted-foreground">
        <span>{article.category}</span>
        <time>{article.date}</time>
      </div>
      <h2 className="mt-5 text-2xl tracking-[-0.025em]">{article.title}</h2>
      <p className="mt-4 leading-7 text-muted-foreground">{article.summary}</p>
    </div>
  </article>
);
