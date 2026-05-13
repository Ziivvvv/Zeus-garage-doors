import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import PromoBar from "./components/PromoBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SeoCollectorContext, CollectedSeo } from "./lib/seo-collector";

// Static imports — no lazy() so renderToString gets real components
import Index from "./pages/Index";
import QuotePage from "./pages/QuotePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";
import SafetyChecklistPage from "./pages/SafetyChecklistPage";
import LocalFAQPage from "./pages/LocalFAQPage";
import SpringReplacementPage from "./pages/services/SpringReplacementPage";
import OpenerRepairPage from "./pages/services/OpenerRepairPage";
import OffTrackRepairPage from "./pages/services/OffTrackRepairPage";
import CableReplacementPage from "./pages/services/CableReplacementPage";
import PanelReplacementPage from "./pages/services/PanelReplacementPage";
import NewInstallationPage from "./pages/services/NewInstallationPage";
import RollerReplacementPage from "./pages/services/RollerReplacementPage";
import SensorRepairPage from "./pages/services/SensorRepairPage";
import TuneUpPage from "./pages/services/TuneUpPage";
import WeatherSealPage from "./pages/services/WeatherSealPage";
import RemoteProgrammingPage from "./pages/services/RemoteProgrammingPage";
import TrackRepairPage from "./pages/services/TrackRepairPage";
import SafetyInspectionPage from "./pages/services/SafetyInspectionPage";
import ManualToAutomaticPage from "./pages/services/ManualToAutomaticPage";
import NoiseReductionPage from "./pages/services/NoiseReductionPage";
import KirklandLocation from "./pages/locations/KirklandLocation";
import BellevueLocation from "./pages/locations/BellevueLocation";
import RedmondLocation from "./pages/locations/RedmondLocation";
import MercerIslandLocation from "./pages/locations/MercerIslandLocation";
import LynnwoodLocation from "./pages/locations/LynnwoodLocation";
import BothellLocation from "./pages/locations/BothellLocation";
import WoodinvilleLocation from "./pages/locations/WoodinvilleLocation";
import KenmoreLocation from "./pages/locations/KenmoreLocation";
import SeattleLocation from "./pages/locations/SeattleLocation";
import BlogIndex from "./pages/BlogIndex";
import EmergencyRepairPage from "./pages/EmergencyRepairPage";
import GarageDoorOpensItselfPage from "./pages/blog/GarageDoorOpensItselfPage";
import SpringCostFactorsPage from "./pages/blog/SpringCostFactorsPage";
import BestOpenerPNWPage from "./pages/blog/BestOpenerPNWPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import HowLongDoSpringsLastPage from "./pages/blog/HowLongDoSpringslast";
import GarageDoorWontOpenColdPage from "./pages/blog/GarageDoorWontOpenColdWeather";
import LiftMasterVsChamberlainPage from "./pages/blog/LiftMasterVsChamberlain";
import DIYGarageDoorRepairPage from "./pages/blog/DIYGarageDoorRepairSafe";
import GarageDoorServiceCallCostPage from "./pages/blog/GarageDoorServiceCallCost";
import WhyWontGarageDoorClosePage from "./pages/blog/WhyWontGarageDoorCloseAllTheWay";
import AverageCostReplaceGarageDoorPage from "./pages/blog/AverageCostReplaceGarageDoor";
import WhyIsGarageDoorNoisyPage from "./pages/blog/WhyIsGarageDoorSoNoisy";
import GarageDoorMaintenanceChecklistPage from "./pages/blog/GarageDoorMaintenanceChecklist";
import RepairVsReplaceGarageDoorPage from "./pages/blog/RepairVsReplaceGarageDoor";
import ChainVsBeltVsJackshaftPage from "./pages/blog/ChainVsBeltVsJackshaft";
import HowToProgramGarageDoorRemotePage from "./pages/blog/HowToProgramGarageDoorRemote";
import HowLongDoGarageDoorCablesLastPage from "./pages/blog/HowLongDoGarageDoorCablesLast";
import WhatCausesGarageDoorOffTrackPage from "./pages/blog/WhatCausesGarageDoorOffTrack";
import NylonVsSteelGarageDoorRollersPage from "./pages/blog/NylonVsSteelGarageDoorRollers";

