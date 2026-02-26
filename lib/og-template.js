import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Shared OG image renderer for all pages.
 * Renders a 1200x630 dark image with Bookbag branding, title, badge, and verdict dots.
 */
export function renderOGImage({ title, badge, description }) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#020617",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: Badge */}
        {badge && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              fontSize: "14px",
              color: "#a5b4fc",
            }}
          >
            {badge}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? "48px" : "56px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: "800px",
              marginBottom: "32px",
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + "..."
              : description}
          </div>
        )}

        {/* Verdict dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(74, 222, 128, 0.2)",
              backgroundColor: "rgba(74, 222, 128, 0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
              }}
            />
            <span style={{ fontSize: "13px", color: "#bbf7d0" }}>
              safe_to_deploy
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(251, 146, 60, 0.2)",
              backgroundColor: "rgba(251, 146, 60, 0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#fb923c",
              }}
            />
            <span style={{ fontSize: "13px", color: "#fed7aa" }}>
              needs_fix
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(248, 113, 113, 0.2)",
              backgroundColor: "rgba(248, 113, 113, 0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#f87171",
              }}
            />
            <span style={{ fontSize: "13px", color: "#fecaca" }}>blocked</span>
          </div>

          {/* Bookbag branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            bookbag.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
