@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  color-scheme: dark;
  font-family: 'Inter', system-ui, sans-serif;
  background: #070914;
  color: #f7f8ff;
  font-synthesis: none;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 18% 18%, rgba(33, 231, 255, 0.2), transparent 28rem),
    radial-gradient(circle at 82% 22%, rgba(255, 79, 216, 0.16), transparent 24rem),
    linear-gradient(135deg, #070914 0%, #101426 46%, #05070f 100%);
}

button {
  font: inherit;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  padding: 32px clamp(18px, 4vw, 56px);
  overflow: hidden;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image: linear-gradient(115deg, transparent 0 48%, rgba(255, 255, 255, 0.7) 50%, transparent 52%);
  background-size: 9px 9px;
  mask-image: radial-gradient(circle, black, transparent 76%);
}

.ambient {
  position: fixed;
  width: 36vw;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(64px);
  opacity: 0.36;
  pointer-events: none;
  animation: drift 12s ease-in-out infinite alternate;
}

.ambient-a {
  left: -12vw;
  top: 16vh;
  background: #21e7ff;
}

.ambient-b {
  right: -14vw;
  bottom: 4vh;
  background: #ff4fd8;
  animation-delay: -4s;
}

.topbar {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  max-width: 1180px;
  margin: 0 auto;
}

.eyebrow {
  display: block;
  margin-bottom: 8px;
  color: #8eeeff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin: 0;
}

h1,
h2 {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  letter-spacing: 0;
}

h1 {
  max-width: 760px;
  font-size: clamp(2.4rem, 7vw, 6.7rem);
  line-height: 0.88;
}

.reset-button,
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: #f7f8ff;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  cursor: pointer;
  transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
}

.reset-button {
  padding: 12px 15px;
}

.reset-button:hover,
.back-button:hover {
  transform: translateY(-2px);
  border-color: rgba(33, 231, 255, 0.48);
  background: rgba(255, 255, 255, 0.13);
}

.stage {
  position: relative;
  z-index: 2;
  min-height: max(1080px, calc(100vh - 170px));
  display: grid;
  place-items: center;
  padding: 24px 0 76px;
}

.stage-transform {
  position: relative;
  width: min(96vw, 1280px);
  aspect-ratio: 1;
  transform: translate(var(--zoom-x, 0), var(--zoom-y, 0)) scale(1);
  transition: transform 900ms cubic-bezier(0.17, 0.84, 0.26, 1), opacity 500ms ease;
}

.is-zoomed .stage-transform {
  transform: translate(var(--zoom-x), var(--zoom-y)) scale(1.18);
}

.core-card {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 210px;
  aspect-ratio: 1;
  padding: 26px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
  box-shadow: 0 0 72px rgba(33, 231, 255, 0.22), inset 0 0 34px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  transform: translate(-50%, -50%);
}

.core-card p,
.detail-hero p {
  color: #96a4bf;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.core-card h2 {
  font-size: 2.18rem;
  line-height: 0.95;
}

.core-card small {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #bbd8e6;
  font-size: 0.8rem;
}

.core-pulse {
  position: absolute;
  inset: -20px;
  border: 1px solid rgba(33, 231, 255, 0.26);
  border-radius: 50%;
  animation: pulse 2.8s ease-out infinite;
}

.line-layer,
.node-layer {
  position: absolute;
  inset: 0;
}

.mind-line {
  position: absolute;
  left: calc(50% + var(--line-start-x, 0px));
  top: calc(50% + var(--line-start-y, 0px));
  width: var(--line-length);
  height: 2px;
  transform-origin: left center;
  transform: rotate(var(--line-angle));
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), var(--topic-color), rgba(255, 255, 255, 0));
  opacity: 0.5;
  overflow: hidden;
  transition: opacity 360ms ease, filter 360ms ease;
}

.mind-line.is-subgroup {
  height: 1px;
  opacity: 0.42;
  background: linear-gradient(90deg, rgba(142, 238, 255, 0.08), var(--topic-color), rgba(142, 238, 255, 0));
}

.mind-line::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 44%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95), transparent);
  animation: lineFlow 2.6s linear infinite;
}

.mind-line.is-active {
  opacity: 1;
  filter: drop-shadow(0 0 11px var(--topic-color));
}

.mind-line[style*='fff36d'],
.mind-line.is-active[style*='fff36d'] {
  filter: drop-shadow(0 0 12px rgba(255, 243, 109, 0.7));
}

.mind-line[style*='8eeeff'],
.mind-line.is-active[style*='8eeeff'] {
  filter: drop-shadow(0 0 12px rgba(142, 238, 255, 0.72));
}

.mind-line[style*='ff3b3b'],
.mind-line.is-active[style*='ff3b3b'] {
  filter: drop-shadow(0 0 12px rgba(255, 59, 59, 0.78));
}

