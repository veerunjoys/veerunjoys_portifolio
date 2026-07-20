import { ImageResponse } from "next/og";
import { config } from "@/data/config";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #08080c 0%, #16161f 100%)",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#9ca3af" }}>
            Hi, I am
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              marginTop: 8,
            }}
          >
            Veerabrahmam
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            Sangani
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#a1a1aa",
              marginTop: 22,
            }}
          >
            Full Stack Developer
          </div>
        </div>
        <img
          src={`${config.site}/assets/keyboard-graphic.png`}
          width={560}
          height={483}
          style={{ display: "flex" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
