"use client";

import { useEffect } from "react";

import Button from "./ui/button";
import ErrorMessage from "./ui/error-message";

export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <ErrorMessage>Something went wrong!</ErrorMessage>
      <Button cb={() => reset()}>Try again</Button>
    </main>
  );
}
