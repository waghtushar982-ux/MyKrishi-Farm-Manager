export type Farm = { id: string; name: string; village: string; district: string; state: string; acres: number };
export type Field = { id: string; name: string; acres: number; soil: string; cropId: string; note: string };
export type Crop = { id: string; name: string; fieldId: string; season: string; planted: string; stage: string; acres: number };
export type Activity = { id: string; title: string; date: string; field: string; note: string };
export type Transaction = { id: string; kind: 'income' | 'expense'; amount: number; category: string; date: string; note: string };
export type Task = { id: string; title: string; due: string; field: string; done: boolean; note: string };
export type Harvest = { id: string; crop: string; date: string; quantity: number; unit: string; value: number; buyer: string };
export type Scheme = { id: string; title: string; detail: string; eligibility: string; category: string };
export type Observation = { id: string; crop: string; date: string; note: string; followUp: string };
export type Reminder = { id: string; title: string; date: string; done: boolean };
export type Profile = { name: string; phone: string; village: string; district: string; state: string; farmName: string; acres: number; language: 'en' | 'mr' };
export type FarmData = { farm: Farm; fields: Field[]; crops: Crop[]; activities: Activity[]; transactions: Transaction[]; tasks: Task[]; harvests: Harvest[]; schemes: Scheme[]; observations: Observation[]; reminders: Reminder[]; profile: Profile };

export const initialData: FarmData = {
  farm: { id: 'farm-green-valley', name: 'Green Valley Farm', village: 'Karanji (demo village)', district: 'Pune', state: 'Maharashtra', acres: 2.5 },
  fields: [
    { id: 'field-east', name: 'East Plot', acres: 1.4, soil: 'Black cotton soil', cropId: 'crop-cotton', note: 'Level field, near the well' },
    { id: 'field-west', name: 'West Plot', acres: 1.1, soil: 'Medium black soil', cropId: 'crop-soybean', note: 'Rain-fed; bunds checked in June' },
  ],
  crops: [
    { id: 'crop-cotton', name: 'Cotton', fieldId: 'field-east', season: 'Kharif 2025', planted: '2025-06-18', stage: 'Flowering', acres: 1.4 },
    { id: 'crop-soybean', name: 'Soybean', fieldId: 'field-west', season: 'Kharif 2025', planted: '2025-06-22', stage: 'Pod formation', acres: 1.1 },
  ],
  activities: [
    { id: 'act-1', title: 'Cotton sowing', date: '2025-06-18', field: 'East Plot', note: 'Seed variety: Akola-9' },
    { id: 'act-2', title: 'Soybean sowing', date: '2025-06-22', field: 'West Plot', note: 'Line sowing after first rain' },
    { id: 'act-3', title: 'Weeding completed', date: '2025-07-14', field: 'Both plots', note: 'Family labour' },
  ],
  transactions: [
    { id: 'txn-1', kind: 'expense', amount: 4850, category: 'Seeds', date: '2025-06-15', note: 'Cotton and soybean seed' },
    { id: 'txn-2', kind: 'expense', amount: 3250, category: 'Fertilizer', date: '2025-06-28', note: 'Basal dose' },
    { id: 'txn-3', kind: 'expense', amount: 1800, category: 'Labour', date: '2025-07-14', note: 'Weeding support' },
    { id: 'txn-4', kind: 'income', amount: 18400, category: 'Produce sale', date: '2025-08-02', note: 'Previous season tur sale' },
    { id: 'txn-5', kind: 'expense', amount: 960, category: 'Transport', date: '2025-08-07', note: 'Market visit' },
  ],
  tasks: [
    { id: 'task-1', title: 'Check cotton flowers for pests', due: '2025-08-12', field: 'East Plot', done: false, note: 'Look under leaves; record what you see' },
    { id: 'task-2', title: 'Clear water channel', due: '2025-08-13', field: 'West Plot', done: false, note: '' },
    { id: 'task-3', title: 'Buy neem oil', due: '2025-08-09', field: 'Both plots', done: true, note: 'Local shop' },
  ],
  harvests: [{ id: 'harvest-1', crop: 'Tur (previous season)', date: '2025-03-26', quantity: 3.2, unit: 'quintals', value: 18400, buyer: 'Village market' }],
  schemes: [
    { id: 'scheme-1', title: 'PM-KISAN', detail: 'Income support programme for eligible farmer families.', eligibility: 'Eligibility and current application status must be confirmed with an official government channel.', category: 'Income support' },
    { id: 'scheme-2', title: 'PM Fasal Bima Yojana', detail: 'Crop insurance programme with seasonal enrolment windows.', eligibility: 'Coverage, premium and dates vary by crop and season. Confirm locally before applying.', category: 'Crop insurance' },
    { id: 'scheme-3', title: 'Soil Health Card', detail: 'Soil testing and nutrient recommendations through local services.', eligibility: 'Ask the local agriculture office or authorised soil testing centre.', category: 'Soil support' },
  ],
  observations: [{ id: 'obs-1', crop: 'Cotton · East Plot', date: '2025-08-10', note: 'A few curled leaves noticed near the southern edge.', followUp: 'Take a closer look tomorrow and ask a local agriculture officer if it continues.' }],
  reminders: [{ id: 'rem-1', title: 'Review cotton field observation', date: '2025-08-12', done: false }],
  profile: { name: 'Ramesh Patil', phone: 'Not added', village: 'Karanji (demo village)', district: 'Pune', state: 'Maharashtra', farmName: 'Green Valley Farm', acres: 2.5, language: 'en' },
};

const STORAGE_KEY = 'mykrishi-farm-data-v1';
export function loadFarmData(): FarmData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...initialData, ...JSON.parse(raw) } as FarmData;
  } catch { /* damaged local data starts safely from the demo */ }
  return initialData;
}
export function saveFarmData(data: FarmData): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* app remains usable for this session */ }
}
export function makeId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
