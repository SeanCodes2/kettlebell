import { useState } from "react";

const days = [
  {
    label: "DAY 1",
    name: "Push + Core",
    theme: "Monday",
    color: "#E8612C",
    focus: "Strength & Stability",
    warmup: [
      { name: "Hip Circles", sets: "2×10 each side", note: "Loosen hips" },
      { name: "Cat-Cow Stretch", sets: "2×10 breaths", note: "Spine mobility" },
      { name: "Arm Circles", sets: "2×15", note: "Shoulder prep" },
    ],
    exercises: [
      { name: "KB Deadlift", sets: "3×10", rest: "60s", tip: "Hinge at hips, flat back. Great intro to hip mechanics." },
      { name: "KB Goblet Squat", sets: "3×10", rest: "60s", tip: "Hold bell at chest, squat deep. Ankles, hips, thoracic all benefit." },
      { name: "KB Floor Press", sets: "3×10 each", rest: "60s", tip: "Lie flat, press straight up. Shoulder-friendly pressing pattern." },
      { name: "KB Halo", sets: "3×8 each dir", rest: "45s", tip: "Circle bell around head slowly. Incredible for shoulder mobility." },
      { name: "Dead Bug (no KB)", sets: "3×8 each side", rest: "45s", tip: "Core stability — opposite arm/leg lower slowly." },
    ],
    cooldown: "5 min: Pigeon pose, child's pose, thoracic foam roll",
  },
  {
    label: "DAY 2",
    name: "Pull + Hinge",
    theme: "Wednesday",
    color: "#2C7BE8",
    focus: "Posterior Chain",
    warmup: [
      { name: "World's Greatest Stretch", sets: "5 each side", note: "Full body opener" },
      { name: "Glute Bridges", sets: "2×15", note: "Activate glutes" },
      { name: "Ankle Circles", sets: "2×10 each", note: "Joint prep" },
    ],
    exercises: [
      { name: "KB Single-Leg Deadlift", sets: "3×8 each", rest: "60s", tip: "Balance + hamstring stretch. Start light, go slow." },
      { name: "KB Bent-Over Row", sets: "3×10 each", rest: "60s", tip: "Brace core, pull elbow back. Builds the back you'll feel next morning." },
      { name: "KB Swing (Russian)", sets: "3×15", rest: "75s", tip: "Hip snap drives the bell. NOT a squat. Hinge, hinge, hinge." },
      { name: "KB Suitcase Carry", sets: "3×30 yds", rest: "45s", tip: "Walk tall, don't lean. Lateral core and grip strength." },
      { name: "KB Good Morning", sets: "3×12", rest: "60s", tip: "Bell behind head or at chest. Hamstring and lower back mobility." },
    ],
    cooldown: "5 min: Figure-4 stretch, hamstring stretch on back, hip flexor lunge",
  },
  {
    label: "DAY 3",
    name: "Total Body Flow",
    theme: "Friday",
    color: "#2CC476",
    focus: "Conditioning + Mobility",
    warmup: [
      { name: "Inchworm Walk-Outs", sets: "2×6", note: "Hamstrings + shoulders" },
      { name: "Lateral Leg Swings", sets: "2×10 each", note: "Hip openers" },
      { name: "Thoracic Rotation", sets: "2×10 each", note: "Spine mobility" },
    ],
    exercises: [
      { name: "KB Clean (to rack)", sets: "3×6 each", rest: "60s", tip: "Pull elbow high, let bell flip onto forearm. Skill move — go slow." },
      { name: "KB Goblet Squat + Press", sets: "3×8", rest: "75s", tip: "Combo move: squat down, stand, press overhead. Full body." },
      { name: "KB Windmill", sets: "3×5 each", rest: "60s", tip: "Best mobility exercise in the lineup. Hips, hamstrings, shoulder stability." },
      { name: "Renegade Row (alt hands)", sets: "3×6 each", rest: "75s", tip: "Plank + row. Anti-rotation core training. Slow and deliberate." },
      { name: "KB Turkish Get-Up (partial)", sets: "2×3 each", rest: "90s", tip: "Just the floor-to-elbow-to-hand phases. Build toward full TGU over time." },
    ],
    cooldown: "7 min: Full body flow — down dog, cobra, seated twist, legs-up-wall",
  },
  {
    label: "DAY 4",
    name: "Mobility + Grind",
    theme: "Saturday",
    color: "#C42CA0",
    focus: "Active Recovery & Strength",
    warmup: [
      { name: "90/90 Hip Stretch", sets: "2 min each side", note: "Deep hip opener" },
      { name: "Bear Crawl", sets: "2×20 yds", note: "Shoulder + core activation" },
      { name: "Side-Lying Rotation", sets: "2×10 each", note: "Thoracic mobility" },
    ],
    exercises: [
      { name: "KB Goblet Lateral Lunge", sets: "3×8 each", rest: "60s", tip: "Step wide sideways, sink into hip. Adductor and hip mobility gold." },
      { name: "KB Around-the-World", sets: "3×8 each dir", rest: "45s", tip: "Circle bell around body. Core rotation + grip endurance." },
      { name: "KB Staggered Stance Deadlift", sets: "3×10 each", rest: "60s", tip: "One foot back slightly. Bridge between bilateral and single-leg." },
      { name: "KB Overhead Hold Walk", sets: "3×20 yds each", rest: "60s", tip: "Press up and walk. Shoulder stability and thoracic extension." },
      { name: "Slow Negative KB Goblet Squat", sets: "3×6 (5s down)", rest: "60s", tip: "Control the descent for 5 counts. Builds tendon strength and depth." },
    ],
    cooldown: "10 min: Full yoga-style stretch. Emphasis on hips, spine, ankles.",
  },
];

