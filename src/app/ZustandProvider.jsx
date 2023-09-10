"use client";
import { Provider } from "zustand";
import useDrawerStore from "@/app/store";

export default function ProviderZustand({ children }) {
  return <Provider createStore={useDrawerStore}>{children}</Provider>;
}
