# Worker CodeceptJS + Playwright

[![E2E Pipeline](https://github.com/ZyamHunter/worker-codeceptjs/actions/workflows/e2e-pipeline.yml/badge.svg)](https://github.com/ZyamHunter/worker-codeceptjs/actions/workflows/e2e-pipeline.yml)

Projeto com 30 testes para o site:

https://demoqa.com/

## Instalar

```bash
npm install
npm run pw:install
```

## Rodar sem worker (serial)

```bash
npm run test:serial
```

## Rodar com workers (paralelo)

```bash
npm run test:workers
```

## Rodar com 3 workers diferentes (perfis)

```bash
npm run test:workers:3profiles
```

Esse comando usa a secao `multiple.profiles` do `codecept.conf.js` e sobe 3 workers com configuracoes distintas:
- profile 1: `en-US`, `1280x720`, `userAgent=worker-codeceptjs/profile-1`
- profile 2: `pt-BR`, `1366x768`, `userAgent=worker-codeceptjs/profile-2`
- profile 3: `es-ES`, `1920x1080`, `userAgent=worker-codeceptjs/profile-3`

## CI (GitHub Actions)

Workflow criado em:

`.github/workflows/e2e-pipeline.yml`

Pipeline configurada com:
- execucao automatica em `push` e `pull_request`
- execucao manual (`workflow_dispatch`) com benchmark serial opcional
- cache de dependencias (`npm`) e navegadores Playwright
- upload de artifacts da pasta `output`
