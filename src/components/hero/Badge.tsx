"use client";

type BadgeProps = {
  align?: "center" | "left";
  showStrap?: boolean;
};

export default function Badge({
  align = "center",
  showStrap = true,
}: BadgeProps) {
  const claspImage = "/images/clasp-transparent.png";

  const claspPosition = showStrap ? "top-[50px]" : "top-[-70px]";

  return (
    <div
      className={`relative flex flex-col items-center ${
        align === "center" ? "mx-auto" : "w-fit"
      }`}
    >
      {/* Black hanging strap — Hero only */}
      {showStrap && (
        <div
          className="
            absolute left-1/2 -top-[100px] z-[5]
            h-[155px] w-[18px]
            -translate-x-1/2 bg-black
          "
        />
      )}

      {/* LEFT HALF — behind the badge */}
      <img
        src={claspImage}
        alt=""
        draggable={false}
        className={`
          absolute left-1/2 ${claspPosition} z-[8]
          h-[90px] w-auto max-w-none
          -translate-x-1/2
          object-contain pointer-events-none
        `}
        style={{
          clipPath: "inset(0 50% 0 0)",
        }}
      />

      {/* BADGE / PORTRAIT CARD */}
      <div
        className={`
          relative z-10
          ${showStrap ? "mt-[125px]" : "mt-0"}
          h-[228px] w-[177px]
          overflow-hidden rounded-[9px]
          bg-white
          shadow-[0_8px_24px_rgba(0,0,0,0.16)]
        `}
      >
        <img
          src="/images/profile.png"
          alt="Portrait of Zaineb"
          draggable={false}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* RIGHT HALF — in front of the badge */}
      <img
        src={claspImage}
        alt=""
        draggable={false}
        className={`
          absolute left-1/2 ${claspPosition} z-[20]
          h-[90px] w-auto max-w-none
          -translate-x-1/2
          object-contain pointer-events-none
        `}
        style={{
          clipPath: "inset(0 0 0 50%)",
        }}
      />
    </div>
  );
}