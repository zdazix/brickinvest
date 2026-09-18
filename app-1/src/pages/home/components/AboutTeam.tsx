import { useLocale } from "@/lib/i18n";

const teamImages = [
  "/images/team/team-06.png",
  "/images/team/team-02.png",
  "/images/team/team-03.png",
  "/images/team/team-04.png",
  "/images/team/team-05.png",
  "/images/team/team-01.png",
];
const penultimateTeamImageIndex = teamImages.length - 2;

export const AboutTeam = () => {
  const { t } = useLocale();
  return (
    <div className="mt-16 border-t border-border/70 pt-8 sm:mt-20 sm:pt-10">
      <p className="section-label mb-6 text-[#000]">{t("team")}</p>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamImages.map((image, index) => (
          <article className="min-w-0" key={image}>
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                alt=""
                className={`h-full w-full object-cover ${
                  index === 0
                    ? "object-[50%_50%]"
                    : index === penultimateTeamImageIndex
                      ? "scale-[1.2] object-[50%_14%]"
                      : index === 5
                        ? "scale-[1.12] object-[50%_28%]"
                        : ""
                }`}
                loading="lazy"
                src={image}
              />
            </div>
            <div
              aria-label={`${t("role")} / ${t("position")} ${index + 1}`}
              className="mt-3 flex min-h-12 items-center border-b border-border/50 pb-3"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                {index === 0
                  ? t("teamStanley")
                  : index === 1
                    ? t("teamAlexander")
                    : index === 2
                      ? t("teamAntonio")
                      : index === 3
                        ? t("teamSantiago")
                        : index === 4
                          ? t("teamJose")
                          : index === 5
                            ? t("teamLili")
                            : `${t("role")} / ${t("position")}`}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
