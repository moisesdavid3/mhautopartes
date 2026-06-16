export function AnimatedBars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes abDown { 0% { transform: translateY(-110%); } 100% { transform: translateY(110vh); } }
        @keyframes abUp   { 0% { transform: translateY(110vh); } 100% { transform: translateY(-110%); } }
      `}</style>
      {[
        { color: "#215BE1", opacity: 0.13, width: 28, duration: 6,  delay: 0,    dir: "Down", left: "5%"  },
        { color: "#5BA4F5", opacity: 0.11, width: 16, duration: 7,  delay: 0.5,  dir: "Up",   left: "12%" },
        { color: "#215BE1", opacity: 0.10, width: 40, duration: 5,  delay: 1.2,  dir: "Down", left: "20%" },
        { color: "#5BA4F5", opacity: 0.13, width: 20, duration: 8,  delay: 0.3,  dir: "Up",   left: "28%" },
        { color: "#215BE1", opacity: 0.11, width: 34, duration: 6,  delay: 1.8,  dir: "Down", left: "36%" },
        { color: "#5BA4F5", opacity: 0.12, width: 14, duration: 7,  delay: 0.9,  dir: "Up",   left: "44%" },
        { color: "#215BE1", opacity: 0.13, width: 44, duration: 5,  delay: 2.4,  dir: "Down", left: "52%" },
        { color: "#5BA4F5", opacity: 0.10, width: 22, duration: 9,  delay: 0,    dir: "Up",   left: "60%" },
        { color: "#215BE1", opacity: 0.11, width: 18, duration: 6,  delay: 1.5,  dir: "Down", left: "68%" },
        { color: "#5BA4F5", opacity: 0.12, width: 36, duration: 7,  delay: 0.7,  dir: "Up",   left: "76%" },
        { color: "#215BE1", opacity: 0.10, width: 24, duration: 5,  delay: 3.0,  dir: "Down", left: "84%" },
        { color: "#5BA4F5", opacity: 0.13, width: 30, duration: 8,  delay: 1.1,  dir: "Up",   left: "92%" },
      ].map((line, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: line.left,
            width: `${line.width}px`,
            height: "100%",
            background: `linear-gradient(180deg, transparent 0%, ${line.color} 10%, ${line.color} 90%, transparent 100%)`,
            opacity: line.opacity,
            animation: `ab${line.dir} ${line.duration}s linear ${line.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