.topic-node {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 4;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  width: 258px;
  height: 96px;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: #f7f8ff;
  text-align: left;
  background: linear-gradient(145deg, rgba(18, 25, 46, 0.82), rgba(255, 255, 255, 0.07));
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35), 0 0 0 rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  cursor: pointer;
  transform: translate(calc(var(--anchor-x) + var(--x)), calc(var(--anchor-y) + var(--y)));
  transition: transform 360ms ease, opacity 280ms ease, border-color 260ms ease, box-shadow 260ms ease;
}

.topic-node.is-mine {
  border-color: color-mix(in srgb, var(--topic-color), white 22%);
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 86%), rgba(255, 255, 255, 0.08)),
    rgba(18, 25, 46, 0.86);
}

.topic-node.is-subgroup {
  width: 250px;
  height: 90px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 90%), rgba(255, 255, 255, 0.075)),
    rgba(18, 25, 46, 0.88);
}

.topic-node:hover,
.topic-node.is-active {
  border-color: color-mix(in srgb, var(--topic-color), white 26%);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.45), 0 0 34px color-mix(in srgb, var(--topic-color), transparent 35%);
  transform: translate(calc(var(--anchor-x) + var(--x)), calc(var(--anchor-y) + var(--y))) scale(1.06);
}

.topic-node.is-muted {
  opacity: 0.14;
  pointer-events: none;
}

.node-icon {
  display: grid;
  place-items: center;
  width: 48px;
  aspect-ratio: 1;
  border-radius: 8px;
  color: var(--topic-color);
  background: color-mix(in srgb, var(--topic-color), transparent 84%);
  box-shadow: inset 0 0 18px color-mix(in srgb, var(--topic-color), transparent 72%);
}

.node-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.node-copy em,
.owner-badge {
  width: fit-content;
  padding: 4px 7px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 18%);
  border-radius: 7px;
  color: #07101b;
  background: var(--topic-color);
  font-size: 0.62rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.node-copy span {
  display: -webkit-box;
  overflow: hidden;
  color: #9aa9c4;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.node-copy strong {
  display: -webkit-box;
  overflow-wrap: normal;
  overflow: hidden;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.48rem;
  line-height: 1.08;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.node-orbit {
  position: absolute;
  inset: -9px;
  border: 1px solid color-mix(in srgb, var(--topic-color), transparent 72%);
  border-radius: 10px;
  opacity: 0;
  transition: opacity 240ms ease;
}

.topic-node:hover .node-orbit,
.topic-node.is-active .node-orbit {
  opacity: 1;
}

.detail-panel {
  position: fixed;
  left: 50%;
  bottom: clamp(18px, 4vh, 40px);
  z-index: 7;
  width: min(1180px, calc(100vw - 32px));
  padding: clamp(18px, 3vw, 28px);
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background: linear-gradient(145deg, rgba(9, 12, 24, 0.82), rgba(255, 255, 255, 0.08));
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.52), 0 0 46px color-mix(in srgb, var(--topic-color), transparent 72%);
  backdrop-filter: blur(24px);
  transform: translateX(-50%);
  animation: panelIn 620ms cubic-bezier(0.17, 0.84, 0.26, 1) both;
}

.back-button {
  padding: 9px 12px;
  margin-bottom: 20px;
}

.detail-hero {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
}

.owner-badge {
  display: inline-block;
  margin-bottom: 9px;
}

.detail-icon {
  display: grid;
  place-items: center;
  width: 76px;
  aspect-ratio: 1;
  border-radius: 8px;
  color: var(--topic-color);
  background: color-mix(in srgb, var(--topic-color), transparent 84%);
}

.detail-hero h2 {
  font-size: clamp(2rem, 6vw, 4.6rem);
  line-height: 0.9;
}

.detail-panel:has(.build-layout) .detail-hero h2,
.detail-panel:has(.maintenance-wrap) .detail-hero h2,
.detail-panel:has(.driver-layout) .detail-hero h2,
.detail-panel:has(.language-layout) .detail-hero h2,
.detail-panel:has(.dpi-layout) .detail-hero h2,
.detail-panel:has(.connection-layout) .detail-hero h2,
.detail-panel:has(.final-layout) .detail-hero h2,
.detail-panel:has(.config-layout) .detail-hero h2,
.detail-panel:has(.wireless-layout) .detail-hero h2,
.detail-panel:has(.mic-layout) .detail-hero h2,
.detail-panel:has(.printer-compare-layout) .detail-hero h2,
.detail-panel:has(.printer-decision-layout) .detail-hero h2,
.detail-panel:has(.ink-layout) .detail-hero h2,
.detail-panel:has(.compare-layout) .detail-hero h2,
.detail-panel:has(.impact-layout) .detail-hero h2,
.detail-panel:has(.recycle-layout) .detail-hero h2 {
  font-size: clamp(1.8rem, 4.4vw, 3.35rem);
  line-height: 0.98;
}

