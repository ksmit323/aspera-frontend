export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-white/[0.08] text-center text-text-muted">
      <p>
        © 2026 Aspera. Built with 💜 by{" "}
        <a href="#" className="text-text-secondary hover:text-accent transition-colors">
          Kenneth Smith
        </a>
      </p>
      <p className="mt-2 text-sm">
        Questions?{" "}
        <a
          href="mailto:hello@aspera.dev"
          className="text-text-secondary hover:text-accent transition-colors"
        >
          hello@aspera.dev
        </a>
      </p>
    </footer>
  );
}
