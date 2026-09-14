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
import {
  profileSchema,
  type ProfileFormValues,
} from "@/pages/profile/profile-schema";

type ProfileFormProps = {
  readonly defaultValues: ProfileFormValues;
};

export const ProfileForm = ({ defaultValues }: ProfileFormProps) => {
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
          label="Display name"
          {...register("displayName")}
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
        error={errors.role?.message}
        label="Role"
        {...register("role")}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Controller
          control={control}
          name="accountType"
          render={({ field }) => (
            <SelectField
              error={errors.accountType?.message}
              label="Account type"
              name={field.name}
              onBlur={field.onBlur}
              onValueChange={field.onChange}
              options={[
                { label: "Personal", value: "personal" },
                { label: "Business", value: "business" },
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
              label="Date of birth"
              onBlur={field.onBlur}
              onValueChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </div>
      <TextAreaField
        error={errors.bio?.message}
        label="Bio"
        {...register("bio")}
      />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-[13px] text-primary">
          {profileMutation.isSuccess ? "Profile changes saved." : ""}
        </p>
        <Button
          disabled={isSubmitting || profileMutation.isPending}
          type="submit"
        >
          {profileMutation.isPending ? "Saving…" : "Save profile"}
        </Button>
      </div>
    </form>
  );
};