.detail-panel:has(.build-layout) .detail-summary,
.detail-panel:has(.maintenance-wrap) .detail-summary,
.detail-panel:has(.driver-layout) .detail-summary,
.detail-panel:has(.language-layout) .detail-summary,
.detail-panel:has(.dpi-layout) .detail-summary,
.detail-panel:has(.connection-layout) .detail-summary,
.detail-panel:has(.final-layout) .detail-summary,
.detail-panel:has(.config-layout) .detail-summary,
.detail-panel:has(.wireless-layout) .detail-summary,
.detail-panel:has(.mic-layout) .detail-summary,
.detail-panel:has(.printer-compare-layout) .detail-summary,
.detail-panel:has(.printer-decision-layout) .detail-summary,
.detail-panel:has(.ink-layout) .detail-summary,
.detail-panel:has(.compare-layout) .detail-summary,
.detail-panel:has(.impact-layout) .detail-summary,
.detail-panel:has(.recycle-layout) .detail-summary {
  margin: 14px 0 18px;
  font-size: clamp(1rem, 1.6vw, 1.22rem);
  line-height: 1.42;
}

.detail-metric {
  padding: 10px 13px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  color: var(--topic-color);
  font-weight: 800;
  background: rgba(255, 255, 255, 0.08);
  white-space: nowrap;
}

.detail-summary {
  max-width: 760px;
  margin: 20px 0 22px;
  color: #d8e0ef;
  font-size: clamp(1.18rem, 2vw, 1.48rem);
  line-height: 1.55;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
}

.detail-grid.is-two-by-two {
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  width: min(100%, 760px);
  margin: 0 auto;
}

.detail-grid.is-two-by-two .fact-card {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 110px;
  text-align: center;
}

.detail-grid.is-two-by-two .fact-card span {
  margin-bottom: 6px;
}

.detail-grid.is-two-by-two .fact-card p {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.16rem;
  font-weight: 700;
}

.fact-card.is-clickable {
  cursor: pointer;
  transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
}

.fact-card.is-clickable:hover,
.fact-card.is-clickable:focus-visible {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--topic-color), white 24%);
  background: color-mix(in srgb, var(--topic-color), transparent 88%);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.28);
  outline: none;
}

.fact-card-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  color: var(--topic-color);
  opacity: 0.82;
  transform: translateY(-50%);
}

.drilldown-list {
  display: grid;
  gap: 12px;
}

.drilldown-card {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding: 17px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.drilldown-card > span {
  color: var(--topic-color);
  font-weight: 900;
}

.drilldown-card h3 {
  margin: 0 0 6px;
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.25rem;
  line-height: 1.05;
}

.drilldown-card p {
  color: #d8e0ef;
  line-height: 1.45;
}

.timeline-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
  gap: 18px;
  align-items: stretch;
}

.timeline-flow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 34px 14px;
  position: relative;
}

.timeline-step {
  position: relative;
  min-height: 168px;
  padding: 16px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 18%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 88%), rgba(255, 255, 255, 0.07)),
    rgba(9, 12, 24, 0.7);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.timeline-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -20px;
  top: 50%;
  color: #fff36d;
  font-size: 1.55rem;
  font-weight: 900;
  text-shadow: 0 0 16px rgba(255, 243, 109, 0.9);
  transform: translateY(-50%);
}

.timeline-step span {
  display: inline-block;
  margin-bottom: 12px;
  color: #fff36d;
  font-weight: 900;
}

.timeline-step h3 {
  margin: 0 0 8px;
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.12rem;
  line-height: 1.08;
}

.timeline-step p {
  color: #d8e0ef;
  font-size: 0.98rem;
  line-height: 1.42;
}

.ink-transport-card {
  display: grid;
  align-content: start;
  gap: 12px;
  min-height: 100%;
  margin: 0;
  padding: 16px;
  border: 1px solid rgba(255, 243, 109, 0.34);
  border-radius: 8px;
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 243, 109, 0.13), transparent 30%),
    linear-gradient(145deg, rgba(255, 243, 109, 0.08), rgba(255, 255, 255, 0.05)),
    rgba(9, 12, 24, 0.72);
  box-shadow: 0 0 32px rgba(255, 243, 109, 0.14), inset 0 0 28px rgba(255, 255, 255, 0.04);
  animation: cardIn 620ms ease both;
  animation-delay: 180ms;
}

.ink-transport-svg {
  width: 100%;
  min-height: 310px;
  overflow: visible;
}

.ink-transport-card figcaption {
  color: #fff4a5;
  font-size: 0.98rem;
  font-weight: 850;
  line-height: 1.28;
}

.transport-zone {
  fill: rgba(255, 207, 90, 0.08);
  stroke: rgba(255, 207, 90, 0.58);
  stroke-dasharray: 5 5;
}

.transport-zone.is-control {
  fill: rgba(142, 238, 255, 0.06);
  stroke: rgba(142, 238, 255, 0.32);
}

