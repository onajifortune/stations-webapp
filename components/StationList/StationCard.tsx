"use client";

import { ChevronDown } from "lucide-react";

export interface Station {
  number: number;
  title: string;
  versicle: string;
  response: string;
  reading: string;
  scripture: string;
  christSpeaks: string;
  manResponds: string;
  finalVersicle: string;
  finalResponse: string;
  hymn: string;
}

interface StationCardProps {
  station: Station;
  isExpanded: boolean;
  onToggle: (number: number) => void;
}

export default function StationCard({
  station,
  isExpanded,
  onToggle,
}: StationCardProps) {
  return (
    <div className="border border-border/40 rounded-lg overflow-hidden hover:border-border/80 transition-colors">
      <button
        onClick={() => onToggle(station.number)}
        className="w-full px-6 py-6 bg-card/50 hover:bg-card transition-colors flex items-center justify-between gap-4"
      >
        <div className="flex-1 text-left">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-sm font-semibold text-accent">
              Station {station.number}
            </span>
            <h3 className="text-lg font-serif font-light">{station.title}</h3>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="px-6 py-8 bg-background border-t border-border/40 space-y-6">
          {/* Station 12 kneeling prompt */}
          {station.number === 12 && (
            <p className="text-center text-sm italic text-muted-foreground">
              (All kneel silently for a moment)
            </p>
          )}

          {/* Opening Versicle and Response */}
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-semibold">V.</span> {station.versicle}
            </p>
            <p className="text-sm">
              <span className="font-semibold">R.</span> {station.response}
            </p>
          </div>

          {/* Reading */}
          <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Reading: {station.reading}
            </h4>
            <p className="font-serif leading-relaxed text-foreground">
              {station.scripture}
            </p>
          </div>

          {/* Christ Speaks */}
          <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Christ Speaks
            </h4>
            <p className="font-serif leading-relaxed text-foreground">
              {station.christSpeaks}
            </p>
          </div>

          {/* Man Responds */}
          <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Man Responds
            </h4>
            <p className="font-serif leading-relaxed text-foreground">
              {station.manResponds}
            </p>
          </div>

          {/* Closing Versicle and Response */}
          <div className="space-y-2 border-t border-border/40 pt-4">
            <p className="text-sm">
              <span className="font-semibold">V.</span> {station.finalVersicle}
            </p>
            <p className="text-sm">
              <span className="font-semibold">R.</span> {station.finalResponse}
            </p>
          </div>

          {/* Hymn */}
          <div className="border-l-2 border-accent/50 pl-4">
            <p
              style={{ whiteSpace: "pre-line" }}
              className="font-serif italic text-sm text-foreground leading-8"
            >
              {station.hymn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
