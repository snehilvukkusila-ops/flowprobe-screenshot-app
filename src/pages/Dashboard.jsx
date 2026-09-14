const stats = [
  { label: 'Active Projects', value: 12 },
  { label: 'Open Tasks', value: 34 },
  { label: 'Completed This Week', value: 9 },
]

export default function Dashboard() {
  return (
    <div className="card">
      <span className="tag">Dashboard</span>
      <h1>Team Dashboard</h1>
      <p>A read-only overview of team activity — no forms, no mutations.</p>
      <ul>
        {stats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong> — {s.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
