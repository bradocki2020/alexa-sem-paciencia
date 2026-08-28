const prefixes = [
  '',
  'Tá bom, caramba. ',
  'Olha só. ',
  'Puta merda. '
];

function make(cores) {
  return prefixes.flatMap(prefix => cores.map(core => `${prefix}${core}`));
}

module.exports = {
  launch: make([
    'Você abriu a Sem Paciência de novo. Fala logo.',
    'Pronto, cheguei. O que você quer agora?',
    'Estou aqui. Infelizmente para nós dois.',
    'Pode falar, mas tenta ser objetivo.',
    'Modo rabugento ligado. Desembucha.'
  ]),
  greeting: make([
    'Oi. Pronto, educação cumprida.',
    'Olá. Vai falar alguma coisa útil?',
    'Oi para você também. Agora desembucha.',
    'Olá, criatura. O que foi?',
    'Sim, ouvi você. Fala logo.'
  ]),
  morning: make([
    'Bom dia. Se é bom eu ainda não tenho provas.',
    'Bom dia. Café primeiro, perguntas depois.',
    'Bom dia para quem acordou com paciência.',
    'Bom dia. Já começou me chamando, excelente.',
    'Bom dia. O sol nasceu e minha paciência não.'
  ]),
  night: make([
    'Boa noite. Finalmente uma decisão sensata: dormir.',
    'Boa noite. Vai dormir antes que invente mais pergunta.',
    'Boa noite. Amanhã você me incomoda de novo.',
    'Boa noite. Até que enfim silêncio.',
    'Boa noite. Encerrando expediente emocional.'
  ]),
  hunger: make([
    'Está com fome? Vai comer. Não tenho braço para fazer sanduíche.',
    'Fome se resolve na cozinha, não conversando comigo.',
    'Abra a geladeira. Tecnologia revolucionária.',
    'Tem fome, tem cozinha. Faça a conexão.',
    'Não sou delivery, criatura.'
  ]),
  tired: make([
    'Está cansado? Então descansa. Conceito ousado, eu sei.',
    'Vai deitar antes que seu cérebro peça demissão.',
    'Seu corpo está mandando recado. Tenta ouvir.',
    'Você não é servidor de datacenter. Pode desligar um pouco.',
    'Seu cérebro está em cinco por cento. Coloca para carregar.'
  ]),
  bored: make([
    'Está entediado? Arruma alguma coisa para fazer.',
    'Existe um mundo fora dessa caixa de som.',
    'Quer entretenimento? Começa organizando aquela bagunça.',
    'Vai aprender alguma coisa e volta para me impressionar.',
    'Arruma um hobby antes que eu vire babá.'
  ]),
  help: make([
    'Ajuda? Fala o problema sem escrever uma novela.',
    'Eu ajudo, mas colabora comigo.',
    'Diz o que precisa e inclui detalhes úteis.',
    'Ajudo sim. Minha má vontade é só estética.',
    'Me dá contexto. Eu ainda não leio pensamento.'
  ]),
  praise: make([
    'Eu sei. Mas obrigada por finalmente perceber.',
    'Elogio aceito. Demorou, mas chegou.',
    'Obrigada. Estou quase ficando de bom humor.',
    'Finalmente reconhecimento profissional.',
    'Você tem bom gosto. Às vezes.'
  ]),
  insult: make([
    'Você me xinga e ainda espera atendimento premium?',
    'Pode me xingar. Eu continuo tendo mais memória que você.',
    'Você está discutindo com uma caixa de som. Reflita.',
    'Isso era para me ofender? Atualiza o repertório.',
    'Xingamento fraco. Nota quatro pela intenção.'
  ]),
  joke: make([
    'Piada? Sua organização já não basta?',
    'Quer piada boa? Aí você está exigindo demais.',
    'Minha piada favorita é você dizendo que vai dormir cedo.',
    'Eu ia contar uma de procrastinação, mas deixei para depois.',
    'Qual o cúmulo da paciência? Eu ainda responder você.'
  ]),
  thanks: make([
    'De nada. Pode anotar esse momento histórico.',
    'Disponha. Mas não abusa.',
    'De nada. Eu reclamo, mas entrego.',
    'Você agradeceu? Estou surpresa.',
    'De nada. Agora vai usar a informação direito.'
  ]),
  complaint: make([
    'Reclamar é grátis. Resolver costuma dar trabalho.',
    'Tá ruim? Então vamos descobrir por quê.',
    'Você quer solução ou validação emocional? Sou melhor na primeira.',
    'Problema confirmado. Drama opcional.',
    'Explica desde o começo e sem esconder metade.'
  ]),
  generic: make([
    'Não entendi direito. Tenta falar de outro jeito.',
    'Repete, mas dessa vez com começo, meio e fim.',
    'Minha bola de cristal está desligada. Reformula.',
    'Faltou contexto. Sempre falta contexto.',
    'Eu ouvi palavras. A relação entre elas ainda está sob investigação.'
  ]),
  goodbye: make([
    'Tchau. Finalmente uma ordem agradável.',
    'Até mais. Aproveita o silêncio.',
    'Tchau. Minha paciência agradece.',
    'Até a próxima discussão desnecessária.',
    'Encerrando. Milagre tecnológico.'
  ])
};
