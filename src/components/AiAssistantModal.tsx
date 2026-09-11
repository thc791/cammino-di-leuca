import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  Sparkles,
  Send,
  User,
  Church,
  X,
  RefreshCw,
  HelpCircle,
  Tent,
  AlertCircle,
  Lightbulb,
  Trash2
} from 'lucide-react';
import { PilgrimStage } from '../types';

interface AiMessage {
  sender: 'user' | 'ai';
  text: string;
  time: string;
  source?: string;
}

interface AiAssistantModalProps {
  currentStage: PilgrimStage | null;
  onClose?: () => void;
  isInline?: boolean;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  currentStage,
  onClose,
  isInline = false,
}) => {
  const [messages, setMessages] = useState<AiMessage[]>([
    {
      sender: 'ai',
      text:
        'Pace e bene, pellegrino! Sono Fra Cammino, la tua guida per il cammino a piedi con zaino e tenda da Roma a Santa Maria di Leuca. ' +
        'Chiedimi qualsiasi cosa su accoglienza nei conventi con credenziale, regole per la tenda, alloggi salva-vita economici, gestione dell\'acqua, cura dei piedi o risparmio!',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickPrompts = [
    { label: 'Tenda con pioggia/maltempo?', prompt: 'Cosa fare se piove forte mentre sono in cammino con zaino e tenda? Quando conviene attivare il Salva-Vita?' },
    { label: 'Come chiedere accoglienza al convento?', prompt: 'Come presentarsi e chiedere accoglienza telefonica a un convento o parroco con la credenziale del pellegrino?' },
    { label: 'Regole del donativo consapevole', prompt: 'Quali sono le regole etiche del donativo nei conventi e monasteri? Quanto è consigliato lasciare?' },
    { label: 'Cura vesciche e piedi stasera', prompt: 'Come posso curare stasera le vesciche ai piedi dopo una tappa di 25 km e prevenirne di nuove domani?' },
    { label: 'Risparmiare sul cibo con fornellino', prompt: 'Quali cibi nutrienti ed economici comprare nei discount per cucinare col fornellino in tenda?' },
  ];

  const handleSend = async (userText: string) => {
    const textToSend = userText.trim();
    if (!textToSend || isLoading) return;

    const newMsg: AiMessage = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/pilgrim-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          currentStage: currentStage
            ? {
                number: currentStage.number,
                from: currentStage.from,
                to: currentStage.to,
                distanceKm: currentStage.distanceKm,
                elevationGain: currentStage.elevationGainM,
                convents: currentStage.convents.map((c) => ({ name: c.name, type: c.costType })),
                campsites: currentStage.campsites.map((c) => ({ name: c.name, price: c.priceTentPerNightEur })),
                emergencyStays: currentStage.emergencyStays.map((e) => ({ name: e.name, priceMin: e.priceMinEur })),
              }
            : null,
          history: messages.slice(-4),
        }),
      });

      const data = await res.json();
      const aiReply =
        data.reply ||
        'Pace e bene! Ricorda di bere spesso, ascoltare il tuo passo e confidare nell\'ospitalità del cammino.';

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: aiReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: data.source || 'gemini-2.5-flash',
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text:
            'Fratello pellegrino, la connessione è instabile sul sentiero. Se ti trovi in difficoltà per la notte, chiama subito i conventi della tappa o attiva una delle strutture Salva-Vita di Booking indicate nella scheda tappa!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: 'offline-safety',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'ai',
        text:
          'Pace e bene, pellegrino! Sono Fra Cammino, alimentato dal modello gratuito Gemini 2.5 Flash con conoscenza esperta della Via Francigena del Sud da Roma a Leuca con tenda e zaino. Come posso aiutarti?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'gemini-2.5-flash',
      },
    ]);
  };

  return (
    <div
      className={`flex flex-col bg-stone-900 text-stone-100 rounded-2xl border border-stone-700 shadow-2xl overflow-hidden ${
        isInline ? 'w-full h-[650px]' : 'max-w-2xl w-full h-[85vh] mx-auto'
      }`}
    >
      {/* Header */}
      <div className="px-4 py-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-serif font-bold text-base shadow">
            ☩
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-stone-100 text-sm">
                Fra Cammino AI
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono font-medium">
                Gemini 2.5 Flash Free
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-mono">
              {currentStage
                ? `Tappa ${currentStage.number}: ${currentStage.from} → ${currentStage.to} (${currentStage.distanceKm} km)`
                : 'Guida Cammino Roma → S. Maria di Leuca (35 tappe)'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleClearChat}
            title="Azzera conversazione"
            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-stone-800 transition-colors cursor-pointer text-xs flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-3 py-2 bg-stone-800/60 border-b border-stone-700/60 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs">
        <span className="text-[11px] text-amber-400 font-mono font-semibold shrink-0 flex items-center gap-1">
          <Lightbulb className="w-3 h-3" /> Chiedi:
        </span>
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp.prompt)}
            disabled={isLoading}
            className="px-2.5 py-1 rounded-full bg-stone-700 hover:bg-amber-600 hover:text-white text-stone-200 text-[11px] whitespace-nowrap transition-colors border border-stone-600 cursor-pointer shrink-0 disabled:opacity-50"
          >
            {qp.label}
          </button>
        ))}
      </div>

      {/* Messages list */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-serif font-bold text-xs ${
                m.sender === 'user'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-800 border border-amber-500/40 text-amber-300'
              }`}
            >
              {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : '☩'}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                m.sender === 'user'
                  ? 'bg-amber-600 text-white rounded-tr-xs'
                  : 'bg-stone-800/95 text-stone-100 border border-stone-700 rounded-tl-xs shadow'
              }`}
            >
              {m.sender === 'user' ? (
                <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
              ) : (
                <div className="markdown-body text-stone-100 text-xs sm:text-sm leading-relaxed space-y-2 [&_strong]:text-amber-300 [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-1">
                  <Markdown>{m.text}</Markdown>
                </div>
              )}
              <div className="flex items-center justify-between gap-2 mt-1.5 pt-1 border-t border-stone-700/40 text-[10px] font-mono">
                {m.source ? (
                  <span className="text-stone-400 text-[9px]">
                    {m.source === 'gemini-2.5-flash'
                      ? '⚡ Gemini 2.5 Flash'
                      : '☩ Guida Fra Cammino'}
                  </span>
                ) : (
                  <span />
                )}
                <span className={m.sender === 'user' ? 'text-amber-200' : 'text-stone-400'}>
                  {m.time}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2.5 text-stone-400 text-xs">
            <div className="w-7 h-7 rounded-full bg-stone-800 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif">
              ☩
            </div>
            <div className="bg-stone-800 rounded-2xl px-4 py-2 text-stone-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-stone-400">Fra Cammino sta formulando la risposta...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 bg-stone-950 border-t border-stone-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder={
              currentStage
                ? `Chiedi a Fra Cammino sulla Tappa ${currentStage.number} o sul cammino...`
                : 'Chiedi consigli su conventi, tenda, salva-vita, vesciche o budget...'
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white font-bold transition-colors cursor-pointer shrink-0"
            title="Invia messaggio"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
