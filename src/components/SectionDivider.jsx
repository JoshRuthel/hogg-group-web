import '../styles/components.css';

function SectionDivider() {
  return (
    <div className="section-divider">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="divider-svg"
      >
        <path
          d="M0,50 Q360,0 720,15 Q1080,30 1440,10 L1440,60 L0,60 Z"
          fill="var(--color-gray-light)"
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
