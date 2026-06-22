import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ilxyuyaxvrekyqkekntj.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlseHl1eWF4dnJla3lxa2VrbnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzI4MDcsImV4cCI6MjA5NDI0ODgwN30.swXMvT4R8bKJDhvpqg7Tts6ydYJHB_vrvaDEc8JUHiA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export type TrackEvent = {
  tracking_number: string;
  current_status: string;
  event_status: string;
  event_notes: string | null;
  event_time: string;
  rider_phone: string | null;
};
