export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-mono text-gradient font-semibold">NullTraceDev</span>
        <p>Discord Moderator &bull; Software Engineer &bull; Bot Developer</p>
        <p className="font-mono text-xs">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
