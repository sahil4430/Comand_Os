import TerminalController from "@/components/TerminalController";

export default function Home() {
  return (
     <div className="w-screen h-screen overflow-hidden">
      <TerminalController className="w-full h-full" />
    </div>
  );
}