const ALL_ROUTES = [
  "/",
  "/emergency-garage-door-repair",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/blog",
  "/safety-checklist",
  "/local-faq",
  "/services/spring-replacement",
  "/services/opener-repair",
  "/services/off-track-repair",
  "/services/cable-replacement",
  "/services/panel-replacement",
  "/services/new-installation",
  "/services/roller-replacement",
  "/services/sensor-repair",
  "/services/garage-door-tune-up",
  "/services/weather-seal-replacement",
  "/services/remote-keypad-programming",
  "/services/track-repair",
  "/services/safety-inspection",
  "/services/manual-to-automatic-conversion",
  "/services/noise-reduction",
  "/locations/kirkland-wa",
  "/locations/bellevue-wa",
  "/locations/redmond-wa",
  "/locations/mercer-island-wa",
  "/locations/lynnwood-wa",
  "/locations/bothell-wa",
  "/locations/woodinville-wa",
  "/locations/kenmore-wa",
  "/locations/seattle-wa",
  "/blog/garage-door-opens-by-itself",
  "/blog/spring-replacement-cost-factors",
  "/blog/best-garage-door-opener-pnw",
  "/service-area",
  "/blog/how-long-do-garage-door-springs-last",
  "/blog/garage-door-wont-open-cold-weather",
  "/blog/liftmaster-vs-chamberlain-garage-door-opener",
  "/blog/is-diy-garage-door-repair-safe",
  "/blog/garage-door-service-call-cost",
  "/blog/why-wont-garage-door-close-all-the-way",
  "/blog/average-cost-to-replace-garage-door",
  "/blog/why-is-my-garage-door-so-noisy",
  "/blog/garage-door-maintenance-checklist",
  "/blog/repair-vs-replace-garage-door",
  "/blog/chain-vs-belt-vs-jackshaft-opener",
  "/blog/how-to-program-garage-door-remote",
  "/blog/how-long-do-garage-door-cables-last",
  "/blog/what-causes-garage-door-off-track",
  "/blog/nylon-vs-steel-garage-door-rollers",
];

