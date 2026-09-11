import React from 'react';
import { ShieldAlert, Phone, HeartPulse, Church, MapPin, X, ExternalLink, Info } from 'lucide-react';

interface EmergencyDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyDirectoryModal: React.FC<EmergencyDirectoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-auto">
        {/* Header */}
        <div className="p-4 bg-rose-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <h3 className="font-serif font-bold text-base sm:text-lg">
              Pronto Soccorso, SOS & Info Utili del Cammino
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-rose-900 text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 text-xs sm:text-sm text-stone-700 max-h-[75vh] overflow-y-auto">
          {/* Emergency Numbers Grid */}
          <div>
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-xs font-mono mb-2.5 text-rose-800">
              Numeri di Emergenza Nazionale
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="tel:112"
                className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between hover:bg-rose-100 transition-colors"
              >
                <div>
                  <span className="font-bold text-stone-900 block text-sm">112 - Numero Unico Emergenze</span>
                  <span className="text-xs text-stone-500">Carabinieri, Polizia, Vigili del Fuoco</span>
                </div>
                <Phone className="w-4 h-4 text-rose-600" />
              </a>

              <a
                href="tel:118"
                className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between hover:bg-rose-100 transition-colors"
              >
                <div>
                  <span className="font-bold text-stone-900 block text-sm">118 - Emergenza Sanitaria</span>
                  <span className="text-xs text-stone-500">Ambulanza & Guardia Medica h24</span>
                </div>
                <HeartPulse className="w-4 h-4 text-rose-600" />
              </a>
            </div>
          </div>

          {/* Credenziale & Ospitalità Religiosa */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
            <h4 className="font-bold text-amber-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <Church className="w-4 h-4 text-amber-700" />
              Regole della Credenziale del Pellegrino
            </h4>
            <p className="text-xs leading-relaxed text-stone-700">
              La <strong>Credenziale</strong> è il passaporto del viandante. Consente l'accesso alle strutture di accoglienza 'pellegrina' (conventi, monasteri, foresterie parrocchiali) a donativo o prezzo calmierato.
            </p>
            <ul className="list-disc pl-4 text-xs space-y-1 text-stone-600">
              <li><strong>Preavviso telefonico:</strong> Chiama sempre il convento o la parrocchia qualche ora prima (entro le 15:00-16:00) per confermare l'arrivo a piedi.</li>
              <li><strong>Timbro:</strong> Fatti apporre ogni sera il timbro (sello) della chiesa o convento sulla credenziale.</li>
              <li><strong>Donativo:</strong> Se la struttura è 'a donativo libero', la consuetudine etica prevede 10-15€ a persona per coprire pulizia, acqua calda e spese vive.</li>
            </ul>
          </div>

          {/* Tenda & Bivacco Notturno */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <h4 className="font-bold text-emerald-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <Info className="w-4 h-4 text-emerald-700" />
              Regole Bivacco con Tenda in Italia
            </h4>
            <p className="text-xs leading-relaxed text-stone-700">
              Il campeggio libero permanente è vietato, ma il <strong>bivacco notturno</strong> (montare la tenda al tramonto e smontarla all'alba senza lasciare tracce né accendere fuochi a terra) è ampiamente tollerato sui cammini escursionistici, soprattutto chiedendo permesso al parroco o proprietario del terreno.
            </p>
          </div>

          {/* Salva-Vita Booking */}
          <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-1.5">
            <h4 className="font-bold text-rose-900 text-xs font-mono uppercase">
              Come funziona la funzione "Salva-Vita Booking"
            </h4>
            <p className="text-xs leading-relaxed text-stone-700">
              Per ogni tappa dell'itinerario abbiamo identificato e memorizzato le <strong>2 offerte ricettive più economiche</strong> (B&B low cost, ostelli o affittacamere) poste a pochi metri dal tracciato. Se il convento non risponde, c'è temporale o non stai bene, tocca il pulsante "Vedi Offerte Booking" nella scheda della tappa per prenotare al volo una camera riparata!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
          >
            Ho capito, chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
