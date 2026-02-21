"use client";

import { useState } from "react";
import { stations } from "@/constants/stations";
import StationCard from "./StationCard";

export default function StationList() {
  const [expandedStations, setExpandedStations] = useState<number[]>([]);

  const toggleStation = (number: number) => {
    setExpandedStations((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number],
    );
  };

  return (
    <section className="mb-20 space-y-4">
      {stations.map((station) => (
        <StationCard
          key={station.number}
          station={station}
          isExpanded={expandedStations.includes(station.number)}
          onToggle={toggleStation}
        />
      ))}
    </section>
  );
}
