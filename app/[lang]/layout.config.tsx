import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import '@/app/global.css';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions = (locale: string): BaseLayoutProps => {
  return {
    i18n,
    nav: {
      title: (
        <div className="font-bold text-2xl flex items-center gap-2">
          <img src="/logo.png" alt="RMinte Docs" width={28} height={28} />
          RMinte Docs
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
};
