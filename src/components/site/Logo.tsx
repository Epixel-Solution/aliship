import logo from "@/assets/aliship-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt="AliShip Logistics"
        width={28}
        height={28}
        className="object-contain"
      />
      <div className="leading-tight">
        <div className="font-display text-sm font-extrabold tracking-wide">
          <span className="text-white">ALISHIP</span>{" "}
          <span className="text-[#FF6600]">LOGISTICS</span>
        </div>
        <div className="text-[10px] italic text-[#FF6600]/80 font-semibold">
          Sorted. Shipped. Simple.
        </div>
      </div>
    </div>
  );
}