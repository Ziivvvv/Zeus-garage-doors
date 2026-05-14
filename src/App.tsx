import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import PromoBar from "./components/PromoBar";
import Footer from "./components/Footer";
import StickyMobileFooter from "./components/StickyMobileFooter";
import StickyQuoteCTA from "./components/StickyQuoteCTA";

// ── Lazy imports for code splitting (improves Core Web Vitals)
import { lazy, Suspense } from "react";

// Core pages
const Index = lazy(() => import("./pages/Index"));
const QuotePage = lazy(() => import("./pages/QuotePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SafetyChecklistPage = lazy(() => import("./pages/SafetyChecklistPage"));
const LocalFAQPage = lazy(() => import("./pages/LocalFAQPage"));

// Service pages
const SpringReplacementPage = lazy(() => import("./pages/services/SpringReplacementPage"));
const OpenerRepairPage = lazy(() => import("./pages/services/OpenerRepairPage"));
const OffTrackRepairPage = lazy(() => import("./pages/services/OffTrackRepairPage"));
const CableReplacementPage = lazy(() => import("./pages/services/CableReplacementPage"));
const PanelReplacementPage = lazy(() => import("./pages/services/PanelReplacementPage"));
const NewInstallationPage = lazy(() => import("./pages/services/NewInstallationPage"));
const RollerReplacementPage = lazy(() => import("./pages/services/RollerReplacementPage"));
const SensorRepairPage = lazy(() => import("./pages/services/SensorRepairPage"));
const TuneUpPage = lazy(() => import("./pages/services/TuneUpPage"));
const WeatherSealPage = lazy(() => import("./pages/services/WeatherSealPage"));
const RemoteProgrammingPage = lazy(() => import("./pages/services/RemoteProgrammingPage"));
const TrackRepairPage = lazy(() => import("./pages/services/TrackRepairPage"));
const SafetyInspectionPage = lazy(() => import("./pages/services/SafetyInspectionPage"));
const ManualToAutomaticPage = lazy(() => import("./pages/services/ManualToAutomaticPage"));
const NoiseReductionPage = lazy(() => import("./pages/services/NoiseReductionPage"));


// Location pages
const KirklandPage = lazy(() => import("./pages/locations/KirklandLocation"));
const BellevuePage = lazy(() => import("./pages/locations/BellevueLocation"));
const RedmondPage = lazy(() => import("./pages/locations/RedmondLocation"));
const MercerIslandPage = lazy(() => import("./pages/locations/MercerIslandLocation"));
const LynnwoodPage = lazy(() => import("./pages/locations/LynnwoodLocation"));
const BothellPage = lazy(() => import("./pages/locations/BothellLocation"));
const WoodinvillePage = lazy(() => import("./pages/locations/WoodinvilleLocation"));
const KenmorePage = lazy(() => import("./pages/locations/KenmoreLocation"));
const SeattlePage = lazy(() => import("./pages/locations/SeattleLocation"));

// Blog
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const GarageDoorOpensItselfPage = lazy(() => import("./pages/blog/GarageDoorOpensItselfPage"));
const SpringCostFactorsPage = lazy(() => import("./pages/blog/SpringCostFactorsPage"));
const BestOpenerPNWPage = lazy(() => import("./pages/blog/BestOpenerPNWPage"));
const HowLongDoSpringsLastPage = lazy(() => import("./pages/blog/HowLongDoSpringslast"));
const GarageDoorWontOpenColdPage = lazy(() => import("./pages/blog/GarageDoorWontOpenColdWeather"));
const LiftMasterVsChamberlainPage = lazy(() => import("./pages/blog/LiftMasterVsChamberlain"));
const DIYGarageDoorRepairPage = lazy(() => import("./pages/blog/DIYGarageDoorRepairSafe"));
const GarageDoorServiceCallCostPage = lazy(() => import("./pages/blog/GarageDoorServiceCallCost"));
const WhyWontGarageDoorClosePage = lazy(() => import("./pages/blog/WhyWontGarageDoorCloseAllTheWay"));
const AverageCostReplaceGarageDoorPage = lazy(() => import("./pages/blog/AverageCostReplaceGarageDoor"));
const WhyIsGarageDoorNoisyPage = lazy(() => import("./pages/blog/WhyIsGarageDoorSoNoisy"));
const GarageDoorMaintenanceChecklistPage = lazy(() => import("./pages/blog/GarageDoorMaintenanceChecklist"));
const RepairVsReplaceGarageDoorPage = lazy(() => import("./pages/blog/RepairVsReplaceGarageDoor"));
const ChainVsBeltVsJackshaftPage = lazy(() => import("./pages/blog/ChainVsBeltVsJackshaft"));
const HowToProgramGarageDoorRemotePage = lazy(() => import("./pages/blog/HowToProgramGarageDoorRemote"));
const HowLongDoGarageDoorCablesLastPage = lazy(() => import("./pages/blog/HowLongDoGarageDoorCablesLast"));
const WhatCausesGarageDoorOffTrackPage = lazy(() => import("./pages/blog/WhatCausesGarageDoorOffTrack"));
const NylonVsSteelGarageDoorRollersPage = lazy(() => import("./pages/blog/NylonVsSteelGarageDoorRollers"));
const EmergencyRepairPage = lazy(() => import("./pages/EmergencyRepairPage"));

// Service Area
const ServiceAreaPage = lazy(() => import("./pages/ServiceAreaPage"));


// ─────────────────────────────────────────────
// LAYOUT — Navbar + main + Footer
// ─────────────────────────────────────────────

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite pb-24 lg:pb-0">
      <PromoBar />
      <Navbar />
      <div className="flex-1 pt-10 lg:pt-14">
        {children}
      </div>
      <Footer />
      <StickyMobileFooter />
      <StickyQuoteCTA />
    </div>
  );
}

// ─────────────────────────────────────────────
// LOADING FALLBACK — skeleton preserves LCP
// ─────────────────────────────────────────────

function PageLoader() {
  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="animate-pulse">
          <polygon points="18,2 10,17 15,17 13,30 22,14 17,14" fill="#C9A84C" />
        </svg>
        <p className="text-navy/40 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
              {/* ── Core */}
              <Route path="/" element={<Index />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
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

              {/* ── Emergency */}
              <Route path="/emergency-garage-door-repair" element={<EmergencyRepairPage />} />

              {/* ── Service Area */}
              <Route path="/service-area" element={<ServiceAreaPage />} />

              {/* ── Service pages */}
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
              


              {/* ── Location pages */}
              <Route path="/locations/kirkland-wa" element={<KirklandPage />} />
              <Route path="/locations/bellevue-wa" element={<BellevuePage />} />
              <Route path="/locations/redmond-wa" element={<RedmondPage />} />
              <Route path="/locations/mercer-island-wa" element={<MercerIslandPage />} />
              <Route path="/locations/lynnwood-wa" element={<LynnwoodPage />} />
              <Route path="/locations/bothell-wa" element={<BothellPage />} />
              <Route path="/locations/woodinville-wa" element={<WoodinvillePage />} />
              <Route path="/locations/kenmore-wa" element={<KenmorePage />} />
              <Route path="/locations/seattle-wa" element={<SeattlePage />} />

              {/* ── 404 */}
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;