.transport-zone-label,
.transport-small-label,
.transport-part-label {
  fill: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 850;
}

.transport-zone-label {
  font-size: 16px;
  fill: #ffcf5a;
}

.transport-zone-label.is-control-label {
  fill: #8eeeff;
}

.transport-small-label {
  font-size: 12px;
  text-anchor: middle;
}

.transport-part-label {
  font-size: 13px;
  paint-order: stroke;
  stroke: rgba(9, 12, 24, 0.88);
  stroke-width: 5px;
}

.transport-tube,
.transport-return {
  fill: none;
  stroke: url(#tubeGradient);
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: url(#transportGlow);
}

.transport-return {
  stroke: rgba(142, 238, 255, 0.78);
  stroke-width: 8;
}

.transport-tank,
.transport-chip,
.transport-piezo,
.transport-nozzle {
  fill: rgba(255, 255, 255, 0.12);
  stroke: rgba(255, 243, 109, 0.62);
}

.transport-tank.is-side {
  fill: rgba(255, 207, 90, 0.14);
}

.transport-chip {
  fill: rgba(179, 142, 255, 0.28);
  stroke: rgba(179, 142, 255, 0.65);
}

.transport-piezo {
  fill: rgba(255, 255, 255, 0.16);
}

.transport-nozzle {
  fill: rgba(255, 94, 150, 0.2);
  stroke: rgba(255, 94, 150, 0.72);
}

.transport-symbol,
.transport-number-text {
  fill: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 900;
  text-anchor: middle;
}

.transport-symbol {
  font-size: 20px;
}

.transport-electrode,
.transport-ground,
.transport-arrow {
  fill: none;
  stroke: #ffcf5a;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.transport-ground {
  stroke-width: 2;
  opacity: 0.72;
}

.transport-arrow {
  stroke: rgba(255, 255, 255, 0.82);
  stroke-width: 3;
}

.transport-drop {
  fill: #8eeeff;
  filter: drop-shadow(0 0 8px rgba(142, 238, 255, 0.78));
}

.transport-drop.is-soft {
  opacity: 0.72;
}

.transport-number {
  fill: #ff9f1c;
  stroke: rgba(255, 255, 255, 0.42);
  stroke-width: 2;
  transition: transform 220ms ease, filter 220ms ease;
  transform-box: fill-box;
  transform-origin: center;
}

.transport-part:nth-of-type(odd) .transport-number {
  fill: #55e66b;
}

.transport-part:hover .transport-number,
.transport-part:focus .transport-number {
  transform: scale(1.18);
  filter: drop-shadow(0 0 12px rgba(255, 243, 109, 0.9));
}

.transport-part:hover .transport-part-label,
.transport-part:focus .transport-part-label {
  fill: #fff36d;
}

.build-layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.82fr) minmax(0, 1.18fr);
  gap: 20px;
  align-items: start;
}

.build-images {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.build-image-card {
  position: relative;
  min-height: 150px;
  margin: 0;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 16%);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: inset 0 0 22px rgba(255, 255, 255, 0.05);
}

.build-image-card img {
  display: block;
  width: 100%;
  height: 112px;
  object-fit: cover;
  filter: saturate(1.08) contrast(1.05);
}

.build-image-card:first-child {
  grid-column: 1 / -1;
}

.build-image-card:first-child img {
  height: 170px;
}

.build-image-card figcaption {
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 7px;
  color: #f7f8ff;
  background: rgba(7, 9, 20, 0.76);
  backdrop-filter: blur(12px);
  font-size: 0.74rem;
  font-weight: 900;
  text-transform: uppercase;
}

.build-content {
  display: grid;
  gap: 18px;
}

.section-title {
  margin: 0 0 10px;
  color: var(--topic-color);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
}

.build-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.build-group-card {
  min-height: 132px;
  padding: 13px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 90%), rgba(255, 255, 255, 0.07)),
    rgba(9, 12, 24, 0.74);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.build-group-card span {
  color: var(--topic-color);
  font-weight: 900;
}

.build-group-card h4 {
  margin: 6px 0 8px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.13rem;
  line-height: 1;
}

.build-group-card ul {
  display: grid;
  gap: 5px;
  margin: 0;
  padding-left: 17px;
  color: #d8e0ef;
  font-size: 0.91rem;
  line-height: 1.25;
}

.component-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.component-row {
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.065);
}

.component-row strong {
  display: block;
  margin-bottom: 5px;
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1rem;
}

.component-row p {
  color: #d8e0ef;
  font-size: 0.9rem;
  line-height: 1.34;
}

.note-box {
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 16%);
  border-radius: 8px;
  color: #ecfaff;
  background: color-mix(in srgb, var(--topic-color), transparent 88%);
  font-weight: 700;
  line-height: 1.35;
}

.maintenance-wrap {
  display: grid;
  gap: 16px;
}

.maintenance-table {
  display: grid;
  grid-template-columns: 1fr 1.05fr 1.28fr;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.055);
}

