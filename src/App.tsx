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
const BlogPost = lazy(() => import("./pages/BlogPost"));
const GarageDoorOpensItselfPage = lazy(() => import("./pages/blog/GarageDoorOpensItselfPage"));
const SpringCostFactorsPage = lazy(() => import("./pages/blog/SpringCostFactorsPage"));
const BestOpenerPNWPage = lazy(() => import("./pages/blog/BestOpenerPNWPage"));

// Legacy dynamic routes
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AreaPage = lazy(() => import("./pages/AreaPage"));

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
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* ── Service pages */}
              <Route path="/services/spring-replacement" element={<SpringReplacementPage />} />
              <Route path="/services/opener-repair" element={<OpenerRepairPage />} />
              <Route path="/services/off-track-repair" element={<OffTrackRepairPage />} />
              <Route path="/services/cable-replacement" element={<CableReplacementPage />} />
              <Route path="/services/panel-replacement" element={<PanelReplacementPage />} />
              <Route path="/services/new-installation" element={<NewInstallationPage />} />
              
              <Route path="/services/:slug" element={<ServicePage />} />

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
              <Route path="/areas/:slug" element={<AreaPage />} />

              {/* ── 404 */}
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;