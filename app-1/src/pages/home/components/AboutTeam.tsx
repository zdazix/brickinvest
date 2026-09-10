const teamImages = [
  "/images/team/team-01.png",
  "/images/team/team-02.png",
  "/images/team/team-03.png",
  "/images/team/team-04.png",
  "/images/team/team-05.png",
  "/images/team/team-06.png",
];

export const AboutTeam = () => {
  return (
    <div className="mt-16 border-t border-border/70 pt-8 sm:mt-20 sm:pt-10">
      <p className="section-label mb-6">Team</p>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamImages.map((image, index) => (
          <article className="min-w-0" key={image}>
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                alt=""
                className={`h-full w-full object-cover ${
                  index === 0
                    ? "object-[50%_50%]"
                    : index === 5
                      ? "scale-[1.12] object-[50%_28%]"
                      : ""
                }`}
                loading="lazy"
                src={image}
              />
            </div>
            <div
              aria-label={`Role or position for team member ${index + 1}`}
              className="mt-3 flex min-h-12 items-center border-b border-primary/50 pb-3"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                Role / Position
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
