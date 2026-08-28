const Alexa = require('ask-sdk-core');
const responses = require('./responses');

const SWEAR_RE = /\b(porra|puta merda|caramba|cacete|inferno|droga|merda)\b/i;

function session(handlerInput) {
  return handlerInput.attributesManager.getSessionAttributes();
}

function allowedPool(handlerInput, category) {
  const attrs = session(handlerInput);
  const allowMildSwears = attrs.allowMildSwears !== false;
  const pool = responses[category] || responses.generic;
  const filtered = allowMildSwears ? pool : pool.filter(x => !SWEAR_RE.test(x));
  return filtered.length ? filtered : pool;
}

function pick(handlerInput, category) {
  const pool = allowedPool(handlerInput, category);
  return pool[Math.floor(Math.random() * pool.length)];
}

function keepTalking(handlerInput, category) {
  const speech = pick(handlerInput, category);
  const reprompts = [
    'Vai, fala.',
    'E então?',
    'Próxima.',
    'Pode continuar.',
    'Desembucha.',
    'Estou ouvindo. Infelizmente.'
  ];
  const reprompt = reprompts[Math.floor(Math.random() * reprompts.length)];
  return handlerInput.responseBuilder
    .speak(speech)
    .reprompt(reprompt)
    .getResponse();
}

const LaunchRequestHandler = {
  canHandle(h) { return Alexa.getRequestType(h.requestEnvelope) === 'LaunchRequest'; },
  handle(h) {
    const attrs = session(h);
    if (typeof attrs.allowMildSwears === 'undefined') attrs.allowMildSwears = true;
    return keepTalking(h, 'launch');
  }
};

function intentHandler(intentName, category) {
  return {
    canHandle(h) {
      return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
             Alexa.getIntentName(h.requestEnvelope) === intentName;
    },
    handle(h) { return keepTalking(h, category); }
  };
}

const GreetingHandler = intentHandler('SaudacaoIntent', 'greeting');
const MorningHandler = intentHandler('BomDiaIntent', 'morning');
const NightHandler = intentHandler('BoaNoiteIntent', 'night');
const HungerHandler = intentHandler('FomeIntent', 'hunger');
const TiredHandler = intentHandler('CansacoIntent', 'tired');
const BoredHandler = intentHandler('TedioIntent', 'bored');
const PraiseHandler = intentHandler('ElogioIntent', 'praise');
const InsultHandler = intentHandler('ProvocacaoIntent', 'insult');
const JokeHandler = intentHandler('PiadaIntent', 'joke');
const ThanksHandler = intentHandler('AgradecimentoIntent', 'thanks');
const ComplaintHandler = intentHandler('ReclamacaoIntent', 'complaint');

const HelpHandler = {
  canHandle(h) {
    return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(h.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(h) { return keepTalking(h, 'help'); }
};

const FamilyModeHandler = {
  canHandle(h) {
    return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(h.requestEnvelope) === 'ModoFamiliaIntent';
  },
  handle(h) {
    const attrs = session(h);
    attrs.allowMildSwears = false;
    return h.responseBuilder
      .speak('Tá bom. Modo família ativado. Continuo sem paciência, mas sem palavrão.')
      .reprompt('Vai, fala.')
      .getResponse();
  }
};

const MildSwearModeHandler = {
  canHandle(h) {
    return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(h.requestEnvelope) === 'ModoSemFiltroIntent';
  },
  handle(h) {
    const attrs = session(h);
    attrs.allowMildSwears = true;
    return h.responseBuilder
      .speak('Modo sem filtro leve ativado. Não exagera, caramba.')
      .reprompt('Fala logo.')
      .getResponse();
  }
};

const StopHandler = {
  canHandle(h) {
    return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
      ['AMAZON.CancelIntent', 'AMAZON.StopIntent'].includes(Alexa.getIntentName(h.requestEnvelope));
  },
  handle(h) {
    return h.responseBuilder.speak(pick(h, 'goodbye')).withShouldEndSession(true).getResponse();
  }
};

const FallbackHandler = {
  canHandle(h) {
    return Alexa.getRequestType(h.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(h.requestEnvelope) === 'AMAZON.FallbackIntent';
  },
  handle(h) { return keepTalking(h, 'generic'); }
};

const SessionEndedHandler = {
  canHandle(h) { return Alexa.getRequestType(h.requestEnvelope) === 'SessionEndedRequest'; },
  handle(h) { return h.responseBuilder.getResponse(); }
};

const ErrorHandler = {
  canHandle() { return true; },
  handle(h, error) {
    console.error(`Erro tratado: ${error.stack || error}`);
    return h.responseBuilder
      .speak('Deu erro. Até eu tenho limite. Tenta de novo.')
      .reprompt('Vai, tenta outra vez.')
      .getResponse();
  }
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    GreetingHandler,
    MorningHandler,
    NightHandler,
    HungerHandler,
    TiredHandler,
    BoredHandler,
    PraiseHandler,
    InsultHandler,
    JokeHandler,
    ThanksHandler,
    ComplaintHandler,
    HelpHandler,
    FamilyModeHandler,
    MildSwearModeHandler,
    StopHandler,
    FallbackHandler,
    SessionEndedHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
