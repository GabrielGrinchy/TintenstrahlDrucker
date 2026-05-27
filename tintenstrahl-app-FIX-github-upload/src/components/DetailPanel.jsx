import { ArrowLeft, ChevronRight } from 'lucide-react';

function resolveAssetPath(path) {
  if (!path.startsWith('/')) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}

function InkTransportDiagram() {
  const parts = [
    { label: 'Haupttank', x: 228, y: 300 },
    { label: 'Pumpe', x: 104, y: 260 },
    { label: 'Piezo-Element', x: 122, y: 118 },
    { label: 'Düse', x: 214, y: 74 },
    { label: 'Ablenkelektroden', x: 408, y: 78 }
  ];

  return (
    <figure className="ink-transport-card">
      <svg className="ink-transport-svg" viewBox="0 0 560 360" role="img" aria-label="Technischer Aufbau des Tintentransports und der Düsensteuerung">
        <defs>
          <filter id="transportGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="tubeGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#21e7ff" />
            <stop offset="100%" stopColor="#8eeeff" />
          </linearGradient>
        </defs>

        <rect className="transport-zone is-head" x="88" y="44" width="380" height="126" rx="14" />
        <text className="transport-zone-label" x="106" y="70">Druckkopf</text>
        <rect className="transport-zone is-control" x="72" y="190" width="420" height="130" rx="14" />
        <text className="transport-zone-label is-control-label" x="92" y="222">Steuergerät</text>

        <path
          className="transport-tube"
          d="M154 252 H214 C236 252 236 292 258 292 H302 C324 292 324 252 346 252 H410 V126 H342"
        />
        <path className="transport-tube" d="M154 252 V126 H212" />
        <path className="transport-return" d="M410 126 H494 V228 H420" />

        <rect className="transport-tank" x="226" y="270" width="108" height="42" rx="8" />
        <text className="transport-small-label" x="280" y="296">Haupttank</text>
        <rect className="transport-tank is-side" x="102" y="238" width="56" height="38" rx="8" />
        <text className="transport-small-label" x="130" y="263">Pumpe</text>
        <rect className="transport-tank is-side" x="394" y="238" width="56" height="38" rx="8" />
        <text className="transport-small-label" x="422" y="263">Pumpe</text>

        <rect className="transport-chip" x="198" y="104" width="72" height="26" rx="5" />
        <rect className="transport-piezo" x="122" y="92" width="48" height="42" rx="6" />
        <text className="transport-symbol" x="146" y="120">~</text>
        <rect className="transport-nozzle" x="286" y="104" width="24" height="24" rx="4" />
        <path className="transport-electrode" d="M340 94 H386 L396 78" />
        <path className="transport-electrode" d="M340 136 H386 L396 152" />
        <path className="transport-ground" d="M374 84 v-20 h42 M374 142 v20 h42" />

        {[330, 362, 394, 426, 458].map((x) => (
          <circle key={x} className="transport-drop" cx={x} cy="116" r="5" />
        ))}
        {[230, 256, 318].map((x) => (
          <circle key={x} className="transport-drop is-soft" cx={x} cy="116" r="4" />
        ))}

        <path className="transport-arrow" d="M142 286 c-18 0-30-12-30-30" />
        <path className="transport-arrow" d="M410 286 c18 0 30-12 30-30" />
        <path className="transport-arrow" d="M500 92 c18 10 18 28 0 38" />

        {parts.map((part, index) => (
          <g key={part.label} className="transport-part" tabIndex="0">
            <circle className="transport-number" cx={part.x} cy={part.y} r="15" />
            <text className="transport-number-text" x={part.x} y={part.y + 5}>{index + 1}</text>
            <text className="transport-part-label" x={part.x + 20} y={part.y + 5}>{part.label}</text>
          </g>
        ))}
      </svg>
      <figcaption>Technischer Aufbau des Tintentransports und der Düsensteuerung</figcaption>
    </figure>
  );
}

