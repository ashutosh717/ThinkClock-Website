"use client";

interface ApplyButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function ApplyButton({
  label = "Apply",
  href = "mailto:careers@thinkclock.com",
  onClick,
  className = "",
}: ApplyButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`apply-animated-btn ${className}`}
    >
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="text">{label}</span>
      <span className="circle" />
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </a>
  );
}
