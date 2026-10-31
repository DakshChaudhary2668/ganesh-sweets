const paths = {
  recipe: <><path d="M7 16h18l-2 9H9l-2-9Zm-2 0h22M12 12c-4-4 4-4 0-8m8 8c-4-4 4-4 0-8" /><path d="M4 24c-2-3-2-6 0-9m24 9c2-3 2-6 0-9M10 28h12" /></>,
  foods: <><path d="M16 3c3 4 3 7 0 10-3-3-3-6 0-10Zm0 26c-3-4-3-7 0-10 3 3 3 6 0 10ZM3 16c4-3 7-3 10 0-3 3-6 3-10 0Zm26 0c-4 3-7 3-10 0 3-3 6-3 10 0Z" /><path d="M6 6c5 1 7 3 7 7-4 0-6-2-7-7Zm20 0c-1 5-3 7-7 7 0-4 2-6 7-7ZM6 26c1-5 3-7 7-7 0 4-2 6-7 7Zm20 0c-5-1-7-3-7-7 4 0 6 2 7 7Z" /><circle cx="16" cy="16" r="3" /></>,
  location: <><path d="M16 29S6 19 6 12a10 10 0 0 1 20 0c0 7-10 17-10 17Z" /><circle cx="16" cy="12" r="5" /><path d="M3 12A13 13 0 0 1 16 0m13 12A13 13 0 0 0 16 0" /></>,
  occasion: <><path d="M5 13h22v6H5zm2 6v10h18V19M16 13v16M16 13C5 12 7 2 12 5c3 2 4 8 4 8Zm0 0C27 12 25 2 20 5c-3 2-4 8-4 8Z" /><path d="M2 22h3m22 0h3M9 1l2 2m12-2-2 2" /></>,
};

export default function TrustIcon({ kind }: { kind: keyof typeof paths }) {
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}
