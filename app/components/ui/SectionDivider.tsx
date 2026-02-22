export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mt-16 mb-8">
      
      <div className="w-8 h-px bg-neutral-700" />

      <span className="text-xs tracking-widest text-neutral-400 uppercase">
        {label}
      </span>

      <div className="flex-1 h-px bg-neutral-700" />
    </div>
  )
}