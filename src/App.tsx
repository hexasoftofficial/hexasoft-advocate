/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeatureOverview } from './components/FeatureOverview';
import { ProductDashboardSection } from './components/ProductDashboardSection';
import { ModuleDeepDives } from './components/ModuleDeepDives';
import { HowItWorks } from './components/HowItWorks';
import { IndiaFocusedSection } from './components/IndiaFocusedSection';
import { PricingSection } from './components/PricingSection';
import { DemoSection } from './components/DemoSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { LoginModal } from './components/LoginModal';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string>('Professional');
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenDemo = (planName?: string) => {
    if (planName) {
      setSelectedPlanForDemo(planName);
    } else {
      setSelectedPlanForDemo('Professional');
    }
    setDemoModalOpen(true);
  };

  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenDemo={() => handleOpenDemo()}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with SaaS Dashboard & Floating Cards */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Problem Section: 6 Problem Cards & Transition Banner */}
        <ProblemSection onOpenDemo={() => handleOpenDemo()} />

        {/* 3. Feature Overview: 16 Core Modules Grid */}
        <FeatureOverview onOpenDemo={() => handleOpenDemo()} />

        {/* 4. Product Dashboard Deep Dive Cockpit */}
        <ProductDashboardSection
          onOpenDemo={() => handleOpenDemo()}
          onScrollToHowItWorks={handleScrollToHowItWorks}
        />

        {/* 5. In-Depth Module Showcases: Client, Inquiry, Case, Court & Hearing, Docs, Billing, etc. */}
        <ModuleDeepDives onOpenDemo={() => handleOpenDemo()} />

        {/* 6. How It Works: 4-Step Process */}
        <HowItWorks onOpenDemo={() => handleOpenDemo()} />

        {/* 7. India-Focused Practice Section */}
        <IndiaFocusedSection onOpenDemo={() => handleOpenDemo()} />

        {/* 8. Pricing Section: Basic, Professional, Premium + Matrix */}
        <PricingSection onOpenDemo={handleOpenDemo} />

        {/* 9. Demo Section: Call to action banner */}
        <DemoSection onOpenDemo={() => handleOpenDemo()} />

        {/* 10. Contact Section with Phone, WhatsApp & Validated Form */}
        <ContactSection />

        {/* 11. FAQ Section: 11 Professional Q&As */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={() => handleOpenDemo()} />

      {/* Floating WhatsApp and Call Action */}
      <FloatingContactBar />

      {/* Modals */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        selectedPlan={selectedPlanForDemo}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenDemo={() => handleOpenDemo()}
      />
    </div>
  );
}
