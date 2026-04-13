"use client";

export default function Demo() {
  return (
    <section id="demo" className="py-24 px-8 bg-bg-secondary border-y border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Watch how Aspera helps you navigate complex coding challenges with ease.
          </p>
        </div>

        <div
          className="aspect-video bg-bg-card border-2 border-dashed border-white/[0.08] rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:border-accent hover:bg-accent/5"
          onClick={() => alert("Demo video coming soon!")}
        >
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-3xl transition-transform hover:scale-110">
            ▶
          </div>
          <p className="text-text-secondary">Demo video coming to YouTube soon</p>
          <p className="text-text-muted text-sm">Click to get notified when it&apos;s ready</p>
        </div>
      </div>
    </section>
  );
}
