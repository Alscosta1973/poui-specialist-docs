import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'poui-specialist',
    template: '%s | poui-specialist',
  },
  description:
    'Plugin para Claude Code especializado em PO-UI (Portinari) para projetos Angular integrados ao TOTVS Protheus',
  openGraph: {
    title: 'poui-specialist',
    description:
      'Plugin para Claude Code especializado em PO-UI Angular para TOTVS Protheus. 2 agentes, 3 comandos, 16 templates.',
    url: 'https://alscosta1973.github.io/poui-specialist-docs',
    siteName: 'poui-specialist',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ defaultTheme: 'dark' }}
          search={{
            options: {
              type: 'static',
              api: '/poui-specialist-docs/api/search',
            },
          }}
          i18n={{
            locale: 'pt-BR',
            translations: {
              search: 'Pesquisar',
              searchNoResult: 'Nenhum resultado encontrado',
              toc: 'Nesta página',
              tocNoHeadings: 'Sem tópicos',
              lastUpdate: 'Última atualização',
              chooseLanguage: 'Escolher idioma',
              nextPage: 'Próxima',
              previousPage: 'Anterior',
              chooseTheme: 'Alternar tema',
              editOnGithub: 'Editar no GitHub',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
