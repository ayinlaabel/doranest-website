function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.6V12l3 1.8" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.2 5.2 5.8v5.4c0 4 2.8 7.5 6.8 9.2 4-1.7 6.8-5.2 6.8-9.2V5.8L12 3.2Z" />
      <path d="m9 11.8 2.1 2.1 3.9-4" />
    </svg>
  );
}

function PickupBusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.6 6.6A1.8 1.8 0 0 1 5.4 4.8h11.8a1.8 1.8 0 0 1 1.8 1.8v8.2H3.6V6.6Z" />
      <path d="M3.6 10.4h14.4" />
      <path d="M7.4 4.8v5.6M11.6 4.8v5.6" />
      <circle cx="7.3" cy="17.1" r="1.5" className="fill-white" />
      <circle cx="14" cy="17.1" r="1.5" className="fill-white" />
      <circle cx="19" cy="6.4" r="3.4" className="fill-[#FCF6E4]" />
      <path d="m17.5 6.4 1 1 2-2.1" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s6.4-5.1 6.4-10.2a6.4 6.4 0 1 0-12.8 0C5.6 15.9 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.3" />
    </svg>
  );
}

const processHighlights = [
  {
    title: 'Precision Timing',
    description: 'Coordinated directly with school dismissal times.',
    icon: <ClockIcon className="h-[15px] w-[15px]" />,
  },
  {
    title: 'Secure Handoff',
    description: 'Strict ID verification for all designated staff.',
    icon: <ShieldCheckIcon className="h-[15px] w-[15px]" />,
  },
];

const services = [
  { label: 'Shelter', count: '4 locations' },
  { label: 'Education Support', count: '12 locations' },
  { label: 'Healthcare Access', count: '9 locations' },
  { label: 'Community Programs', count: '15 locations' },
];

const coverageStats = [
  { label: 'Total Centers', value: '42' },
  { label: 'Families Served', value: '15,000+' },
  { label: 'Area Covered', value: '750 km²' },
];

const districts: { name: string; x: number; y: number; size?: number }[] = [
  { name: 'IKEJA', x: 272, y: 48, size: 5.4 },
  { name: 'MUSHIN', x: 231, y: 55, size: 5.2 },
  { name: 'SURULERE', x: 252, y: 91, size: 5.2 },
  { name: 'YABA', x: 297, y: 83, size: 5.4 },
  { name: 'FESTAC', x: 64, y: 128, size: 5.4 },
  { name: 'FESTAC', x: 26, y: 157, size: 5.4 },
  { name: 'AJAH', x: 126, y: 157, size: 5.2 },
  { name: 'LEKKI', x: 166, y: 155, size: 5.2 },
  { name: 'IKOYI', x: 188, y: 106, size: 5.2 },
  { name: 'VICTORIA', x: 204, y: 111, size: 5.2 },
  { name: 'ISLAND', x: 208, y: 118, size: 5.2 },
  { name: 'LAGOS ISLAND', x: 174, y: 131, size: 4.6 },
  { name: 'LAGOS LAGOON', x: 177, y: 143, size: 4.3 },
  { name: 'ATLANTIC OCEAN', x: 77, y: 201, size: 5 },
];

const centers = [
  { x: 301, y: 61 },
  { x: 264, y: 84 },
  { x: 208, y: 103 },
  { x: 190, y: 122 },
  { x: 150, y: 145 },
  { x: 118, y: 147 },
];

