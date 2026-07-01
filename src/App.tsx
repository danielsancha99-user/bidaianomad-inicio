import PhoneFrame from './components/PhoneFrame';
import HomeScreenGrid from './components/HomeScreenGrid';
import LinksDock from './components/LinksDock';

const CONTENT_OUTER_HOME =
  'pointer-events-none max-md:px-2.5 max-md:pb-24 max-md:pt-3 px-4 pb-[8.5rem] pt-4 md:pt-14';

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-start overflow-x-hidden bg-[#05070c] max-md:h-svh max-md:overflow-hidden max-md:px-0 max-md:pb-0 max-md:pt-0 md:overflow-y-auto md:px-[clamp(0.375rem,2vw,1.5rem)] md:pb-[clamp(0.75rem,2.5vw,2.25rem)] md:pt-[clamp(0.375rem,2vw,1.5rem)]">
      <PhoneFrame
        innerScreenClassName="bg-[#0A0E17]"
        statusBarClassName="text-white/85 [&_.status-bar-pill]:border-white/20 [&_.status-bar-pill]:bg-white/10"
        enableMobileContentScale
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_-10%,rgba(0,178,214,0.16),transparent_55%),radial-gradient(ellipse_100%_70%_at_50%_115%,rgba(0,178,214,0.06),transparent_50%)]" />
        <div className={`relative z-10 flex h-full min-h-0 w-full flex-1 flex-col ${CONTENT_OUTER_HOME}`}>
          <div className="pointer-events-auto relative flex h-full min-h-0 flex-1 flex-col">
            <HomeScreenGrid />
          </div>
        </div>
        <LinksDock />
      </PhoneFrame>
    </main>
  );
}

export default App;
