export const BRAND = {
  name: "AliShip Logistics",
  tagline: "Sorted. Shipped. Simple.",
  phones: ["+254769473510", "+254100293388"],
  whatsapp: "254100293388",
  email: "logistics.aliship@gmail.com",
  offices: [
    {
      city: "Nairobi",
      address:
        "Philadelphia House, Shop 525, Junction of Tom Mboya Street & Hakati Road, Nairobi CBD",
    },
    {
      city: "Mombasa",
      address: "Majengo King'orani, near Bayleaf Hospital",
    },
  ],
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${BRAND.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export function formatEventTime(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

export function statusTone(
  status: string,
): "delivered" | "exception" | "transit" {
  const s = (status || "").toLowerCase();
  if (s.includes("deliver")) return "delivered";
  if (s.includes("exception") || s.includes("hold") || s.includes("fail"))
    return "exception";
  return "transit";
}

export function statusBadgeClasses(status: string) {
  const tone = statusTone(status);
  if (tone === "delivered")
    return "bg-[#00CC66]/15 text-[#00CC66] border border-[#00CC66]/40";
  if (tone === "exception")
    return "bg-red-500/15 text-red-400 border border-red-500/40";
  return "bg-[#FF6600]/15 text-[#FF6600] border border-[#FF6600]/40";
}
