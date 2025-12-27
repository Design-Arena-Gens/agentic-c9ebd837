import { Section } from "@/components/Section";
import { dailyPlan } from "@/content/dailyPlan";

export default function Home() {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-rose-200 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-12 md:px-10 lg:px-14">
        <header className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-sm backdrop-blur-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35rem] text-rose-500">
                DreamsLabelsByHarshita
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-rose-900 md:text-4xl">
                Daily Social Growth & Sales Command Centre
              </h1>
            </div>
            <div className="rounded-full bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-700 ring-1 ring-rose-500/30">
              {formattedDate}
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700">
            {dailyPlan.focus}
          </p>
        </header>

        <main className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="grid gap-6">
            <Section title="Reel Idea" description={dailyPlan.reel.concept}>
              <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-rose-500">
                  Hook
                </p>
                <p className="mt-1 text-base font-medium text-rose-900">
                  “{dailyPlan.reel.hook}”
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-rose-500">
                  Shot plan
                </p>
                <ul className="mt-2 space-y-2">
                  {dailyPlan.reel.shotList.map((shot) => (
                    <li
                      key={shot}
                      className="rounded-xl border border-stone-200 bg-white/70 p-3 leading-relaxed text-stone-700"
                    >
                      {shot}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-rose-500">
                  Caption
                </p>
                <p className="mt-2 whitespace-pre-line rounded-xl border border-amber-200 bg-amber-50/80 p-3 leading-relaxed text-stone-700">
                  {dailyPlan.reel.caption}
                </p>
              </div>
            </Section>

            <Section
              title="Instagram Story Flow"
              description={dailyPlan.story.headline}
            >
              <ol className="space-y-3">
                {dailyPlan.story.frames.map((frame) => (
                  <li
                    key={frame.title}
                    className="rounded-xl border border-rose-100 bg-white/70 p-4"
                  >
                    <p className="text-sm font-semibold text-rose-600">
                      {frame.title}
                    </p>
                    <p className="mt-1 text-stone-700">{frame.prompt}</p>
                  </li>
                ))}
              </ol>
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                  CTA
                </p>
                <p className="mt-1 text-stone-700">{dailyPlan.story.cta}</p>
              </div>
            </Section>

            <Section
              title="Comment Reply Templates"
              description="Save replies inside Instagram for instant responses that guide followers into DMs."
            >
              <div className="space-y-3">
                {dailyPlan.commentReplies.map((item) => (
                  <div
                    key={item.trigger}
                    className="rounded-xl border border-stone-200 bg-white/80 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-rose-600">
                        Trigger: {item.trigger}
                      </p>
                      <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600">
                        {item.tone}
                      </span>
                    </div>
                    <p className="mt-2 text-stone-700">{item.reply}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title="DM Sales Scripts"
              description="Guide every chat toward WhatsApp checkout while keeping tone warm and personal."
            >
              <div className="space-y-3">
                {dailyPlan.dmScripts.map((script) => (
                  <div
                    key={script.scenario}
                    className="rounded-xl border border-stone-200 bg-white/80 p-4"
                  >
                    <p className="text-sm font-semibold text-rose-600">
                      {script.scenario}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-rose-400">
                      Goal: {script.goal}
                    </p>
                    <p className="mt-2 text-stone-700">{script.message}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <div className="grid gap-6">
            <Section
              title="Hashtag Stack"
              description="Rotate these with seasonal tags to stay discoverable."
            >
              <div className="flex flex-wrap gap-2">
                {dailyPlan.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Facebook Group Post">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-rose-600">
                  {dailyPlan.facebookPost.headline}
                </p>
                <p className="whitespace-pre-line rounded-xl border border-stone-200 bg-white/80 p-4 text-stone-700">
                  {dailyPlan.facebookPost.post}
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-stone-700">
                  <p className="font-semibold text-amber-700">Visual cue</p>
                  <p className="mt-1">{dailyPlan.facebookPost.visualCue}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dailyPlan.facebookPost.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            <Section title="Sales Boosters">
              <ul className="space-y-3">
                {dailyPlan.salesBoosters.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-stone-200 bg-white/80 p-4"
                  >
                    <p className="text-sm font-semibold text-rose-600">
                      {item.title}
                    </p>
                    <p className="mt-1 text-stone-700">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Trust Builder Sign-off">
              <p className="rounded-xl border border-rose-100 bg-rose-50/70 p-4 text-stone-700">
                {dailyPlan.trustBuilder}
              </p>
            </Section>
          </div>
        </main>

        <footer className="mt-6 grid gap-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-stone-600 backdrop-blur-md md:grid-cols-3">
          <p className="font-semibold text-rose-700">Workflow Reminders</p>
          <p>
            Post the reel between 6-8 PM IST for maximum festive engagement. Pin
            the urgency comment and update Highlights named “Festive Glow”.
          </p>
          <p>
            After-sales: request a selfie/review within 48 hours & reuse as
            social proof in stories.
          </p>
        </footer>
      </div>
    </div>
  );
}
