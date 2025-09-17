import { supabase } from "../config/supabaseClient.js";

export const ReportModel = {
  async getTotalMedications() {
    const { count, error } = await supabase
      .from("medications")
      .select("id", { count: "exact", head: true });

    if (error) throw error;
    return count;
  },
};
