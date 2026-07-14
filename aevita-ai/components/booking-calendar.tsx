"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/lib/site"

export function BookingCalendar() {
    // Use today's date or a future date as default
    const today = new Date();
    const [date, setDate] = React.useState<Date | undefined>(today)
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

    // Generate time slots (9:00 AM to 5:00 PM in 15 min increments)
    const timeSlots = Array.from({ length: 33 }, (_, i) => {
        const totalMinutes = i * 15
        const hour = Math.floor(totalMinutes / 60) + 9
        const minute = totalMinutes % 60
        const period = hour >= 12 ? 'PM' : 'AM'
        const displayHour = hour > 12 ? hour - 12 : hour
        return `${displayHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`
    })

    // Mock some booked dates (next 3 days from now + 5 days)
    const bookedDates = Array.from(
        { length: 3 },
        (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + 5 + i);
            return d;
        }
    )

    const handleBook = () => {
        if (date && selectedTime) {
            // In a real app, this would open a modal or redirect to a form
            // utilizing the cal.com API or passing these params to a contact form
            const subject = `AI Strategy Call Request: ${date.toLocaleDateString()} at ${selectedTime}`;
            const body = `I would like to book an AI strategy call for ${date.toLocaleDateString()} at ${selectedTime}.`;
            window.location.href = `mailto:${site.emails.primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    };

    return (
        <Card className="gap-0 p-0 border-none shadow-none bg-transparent">
            <CardContent className="relative p-0 flex flex-col md:flex-row gap-6">
                <div className="p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={date}
                        disabled={(date) => date < new Date() || bookedDates.some(d => d.toDateString() === date.toDateString())}
                        showOutsideDays={false}
                        modifiers={{
                            booked: bookedDates,
                        }}
                        modifiersClassNames={{
                            booked: "[&>button]:line-through opacity-50",
                        }}
                        className="bg-[rgb(var(--background-secondary))] rounded-xl border border-[rgb(var(--border))] p-4 w-full h-fit shadow-lg"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <h3 className="text-lg font-medium">Available Times</h3>
                    <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {timeSlots.map((time) => (
                            <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                onClick={() => setSelectedTime(time)}
                                className="w-full text-xs h-9"
                            >
                                {time}
                            </Button>
                        ))}
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-[rgb(var(--background-secondary))] border border-[rgb(var(--border))] text-sm">
                        {date && selectedTime ? (
                            <div className="flex flex-col gap-1">
                                <span className="text-[rgb(var(--foreground-muted))]">Selected Slot:</span>
                                <span className="font-semibold text-primary">
                                    {date.toLocaleDateString("en-US", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                    })}
                                    {" at "}
                                    {selectedTime}
                                </span>
                            </div>
                        ) : (
                            <span className="text-[rgb(var(--foreground-muted))]">Select a date and time to continue.</span>
                        )}
                    </div>

                    <Button
                        disabled={!date || !selectedTime}
                        className="w-full"
                        onClick={handleBook}
                    >
                        Confirm Booking
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
