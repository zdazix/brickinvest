import { Camera } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { useProfileQuery } from "@/features/profile/queries";
import { ProfileForm } from "@/pages/profile/components/ProfileForm";

export const ProfilePage = () => {
  const profileQuery = useProfileQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description="A reusable account page for editing the core identity fields most products need."
          title="Your profile."
        />
        <section className="mt-8 grid gap-8 rounded-[2rem] border border-border/60 bg-surface p-6 sm:p-9 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
          <div>
            <div className="relative w-fit">
              {profileQuery.data && (
                <img
                  alt="Customer profile placeholder"
                  className="size-40 rounded-full object-cover"
                  decoding="async"
                  height="160"
                  src={profileQuery.data.image}
                  width="160"
                />
              )}
              <IconButton
                aria-label="Change profile image"
                className="absolute right-1 bottom-1 shadow-sm"
                tone="primary"
                type="button"
              >
                <Camera aria-hidden="true" className="size-5" />
              </IconButton>
            </div>
            <h2 className="mt-7 text-2xl">Profile details</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Keep account information current and ready for connection to a
              real profile API.
            </p>
          </div>
          {profileQuery.data ? (
            <ProfileForm defaultValues={profileQuery.data} />
          ) : profileQuery.isError ? (
            <p className="text-danger">The profile could not be loaded.</p>
          ) : (
            <Loader label="Loading profile…" />
          )}
        </section>
      </div>
    </main>
  );
};
