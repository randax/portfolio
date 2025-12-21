export function TestDesignSystem() {
  return (
    <div className="p-6 space-y-4">
      <div className="bg-background text-foreground p-4 border border-border rounded-xl">
        Background + Foreground
      </div>
      <div className="bg-primary text-primary-foreground p-4 rounded-xl">
        Primary Color
      </div>
      <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
        Secondary Color
      </div>
      <p className="font-sans">Inter Font (Sans)</p>
      <p className="font-mono">JetBrains Mono (Mono)</p>
    </div>
  );
}
