import Image from "next/image";

const TEAM = [
  { name: "TAMIA INAYA", role: "Production Director", img: "/images/team1.png" },
  { name: "PRISCILLA L.", role: "Senior Video Editor", img: "/images/team2.png", highlight: true },
  { name: "LINCOLN A.", role: "Motion Designer", img: "/images/team3.png" },
  { name: "ANTHONY L.", role: "Design Lead", img: "/images/team4.png" },
  { name: "MICHAEL O.", role: "Principle Designer", img: "/images/team5.png" },
  { name: "AURORA MAYA", role: "Copywriter", img: "/images/team6.png" },
  { name: "HANNAH B.", role: "Cinematographer", img: "/images/team7.png" },
  { name: "CORDELIA C.", role: "Junior Manager", img: "/images/team8.png" },
];

export default function MeetTeamSection() {
  return (
    <section className="w-full min-h-[80vh] bg-[#0b110a] flex flex-col items-center py-16 px-4">
      {/* Título */}
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-[#f4f4f4] mb-12 tracking-tight">
        MEET <span className="text-[#b6ff5e]">✻</span> WITH<br />BRILLIANT TEAM
      </h2>
      {/* Grid dos membros */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {TEAM.map((member, idx) => (
          <div
            key={member.name}
            className={`rounded-xl border border-[#232b1b] bg-[#101510] flex flex-col items-center p-4 transition-all duration-200 shadow-lg ${member.highlight ? 'ring-2 ring-[#b6ff5e] bg-[#f6fffa]' : ''}`}
          >
            <div className={`w-full aspect-square rounded-lg overflow-hidden mb-4 ${member.highlight ? 'bg-[#e6fff3]' : 'bg-[#151d14]'}`}>
              <Image
                src={member.img}
                alt={member.name}
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`text-lg md:text-xl font-bold uppercase tracking-tight ${member.highlight ? 'text-[#222]' : 'text-white'}`}>{member.name}</div>
            <div className={`text-xs md:text-sm mt-1 ${member.highlight ? 'text-[#444]' : 'text-[#bfc8e6]'}`}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
