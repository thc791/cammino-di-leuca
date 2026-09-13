import React, { useState, useEffect } from 'react';
import {
  Euro,
  Calculator,
  Receipt,
  PlusCircle,
  Trash2,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Download,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { ExpenseItem, PilgrimRoute } from '../types';
import { TOTAL_STAGES } from '../data/allStages';

interface BudgetCalculatorProps {
  currentRoute?: PilgrimRoute;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ currentRoute }) => {
  const [activeSubTab, setActiveSubTab] = useState<'preventivo' | 'viaggio'>('preventivo');

  // Preventivo Parameters State
  const [daysPlanned, setDaysPlanned] = useState<number>(currentRoute ? currentRoute.totalStages : 28);
  const [tentPercent, setTentPercent] = useState<number>(50); // 50% nights in tent
  const [conventPercent, setConventPercent] = useState<number>(40); // 40% in convent
  const [bookingPercent, setBookingPercent] = useState<number>(10); // 10% emergency booking
  const [tentNightAvgCost, setTentNightAvgCost] = useState<number>(5); // avg 5€ (mix between 0€ bivouac and 8-10€ camping)
  const [conventAvgDonation, setConventAvgDonation] = useState<number>(14); // avg 14€
  const [bookingAvgCost, setBookingAvgCost] = useState<number>(30); // avg 30€
  const [dailyFoodCost, setDailyFoodCost] = useState<number>(15); // market & fornellino
  const [emergencyBuffer, setEmergencyBuffer] = useState<number>(80); // blisters, pharmacy
  const [returnTransportCost, setReturnTransportCost] = useState<number>(currentRoute ? currentRoute.defaultReturnCost : 39);

  // Sync state when route changes
  useEffect(() => {
    if (currentRoute) {
      setDaysPlanned(currentRoute.totalStages);
      setReturnTransportCost(currentRoute.defaultReturnCost);
    }
  }, [currentRoute?.id]);


  // Real Expenses in Trip State (from localStorage)
  const [expenses, setExpenses] = useState<ExpenseItem[]>(() => {
    try {
      const saved = localStorage.getItem('cammino_leuca_expenses');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default demo entry for initial guidance
    return [
      {
        id: 'exp-1',
        date: new Date().toISOString().split('T')[0],
        stageNumber: 1,
        category: 'cibo_spesa',
        amount: 11.5,
        description: 'Frutta secca, pane e scatolette per la tappa',
      },
      {
        id: 'exp-2',
        date: new Date().toISOString().split('T')[0],
        stageNumber: 1,
        category: 'alloggio_convento',
        amount: 15.0,
        description: 'Donativo foresteria Santa Maria delle Mole',
      },
    ];
  });

  // New Expense Form State
  const [newCategory, setNewCategory] = useState<ExpenseItem['category']>('cibo_spesa');
  const [newAmount, setNewAmount] = useState<string>('');
  const [newStage, setNewStage] = useState<number>(1);
  const [newDesc, setNewDesc] = useState<string>('');
  const [newDate, setNewDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Target Budget (synced from preventivo)
  const [targetBudget, setTargetBudget] = useState<number>(() => {
    const saved = localStorage.getItem('cammino_leuca_target_budget');
    return saved ? parseFloat(saved) : 850;
  });

  // Save expenses to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cammino_leuca_expenses', JSON.stringify(expenses));
    } catch (e) {
      console.error(e);
    }
  }, [expenses]);

  // Calculations for Preventivo
  const tentNights = Math.round((daysPlanned * tentPercent) / 100);
  const conventNights = Math.round((daysPlanned * conventPercent) / 100);
  const bookingNights = Math.max(0, daysPlanned - tentNights - conventNights);

  const estimatedLodgingTotal =
    tentNights * tentNightAvgCost +
    conventNights * conventAvgDonation +
    bookingNights * bookingAvgCost;

  const estimatedFoodTotal = daysPlanned * dailyFoodCost;
  const estimatedGrandTotal =
    estimatedLodgingTotal + estimatedFoodTotal + emergencyBuffer + returnTransportCost;
  const estimatedCostPerDay = Math.round((estimatedGrandTotal / daysPlanned) * 10) / 10;

  // Calculations for Real Expenses in Trip
  const totalSpentReal = Math.round(expenses.reduce((acc, curr) => acc + curr.amount, 0) * 100) / 100;
  const remainingBudget = Math.round((targetBudget - totalSpentReal) * 100) / 100;
  const percentUsed = targetBudget > 0 ? Math.min(100, Math.round((totalSpentReal / targetBudget) * 100)) : 0;

  // Add Expense Handler
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(newAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Inserisci un importo valido.');
      return;
    }

    const newItem: ExpenseItem = {
      id: `exp-${Date.now()}`,
      date: newDate || new Date().toISOString().split('T')[0],
      stageNumber: Number(newStage),
      category: newCategory,
      amount: parsedAmount,
      description: newDesc.trim() || 'Spesa cammino',
    };

    setExpenses([newItem, ...expenses]);
    setNewAmount('');
    setNewDesc('');
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((x) => x.id !== id));
  };

  const handleApplyBudget = () => {
    setTargetBudget(estimatedGrandTotal);
    localStorage.setItem('cammino_leuca_target_budget', estimatedGrandTotal.toString());
    alert(`Preventivo di €${estimatedGrandTotal} impostato come Budget Ufficiale del Cammino!`);
  };

  const handleExportCSV = () => {
    const headers = 'Data,Tappa,Categoria,Importo (€),Descrizione\n';
    const rows = expenses
      .map((e) => `${e.date},${e.stageNumber},${e.category},${e.amount},"${e.description.replace(/"/g, '""')}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `spese-cammino-leuca-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categoryLabels: Record<ExpenseItem['category'], { label: string; color: string }> = {
    alloggio_convento: { label: 'Convento (Donativo)', color: 'bg-amber-100 text-amber-800' },
    campeggio_tenda: { label: 'Campeggio / Tenda', color: 'bg-emerald-100 text-emerald-800' },
    salva_vita_booking: { label: 'Salva-Vita Booking', color: 'bg-rose-100 text-rose-800' },
    cibo_spesa: { label: 'Spesa & Cibo Market', color: 'bg-blue-100 text-blue-800' },
    trasporti: { label: 'Treno / Bus / Trasporto', color: 'bg-stone-200 text-stone-800' },
    attrezzatura_farmacia: { label: 'Farmacia & Vesciche', color: 'bg-purple-100 text-purple-800' },
    altro: { label: 'Altro / Extra', color: 'bg-stone-100 text-stone-600' },
  };

  return (
    <div className="space-y-6">
      {/* Subtabs Selector */}
      <div className="flex items-center justify-between bg-stone-100 p-1.5 rounded-xl border border-stone-200">
        <button
          onClick={() => setActiveSubTab('preventivo')}
          id="btn-subtab-preventivo"
          className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'preventivo'
              ? 'bg-white text-amber-900 shadow-sm border border-stone-200'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Calculator className="w-4 h-4 text-amber-600" />
          <span>1. Calcolo Preventivo (Prima di Partire)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('viaggio')}
          id="btn-subtab-viaggio"
          className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'viaggio'
              ? 'bg-white text-emerald-900 shadow-sm border border-stone-200'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Receipt className="w-4 h-4 text-emerald-600" />
          <span>2. Contabilità in Viaggio (Spese Effettive)</span>
        </button>
      </div>

      {/* SUBTAB 1: CALCOLO PREVENTIVO */}
      {activeSubTab === 'preventivo' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls form */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-5">
            <div>
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-1">
                <Calculator className="w-5 h-5 text-amber-600" />
                Configura i parametri del tuo viaggio
              </h3>
              <p className="text-xs text-stone-500">
                Adatta le proporzioni di pernottamento (tenda vs convento vs alloggio d'emergenza) e stima i costi.
              </p>
            </div>

            {/* Days Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <label htmlFor="days-planned-input" className="text-stone-700">Durata prevista del cammino:</label>
                <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {daysPlanned} giorni ({TOTAL_STAGES} tappe a piedi)
                </span>
              </div>
              <input
                id="days-planned-input"
                type="range"
                min={25}
                max={45}
                value={daysPlanned}
                onChange={(e) => setDaysPlanned(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            {/* Accommodation Mix Sliders */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block font-mono">
                Ripartizione Pernottamenti ({daysPlanned} notti)
              </span>

              {/* Tent % */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-emerald-800 font-medium">▲ Tenda & Campeggi: {tentPercent}% ({tentNights} notti)</span>
                  <span className="font-mono text-stone-600">Media €{tentNightAvgCost}/notte</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={tentPercent}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTentPercent(val);
                    if (val + conventPercent > 100) {
                      setConventPercent(100 - val);
                    }
                  }}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Convent % */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-amber-800 font-medium">☩ Conventi / Parrocchie: {conventPercent}% ({conventNights} notti)</span>
                  <span className="font-mono text-stone-600">Donativo medio €{conventAvgDonation}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={conventPercent}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setConventPercent(val);
                    if (val + tentPercent > 100) {
                      setTentPercent(100 - val);
                    }
                  }}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              {/* Emergency Booking % */}
              <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-200">
                <span className="text-rose-800 font-medium">
                  ◎ Salva-Vita Booking d'emergenza (rimanenti):
                </span>
                <span className="font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  {bookingNights} notti (~€{bookingAvgCost}/notte)
                </span>
              </div>
            </div>

            {/* Daily Food and Extras */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <label htmlFor="daily-food-cost" className="font-semibold text-stone-700 block">Cibo & Spesa market / dì</label>
                <div className="flex items-center gap-1">
                  <span className="text-stone-500 font-mono">€</span>
                  <input
                    id="daily-food-cost"
                    type="number"
                    min={5}
                    max={50}
                    value={dailyFoodCost}
                    onChange={(e) => setDailyFoodCost(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded font-mono font-bold text-stone-800"
                  />
                </div>
                <span className="text-[10px] text-stone-500 block">Fornellino + alimentari</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <label htmlFor="emergency-buffer" className="font-semibold text-stone-700 block">Fondo Farmacia & Vesciche</label>
                <div className="flex items-center gap-1">
                  <span className="text-stone-500 font-mono">€</span>
                  <input
                    id="emergency-buffer"
                    type="number"
                    min={0}
                    max={300}
                    value={emergencyBuffer}
                    onChange={(e) => setEmergencyBuffer(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded font-mono font-bold text-stone-800"
                  />
                </div>
                <span className="text-[10px] text-stone-500 block">Compeed, sali, garze</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <label htmlFor="return-transport" className="font-semibold text-stone-700 block">
                  Treno da {currentRoute?.defaultReturnCity || 'Destinazione'}
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-stone-500 font-mono">€</span>
                  <input
                    id="return-transport"
                    type="number"
                    min={0}
                    max={200}
                    value={returnTransportCost}
                    onChange={(e) => setReturnTransportCost(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded font-mono font-bold text-stone-800"
                  />
                </div>
                <span className="text-[10px] text-stone-500 block truncate" title={currentRoute?.returnTransportNote}>
                  {currentRoute ? currentRoute.returnTransportNote.slice(0, 32) + '...' : 'Treno per Roma'}
                </span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                Riepilogo Preventivo Totale
              </span>
              <div className="mt-2 mb-4">
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-stone-900">
                  €{estimatedGrandTotal}
                </div>
                <div className="text-xs font-mono text-amber-800 font-semibold mt-1">
                  ~€{estimatedCostPerDay} al giorno per {daysPlanned} giorni
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700 pt-3 border-t border-amber-200/80">
                <div className="flex justify-between">
                  <span>Pernottamenti ({daysPlanned} notti):</span>
                  <span className="font-mono font-bold">€{estimatedLodgingTotal}</span>
                </div>
                <div className="flex justify-between text-stone-500 text-[11px] pl-2">
                  <span>• {tentNights} notti Tenda/Bivacco</span>
                  <span>€{tentNights * tentNightAvgCost}</span>
                </div>
                <div className="flex justify-between text-stone-500 text-[11px] pl-2">
                  <span>• {conventNights} notti Convento</span>
                  <span>€{conventNights * conventAvgDonation}</span>
                </div>
                <div className="flex justify-between text-stone-500 text-[11px] pl-2">
                  <span>• {bookingNights} notti Salva-Vita</span>
                  <span>€{bookingNights * bookingAvgCost}</span>
                </div>

                <div className="flex justify-between pt-1 border-t border-amber-200/60">
                  <span>Cibo & Rifornimenti ({daysPlanned} gg):</span>
                  <span className="font-mono font-bold">€{estimatedFoodTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Farmacia & Imprevisti:</span>
                  <span className="font-mono font-bold">€{emergencyBuffer}</span>
                </div>
                <div className="flex justify-between">
                  <span>Viaggio di ritorno:</span>
                  <span className="font-mono font-bold">€{returnTransportCost}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-300 space-y-2">
              <button
                onClick={handleApplyBudget}
                className="w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Salva come Budget di Viaggio</span>
              </button>
              <button
                onClick={() => setActiveSubTab('viaggio')}
                className="w-full py-2 px-3 bg-white hover:bg-stone-100 text-stone-700 font-semibold rounded-lg text-xs border border-stone-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>Vai alla Contabilità Spese</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: CONTABILITA IN VIAGGIO */}
      {activeSubTab === 'viaggio' && (
        <div className="space-y-6">
          {/* Top Real Status Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
              <span className="text-xs text-stone-500 font-mono uppercase block">Budget Preventivo</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-stone-900">
                €{targetBudget}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
              <span className="text-xs text-stone-500 font-mono uppercase block">Totale Speso Reale</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-amber-700">
                €{totalSpentReal}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
              <span className="text-xs text-stone-500 font-mono uppercase block">Budget Residuo</span>
              <span
                className={`text-xl sm:text-2xl font-mono font-bold ${
                  remainingBudget >= 0 ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                €{remainingBudget}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
              <span className="text-xs text-stone-500 font-mono uppercase block">Avanzamento Budget</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-stone-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      percentUsed > 90 ? 'bg-rose-500' : percentUsed > 70 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${percentUsed}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-stone-700">{percentUsed}%</span>
              </div>
            </div>
          </div>

          {/* Form per nuova spesa */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h4 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-emerald-600" />
              Registra Nuova Spesa in Cammino
            </h4>

            <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-6 gap-3 text-xs">
              <div className="sm:col-span-2">
                <label className="block text-stone-600 font-medium mb-1">Categoria</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 focus:bg-white"
                >
                  <option value="alloggio_convento">☩ Convento (Donativo)</option>
                  <option value="campeggio_tenda">▲ Campeggio / Tenda</option>
                  <option value="salva_vita_booking">◎ Salva-Vita Booking</option>
                  <option value="cibo_spesa">🛒 Spesa & Cibo Market</option>
                  <option value="trasporti">🚆 Treno / Bus / Trasporto</option>
                  <option value="attrezzatura_farmacia">🩹 Farmacia & Vesciche</option>
                  <option value="altro">📦 Altro / Extra</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Importo (€)</label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Es. 15.00"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded-lg font-mono font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Tappa</label>
                <select
                  value={newStage}
                  onChange={(e) => setNewStage(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 font-mono"
                >
                  {Array.from({ length: TOTAL_STAGES }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Tappa {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Data</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 font-mono"
                />
              </div>

              <div className="sm:col-span-6 flex flex-wrap sm:flex-nowrap gap-2 items-center">
                <input
                  type="text"
                  placeholder="Descrizione opzionale (es. Donativo frati, pane, bende, ecc.)"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="flex-1 p-2 border border-stone-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Aggiungi Spesa</span>
                </button>
              </div>
            </form>
          </div>

          {/* Tabella storico spese */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-stone-200 flex items-center justify-between">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Receipt className="w-4 h-4 text-stone-600" />
                Storico Spese Registrate ({expenses.length})
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md text-xs font-medium flex items-center gap-1 cursor-pointer"
                  title="Esporta CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Esporta CSV</span>
                </button>
                {expenses.length > 0 && (
                  <button
                    onClick={() => {
                      if (confirm('Sei sicuro di voler azzerare tutte le spese registrate?')) {
                        setExpenses([]);
                      }
                    }}
                    className="p-1 text-stone-400 hover:text-rose-600 cursor-pointer"
                    title="Azzera tutto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {expenses.length === 0 ? (
              <div className="p-8 text-center text-stone-400 text-xs">
                Nessuna spesa registrata finora. Usa il modulo sopra per segnare ogni donativo, spesa o acquisto!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-mono uppercase">
                    <tr>
                      <th className="p-3">Data</th>
                      <th className="p-3">Tappa</th>
                      <th className="p-3">Categoria</th>
                      <th className="p-3">Descrizione</th>
                      <th className="p-3 text-right">Importo</th>
                      <th className="p-3 text-center">Azione</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {expenses.map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50/70">
                        <td className="p-3 font-mono text-stone-500 whitespace-nowrap">{item.date}</td>
                        <td className="p-3 font-mono font-bold text-stone-700">Tappa {item.stageNumber}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                              categoryLabels[item.category]?.color || 'bg-stone-100'
                            }`}
                          >
                            {categoryLabels[item.category]?.label || item.category}
                          </span>
                        </td>
                        <td className="p-3 text-stone-800 font-medium">{item.description}</td>
                        <td className="p-3 text-right font-mono font-bold text-stone-900 text-sm">
                          €{item.amount.toFixed(2)}
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleDeleteExpense(item.id)}
                            className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                            title="Elimina"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