.maintenance-head {
  padding: 14px 16px;
  color: #07101b;
  background: var(--topic-color);
  font-size: 0.85rem;
  font-weight: 900;
  text-transform: uppercase;
}

.maintenance-row {
  display: contents;
}

.maintenance-row > * {
  min-height: 58px;
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  color: #d8e0ef;
  font-size: 1rem;
  line-height: 1.3;
}

.maintenance-row strong {
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.05rem;
}

.driver-layout {
  display: grid;
  grid-template-columns: minmax(230px, 0.68fr) minmax(0, 1.32fr);
  gap: 18px;
  align-items: stretch;
}

.driver-visual {
  display: grid;
  gap: 20px;
  padding: 18px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 15%);
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 12%, color-mix(in srgb, var(--topic-color), transparent 76%), transparent 42%),
    rgba(255, 255, 255, 0.055);
}

.driver-flow-step {
  position: relative;
  display: grid;
  min-height: 82px;
  align-content: center;
  gap: 6px;
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background: rgba(9, 12, 24, 0.7);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.driver-flow-step:not(:last-child)::after {
  content: '↓';
  position: absolute;
  left: 50%;
  bottom: -24px;
  color: #fff36d;
  font-size: 1.35rem;
  font-weight: 900;
  text-shadow: 0 0 14px rgba(255, 243, 109, 0.85);
  transform: translateX(-50%);
}

.driver-flow-step span,
.language-card span {
  color: var(--topic-color);
  font-weight: 900;
}

.driver-flow-step strong {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.18rem;
}

.driver-content,
.language-layout {
  display: grid;
  gap: 14px;
}

.driver-section-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.driver-info-card,
.driver-type-card,
.quality-panel,
.usecase-grid article,
.workload-flow article {
  border: 1px solid color-mix(in srgb, var(--topic-color), white 13%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 91%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.72);
  box-shadow: inset 0 0 22px rgba(255, 255, 255, 0.04);
}

.driver-info-card,
.driver-type-card {
  padding: 14px;
}

.driver-info-card h3,
.driver-type-card h3 {
  margin: 0 0 10px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.05;
}

.driver-info-card ul,
.language-card ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding-left: 18px;
  color: #d8e0ef;
  font-size: 0.94rem;
  font-weight: 650;
  line-height: 1.28;
}

.driver-type-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.driver-type-card p {
  margin-top: 7px;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.94rem;
  font-weight: 780;
}

.modern-printing {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.modern-printing span {
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #f7f8ff;
  background: rgba(255, 255, 255, 0.075);
  font-weight: 850;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.language-card {
  min-height: 196px;
  padding: 16px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 88%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.74);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.language-card span {
  display: block;
  margin-bottom: 12px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.85rem;
  line-height: 1;
}

.quality-panel {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 14px;
  padding: 16px;
}

.quality-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.quality-points span {
  padding: 10px 12px;
  border-radius: 8px;
  color: #f7f8ff;
  background: rgba(255, 255, 255, 0.07);
  font-weight: 760;
  line-height: 1.25;
}

.usecase-grid {
  display: grid;
  gap: 10px;
}

.usecase-grid article {
  padding: 13px;
}

.usecase-grid strong,
.workload-flow strong {
  display: block;
  margin-bottom: 5px;
  color: var(--topic-color);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
}

.usecase-grid p,
.workload-flow span {
  color: #e7ecf8;
  font-weight: 750;
  line-height: 1.25;
}

.workload-flow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.workload-flow article {
  position: relative;
  padding: 14px;
}

.workload-flow article:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -20px;
  top: 50%;
  color: #fff36d;
  font-size: 1.35rem;
  font-weight: 900;
  text-shadow: 0 0 14px rgba(255, 243, 109, 0.9);
  transform: translateY(-50%);
}

.dpi-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.1fr);
  gap: 18px;
  align-items: stretch;
}

.dpi-visual {
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--topic-color), transparent 76%), transparent 42%),
    rgba(255, 255, 255, 0.055);
}

.dpi-level {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  gap: 10px 14px;
  align-items: center;
  min-height: 128px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 8px;
  background: rgba(9, 12, 24, 0.68);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.dpi-dots {
  grid-row: span 2;
  width: 96px;
  aspect-ratio: 1;
  border-radius: 8px;
  background-image: radial-gradient(circle, var(--topic-color) 18%, transparent 20%);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 22px color-mix(in srgb, var(--topic-color), transparent 76%);
}

.dots-1 {
  background-size: 24px 24px;
}

.dots-2 {
  background-size: 13px 13px;
}

.dots-3 {
  background-size: 7px 7px;
}

.dpi-level strong {
  color: var(--topic-color);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.55rem;
  line-height: 1;
}

.dpi-level ul,
.connection-card ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding-left: 18px;
  color: #d8e0ef;
  font-weight: 650;
  line-height: 1.3;
}