function ServerApp({ url }: { url: string }) {
  return (
    <StaticRouter location={url}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-offwhite">
          <PromoBar />
          <Navbar />
          <div className="flex-1 pt-10 lg:pt-14">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/emergency-garage-door-repair" element={<EmergencyRepairPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/safety-checklist" element={<SafetyChecklistPage />} />
              <Route path="/local-faq" element={<LocalFAQPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/garage-door-opens-by-itself" element={<GarageDoorOpensItselfPage />} />
              <Route path="/blog/spring-replacement-cost-factors" element={<SpringCostFactorsPage />} />
              <Route path="/blog/best-garage-door-opener-pnw" element={<BestOpenerPNWPage />} />
              <Route path="/blog/how-long-do-garage-door-springs-last" element={<HowLongDoSpringsLastPage />} />
              <Route path="/blog/garage-door-wont-open-cold-weather" element={<GarageDoorWontOpenColdPage />} />
              <Route path="/blog/liftmaster-vs-chamberlain-garage-door-opener" element={<LiftMasterVsChamberlainPage />} />
              <Route path="/blog/is-diy-garage-door-repair-safe" element={<DIYGarageDoorRepairPage />} />
              <Route path="/blog/garage-door-service-call-cost" element={<GarageDoorServiceCallCostPage />} />
              <Route path="/blog/why-wont-garage-door-close-all-the-way" element={<WhyWontGarageDoorClosePage />} />
              <Route path="/blog/average-cost-to-replace-garage-door" element={<AverageCostReplaceGarageDoorPage />} />
              <Route path="/blog/why-is-my-garage-door-so-noisy" element={<WhyIsGarageDoorNoisyPage />} />
              <Route path="/blog/garage-door-maintenance-checklist" element={<GarageDoorMaintenanceChecklistPage />} />
              <Route path="/blog/repair-vs-replace-garage-door" element={<RepairVsReplaceGarageDoorPage />} />
              <Route path="/blog/chain-vs-belt-vs-jackshaft-opener" element={<ChainVsBeltVsJackshaftPage />} />
              <Route path="/blog/how-to-program-garage-door-remote" element={<HowToProgramGarageDoorRemotePage />} />
              <Route path="/blog/how-long-do-garage-door-cables-last" element={<HowLongDoGarageDoorCablesLastPage />} />
              <Route path="/blog/what-causes-garage-door-off-track" element={<WhatCausesGarageDoorOffTrackPage />} />
              <Route path="/blog/nylon-vs-steel-garage-door-rollers" element={<NylonVsSteelGarageDoorRollersPage />} />
              <Route path="/service-area" element={<ServiceAreaPage />} />
              <Route path="/services/spring-replacement" element={<SpringReplacementPage />} />
              <Route path="/services/opener-repair" element={<OpenerRepairPage />} />
              <Route path="/services/off-track-repair" element={<OffTrackRepairPage />} />
              <Route path="/services/cable-replacement" element={<CableReplacementPage />} />
              <Route path="/services/panel-replacement" element={<PanelReplacementPage />} />
              <Route path="/services/new-installation" element={<NewInstallationPage />} />
              <Route path="/services/roller-replacement" element={<RollerReplacementPage />} />
              <Route path="/services/sensor-repair" element={<SensorRepairPage />} />
              <Route path="/services/garage-door-tune-up" element={<TuneUpPage />} />
              <Route path="/services/weather-seal-replacement" element={<WeatherSealPage />} />
              <Route path="/services/remote-keypad-programming" element={<RemoteProgrammingPage />} />
              <Route path="/services/track-repair" element={<TrackRepairPage />} />
              <Route path="/services/safety-inspection" element={<SafetyInspectionPage />} />
              <Route path="/services/manual-to-automatic-conversion" element={<ManualToAutomaticPage />} />
              <Route path="/services/noise-reduction" element={<NoiseReductionPage />} />
              <Route path="/locations/kirkland-wa" element={<KirklandLocation />} />
              <Route path="/locations/bellevue-wa" element={<BellevueLocation />} />
              <Route path="/locations/redmond-wa" element={<RedmondLocation />} />
              <Route path="/locations/mercer-island-wa" element={<MercerIslandLocation />} />
              <Route path="/locations/lynnwood-wa" element={<LynnwoodLocation />} />
              <Route path="/locations/bothell-wa" element={<BothellLocation />} />
              <Route path="/locations/woodinville-wa" element={<WoodinvilleLocation />} />
              <Route path="/locations/kenmore-wa" element={<KenmoreLocation />} />
              <Route path="/locations/seattle-wa" element={<SeattleLocation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </TooltipProvider>
    </StaticRouter>
  );
}

// ─────────────────────────────────────────────
// HEAD BUILDER
// Converts collected SEO data into vite-prerender-plugin head format
// ─────────────────────────────────────────────

interface HeadElement {
  type: string;
  props: Record<string, string>;
  children?: string;
}

function buildPrerenderHead(seo: CollectedSeo) {
  const elements = new Set<HeadElement>();

  elements.add({ type: "meta", props: { name: "description", content: seo.description } });
  elements.add({ type: "link", props: { rel: "canonical", href: seo.canonicalUrl } });

  // Open Graph
  elements.add({ type: "meta", props: { property: "og:title", content: seo.title } });
  elements.add({ type: "meta", props: { property: "og:description", content: seo.description } });
  elements.add({ type: "meta", props: { property: "og:url", content: seo.canonicalUrl } });
  elements.add({ type: "meta", props: { property: "og:type", content: seo.ogType || "website" } });
  elements.add({ type: "meta", props: { property: "og:image", content: seo.ogImage } });
  elements.add({ type: "meta", props: { property: "og:site_name", content: "Zeus Garage Doors" } });
  elements.add({ type: "meta", props: { property: "og:locale", content: "en_US" } });

  // Twitter Card
  elements.add({ type: "meta", props: { name: "twitter:card", content: "summary_large_image" } });
  elements.add({ type: "meta", props: { name: "twitter:title", content: seo.title } });
  elements.add({ type: "meta", props: { name: "twitter:description", content: seo.description } });
  elements.add({ type: "meta", props: { name: "twitter:image", content: seo.ogImage } });

  // Robots
  elements.add({
    type: "meta",
    props: {
      name: "robots",
      content: seo.noIndex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  });

  // Geo
  elements.add({ type: "meta", props: { name: "geo.region", content: "US-WA" } });
  elements.add({ type: "meta", props: { name: "geo.placename", content: seo.cityName || "Kirkland" } });
  elements.add({ type: "meta", props: { name: "geo.position", content: "47.71289;-122.17948" } });
  elements.add({ type: "meta", props: { name: "ICBM", content: "47.71289, -122.17948" } });

  // JSON-LD schemas — injected as <script type="application/ld+json"> tags
  for (const schema of seo.schemas) {
    elements.add({
      type: "script",
      props: { type: "application/ld+json", textContent: JSON.stringify(schema) },
    });
  }

  return {
    title: seo.title,
    elements,
  };
}

// ─────────────────────────────────────────────
// PRERENDER EXPORT
// ─────────────────────────────────────────────

export async function prerender(data: { url: string }) {
  let collectedSeo: CollectedSeo | null = null;

  const html = renderToString(
    <SeoCollectorContext.Provider value={{ collect: (seo) => { collectedSeo = seo; } }}>
      <ServerApp url={data.url} />
    </SeoCollectorContext.Provider>
  );

  return {
    html,
    links: new Set(ALL_ROUTES),
    head: collectedSeo ? buildPrerenderHead(collectedSeo) : {},
  };
}
