"use client";
// components/LogoutOnClose.js

import { useEffect } from "react";
import { logout_user } from "@/app/lib/actions";

const LogoutOnClose = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      // You can perform logout or other cleanup actions here
      console.log("Logging out on close...");
      // Add your logout logic here
      logout_user();
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export default LogoutOnClose;
