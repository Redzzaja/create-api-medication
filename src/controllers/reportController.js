import { ReportModel } from "../models/reportModel.js";

export const ReportController = {
  async getTotal(req, res) {
    try {
      const total = await ReportModel.getTotalMedications();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