.dpi-content {
  display: grid;
  gap: 12px;
}

.meaning-card,
.dpi-extra,
.connection-card,
.connection-hints,
.final-card {
  border: 1px solid color-mix(in srgb, var(--topic-color), white 13%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 91%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.72);
  box-shadow: inset 0 0 22px rgba(255, 255, 255, 0.04);
}

.meaning-card {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  padding: 15px;
}

.meaning-card .section-title {
  width: 100%;
  margin-bottom: 0;
}

.meaning-card span {
  padding: 10px 12px;
  border-radius: 8px;
  color: #07101b;
  background: var(--topic-color);
  font-weight: 900;
}

.dpi-extra {
  display: grid;
  gap: 8px;
  padding: 14px;
}

.dpi-extra p {
  color: #e7ecf8;
  font-weight: 750;
  line-height: 1.3;
}

.connection-layout {
  display: grid;
  gap: 14px;
}

.connection-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.connection-card {
  min-height: 190px;
  padding: 15px;
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.connection-card span {
  color: var(--topic-color);
  font-weight: 900;
}

.connection-card h3 {
  margin: 8px 0 10px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.18rem;
  line-height: 1;
}

.connection-hints {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  padding: 12px;
}

.connection-hints span {
  padding: 10px 12px;
  border-radius: 8px;
  color: #e7ecf8;
  background: rgba(255, 255, 255, 0.065);
  font-weight: 760;
  line-height: 1.28;
}

.final-layout {
  display: grid;
  gap: 16px;
}

.final-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.final-card {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  align-items: center;
  min-height: 92px;
  padding: 16px;
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.final-card span {
  color: var(--topic-color);
  font-weight: 900;
}

.final-card p {
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.18rem;
  font-weight: 700;
  line-height: 1.18;
}

.final-note {
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 20%);
  border-radius: 8px;
  color: #07101b;
  background: var(--topic-color);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.18;
  box-shadow: 0 0 34px color-mix(in srgb, var(--topic-color), transparent 58%);
}

.config-layout,
.mic-layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.74fr) minmax(0, 1.26fr);
  gap: 18px;
  align-items: stretch;
}

.config-flow,
.mic-visual {
  display: grid;
  gap: 16px;
  padding: 18px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 15%);
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 12%, color-mix(in srgb, var(--topic-color), transparent 76%), transparent 42%),
    rgba(255, 255, 255, 0.055);
}

.config-step {
  position: relative;
  display: grid;
  align-content: center;
  min-height: 72px;
  padding: 13px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background: rgba(9, 12, 24, 0.7);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.config-step:not(:last-child)::after {
  content: '↓';
  position: absolute;
  left: 50%;
  bottom: -21px;
  color: var(--topic-color);
  font-size: 1.25rem;
  font-weight: 900;
  text-shadow: 0 0 14px var(--topic-color);
  transform: translateX(-50%);
}

.config-step span,
.wireless-card span {
  color: var(--topic-color);
  font-weight: 900;
}

.config-step strong {
  margin-top: 5px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.05rem;
}

.config-content,
.wireless-layout,
.mic-content {
  display: grid;
  gap: 14px;
}

.config-grid,
.mic-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.config-card,
.wireless-card,
.mic-card {
  padding: 15px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 13%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 91%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.72);
  box-shadow: inset 0 0 22px rgba(255, 255, 255, 0.04);
}

.config-card h3,
.wireless-card h3,
.mic-card h3 {
  margin: 0 0 10px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.05;
}

.config-card ul,
.wireless-card ul,
.mic-card ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding-left: 18px;
  color: #d8e0ef;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.28;
}

.wireless-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.wireless-card {
  min-height: 232px;
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.wireless-card h3 {
  margin-top: 8px;
  font-size: 1.42rem;
}

.wireless-hints {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.wireless-hints span {
  padding: 12px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 12%);
  border-radius: 8px;
  color: #e7ecf8;
  background: rgba(255, 255, 255, 0.07);
  font-weight: 780;
  line-height: 1.28;
}

.mic-visual {
  align-content: center;
  justify-items: center;
}

.mic-paper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  width: min(100%, 280px);
  padding: 26px;
  border: 1px solid rgba(255, 243, 109, 0.38);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(255, 243, 109, 0.08), rgba(255, 255, 255, 0.04)),
    rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 34px rgba(255, 243, 109, 0.13), inset 0 0 24px rgba(255, 255, 255, 0.04);
}

.mic-paper span {
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #fff36d;
  box-shadow: 0 0 14px rgba(255, 243, 109, 0.95);
}

.mic-paper span:nth-child(3n) {
  opacity: 0.28;
}

.mic-paper span:nth-child(4n) {
  opacity: 0.55;
}

.mic-visual p {
  color: #fff36d;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
}

.printer-compare-layout,
.printer-decision-layout {
  display: grid;
  gap: 16px;
}

