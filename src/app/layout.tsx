import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { CustomCursor } from "@/components/custom-cursor";
import { siteOrigin } from "@/lib/site-url";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: "Igor Mazeti — Análise de Dados e BI", template: "%s | Igor Mazeti" },
  description: "Portfólio de Igor Mazeti de Oliveira, estudante de ADS no IFSP em busca de estágio em Dados e BI. Conheça os projetos DataVision e Gym OS.",
  openGraph: { title: "Igor Mazeti — Análise de Dados e BI", description: "Estudante de ADS no IFSP. Projetos em análise de dados, visualização e desenvolvimento de software.", type: "website", locale: "pt_BR", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const themeScript = `try{const saved=localStorage.getItem('theme');const theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch{}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
