"use client";

import EligibilityModal from "@/components/eligibility-modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EligibilityModal />
    </main>
  );
}
