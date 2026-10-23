type Direction = "up-right" | "left" | "up";

const paths: Record<Direction, string> = {
  "up-right": "M5 15 15 5M6 5h9v9",
  left: "M15 10H5m5-5-5 5 5 5",
  up: "M10 15V5m-5 5 5-5 5 5",
};

export function ArrowIcon({ direction = "up-right" }: { direction?: Direction }) {
  return (
    <svg className="arrow-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={paths[direction]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
