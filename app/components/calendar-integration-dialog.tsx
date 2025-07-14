"use client"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { createEvent } from "../utils/ics-util"

export function CalendarIntegrationDialog({ open, onOpenChange, serviceDate, serviceSlot }: {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceDate: Date | undefined
  serviceSlot: string
}) {
  const [downloading, setDownloading] = useState(false)

  function handleDownload() {
    if (!serviceDate || !serviceSlot) return
    setDownloading(true)
    // Preparation of ICS event file for download
    const event = {
      title: "Home Service Appointment",
      description: `Your scheduled home service: ${serviceSlot}`,
      location: "Your Home Address",
      start: serviceDate,
      time: serviceSlot,
    }
    createEvent(event)
    setTimeout(() => setDownloading(false), 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>Add to Calendar</DialogTitle>
        </DialogHeader>
        <div className="p-6 text-slate-700">
          Would you like to add your upcoming service appointment to your calendar?
        </div>
        <DialogFooter className="p-4 pt-0 flex gap-3 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleDownload} disabled={downloading || !serviceDate}>
            {downloading ? "Preparing..." : "Download .ics"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
