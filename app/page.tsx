import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 searchlight" />
      <div className="absolute inset-0 rain-lines" />
      <div className="absolute inset-0 bat-silhouette" />
      <div className="relative z-10 mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Batman</p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight glow-text leading-[1.1]">GOTHAM<br />NIGHTS</h1>
      </div>
      <nav className="relative z-10 flex flex-col gap-4 w-full max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <Link href="/battle"><Button size="lg" className="menu-btn w-full">Новая игра</Button></Link>
        <Link href="/stealth"><Button size="lg" variant="secondary" className="menu-btn w-full">Стелс-миссия</Button></Link>
        <Link href="/detectiv"><Button size="lg" variant="secondary" className="menu-btn w-full">Расследование</Button></Link>
        <Link href="/batmobile-run"><Button size="lg" variant="secondary" className="menu-btn w-full">Погоня</Button></Link>
        <Link href="/boss"><Button size="lg" variant="secondary" className="menu-btn w-full">Битва с боссом</Button></Link>
        <Button size="lg" variant="outline" className="menu-btn w-full">Продолжить</Button>
        <Button size="lg" variant="outline" className="menu-btn w-full">Настройки</Button>
      </nav>
    </div>
  );
}
