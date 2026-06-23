import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

const PLUGIN_VERSION = 'v1.4.0';

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-4 py-20 md:py-32 gap-6 max-w-4xl mx-auto">
        <div className="flex gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            {PLUGIN_VERSION}
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            MIT License
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            Claude Code
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            PO-UI · Portinari
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          poui-specialist
        </h1>

        <p className="text-lg text-fd-muted-foreground max-w-2xl md:text-xl">
          Plugin para Claude Code especializado em{' '}
          <strong className="text-fd-foreground">PO-UI (Portinari)</strong> para projetos{' '}
          <strong className="text-fd-foreground">Angular</strong> integrados ao{' '}
          <strong className="text-fd-foreground">TOTVS Protheus</strong>
        </p>

        <div className="flex gap-3 mt-2">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-2.5 text-sm font-medium transition-colors hover:opacity-90"
          >
            Começar
          </Link>
          <a
            href="https://github.com/Alscosta1973/poui-specialist"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-lg border bg-fd-background px-6 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 pb-12">
        <div className="flex flex-col items-center text-center rounded-xl border bg-fd-card p-6 gap-2">
          <span className="text-3xl font-bold">2</span>
          <span className="text-sm font-medium">Agentes</span>
          <span className="text-xs text-fd-muted-foreground">
            Especializados em geração e review
          </span>
        </div>
        <div className="flex flex-col items-center text-center rounded-xl border bg-fd-card p-6 gap-2">
          <span className="text-3xl font-bold">4</span>
          <span className="text-sm font-medium">Comandos</span>
          <span className="text-xs text-fd-muted-foreground">
            Invocáveis diretamente no Claude Code
          </span>
        </div>
        <div className="flex flex-col items-center text-center rounded-xl border bg-fd-card p-6 gap-2">
          <span className="text-3xl font-bold">16</span>
          <span className="text-sm font-medium">Templates</span>
          <span className="text-xs text-fd-muted-foreground">
            Prontos para adaptar ao seu projeto
          </span>
        </div>
      </section>

      {/* Para quem */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-fd-card p-6">
            <h3 className="text-lg font-semibold mb-3">Para Desenvolvedores Angular</h3>
            <ul className="text-sm text-fd-muted-foreground space-y-2">
              <li>Geração de components PO-UI completos (standalone + OnPush)</li>
              <li>Templates page-list, page-edit, modal-crud, stepper, dashboard</li>
              <li>Testes unitários Karma + Jasmine com cobertura por família de componente</li>
              <li>Integração com REST Protheus — contrato e service prontos</li>
              <li>Review de código com regras de boas práticas, performance e acessibilidade</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-fd-card p-6">
            <h3 className="text-lg font-semibold mb-3">Para Integradores Protheus</h3>
            <ul className="text-sm text-fd-muted-foreground space-y-2">
              <li>Contrato TLPP backend gerado automaticamente</li>
              <li>Padrões de deploy: build, pasta .app, rdmake, appserver.ini</li>
              <li>Referência completa de componentes PO-UI com inputs/outputs</li>
              <li>Quirks e armadilhas documentadas de produção</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Install */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="rounded-xl border bg-fd-card p-6 text-center">
          <h3 className="text-lg font-semibold mb-3">Instalação rápida</h3>
          <div className="bg-fd-background rounded-lg border p-4 text-left font-mono text-sm overflow-x-auto">
            <div className="text-fd-muted-foreground"># Dentro do Claude Code</div>
            <div>/plugin marketplace add Alscosta1973/poui-specialist</div>
            <div>/plugin install poui-specialist@Alscosta1973-poui-specialist</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-fd-muted-foreground space-y-3">
        <p>
          Criado por{' '}
          <a
            href="https://github.com/Alscosta1973"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-fd-foreground hover:underline"
          >
            Andre Costa
          </a>
        </p>
        <p className="text-xs max-w-2xl mx-auto">
          PO-UI, Portinari, TOTVS e Protheus são produtos e marcas registradas de propriedade da TOTVS S.A.
          Este plugin é um projeto independente e não possui vínculo com a TOTVS, suas franquias ou representantes.
        </p>
      </footer>
    </HomeLayout>
  );
}
