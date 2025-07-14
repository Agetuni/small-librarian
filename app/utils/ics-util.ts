import { createEvent as createIcsEvent } from "ics"

// Utility to download ICS event file on browser
export function createEvent({ title, description, location, start, time }: {
  title: string,
  description: string,
  location: string,
  start: Date,
  time: string,
}) {
  // Parse slot time to [hour, minute]
  let [h, mPart] = time.split(":")
  let hour = Number(h)
  if (time.includes("PM") && !time.startsWith("12")) {
    hour += 12
  }
  const minute = 0
  const dtStart = [
    start.getFullYear(),
    start.getMonth() + 1,
    start.getDate(),
    hour,
    minute
  ]
  const { error, value } = createIcsEvent({
    start: dtStart as [number, number, number, number, number],
    title,
    description,
    location,
    duration: { hours: 1 },
  })
  if (!error && value) {
    const blob = new Blob([value], { type: "text/calendar" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "service-appointment.ics"
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}
