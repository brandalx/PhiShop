"use client";
import { trpc } from "@/trpc/client";
import React from "react";

const VerifyEmail = () => {
  const {} = trpc.auth;
  return <div>VerifyEmail</div>;
};

export default VerifyEmail;
