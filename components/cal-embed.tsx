"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Cal?: any
  }
}

export function CalEmbed() {
  useEffect(() => {
    const initCal = () => {
      if (window.Cal) {
        window.Cal("init", "15min", { origin: "https://app.cal.com" })

        window.Cal.ns["15min"]("inline", {
          elementOrSelector: "#my-cal-inline-15min",
          config: { layout: "month_view" },
          calLink: "bruno-pedro-zb4myr/15min",
        })

        window.Cal.ns["15min"]("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#434fd8" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        })
      }
    }

    if (!window.Cal) {
      const script = document.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      script.onload = () => {
        setTimeout(initCal, 100)
      }
      document.head.appendChild(script)
    } else {
      initCal()
    }

    return () => {
      const container = document.getElementById("my-cal-inline-15min")
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return (
    <div
      id="my-cal-inline-15min"
      style={{
        width: "100%",
        height: "600px",
        overflow: "auto",
      }}
    />
  )
}
