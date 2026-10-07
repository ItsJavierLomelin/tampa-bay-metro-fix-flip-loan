import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
const preview=process.env.PREVIEW==='1';
export default defineConfig({site:'https://tampabayfixandflip.loansapp.cfd',base:preview?'/tampa-bay-metro-fix-flip-loan/':'/',output:preview?'static':'server',...(preview?{}:{adapter:cloudflare()}),trailingSlash:'always',build:{format:'directory'}});
