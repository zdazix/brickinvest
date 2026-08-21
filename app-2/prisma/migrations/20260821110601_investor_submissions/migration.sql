-- CreateTable
CREATE TABLE "investor_submissions" (
    "id" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "opportunity_type" TEXT NOT NULL,
    "locations" TEXT NOT NULL,
    "timing" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "consent_at" TIMESTAMPTZ(3) NOT NULL,
    "submitted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_submissions_pkey" PRIMARY KEY ("id")
);
