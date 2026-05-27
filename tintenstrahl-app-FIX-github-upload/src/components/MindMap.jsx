import AnimatedLine from './AnimatedLine.jsx';
import TopicNode from './TopicNode.jsx';

function MindMap({ topics, activeTopic, onSelect }) {
  const stageStyle = activeTopic
    ? {
        '--zoom-x': `${-activeTopic.position.x}px`,
        '--zoom-y': `${-activeTopic.position.y}px`
      }
    : {};

  return (
    <section className="stage" style={stageStyle} aria-label="Interaktive Mindmap">
      <div className="stage-transform">
        <div className="core-card">
          <span className="core-pulse" />
          <h2>Inkjet Map</h2>
        </div>

        <div className="line-layer">
          {topics.map((topic) => (
            <AnimatedLine key={topic.id} topic={topic} active={topic.id === activeTopic?.id} />
          ))}
        </div>

        <div className="node-layer">
          {topics.map((topic) => (
            <TopicNode
              key={topic.id}
              topic={topic}
              active={topic.id === activeTopic?.id}
              muted={activeTopic && topic.id !== activeTopic.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MindMap;
