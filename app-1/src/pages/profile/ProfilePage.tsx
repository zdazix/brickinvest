import { Camera } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { useProfileQuery } from "@/features/profile/queries";
import { ProfileForm } from "@/pages/profile/components/ProfileForm";
import { useLocale } from "@/lib/i18n";

export const ProfilePage = () => {
  const { t } = useLocale();
  const profileQuery = useProfileQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={t("profileDescription")}
          title={t("profileTitle")}
        />
        <section className="mt-8 grid gap-8 rounded-[2rem] border border-border/60 bg-surface p-6 sm:p-9 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
          <div>
            <div className="relative w-fit">
              {profileQuery.data && (
                <img
                  alt={t("profileImage")}
                  className="size-40 rounded-full object-cover"
                  decoding="async"
                  height="160"
                  src={profileQuery.data.image}
                  width="160"
                />
              )}
              <IconButton
                aria-label={t("changeProfileImage")}
                className="absolute right-1 bottom-1 shadow-sm"
                tone="primary"
                type="button"
              >
                <Camera aria-hidden="true" className="size-5" />
              </IconButton>
            </div>
            <h2 className="mt-7 text-xl">{t("profileDetails")}</h2>
            <p className="mt-3 text-[13px] leading-5 text-muted-foreground">
              {t("profileDetailsDescription")}
            </p>
          </div>
          {profileQuery.data ? (
            <ProfileForm defaultValues={profileQuery.data} />
          ) : profileQuery.isError ? (
            <p className="text-[13px] text-danger">{t("profileUnavailable")}</p>
          ) : (
            <Loader label={t("loadingProfile")} />
          )}
        </section>
      </div>
    </main>
  );
};
