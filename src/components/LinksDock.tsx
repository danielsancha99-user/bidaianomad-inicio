import { DOCK_ITEMS } from '../config/siteConfig';
import { appIconShellClassName } from './LinkAppIcon';

export default function LinksDock() {
  return (
    <div className="absolute bottom-2 left-2 right-2 z-[8] flex flex-col items-center justify-center max-md:bottom-2 md:bottom-3 md:left-[10px] md:right-4">
      <div className="dock-glass grid h-20 w-full grid-cols-4 gap-x-1.5 gap-y-0 rounded-[30px] border border-white/10 px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:gap-x-2.5 md:px-[15px]">
        {DOCK_ITEMS.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            data-testid={`dock-${item.key}-link`}
            className="flex touch-manipulation items-center justify-center"
          >
            <div className={appIconShellClassName}>
              <img src={item.iconSrc} alt="" width={74} height={74} draggable={false} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
