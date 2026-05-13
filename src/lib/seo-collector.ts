import { createContext } from "react";

export interface CollectedSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImage: string;
  noIndex: boolean;
  cityName?: string;
  schemas: object[];
}

export interface SeoCollector {
  collect: (data: CollectedSeo) => void;
}

export const SeoCollectorContext = createContext<SeoCollector | null>(null);