.printer-table {
  display: grid;
  grid-template-columns: var(--table-columns);
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.055);
  box-shadow: inset 0 0 26px rgba(255, 255, 255, 0.04);
}

.printer-table-head {
  padding: 14px 16px;
  color: #07101b;
  background: var(--topic-color);
  font-size: 0.84rem;
  font-weight: 900;
  line-height: 1.15;
  text-transform: uppercase;
}

.printer-table-cell {
  min-height: 58px;
  padding: 13px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  color: #d8e0ef;
  font-size: 0.98rem;
  font-weight: 650;
  line-height: 1.28;
}

.printer-table-cell.is-category {
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 900;
}

.decision-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.decision-card {
  padding: 18px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 14%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 90%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.72);
  box-shadow: inset 0 0 26px rgba(255, 255, 255, 0.04);
}

.decision-card h3 {
  margin: 0 0 14px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.35rem, 2vw, 1.9rem);
  line-height: 1.02;
}

.decision-card p {
  margin-top: 9px;
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 800;
  line-height: 1.25;
}

.ink-layout,
.compare-layout,
.impact-layout,
.recycle-layout {
  display: grid;
  gap: 16px;
}

.ink-layout {
  grid-template-columns: 1.08fr 1fr;
}

.ink-section,
.compare-card,
.impact-card,
.recycle-support section {
  border: 1px solid color-mix(in srgb, var(--topic-color), white 13%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 90%), rgba(255, 255, 255, 0.065)),
    rgba(9, 12, 24, 0.72);
  box-shadow: inset 0 0 24px rgba(255, 255, 255, 0.04);
}

.ink-section {
  padding: 16px;
}

.ink-ingredients {
  grid-row: span 2;
}

.pill-grid {
  display: grid;
  gap: 10px;
}

.pill-grid span {
  display: flex;
  align-items: center;
  min-height: 46px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #f7f8ff;
  background: rgba(255, 255, 255, 0.07);
  font-weight: 800;
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.pill-grid span::before {
  content: '';
  width: 11px;
  aspect-ratio: 1;
  margin-right: 10px;
  border-radius: 999px 999px 999px 2px;
  background: var(--topic-color);
  box-shadow: 0 0 14px var(--topic-color);
  transform: rotate(45deg);
}

.ink-type-grid,
.compare-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.ink-type-card {
  min-height: 168px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
}

.ink-type-card p {
  color: #9aa9c4;
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.ink-type-card h4,
.compare-card h3,
.impact-card h3 {
  margin: 5px 0 10px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.35rem;
  line-height: 1;
}

.ink-type-card ul,
.impact-card ul,
.recycle-support ul {
  display: grid;
  gap: 7px;
  margin: 0;
  padding-left: 18px;
  color: #d8e0ef;
  font-weight: 650;
  line-height: 1.3;
}

.cmyk-card {
  grid-column: 1 / -1;
}

.cmyk-swatches {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.swatch {
  display: grid;
  place-items: center;
  min-height: 64px;
  border-radius: 8px;
  color: #07101b;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 900;
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.28), 0 0 22px rgba(255, 255, 255, 0.08);
}

.swatch-cyan {
  background: #21e7ff;
}

.swatch-magenta {
  background: #ff4fd8;
}

.swatch-yellow {
  background: #fff36d;
}

.swatch-black {
  color: #f7f8ff;
  background: #05070f;
}

.compare-card {
  padding: 18px;
}

.compare-card.is-positive {
  border-color: rgba(98, 243, 107, 0.45);
}

.compare-card.is-warning {
  border-color: rgba(255, 79, 79, 0.58);
}

.compare-columns {
  display: grid;
  gap: 8px;
}

.compare-columns p {
  padding: 9px 10px;
  border-radius: 8px;
  font-weight: 750;
  line-height: 1.25;
}

.plus-item {
  color: #dfffe4;
  background: rgba(98, 243, 107, 0.13);
}

.minus-item {
  color: #ffe4e4;
  background: rgba(255, 79, 79, 0.14);
}

.warning-box {
  grid-column: 1 / -1;
  padding: 14px 16px;
  border: 1px solid rgba(255, 79, 79, 0.5);
  border-radius: 8px;
  color: #fff1f1;
  background: rgba(255, 79, 79, 0.14);
  font-weight: 850;
  box-shadow: 0 0 24px rgba(255, 79, 79, 0.12);
}

.impact-layout {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.impact-card {
  min-height: 230px;
  padding: 18px;
}

.impact-layout .note-box,
.ink-layout .note-box,
.recycle-layout .note-box {
  grid-column: 1 / -1;
}

.recycle-flow {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
}

.recycle-step {
  position: relative;
  min-height: 124px;
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--topic-color), white 16%);
  border-radius: 8px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--topic-color), transparent 86%), rgba(255, 255, 255, 0.07)),
    rgba(9, 12, 24, 0.74);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.recycle-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -20px;
  top: 50%;
  color: var(--topic-color);
  font-size: 1.45rem;
  font-weight: 900;
  text-shadow: 0 0 14px var(--topic-color);
  transform: translateY(-50%);
}

