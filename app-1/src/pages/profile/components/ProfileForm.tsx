import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  DateField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/ui/FormControls";
import { Button } from "@/components/ui/Button";
import { useProfileMutation } from "@/features/profile/queries";
import { useLocale } from "@/lib/i18n";
import {
  profileSchema,
  type ProfileFormValues,
} from "@/pages/profile/profile-schema";

type ProfileFormProps = {
  readonly defaultValues: ProfileFormValues;
};

export const ProfileForm = ({ defaultValues }: ProfileFormProps) => {
  const { t } = useLocale();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    control,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });
  const profileMutation = useProfileMutation();

  const saveProfile = (values: ProfileFormValues) => {
    profileMutation.mutate(values);
  };

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={handleSubmit(saveProfile)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          autoComplete="name"
          error={errors.displayName?.message}
          label={t("displayName")}
          {...register("displayName")}
        />
        <TextField
          autoComplete="email"
          error={errors.email?.message}
          label={t("email")}
          type="email"
          {...register("email")}
        />
      </div>
      <TextField
        error={errors.role?.message}
        label={t("role")}
        {...register("role")}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Controller
          control={control}
          name="accountType"
          render={({ field }) => (
            <SelectField
              error={errors.accountType?.message}
              label={t("accountType")}
              name={field.name}
              onBlur={field.onBlur}
              onValueChange={field.onChange}
              options={[
                { label: t("personal"), value: "personal" },
                { label: t("business"), value: "business" },
              ]}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <DateField
              error={errors.dateOfBirth?.message}
              id={field.name}
              label={t("dateOfBirth")}
              onBlur={field.onBlur}
              onValueChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </div>
      <TextAreaField
        error={errors.bio?.message}
        label={t("bio")}
        {...register("bio")}
      />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-[13px] text-primary">
          {profileMutation.isSuccess ? t("profileSaved") : ""}
        </p>
        <Button
          disabled={isSubmitting || profileMutation.isPending}
          type="submit"
        >
          {profileMutation.isPending ? t("saving") : t("saveProfile")}
        </Button>
      </div>
    </form>
  );
};
