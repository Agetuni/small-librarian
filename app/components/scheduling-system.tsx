"use client"
import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { CalendarIntegrationDialog } from "./calendar-integration-dialog"

const timeSlots = [
  "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"
]

export function SchedulingSystem() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [slot, setSlot] = useState<string>("")
  const [open, setOpen] = useState(false)
  const [scheduled, setScheduled] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)

  const canBook = Boolean(date && slot)

  function handleBook() {
    setScheduled(true)
    setTimeout(() => {
      setOpen(false)
      setCalendarOpen(true)
    }, 1800)
  }

  return (
    <section id="booking" className="py-12 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900">
        Schedule a Service
      </h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => {setScheduled(false); setOpen(true)}} className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow">
            Book Now
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Select Date & Time</DialogTitle>
          </DialogHeader>
          {!scheduled ? (
            <>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                fromDate={new Date()}
                className="rounded-xl border mb-4"
              />
              <div className="grid grid-cols-2 gap-2 mb-4">
                {timeSlots.map((t) => (
                  <Button key={t}
                    variant={slot === t ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSlot(t)}
                  >{t}</Button>
                ))}
              </div>
              <DialogFooter>
                <Button
                  disabled={!canBook}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold"
                  onClick={handleBook}
                >Confirm Appointment</Button>
              </DialogFooter>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6">
              <CheckCircle className="text-green-600" size={42} />
              <div className="font-medium text-lg text-blue-800">Booking Confirmed!</div>
              <div className="text-slate-600 text-sm text-center">
                {date?.toLocaleDateString()} at {slot}<br />A confirmation email will be sent shortly.
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <CalendarIntegrationDialog
        open={calendarOpen}
        onOpenChange={setCalendarOpen}
        serviceDate={date}
        serviceSlot={slot}
      />
    </section>
  )
}
