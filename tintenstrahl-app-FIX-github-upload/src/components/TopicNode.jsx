function TopicNode({ topic, active, muted, onSelect }) {
  const Icon = topic.icon;
  const anchorX = topic.position.x < -80 ? '-100%' : topic.position.x > 80 ? '0%' : '-50%';
  const anchorY = topic.position.y < -80 ? '-100%' : topic.position.y > 80 ? '0%' : '-50%';

  return (
    <button
      className={`topic-node ${topic.subgroup ? 'is-subgroup' : ''} ${topic.owner ? 'is-mine' : ''} ${active ? 'is-active' : ''} ${muted ? 'is-muted' : ''}`}
      style={{
        '--x': `${topic.position.x}px`,
        '--y': `${topic.position.y}px`,
        '--anchor-x': anchorX,
        '--anchor-y': anchorY,
        '--topic-color': topic.color
      }}
      onClick={() => onSelect(topic.id)}
      aria-pressed={active}
    >
      <span className="node-orbit" />
      <span className="node-icon">
        <Icon size={24} strokeWidth={2.2} />
      </span>
      <span className="node-copy">
        {topic.owner && <em>{topic.owner}</em>}
        <span>{topic.kicker}</span>
        <strong>{topic.title}</strong>
      </span>
    </button>
  );
}

export default TopicNode;
