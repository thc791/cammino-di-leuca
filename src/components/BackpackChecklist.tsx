import React, { useState, useEffect } from 'react';
import { Backpack, CheckSquare, Square, AlertCircle, Sparkles, Scale, Info, Plus, Trash2 } from 'lucide-react';
import { BackpackItem } from '../types';

export const BackpackChecklist: React.FC = () => {
  const defaultItems: BackpackItem[] = [
    // Tenda & Sonno
    { id: 'bp-1', category: 'tenda_sonno', name: 'Tenda ultraleggera 1-2 posti (autoportante)', weightGrams: 1450, packed: true, essential: true },
    { id: 'bp-2', category: 'tenda_sonno', name: 'Sacco a pelo estivo/mezza stagione (comfort 10°C)', weightGrams: 750, packed: true, essential: true },
    { id: 'bp-3', category: 'tenda_sonno', name: 'Materassino isolante gonfiabile (R-value > 2)', weightGrams: 480, packed: true, essential: true },
    { id: 'bp-4', category: 'tenda_sonno', name: 'Telo sottotenda / Groundsheet protettivo', weightGrams: 180, packed: true, essential: false },
    
    // Cucina & Acqua
    { id: 'bp-5', category: 'cucina_acqua', name: 'Fornellino a gas ultraleggero a vite', weightGrams: 85, packed: true, essential: true },
    { id: 'bp-6', category: 'cucina_acqua', name: 'Bomboletta gas (100g/230g)', weightGrams: 350, packed: true, essential: true },
    { id: 'bp-7', category: 'cucina_acqua', name: 'Gavetta in titanio o alluminio con coperchio (750ml)', weightGrams: 140, packed: true, essential: true },
    { id: 'bp-8', category: 'cucina_acqua', name: 'Cucchiaio/Spork pieghevole & accendino', weightGrams: 40, packed: true, essential: true },
    { id: 'bp-9', category: 'cucina_acqua', name: 'Sacca idrica / Borracce (Capacità 2.5 Litri)', weightGrams: 220, packed: true, essential: true },

    // Abbigliamento
    { id: 'bp-10', category: 'abbigliamento', name: 'Poncho impermeabile traspirante coprizaino', weightGrams: 310, packed: true, essential: true },
    { id: 'bp-11', category: 'abbigliamento', name: 'Piumino 100g ultraleggero o pile termico', weightGrams: 290, packed: true, essential: true },
    { id: 'bp-12', category: 'abbigliamento', name: '3 paia calze tecniche anti-vescica (doppio strato)', weightGrams: 180, packed: true, essential: true },
    { id: 'bp-13', category: 'abbigliamento', name: '2 magliette tecniche traspiranti in lana merino', weightGrams: 240, packed: true, essential: true },
    { id: 'bp-14', category: 'abbigliamento', name: 'Pantaloni da trekking modulari staccabili', weightGrams: 320, packed: true, essential: true },
    { id: 'bp-15', category: 'abbigliamento', name: 'Ciabatte leggere o sandali per doccia in convento', weightGrams: 190, packed: true, essential: true },

    // Igiene & Farmacia
    { id: 'bp-16', category: 'igiene_farmacia', name: 'Kit Vesciche: Ago sterile, filo di cotone, Betadine, Compeed', weightGrams: 95, packed: true, essential: true },
    { id: 'bp-17', category: 'igiene_farmacia', name: 'Crema all\'ossido di zinco o vaselina anti-frizione', weightGrams: 80, packed: true, essential: true },
    { id: 'bp-18', category: 'igiene_farmacia', name: 'Spazzolino, dentifricio solido, sapone di Marsiglia multiuso', weightGrams: 130, packed: true, essential: true },
    { id: 'bp-19', category: 'igiene_farmacia', name: 'Asciugamano microfibra ultrarapido', weightGrams: 110, packed: true, essential: true },

    // Documenti & Tech
    { id: 'bp-20', category: 'documenti_tech', name: 'CREDENZIALE UFFICIALE DEL PELLEGRINO (In busta stagna)', weightGrams: 40, packed: true, essential: true },
    { id: 'bp-21', category: 'documenti_tech', name: 'Carta d\'identità, tessera sanitaria, contanti per donativi', weightGrams: 70, packed: true, essential: true },
    { id: 'bp-22', category: 'documenti_tech', name: 'Power bank 10.000 mAh + cavetti ricarica', weightGrams: 220, packed: true, essential: true },
    { id: 'bp-23', category: 'documenti_tech', name: 'Torcia frontale ricaricabile USB (per bivacco e conventi)', weightGrams: 65, packed: true, essential: true },
    { id: 'bp-24', category: 'documenti_tech', name: 'Bastoncini da trekking (coppia)', weightGrams: 480, packed: true, essential: true },
  ];

  const [items, setItems] = useState<BackpackItem[]>(() => {
    try {
      const saved = localStorage.getItem('cammino_leuca_backpack');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultItems;
  });

  const [newItemName, setNewItemName] = useState('');
  const [newItemWeight, setNewItemWeight] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<BackpackItem['category']>('tenda_sonno');

  useEffect(() => {
    try {
      localStorage.setItem('cammino_leuca_backpack', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const togglePacked = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, packed: !it.packed } : it))
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemWeight) return;
    const item: BackpackItem = {
      id: `bp-${Date.now()}`,
      category: newItemCategory,
      name: newItemName.trim(),
      weightGrams: Number(newItemWeight),
      packed: true,
      essential: false,
    };
    setItems([...items, item]);
    setNewItemName('');
    setNewItemWeight('');
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((x) => x.id !== id));
  };

  const totalGrams = items.filter((i) => i.packed).reduce((acc, curr) => acc + curr.weightGrams, 0);
  const totalKg = Math.round((totalGrams / 1000) * 100) / 100;
  const isWeightSafe = totalKg <= 9.5; // Optimal base weight for tent trekking

  return (
    <div className="space-y-6">
      {/* Weight Banner */}
      <div
        className={`p-5 rounded-2xl border-2 shadow-sm flex flex-wrap items-center justify-between gap-4 ${
          isWeightSafe
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950'
            : 'bg-amber-500/15 border-amber-500/40 text-amber-950'
        }`}
      >
        <div className="flex items-center gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${
              isWeightSafe ? 'bg-emerald-700' : 'bg-amber-600'
            }`}
          >
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider block">
              Peso Base Zaino & Tenda Calcolato
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-extrabold">{totalKg} kg</span>
              <span className="text-xs font-mono text-stone-600">({totalGrams} grammi)</span>
            </div>
            <p className="text-xs text-stone-600 mt-0.5">
              {isWeightSafe
                ? '✓ Peso eccellente! Sei sotto la soglia consigliata di 9.5 kg per il cammino con tenda.'
                : '⚠ Attenzione: Stai superando i 9.5 kg. Aggiungendo 2L d\'acqua e cibo supererai gli 11.5 kg! Riduci il superfluo.'}
            </p>
          </div>
        </div>

        <div className="text-xs text-stone-600 bg-white/80 p-3 rounded-lg border border-stone-200/80 max-w-sm">
          <span className="font-bold block text-stone-800 mb-1 flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            Regola aurea del pellegrino con tenda:
          </span>
          Il peso dello zaino a secco non deve mai superare il 10% del tuo peso corporeo. Con acqua e cibo puoi arrivare al 12%.
        </div>
      </div>

      {/* Add new gear item form */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
        <h4 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
          <Plus className="w-4 h-4 text-emerald-600" />
          Aggiungi Oggetto Personalizzato allo Zaino
        </h4>

        <form onSubmit={handleAddItem} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <input
            type="text"
            placeholder="Nome oggetto (es. Telo termico, calze di ricambio)"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="sm:col-span-2 p-2 border border-stone-300 rounded-lg"
            required
          />
          <input
            type="number"
            placeholder="Peso in grammi (es. 120)"
            value={newItemWeight}
            onChange={(e) => setNewItemWeight(e.target.value)}
            className="p-2 border border-stone-300 rounded-lg font-mono"
            required
          />
          <button
            type="submit"
            className="p-2 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Aggiungi allo Zaino
          </button>
        </form>
      </div>

      {/* Items list grouped */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm divide-y divide-stone-100 overflow-hidden">
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <span className="font-bold text-stone-800 text-sm flex items-center gap-2">
            <Backpack className="w-4 h-4 text-stone-600" />
            Checklist Attrezzatura da Trekking ({items.filter((i) => i.packed).length} / {items.length} inseriti)
          </span>
          <button
            onClick={() => {
              if (confirm('Vuoi ripristinare la lista equipaggiamento consigliata predefinita?')) {
                setItems(defaultItems);
              }
            }}
            className="text-xs text-stone-500 hover:text-amber-700 underline cursor-pointer"
          >
            Ripristina Predefiniti
          </button>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`p-3.5 flex items-center justify-between gap-3 text-xs transition-colors hover:bg-stone-50/80 ${
              item.packed ? 'opacity-100' : 'opacity-40 bg-stone-50/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => togglePacked(item.id)}
                className="text-stone-700 hover:text-emerald-700 cursor-pointer"
              >
                {item.packed ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-stone-400" />
                )}
              </button>

              <div>
                <span className={`font-medium ${item.packed ? 'text-stone-900' : 'text-stone-400 line-through'}`}>
                  {item.name}
                </span>
                {item.essential && (
                  <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                    Essenziale
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono font-bold text-stone-700 text-xs">
                {item.weightGrams} g
              </span>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-stone-300 hover:text-rose-600 cursor-pointer"
                title="Rimuovi"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
