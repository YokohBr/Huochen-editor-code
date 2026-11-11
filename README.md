# Huochen Code Station — publicar no Vercel

Site estático: não precisa de build. Arquivos: `index.html` (o editor), `sw.js` (modo offline) e `vercel.json`.

## Opção A — pelo site (GitHub)
1. Crie um repositório no GitHub e envie os 3 arquivos (Add file → Upload files).
2. Em vercel.com/new, entre com a conta do GitHub e importe o repositório.
3. Framework Preset: **Other**. Deixe Build Command e Output Directory vazios. Clique em **Deploy**.
4. Pronto: você ganha um endereço `https://seu-projeto.vercel.app`.

## Opção B — pelo terminal
```
npm i -g vercel
cd huochen-vercel
vercel --prod
```
(responda às perguntas; no framework escolha "Other").

## Depois de publicar
- O YouTube/Spotify, o Python (Pyodide) e a execução remota passam a funcionar (precisam de https e internet).
- Abra o endereço no celular e use "Adicionar à Tela de Início" para instalar como app.
- Atualizar o editor = substituir o `index.html` e fazer novo deploy (o `git push` já dispara sozinho).
