"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

export default function SubmitButton({ label, loading }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="border-2">
      {pending ? loading : label}
    </Button>
  );
}
