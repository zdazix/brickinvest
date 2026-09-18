import { InfiniteScrollTrigger } from "@/components/ui/InfiniteScrollTrigger";
import { Loader } from "@/components/ui/Loader";
import { NewsCard } from "@/components/ui/NewsCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { useNewsInfiniteQuery } from "@/features/news/queries";
import { useLocale } from "@/lib/i18n";

export const NewsPage = () => {
  const { t } = useLocale();
  const newsQuery = useNewsInfiniteQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={t("newsDescription")}
          title={t("latestStories")}
        />
        {newsQuery.isError ? (
          <p className="mt-16 text-[13px] text-danger">
            {t("storiesCouldNotLoad")}
          </p>
        ) : newsQuery.isPending ? (
          <Loader className="mt-16" label={t("loadingStories")} />
        ) : (
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsQuery.items.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
          </div>
        )}
        {newsQuery.hasNextPage && (
          <InfiniteScrollTrigger
            disabled={newsQuery.isFetchingNextPage}
            isLoading={newsQuery.isFetchingNextPage}
            onIntersect={() => void newsQuery.fetchNextPage()}
          />
        )}
      </div>
    </main>
  );
};
