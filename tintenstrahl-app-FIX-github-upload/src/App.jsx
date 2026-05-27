import { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import DetailPanel from './components/DetailPanel.jsx';
import MindMap from './components/MindMap.jsx';
import { topics } from './data/topics.js';
import { getTopicPosition } from './utils/geometry.js';

function App() {
  const [activeId, setActiveId] = useState(null);
  const [drilldownId, setDrilldownId] = useState(null);
  const radius = 360;

  const positionedTopics = useMemo(
    () =>
      topics.map((topic) => ({
        ...topic,
        position: topic.position ?? getTopicPosition(topic.angle, topic.radius ?? radius)
      })),
    []
  );

  const activeTopic = positionedTopics.find((topic) => topic.id === activeId);
  const activeDrilldown = activeTopic?.drilldown && drilldownId === activeTopic.id ? activeTopic.drilldown : null;

  function handleSelectTopic(id) {
    setActiveId(id);
    setDrilldownId(null);
  }

  function handleBack() {
    if (activeDrilldown) {
      setDrilldownId(null);
      return;
    }

    setActiveId(null);
  }

  function handleReset() {
    setActiveId(null);
    setDrilldownId(null);
  }

  return (
    <main className={`app-shell ${activeTopic ? 'is-zoomed' : ''}`}>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="noise" />

      <header className="topbar">
        <div>
          <span className="eyebrow">Interaktive Tech-Präsentation</span>
          <h1>Tintenstrahldrucker</h1>
        </div>
        <button className="reset-button" onClick={handleReset}>
          <RotateCcw size={17} />
          Reset
        </button>
      </header>

      <MindMap topics={positionedTopics} activeTopic={activeTopic} onSelect={handleSelectTopic} />

      <DetailPanel
        topic={activeTopic}
        drilldown={activeDrilldown}
        onBack={handleBack}
        onOpenDrilldown={() => setDrilldownId(activeTopic.id)}
      />
    </main>
  );
}

export default App;
