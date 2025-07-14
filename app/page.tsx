"use client"
import React from "react"
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { ServiceCategories } from "./components/service-categories"
import { BeforeAfterGallery } from "./components/before-after-gallery"
import { SchedulingSystem } from "./components/scheduling-system"
import { CostEstimator } from "./components/cost-estimator"
import { CustomerReviews } from "./components/customer-reviews"
import { EmergencyServices } from "./components/emergency-services"
import { MaintenanceTips } from "./components/maintenance-tips"
import { ServiceAreaMap } from "./components/service-area-map"
import { WarrantyInfo } from "./components/warranty-info"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8">
        <HeroSection />
        <ServiceCategories />
        <BeforeAfterGallery />
        <SchedulingSystem />
        <CostEstimator />
        <CustomerReviews />
        <EmergencyServices />
        <MaintenanceTips />
        <ServiceAreaMap />
        <WarrantyInfo />
      </main>
      <Footer />
    </div>
  )
}