function DetailPanel({ topic, drilldown, onBack, onOpenDrilldown }) {
  if (!topic) return null;
  const Icon = topic.icon;
  const visibleTopic = drilldown
    ? {
        ...topic,
        title: drilldown.title,
        kicker: drilldown.kicker,
        summary: drilldown.summary,
        metric: drilldown.metric
      }
    : topic;

  return (
    <section className="detail-panel" style={{ '--topic-color': topic.color }}>
      <button className="back-button" onClick={onBack} aria-label="Zurück">
        <ArrowLeft size={18} />
        Zurück
      </button>

      <div className="detail-hero">
        <div className="detail-icon">
          <Icon size={42} strokeWidth={1.8} />
        </div>
        <div>
          {topic.owner && <span className="owner-badge">{topic.owner}</span>}
          <p>{visibleTopic.kicker}</p>
          <h2>{visibleTopic.title}</h2>
        </div>
        <span className="detail-metric">{visibleTopic.metric}</span>
      </div>

      <p className="detail-summary">{visibleTopic.summary}</p>

      {drilldown ? (
        <div className="drilldown-list">
          {drilldown.items.map((item, index) => (
            <article key={item.title} className="drilldown-card" style={{ '--delay': `${index * 90}ms` }}>
              <span>0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : topic.layout === 'build' ? (
        <div className="build-layout">
          <div className="build-images" aria-label="Technische Bilder">
            {topic.images.map((image) => (
              <figure key={image.src} className="build-image-card">
                <img src={resolveAssetPath(image.src)} alt={image.label} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="build-content">
            <section>
              <h3 className="section-title">Hauptbaugruppen</h3>
              <div className="build-groups">
                {topic.groups.map((group, index) => (
                  <article key={group.title} className="build-group-card" style={{ '--delay': `${index * 70}ms` }}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h3 className="section-title">Wichtige Bestandteile</h3>
              <div className="component-list">
                {topic.components.map((component) => (
                  <article key={component.title} className="component-row">
                    <strong>{component.title}</strong>
                    <p>{component.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <p className="note-box">{topic.note}</p>
          </div>
        </div>
      ) : topic.layout === 'maintenanceTable' ? (
        <div className="maintenance-wrap">
          <div className="maintenance-table">
            <div className="maintenance-head">Teil</div>
            <div className="maintenance-head">Typisches Problem</div>
            <div className="maintenance-head">Wartung / Wechsel</div>
            {topic.tableRows.map((row) => (
              <div className="maintenance-row" key={row.teil}>
                <strong>{row.teil}</strong>
                <span>{row.problem}</span>
                <span>{row.wartung}</span>
              </div>
            ))}
          </div>
          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'driverFlow' ? (
        <div className="driver-layout">
          <section className="driver-visual" aria-label="Datenfluss vom PC zum Drucker">
            {topic.driverFlow.map((step, index) => (
              <article key={step} className="driver-flow-step" style={{ '--delay': `${index * 80}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </section>

          <section className="driver-content">
            <div className="driver-section-grid">
              {topic.driverSections.map((section) => (
                <article key={section.title} className="driver-info-card">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="driver-type-grid">
              {topic.driverTypes.map((type) => (
                <article key={type.title} className="driver-type-card">
                  <h3>{type.title}</h3>
                  {type.pros.map((item) => (
                    <p key={item} className="plus-item">+ {item}</p>
                  ))}
                  {type.cons.map((item) => (
                    <p key={item} className="minus-item">- {item}</p>
                  ))}
                </article>
              ))}
            </div>

            <div className="modern-printing">
              {topic.modernPrinting.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="note-box">{topic.note}</p>
          </section>
        </div>
      ) : topic.layout === 'languageQuality' ? (
        <div className="language-layout">
          <div className="language-grid">
            {topic.languages.map((language, index) => (
              <article key={language.title} className="language-card" style={{ '--delay': `${index * 80}ms` }}>
                <span>{language.title}</span>
                <ul>
                  {language.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="quality-panel">
            <div>
              <h3 className="section-title">Einfluss auf die Druckqualität</h3>
              <div className="quality-points">
                {topic.qualityPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
            <div className="usecase-grid">
              {topic.useCases.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="workload-flow">
            {topic.workload.map((item) => (
              <article key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </article>
            ))}
          </div>

          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'dpiResolution' ? (
        <div className="dpi-layout">
          <section className="dpi-visual" aria-label="DPI Vergleich">
            {topic.dpiLevels.map((level, index) => (
              <article key={level.value} className="dpi-level" style={{ '--delay': `${index * 90}ms` }}>
                <div className={`dpi-dots dots-${index + 1}`} />
                <strong>{level.value}</strong>
                <ul>
                  {level.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="dpi-content">
            <div className="meaning-card">
              <h3 className="section-title">DPI bedeutet</h3>
              {topic.meaning.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="quality-points">
              {topic.statements.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>

            <div className="dpi-extra">
              {topic.extras.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <p className="note-box">{topic.note}</p>
          </section>
        </div>
      ) : topic.layout === 'connectionOptions' ? (
        <div className="connection-layout">
          <div className="connection-grid">
            {topic.connections.map((connection, index) => (
              <article key={connection.title} className="connection-card" style={{ '--delay': `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{connection.title}</h3>
                <ul>
                  {connection.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="connection-hints">
            {topic.hints.map((hint) => (
              <span key={hint}>{hint}</span>
            ))}
          </div>

          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'finalSummary' ? (
        <div className="final-layout">
          <div className="final-grid">
            {topic.highlights.map((highlight, index) => (
              <article key={highlight} className="final-card" style={{ '--delay': `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{highlight}</p>
              </article>
            ))}
          </div>
          <p className="final-note">{topic.note}</p>
        </div>
      ) : topic.layout === 'configSetup' ? (
        <div className="config-layout">
          <section className="config-flow">
            {topic.setupFlow.map((step, index) => (
              <article key={step} className="config-step" style={{ '--delay': `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </section>

          <section className="config-content">
            <div className="config-grid">
              {topic.sections.map((section) => (
                <article key={section.title} className="config-card">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="note-box">{topic.note}</p>
          </section>
        </div>
      ) : topic.layout === 'wirelessCloud' ? (
        <div className="wireless-layout">
          <div className="wireless-grid">
            {topic.technologies.map((technology, index) => (
              <article key={technology.title} className="wireless-card" style={{ '--delay': `${index * 80}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{technology.title}</h3>
                <ul>
                  {technology.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="wireless-hints">
            {topic.hints.map((hint) => (
              <span key={hint}>{hint}</span>
            ))}
          </div>
          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'micCode' ? (
        <div className="mic-layout">
          <section className="mic-visual" aria-label="Yellow Dots Muster">
            <div className="mic-paper">
              {Array.from({ length: 42 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <p>Yellow Dots</p>
          </section>

          <section className="mic-content">
            <div className="mic-grid">
              {topic.sections.map((section) => (
                <article key={section.title} className="mic-card">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="warning-box">{topic.note}</p>
          </section>
        </div>
      ) : topic.layout === 'printerCompare' ? (
        <div className="printer-compare-layout">
          <div className="printer-table" style={{ '--table-columns': `1fr repeat(${topic.columns.length - 1}, 1.3fr)` }}>
            {topic.columns.map((column) => (
              <div key={column} className="printer-table-head">
                {column}
              </div>
            ))}
            {topic.rows.map((row) =>
              row.map((cell, index) => (
                <div key={`${row[0]}-${index}`} className={`printer-table-cell ${index === 0 ? 'is-category' : ''}`}>
                  {cell}
                </div>
              ))
            )}
          </div>
        </div>
      ) : topic.layout === 'printerDecision' ? (
        <div className="printer-decision-layout">
          <div className="decision-grid">
            {topic.choices.map((choice) => (
              <article key={choice.title} className="decision-card">
                <h3>{choice.title}</h3>
                {choice.points.map((point) => (
                  <p key={point} className="plus-item">+ {point}</p>
                ))}
              </article>
            ))}
          </div>
          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'inkComposition' ? (
        <div className="ink-layout">
          <section className="ink-section ink-ingredients">
            <h3 className="section-title">Hauptbestandteile</h3>
            <div className="pill-grid">
              {topic.ingredients.map((item, index) => (
                <span key={item} style={{ '--delay': `${index * 55}ms` }}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="ink-section">
            <h3 className="section-title">Tintenarten</h3>
            <div className="ink-type-grid">
              {topic.inkTypes.map((type) => (
                <article key={type.title} className="ink-type-card">
                  <p>{type.subtitle}</p>
                  <h4>{type.title}</h4>
                  <ul>
                    {type.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="ink-section cmyk-card">
            <h3 className="section-title">CMYK-System</h3>
            <div className="cmyk-swatches">
              {topic.cmyk.map((color) => (
                <span key={color} className={`swatch swatch-${color.toLowerCase()}`}>
                  {color}
                </span>
              ))}
            </div>
          </section>

          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'inkCompare' ? (
        <div className="compare-layout">
          {topic.comparisons.map((comparison) => (
            <article key={comparison.title} className={`compare-card is-${comparison.tone}`}>
              <h3>{comparison.title}</h3>
              <div className="compare-columns">
                <div>
                  {comparison.pros.map((item) => (
                    <p key={item} className="plus-item">+ {item}</p>
                  ))}
                </div>
                <div>
                  {comparison.cons.map((item) => (
                    <p key={item} className="minus-item">- {item}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <p className="warning-box">{topic.warning}</p>
        </div>
      ) : topic.layout === 'impactGrid' ? (
        <div className="impact-layout">
          {topic.sections.map((section) => (
            <article key={section.title} className="impact-card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'recycleFlow' ? (
        <div className="recycle-layout">
          <div className="recycle-flow">
            {topic.flow.map((step, index) => (
              <article key={step} className="recycle-step" style={{ '--delay': `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
          <div className="recycle-support">
            <section>
              <h3 className="section-title">Zusätzlich</h3>
              <ul>
                {topic.extras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="section-title">Vorteile</h3>
              <div className="benefit-row">
                {topic.benefits.map((item) => (
                  <span key={item}>+ {item}</span>
                ))}
              </div>
            </section>
          </div>
          <p className="note-box">{topic.note}</p>
        </div>
      ) : topic.layout === 'timeline' ? (
        <div className="timeline-layout">
          <div className="timeline-flow">
            {topic.points.map((step, index) => (
              <article key={step.title} className="timeline-step" style={{ '--delay': `${index * 55}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <InkTransportDiagram />
        </div>
      ) : topic.layout === 'inline' ? (
        <div className="inline-points">
          {topic.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      ) : (
        <div className={`detail-grid ${topic.layout === 'twoByTwo' ? 'is-two-by-two' : ''}`}>
          {topic.points.map((point, index) => (
            <article
              key={point}
              className={`fact-card ${topic.drilldown ? 'is-clickable' : ''}`}
              style={{ '--delay': `${index * 90}ms` }}
              onClick={topic.drilldown ? onOpenDrilldown : undefined}
              role={topic.drilldown ? 'button' : undefined}
              tabIndex={topic.drilldown ? 0 : undefined}
              onKeyDown={(event) => {
                if (!topic.drilldown) return;
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onOpenDrilldown();
                }
              }}
            >
              <span>0{index + 1}</span>
              <p>{point}</p>
              {topic.drilldown && <ChevronRight className="fact-card-arrow" size={18} />}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default DetailPanel;
