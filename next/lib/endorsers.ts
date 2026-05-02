import type { CSSProperties } from "react";

export interface Endorser {
  name: string;
  role?: string;
  org?: boolean;
  newRow?: boolean;
  cardStyle?: CSSProperties;
  nameStyle?: CSSProperties;
  roleStyle?: CSSProperties;
}

export const ENDORSERS: Endorser[] = [
  { name: "Democratic Party", role: "Benton County", org: true, cardStyle: { background: "#e3f2fd", borderColor: "#90caf9" }, nameStyle: { color: "#1565c0" }, roleStyle: { color: "#1976d2" } },
  { name: "Republican Party", role: "Benton County", org: true, cardStyle: { background: "#fce4ec", borderColor: "#ef9a9a" }, nameStyle: { color: "#c62828" }, roleStyle: { color: "#d32f2f" } },
  { name: "Pacific Green Party", role: "Linn/Benton County", org: true, cardStyle: { background: "#e8f5e9", borderColor: "#a5d6a7" }, nameStyle: { color: "#2e7d32" }, roleStyle: { color: "#388e3c" } },
  { name: "Our Revolution - Corvallis Allies", role: "", newRow: true },
  { name: "Corvallis Chamber of Commerce", role: "" },
  { name: "Downtown Corvallis Organization", role: "" },
  { name: "Charles Maughan", role: "Mayor", newRow: true },
  { name: "Tony Cadena", role: "City Councilor" },
  { name: "Charlyn Ellis", role: "City Councilor" },
  { name: "Briae Lewis", role: "City Councilor" },
  { name: "Carolyn Mayers", role: "City Councilor" },
  { name: "Jim Moorefield", role: "City Councilor" },
  { name: "Jan Napack", role: "City Councilor" },
  { name: "Ava Olson", role: "City Councilor" },
  { name: "Paul Shaffer", role: "City Councilor" },
  { name: "Sara Gelser Blouin", role: "State Senator" },
  { name: "Pat Malone", role: "County Commissioner" },
  { name: "Gabe Shepherd", role: "County Commissioner" },
  { name: "Nancy Wyse", role: "County Commissioner" },
  { name: "Julie Manning", role: "Former Mayor" },
  { name: "Biff Traber", role: "Former Mayor" },
  { name: "Penny York", role: "Former Councilor" },
  { name: "Brennan Colberg", role: "Community Member" },
  { name: "Alexis Hammer", role: "Community Member" },
  { name: "Steve Richmond", role: "Community Member" },
  { name: "Curtis Wright", role: "Community Member" },
];