const progressionNotes = [
  { week: "Weeks 1–2", note: "Focus on form. Lower reps if needed. Rest as long as you need." },
  { week: "Weeks 3–4", note: "Reduce rest by 10s per exercise if movements feel solid." },
  { week: "Weeks 5–6", note: "Add 1 rep per set where possible. Consider adding a 4th set." },
  { week: "Month 2+", note: "Explore a 44–53 lb bell or add double-bell work for select exercises." },
];

export default function KettlebellSchedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEx, setExpandedEx] = useState(null);
  const day = days[activeDay];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0D0D0D",
      minHeight: "100vh",
      color: "#F0EDE8",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "#111",
        borderBottom: "3px solid " + day.color,
        padding: "28px 32px 20px",
        position: "sticky",
        top: 0,
        zIndex: 10,
        transition: "border-color 0.4s",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 11,
              letterSpacing: 4,
              color: day.color,
              fontWeight: "bold",
              transition: "color 0.4s",
            }}>35 LB KETTLEBELL PROGRAM</span>
            <span style={{ color: "#444", fontSize: 11 }}>///</span>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 11,
              letterSpacing: 3,
              color: "#666",
            }}>4 DAYS/WEEK · FULL BODY + MOBILITY</span>
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: "900",
            margin: "6px 0 0",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            fontStyle: "italic",
          }}>
            The Iron<br />
            <span style={{ color: day.color, transition: "color 0.4s" }}>Mobility Method</span>
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 20px 60px" }}>

        {/* Day Tabs */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 28,
        }}>
          {days.map((d, i) => (
            <button
              key={i}
              onClick={() => { setActiveDay(i); setExpandedEx(null); }}
              style={{
                background: activeDay === i ? d.color : "#1A1A1A",
                border: activeDay === i ? "none" : "1px solid #2A2A2A",
                borderRadius: 6,
                padding: "12px 8px",
                cursor: "pointer",
                transition: "all 0.25s",
                color: activeDay === i ? "#000" : "#888",
              }}
            >
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                letterSpacing: 2,
                fontWeight: "bold",
                marginBottom: 4,
              }}>{d.label}</div>
              <div style={{
                fontSize: 12,
                fontWeight: "bold",
                fontStyle: "italic",
                lineHeight: 1.2,
              }}>{d.name}</div>
              <div style={{
                fontSize: 10,
                marginTop: 4,
                opacity: 0.7,
                fontFamily: "'Courier New', monospace",
              }}>{d.theme}</div>
            </button>
          ))}
        </div>

        {/* Focus Banner */}
        <div style={{
          background: "#1A1A1A",
          borderLeft: `4px solid ${day.color}`,
          padding: "12px 18px",
          borderRadius: "0 6px 6px 0",
          marginBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          transition: "border-color 0.4s",
        }}>
          <div>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 3, color: day.color }}>FOCUS</span>
            <div style={{ fontWeight: "bold", fontSize: 18, fontStyle: "italic", marginTop: 2 }}>{day.focus}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 2, color: "#555" }}>DURATION</div>
            <div style={{ fontWeight: "bold", fontSize: 18 }}>45–55 min</div>
          </div>
        </div>

        {/* Warmup */}
        <Section label="WARM-UP" color={day.color}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {day.warmup.map((w, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                background: "#161616",
                borderRadius: 6,
                flexWrap: "wrap",
                gap: 6,
              }}>
                <div>
                  <span style={{ fontWeight: "bold", fontSize: 15 }}>{w.name}</span>
                  <span style={{ color: "#555", marginLeft: 10, fontSize: 13, fontStyle: "italic" }}>{w.note}</span>
                </div>
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 13,
                  color: day.color,
                  background: "#0D0D0D",
                  padding: "3px 10px",
                  borderRadius: 4,
                }}>{w.sets}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Main Workout */}
        <Section label="MAIN WORKOUT" color={day.color}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {day.exercises.map((ex, i) => (
              <div key={i}
                onClick={() => setExpandedEx(expandedEx === i ? null : i)}
                style={{
                  background: expandedEx === i ? "#1E1E1E" : "#161616",
                  borderRadius: 8,
                  border: expandedEx === i ? `1px solid ${day.color}` : "1px solid #222",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 16px",
                  gap: 14,
                  flexWrap: "wrap",
                }}>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 11,
                    color: day.color,
                    minWidth: 24,
                    fontWeight: "bold",
                  }}>0{i + 1}</span>
                  <span style={{ fontWeight: "bold", fontSize: 16, flex: 1 }}>{ex.name}</span>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Tag label={ex.sets} color={day.color} />
                    <Tag label={`Rest ${ex.rest}`} color="#555" />
                  </div>
                  <span style={{ color: "#444", fontSize: 18 }}>{expandedEx === i ? "−" : "+"}</span>
                </div>
                {expandedEx === i && (
                  <div style={{
                    padding: "0 16px 16px 54px",
                    borderTop: "1px solid #222",
                    paddingTop: 12,
                  }}>
                    <span style={{ color: "#AAA", fontSize: 14, fontStyle: "italic", lineHeight: 1.6 }}>
                      💡 {ex.tip}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 12,
            padding: "10px 14px",
            background: "#0D0D0D",
            borderRadius: 6,
            fontFamily: "'Courier New', monospace",
            fontSize: 11,
            color: "#555",
            letterSpacing: 1,
          }}>
            TAP ANY EXERCISE FOR COACHING TIP
          </div>
        </Section>

        {/* Cooldown */}
        <Section label="COOL-DOWN" color={day.color}>
          <div style={{
            padding: "14px 16px",
            background: "#161616",
            borderRadius: 8,
            fontSize: 15,
            lineHeight: 1.7,
            fontStyle: "italic",
            color: "#CCC",
          }}>
            🧘 {day.cooldown}
          </div>
        </Section>

        {/* Weekly Layout */}
        <Section label="WEEKLY STRUCTURE" color={day.color}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
              const active = [0, 2, 4, 5].includes(i);
              const activeIdx = [0, 2, 4, 5].indexOf(i);
              return (
                <div key={i} style={{
                  background: active ? days[activeIdx].color : "#161616",
                  borderRadius: 6,
                  padding: "12px 4px",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 11,
                    fontWeight: "bold",
                    color: active ? "#000" : "#444",
                    marginBottom: 4,
                  }}>{d}</div>
                  {active && (
                    <div style={{ fontSize: 9, color: "#000", fontWeight: "bold" }}>
                      {days[activeIdx].label.split(" ")[1]}
                    </div>
                  )}
                  {!active && (
                    <div style={{ fontSize: 9, color: "#333" }}>REST</div>
                  )}
                </div>
              );
            })}
          </div>
          <p style={{ color: "#666", fontSize: 13, marginTop: 14, fontStyle: "italic", lineHeight: 1.6 }}>
            Rest days are active — walk, stretch, go fishing. Don't just sit. Movement on off days accelerates recovery and mobility gains.
          </p>
        </Section>

        {/* Progression */}
        <Section label="PROGRESSION PLAN" color={day.color}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {progressionNotes.map((p, i) => (
              <div key={i} style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                padding: "12px 14px",
                background: "#161616",
                borderRadius: 6,
              }}>
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  color: day.color,
                  minWidth: 80,
                  paddingTop: 2,
                  transition: "color 0.4s",
                }}>{p.week}</span>
                <span style={{ fontSize: 14, color: "#BBB", lineHeight: 1.5 }}>{p.note}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer note */}
        <div style={{
          marginTop: 32,
          padding: "16px 18px",
          background: "#111",
          borderRadius: 8,
          border: "1px solid #222",
          fontSize: 13,
          color: "#555",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          ⚠️ At 40, recovery is the training. Sleep, hydrate, and don't skip the cooldown. If something hurts (not burns), stop and rest. Form always beats load.
        </div>

      </div>
    </div>
  );
}

function Section({ label, color, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 14,
      }}>
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          letterSpacing: 3,
          color: color,
          transition: "color 0.4s",
        }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: "#222" }} />
      </div>
      {children}
    </div>
  );
}

function Tag({ label, color }) {
  return (
    <span style={{
      fontFamily: "'Courier New', monospace",
      fontSize: 12,
      color: color === "#555" ? "#888" : color,
      background: "#0D0D0D",
      border: `1px solid ${color === "#555" ? "#333" : color + "44"}`,
      padding: "3px 10px",
      borderRadius: 4,
      whiteSpace: "nowrap",
    }}>{label}</span>
  );
}
