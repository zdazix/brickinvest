import { Mail, MapPin, Phone } from "lucide-react";

import { IconList } from "@/components/ui/IconList";
import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { useContactDetailsQuery } from "@/features/contact/queries";
import { ContactForm } from "@/pages/contact/components/ContactForm";
import { useLocale } from "@/lib/i18n";

const contactIcons = { email: Mail, phone: Phone, location: MapPin } as const;

export const ContactPage = () => {
  const { t } = useLocale();
  const contactQuery = useContactDetailsQuery();
  const contactDetails =
    contactQuery.data?.map((item) => ({
      icon: contactIcons[item.type],
      label: item.label,
    })) ?? [];

  return (
    <main
      className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={t("contactPageDescription")}
          title={t("contactPageTitle")}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <aside className="rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:p-9">
            <h2 className="text-2xl tracking-[-0.025em]">
              {t("contactDetails")}
            </h2>
            <div className="mt-7">
              {contactQuery.data ? (
                <IconList items={contactDetails} />
              ) : contactQuery.isError ? (
                <p className="text-[13px] text-danger">
                  {t("contactUnavailable")}
                </p>
              ) : (
                <Loader label={t("loadingContact")} />
              )}
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};
