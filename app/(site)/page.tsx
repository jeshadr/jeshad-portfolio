import Header from "@/components/Header";
import MobilePlayerSheet from "@/components/Mobile/MobilePlayerSheet";
import MobileNotice from "./components/MobileNotice";
import PageContent from "./components/PageContent";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto no-scrollbar">
      <MobileNotice />
      <Header backgroundColor="from-emerald-800">
        <div className="mb-2">
          <h1 className="text-white text-4xl font-semibold">Welcome to Jeshadify!</h1>
          <p className="text-neutral-400 text-sm mt-1">
            A Spotify-themed portfolio where you can explore my projects, skills, and experience!
          </p>
        </div>
      </Header>
      <div className="mt-5 mb-7">
        <PageContent />
      </div>
      
      {/* Bottom player sheet for mobile */}
      <MobilePlayerSheet title="My Projects" />
    </div>
  );
}
