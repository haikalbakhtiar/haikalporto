export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
      <p>&#169; {new Date().getFullYear()} Haikal. Built with Next.js + Tailwind CSS. Deployed on Vercel.</p>
    </footer>
  );
}
