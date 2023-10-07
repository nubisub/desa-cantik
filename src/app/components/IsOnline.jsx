"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

export default function IsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Function to update online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Check if it's not the first render
    if (!isFirstRender.current) {
      if (isOnline) {
        toast.dismiss();
        toast.success("Selamat, Anda Terhubung Kembali");
      } else {
        toast.error("Koneksi Internet Terputus, Cek Koneksi Anda", {
          dismissible: false,
          duration: 3600000,
        });
      }
    }

    // Set isFirstRender to false after the first render
    isFirstRender.current = false;

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [isOnline]);
  return (
    <>
      <Toaster position="top-center" richColors />
    </>
  );
}
