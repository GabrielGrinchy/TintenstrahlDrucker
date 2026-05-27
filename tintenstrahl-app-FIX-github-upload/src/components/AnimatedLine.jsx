function AnimatedLine({ topic, active }) {
  const start = topic.lineStart ?? { x: 0, y: 0 };
  const deltaX = topic.position.x - start.x;
  const deltaY = topic.position.y - start.y;
  const length = Math.hypot(deltaX, deltaY);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  return (
    <span
      className={`mind-line ${topic.subgroup ? 'is-subgroup' : ''} ${active ? 'is-active' : ''}`}
      style={{
        '--line-start-x': `${start.x}px`,
        '--line-start-y': `${start.y}px`,
        '--line-angle': `${angle}deg`,
        '--line-length': `${length}px`,
        '--topic-color': topic.lineColor ?? topic.color
      }}
    />
  );
}

export default AnimatedLine;
