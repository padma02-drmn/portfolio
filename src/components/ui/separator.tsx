import * as React from "react"
import { cn } from "@/lib/utils"

function Separator({
  className,
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return (
    <div
      role="separator"
      aria-orientation={props["aria-orientation"] ?? "horizontal"}
      className={cn(
        "bg-border shrink-0",
        props["aria-orientation"] === "vertical" ? "w-px self-stretch" : "h-px w-full",
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