function CoverageMap() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-[3px] border border-[#E9E6DF] bg-[#F2F0EB] sm:h-[212px]">
      <svg
        viewBox="0 0 344 218"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Illustrated map showing Dora's Nest coverage across Lagos, including Festac, Lekki, Victoria Island, Yaba and Surulere."
      >
        <rect width="344" height="218" fill="#F2F0EB" />

        {/* District fills */}
        <path d="M0 0h344v218H0z" fill="#F2F0EB" />
        <path d="M0 26 60 16l36 24-8 40-62 8L0 70V26Z" fill="#EDEBE6" />
        <path d="M286 0h58v54l-44 18-30-22 4-32 12-18Z" fill="#EFEDE8" />
        <path d="M70 100l54-22 30 18-10 48-42 16-38-24 6-36Z" fill="#EFEDE8" />
        <path d="M220 120l58-32 40 16-6 52-42 22-46-18-4-40Z" fill="#EEECE7" />

        {/* Roads */}
        <g fill="none" stroke="#DFDCD5" strokeWidth="1.1">
          <path d="M-8 62c46 4 70-12 108-6s52 20 88 14 66-22 100-18 40 4 64 0" />
          <path d="M-6 96c36-10 62-2 92-10s46-24 82-22 54 18 88 12 54-8 92-2" />
          <path d="M-10 132c44 8 58-10 96-6s50 20 86 14 58-18 94-14 52 12 82 8" />
          <path d="M12 0c6 34 2 58 12 90s22 52 18 88 8 30 10 42" />
          <path d="M64 0c4 30 20 46 20 78s-10 52-2 82 14 40 12 58" />
          <path d="M122 0c2 28-10 48-6 78s18 44 14 74-4 46-2 66" />
          <path d="M180 0c-6 26 8 44 6 70s-14 44-8 72 12 50 10 76" />
          <path d="M236 0c2 30 14 44 12 72s-12 46-4 74 10 44 8 72" />
          <path d="M292 0c-2 28 10 46 8 74s-8 44-2 72 8 42 4 72" />
          <path d="M330 0c4 34-8 52-6 82s10 44 6 72-8 38-6 64" />
        </g>
        <g fill="none" stroke="#D3D0C9" strokeWidth="1.6">
          <path d="M-6 70c50 6 74-6 112-4s58 14 92 10 62-16 96-12 38 10 62 6" />
          <path d="M-4 150c40 2 62-8 98-6s52 16 88 12 58-14 92-10 50 10 76 8" />
          <path d="M96 0c-4 40 10 58 8 90s-12 50-8 80 12 34 12 48" />
          <path d="M252 0c4 32-8 50-6 80s12 44 8 74-8 38-4 64" />
        </g>

        {/* Water */}
        <path
          d="M0 178c38-8 64 4 102-2 44-7 62 8 104 2 38-6 64 2 100-4 14-3 26-1 38 0v44H0v-40Z"
          fill="#D9D8D3"
        />
        <path
          d="M198 126c22-4 34 4 60 0 20-3 38 4 58 0 12-2 20 0 28 2v30c-16-4-26 2-44 2-22 0-34-6-56-2-24 4-38-2-46-4v-28Z"
          fill="#DFDED9"
        />
        <path d="M0 178c38-8 64 4 102-2 44-7 62 8 104 2" fill="none" stroke="#C7C5BF" strokeWidth="1" />

        {/* Coverage area */}
        <path
          d="M126 55c14-18 48-27 80-22 30 5 52 18 62 40 12 26 2 48-20 68-24 22-58 32-90 28-30-4-52-18-62-40-11-24-4-52 30-74Z"
          fill="#57534C"
          fillOpacity="0.22"
          stroke="#5C584F"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <path
          d="M126 55c14-18 48-27 80-22 30 5 52 18 62 40 12 26 2 48-20 68-24 22-58 32-90 28-30-4-52-18-62-40-11-24-4-52 30-74Z"
          fill="none"
          stroke="#5C584F"
          strokeOpacity="0.35"
          strokeWidth="4"
          strokeDasharray="2 5"
        />

        {/* District labels */}
        <g fontFamily="inherit" fill="#6C6A63" letterSpacing="0.4">
          {districts.map((district) => (
            <text
              key={`${district.name}-${district.x}`}
              x={district.x}
              y={district.y}
              fontSize={district.size ?? 5}
            >
              {district.name}
            </text>
          ))}
          <text x="70" y="201" fontSize="4.6" fontStyle="italic">
            Atlantic Ocean
          </text>
        </g>

        {/* Center markers */}
        <g>
          {centers.map((center, index) => (
            <g key={`${center.x}-${center.y}`}>
              <circle
                className="map-ping"
                cx={center.x}
                cy={center.y}
                r="4.2"
                fill="none"
                stroke="#8A867D"
                strokeWidth="1"
                style={{ animationDelay: `${index * 0.38}s` }}
              />
              <circle cx={center.x} cy={center.y} r="4.2" fill="#FFFFFF" stroke="#8A867D" strokeWidth="1" />
              <circle cx={center.x} cy={center.y} r="1.5" fill="#55524C" />
            </g>
          ))}
        </g>
      </svg>

      {/* Map controls */}
      <div className="absolute left-[10px] top-[10px] flex flex-col gap-[6px]">
        <div className="flex w-[18px] flex-col divide-y divide-[#E7E4DD] overflow-hidden rounded-[3px] bg-white text-[10px] leading-none text-[#6C6A63] shadow-sm">
          <span className="flex h-[16px] items-center justify-center">+</span>
          <span className="flex h-[16px] items-center justify-center">−</span>
        </div>
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-white text-[#6C6A63] shadow-sm">
          <PinIcon className="h-[10px] w-[10px]" />
        </span>
      </div>

      {/* Coverage badge */}
      <div className="absolute right-[9px] top-[9px] flex items-center gap-[5px] rounded-[3px] bg-white/[0.92] px-[6px] py-[4px] shadow-sm">
        <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#6C6A63] font-brand text-[6px] font-bold leading-none text-white">
          D
        </span>
        <span className="font-brand text-[5.5px] font-semibold leading-[1.25] tracking-[0.05em] text-[#5B5953]">
          DORA&apos;S NEST
          <br />
          COVERAGE AREA
        </span>
      </div>

      {/* Coverage callout */}
      <div className="absolute right-[16%] top-[54%] flex items-center gap-[5px] rounded-[3px] bg-white/[0.94] px-[6px] py-[4px] shadow-sm">
        <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#6C6A63] font-brand text-[6px] font-bold leading-none text-white">
          D
        </span>
        <span className="font-brand text-[5.5px] font-semibold leading-[1.25] tracking-[0.05em] text-[#5B5953]">
          DORA&apos;S NEST
          <br />
          COVERAGE AREA
        </span>
      </div>

      {/* Legend */}
      <div className="absolute bottom-[9px] right-[9px] rounded-[3px] border border-[#E3E0D9] bg-white/[0.94] px-[6px] py-[5px] font-brand text-[5.3px] leading-[1.75] text-[#6C6A63]">
        <p className="flex items-center gap-[4px]">
          <span className="h-[4px] w-[4px] rounded-full bg-[#6C83A8]" />
          Blue = Active Coverage
        </p>
        <p className="flex items-center gap-[4px]">
          <span className="h-[4px] w-[4px] rounded-full bg-[#7E9A78]" />
          Green = Planned Expansion
        </p>
        <p className="flex items-center gap-[4px]">
          <span className="h-[4px] w-[4px] rounded-full bg-[#8A867D]" />
          Dots = Centers
        </p>
      </div>
    </div>
  );
}

