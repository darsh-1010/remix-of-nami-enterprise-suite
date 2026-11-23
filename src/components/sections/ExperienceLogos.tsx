import Image from "next/image";

const LOGOS = [
  { src: "/logos/experience/ing.svg", alt: "ING", width: 627, height: 159, className: "h-10" },
  {
    src: "/logos/experience/kotak-mahindra-bank.svg",
    alt: "Kotak Mahindra Bank",
    width: 107,
    height: 29,
    className: "h-9",
  },
  {
    src: "/logos/experience/kc-mehta.png",
    alt: "K C Mehta & Co LLP, Chartered Accountants",
    width: 550,
    height: 94,
    className: "h-8",
  },
];

/** Previous employers, shown as transparent logos that sit directly on the dark page. */
export function ExperienceLogos() {
  return (
    <div className="mt-8">
      <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
        Experience
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-5">
        {LOGOS.map((l) => (
          <Image
            key={l.src}
            src={l.src}
            alt={l.alt}
            width={l.width}
            height={l.height}
            className={`${l.className} w-auto`}
          />
        ))}
      </div>
    </div>
  );
}
