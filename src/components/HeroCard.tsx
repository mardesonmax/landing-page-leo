import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

type HeroCardProps = {
  icon?: IconType;
  className?: string;
  bgImage?: string;
  children: React.ReactNode;
};

export function HeroCard({
  className,
  bgImage = "/assets/img/bg-card-banner.png",
  children,
}: HeroCardProps) {
  return (
    <div
      className={cn(
        "group relative block  rounded-[24px] bg-[radial-gradient(80.38%_222.5%_at_-13.75%_-12.36%,#98F9FF_0%,rgba(255,255,255,0)_100%),radial-gradient(80.69%_208.78%_at_108.28%_112.58%,#EABFFF_0%,rgba(135,38,183,0)_100%)] p-[2px] ",
        className
      )}
    >
      <div className="relative flex h-full bg-black flex-col justify-between overflow-hidden rounded-[24px] text-sm text-white/85 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-[80px] transition group-hover:text-white">
        <div
          className="flex flex-col h-full w-full justify-center gap-2 bg-cover bg-center bg-no-repeat p-4 text-white"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
