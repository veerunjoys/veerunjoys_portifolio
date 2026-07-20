import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #08080c 0%, #16161f 100%)",
          padding: "90px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#9ca3af" }}>
          Hi, I am
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            marginTop: 10,
          }}
        >
          Veerabrahmam
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
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
            fontSize: 34,
            color: "#a1a1aa",
            marginTop: 26,
            marginBottom: 44,
          }}
        >
          Full Stack Developer
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {["React", "Next.js", "Node.js", "FastAPI", "AWS"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid #3f3f46",
                color: "#e4e4e7",
                fontSize: 24,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
