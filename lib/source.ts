import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { i18n } from '@/lib/i18n';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  i18n,
  icon(icon) {
    if (!icon) {
      // Default icon when no icon is specified
      return ;
    }
    
    // Check if it's a Lucide icon
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons], {
        // You can customize styling here
        className: 'text-blue-600 w-8 h-8', // Change color and size
        strokeWidth: 2, // Thinner lines
      });
    }
  },
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
