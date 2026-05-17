export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Developer Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Code Reviews for{' '}
          <span className="text-[#58a6ff]">Faster Turnaround</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically assign the right reviewer every time. Our scoring algorithm analyzes availability, expertise, and review history to cut PR wait times in half.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Works with GitHub &amp; GitLab. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '60%', label: 'Faster review cycles' },
            { stat: '3x', label: 'Better expertise match' },
            { stat: '5 min', label: 'Setup time' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Per team, unlimited PRs</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'GitHub & GitLab integration',
              'AI-powered reviewer scoring',
              'Availability & timezone awareness',
              'Review history analytics',
              'Slack notifications',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the reviewer scoring work?',
              a: 'We combine three signals: current workload (open PRs assigned), expertise match (file paths and languages touched historically), and average review turnaround time. The reviewer with the best composite score gets suggested first.',
            },
            {
              q: 'Do you store my source code?',
              a: 'No. We only read PR metadata, file paths, and review timestamps via the GitHub/GitLab API. Your source code never leaves your VCS provider.',
            },
            {
              q: 'Can I use this with self-hosted GitLab?',
              a: 'Yes. You can point the integration at any GitLab instance by providing your self-hosted URL and a personal access token during setup.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-medium text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