.recycle-step span {
  display: block;
  margin-bottom: 18px;
  color: var(--topic-color);
  font-weight: 900;
}

.recycle-step strong {
  display: block;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.12;
}

.recycle-support {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 12px;
}

.recycle-support section {
  padding: 16px;
}

.benefit-row {
  display: grid;
  gap: 8px;
}

.benefit-row span {
  padding: 10px 12px;
  border-radius: 8px;
  color: #e7fff8;
  background: rgba(36, 214, 163, 0.14);
  font-weight: 800;
}

.inline-points {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
}

.inline-points span {
  display: inline-flex;
  align-items: center;
  color: #f7f8ff;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 700;
}

.inline-points span:not(:last-child)::after {
  content: '|';
  margin-left: 10px;
  color: var(--topic-color);
  font-weight: 800;
}

.fact-card {
  min-height: 124px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  animation: cardIn 520ms ease both;
  animation-delay: var(--delay);
}

.fact-card span {
  display: block;
  margin-bottom: 18px;
  color: var(--topic-color);
  font-weight: 800;
}

.fact-card p {
  color: #e7ecf8;
  font-size: 1.18rem;
  line-height: 1.45;
}

@keyframes drift {
  to {
    transform: translate(7vw, -4vh) scale(1.08);
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  38% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(1.18);
  }
}

@keyframes lineFlow {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(240%);
  }
}

@keyframes panelIn {
  from {
    opacity: 0;
    transform: translate(-50%, 26px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 860px) {
  .app-shell {
    padding: 24px 16px;
  }

  .topbar {
    align-items: center;
  }

  h1 {
    font-size: clamp(2.2rem, 12vw, 4.6rem);
  }

  .stage {
    min-height: 1040px;
    padding-top: 18px;
  }

  .stage-transform {
    width: 1220px;
    max-width: none;
    transform: translate(var(--zoom-x, 0), var(--zoom-y, 0)) scale(0.6);
  }

  .is-zoomed .stage-transform {
    transform: translate(calc(var(--zoom-x) * 0.56), calc(var(--zoom-y) * 0.56)) scale(0.86);
  }

  .detail-panel {
    max-height: 58vh;
    overflow: auto;
  }

  .build-layout {
    grid-template-columns: 1fr;
  }

  .driver-layout,
  .timeline-layout,
  .dpi-layout,
  .config-layout,
  .mic-layout,
  .ink-layout,
  .quality-panel,
  .impact-layout,
  .recycle-support {
    grid-template-columns: 1fr;
  }

  .driver-section-grid,
  .timeline-flow,
  .connection-grid,
  .connection-hints,
  .config-grid,
  .wireless-grid,
  .wireless-hints,
  .mic-grid,
  .decision-grid,
  .language-grid,
  .workload-flow {
    grid-template-columns: 1fr;
  }

  .workload-flow article:not(:last-child)::after {
    display: none;
  }

  .recycle-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .recycle-step:not(:last-child)::after {
    display: none;
  }

  .build-images {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .build-image-card {
    min-height: 118px;
  }

  .build-image-card img {
    height: 118px;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-grid.is-two-by-two {
    grid-template-columns: 1fr;
    max-width: none;
  }

  .timeline-step:not(:last-child)::after {
    display: none;
  }

  .ink-transport-svg {
    min-height: 260px;
  }
}

@media (max-width: 560px) {
  .topbar {
    display: grid;
  }

  .reset-button {
    justify-self: start;
  }

  .stage {
    min-height: 980px;
  }

  .stage-transform {
    transform: translate(var(--zoom-x, 0), var(--zoom-y, 0)) scale(0.36);
  }

  .is-zoomed .stage-transform {
    transform: translate(calc(var(--zoom-x) * 0.34), calc(var(--zoom-y) * 0.34)) scale(0.62);
  }

  .detail-hero {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .detail-metric {
    grid-column: 1 / -1;
    justify-self: start;
  }

  .build-images,
  .timeline-layout,
  .timeline-flow,
  .build-groups,
  .component-list,
  .maintenance-table,
  .driver-section-grid,
  .driver-type-grid,
  .dpi-layout,
  .dpi-level,
  .connection-grid,
  .connection-hints,
  .config-layout,
  .config-grid,
  .wireless-grid,
  .wireless-hints,
  .mic-layout,
  .mic-grid,
  .printer-table,
  .decision-grid,
  .final-grid,
  .language-grid,
  .quality-points,
  .quality-panel,
  .workload-flow,
  .ink-type-grid,
  .compare-layout,
  .cmyk-swatches,
  .recycle-flow {
    grid-template-columns: 1fr;
  }

  .maintenance-head {
    display: none;
  }

  .maintenance-row {
    display: grid;
    gap: 0;
  }

  .maintenance-row > * {
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