function LagosCoverageCard() {
  return (
    <article
      data-reveal="up"
      className="rounded-[10px] border border-[#EFECE5] bg-[#F3F1EC] p-[16px] shadow-[0_18px_40px_-34px_rgba(63,72,75,0.35)] [--reveal-delay:220ms] sm:p-[18px]"
    >
      <div>
        <h3 className="font-brand text-[13px] font-semibold leading-[18px] text-ink sm:text-[15px]">
          Programs &amp; Services: Lagos Coverage
        </h3>
        <p className="mt-[3px] font-brand text-[7px] leading-[10px] text-[#98958D]">
          Home / Programs &amp; Services / Lagos Coverage
        </p>
      </div>

      <div className="mt-[10px] grid gap-[10px] sm:grid-cols-[118px_minmax(0,1fr)] sm:gap-[14px]">
        <aside className="hidden border-[#EDEAE3] pr-[10px] sm:block sm:border-r">
          <p className="font-brand text-[6.5px] font-semibold uppercase tracking-[0.08em] text-[#928F87]">
            Available Services
          </p>
          <ul className="mt-[4px] divide-y divide-[#E9E6DF]">
            {services.map((service) => (
              <li key={service.label} className="py-[7px]">
                <p className="font-brand text-[8px] font-medium leading-[11px] text-[#5D5B55]">
                  {service.label}
                </p>
                <p className="mt-[2px] font-brand text-[6.5px] leading-[9px] text-[#9A978F]">
                  {service.count}
                </p>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0">
          <CoverageMap />

          <div className="mt-[8px] grid grid-cols-3 border-t border-[#E4E1DA] pt-[6px]">
            {coverageStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-brand text-[7px] leading-[10px] text-[#8E8B83]">{stat.label}</p>
                <p className="font-brand text-[12px] font-semibold leading-[16px] text-[#4F4D48]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function PickupSection() {
  return (
    <section className="bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1200px] px-6 pt-[56px] pb-[48px] md:px-10 lg:px-0 lg:pt-[76px] lg:pb-[68px]">
        <div className="grid items-start gap-[48px] lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-[34px]">
          <div className="min-w-0">
            <div data-reveal="up" className="flex items-start gap-[16px]">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[13px] border border-[#EFE6D2] bg-[#FBF7EC] text-[#9A7620]">
                <PickupBusIcon className="h-[26px] w-[26px]" />
              </span>
              <div className="min-w-0">
                <h2 className="font-brand text-[23px] font-bold leading-[1.15] text-brand sm:text-[24px]">
                  Reliable School Pickup
                </h2>
                <p className="mt-[7px] font-brand text-[10.5px] font-bold uppercase leading-[15px] tracking-[0.11em] text-[#8A6B00]">
                  Dedicated Logistics &amp; Chaperone
                </p>
              </div>
            </div>
            <p
              data-reveal="up"
              className="mt-[20px] max-w-[455px] font-brand text-[16px] leading-[28px] text-ink [--reveal-delay:90ms] sm:text-[18px] sm:leading-[30px]"
            >
              We understand the demands on modern parents. Our logistics team ensures a safe, timely
              transition from school to Dora&apos;s Nest.
            </p>

            <div
              data-reveal="up"
              className="mt-[32px] rounded-[8px] bg-white px-[22px] py-[20px] shadow-[0_16px_34px_-30px_rgba(63,72,75,0.45)] [--reveal-delay:170ms]"
            >
              <h3 className="font-brand text-[12.5px] font-semibold uppercase leading-[18px] tracking-[0.06em] text-brand">
                Process Highlights
              </h3>
              <ul className="mt-[14px] flex flex-col gap-[15px]">
                {processHighlights.map((highlight) => (
                  <li key={highlight.title} className="flex items-start gap-[14px]">
                    <span className="mt-[1px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-lilac text-brand">
                      {highlight.icon}
                    </span>
                    <div className="min-w-0 font-brand">
                      <p className="text-[13.5px] font-semibold leading-[20px] text-ink">
                        {highlight.title}
                      </p>
                      <p className="text-[13.5px] leading-[20px] text-ink">
                        {highlight.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 lg:mt-[8px]">
            <LagosCoverageCard />
          </div>
        </div>
      </div>
    </section>
  );
}
