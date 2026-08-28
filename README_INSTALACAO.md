# Alexa — Sem Paciência

Projeto pronto em **pt-BR** para uma Custom Skill Alexa-Hosted (Node.js).

## O que já está pronto

- 300 respostas únicas.
- Personalidade: sem paciência, brava, sarcástica e mal-educada de forma cômica.
- Alguns palavrões leves.
- `AMAZON.FallbackIntent` em sensibilidade HIGH para capturar melhor frases fora dos intents principais.
- Conversa continua aberta após a resposta, para você poder falar de novo sem reabrir a Skill imediatamente.
- Comando `modo família`: remove respostas com palavrões durante a sessão.
- Comando `modo sem filtro`: reativa palavrões leves durante a sessão.
- Idioma e modelo: pt-BR.
- Nome de invocação: `sem paciência`.

## Exemplos

- "Alexa, abrir sem paciência"
- Depois: "bom dia"
- "estou com fome"
- "estou cansado"
- "conta uma piada"
- "você é chata"
- "obrigado"
- "modo família"
- "modo sem filtro"
- "parar"

## Estrutura

- `lambda/index.js` — lógica da Skill.
- `lambda/responses.js` — as 300 respostas.
- `lambda/package.json` — dependências.
- `skill-package/interactionModels/custom/pt-BR.json` — modelo de voz.
- `skill-package/skill.json` — manifesto.

## Importar no Alexa Developer Console

1. Crie uma nova Skill.
2. Nome: `Sem Paciência`.
3. Idioma: `Português (Brasil)`.
4. Modelo: `Custom`.
5. Hospedagem: `Alexa-Hosted (Node.js)`.
6. Escolha **Import Skill**.
7. Use a URL Git deste repositório.
8. Aguarde o build.
9. Vá em **Test** e habilite o teste em Development.
10. Diga: `Alexa, abrir sem paciência`.

## Observação importante

Uma Custom Skill não substitui a personalidade global da Alexa. A personalidade “Sem Paciência” fica ativa dentro da Skill. Enquanto a sessão permanecer aberta, você pode continuar falando normalmente e ela seguirá respondendo com esse personagem.

## Ajustar o nível de palavrões

Para deixar sem palavrões durante a sessão, diga:
`modo família`

Para voltar aos palavrões leves:
`modo sem filtro`
