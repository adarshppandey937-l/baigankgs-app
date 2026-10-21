export const APP_NAME = "pandey ji";
export const APP_TAGLINE = "Free Batches, Lectures & Notes";
export const APP_ICON = "https://i.postimg.cc/wv3RgCjh/Screenshot-2026-07-30-13-33-52-41-948cd9899890cbd5c2798760b2b95377.jpg";
export const TELEGRAM_URL = "https://whatsapp.com/channel/0029VbDcWLp8PgsHZKtwRd0z";
export const TELEGRAM_HANDLE = "pandey ji";
export const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbDcWLp8PgsHZKtwRd0z";

export interface CategoryInfo {
  id: string | number;
  name: string;
  badge: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", name: "All Batches", badge: "1100+", icon: "Sparkles" },
  { id: "foundation", name: "Foundation Batches", badge: "Khan Sir", icon: "GraduationCap" },
  { id: "upsc_bpsc", name: "UPSC & BPSC / PCS", badge: "Civil Services", icon: "Landmark" },
  { id: "ssc_railway", name: "SSC & Railway", badge: "Govt Exams", icon: "Train" },
  { id: "police_defence", name: "Police & Defence", badge: "SI / NDA", icon: "Shield" },
  { id: "teaching", name: "Teaching & TGT/PGT", badge: "CTET / STET", icon: "BookOpen" },
  { id: "banking", name: "Banking & CLAT", badge: "Finance / Law", icon: "Briefcase" },
  { id: "tech", name: "Tech & Masterclasses", badge: "Skills", icon: "Cpu" },
];
