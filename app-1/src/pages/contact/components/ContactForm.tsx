import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { TextAreaField, TextField } from "@/components/ui/FormControls";
import { Button } from "@/components/ui/Button";
import { useContactMutation } from "@/features/contact/queries";
import {
  contactSchema,
  type ContactFormValues,
} from "@/pages/contact/contact-schema";
import { trackEvent } from "@/lib/analytics";

export const ContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });
  const contactMutation = useContactMutation(() => reset());

  useEffect(() => {
    if (contactMutation.isSuccess) {
      trackEvent("generate_lead", { lead_source: "contact_form" });
    }
  }, [contactMutation.isSuccess]);

  const submitForm = (values: ContactFormValues) => {
    contactMutation.mutate(values);
  };

  return (
    <form
      className="grid gap-5 rounded-[2rem] border border-border/60 bg-surface p-6 sm:p-8"
      noValidate
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          autoComplete="name"
          error={errors.name?.message}
          label="Name"
          {...register("name")}
        />
        <TextField
          autoComplete="email"
          error={errors.email?.message}
          label="Email"
          type="email"
          {...register("email")}
        />
      </div>
      <TextField
        error={errors.subject?.message}
        label="Subject"
        {...register("subject")}
      />
      <TextAreaField
        error={errors.message?.message}
        label="Message"
        {...register("message")}
      />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-[13px] text-primary">
          {contactMutation.isSuccess ? "Message sent successfully." : ""}
        </p>
        <Button disabled={contactMutation.isPending} type="submit">
          {contactMutation.isPending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
};
