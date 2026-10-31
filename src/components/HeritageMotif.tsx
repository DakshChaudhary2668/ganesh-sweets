export default function HeritageMotif({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth=".7">{Array.from({ length: 12 }, (_, index) => <g key={index} transform={`rotate(${index * 30} 100 100)`}><path d="M100 100C67 80 72 35 100 13c28 22 33 67 0 87Z" /><path d="M100 100C88 74 87 49 100 27c13 22 12 47 0 73Z" /></g>)}<circle cx="100" cy="100" r="15" /><circle cx="100" cy="100" r="7" /></g></svg>;
}
