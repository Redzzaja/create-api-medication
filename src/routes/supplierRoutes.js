import express from "express";
import { SupplierController } from "../controllers/supplierController.js";
const router = express.Router();
router.get("/", SupplierController.getAll);
router.get("/:id", SupplierController.getById);
router.post("/", SupplierController.create);
router.put("/:id", SupplierController.update);
router.delete("/:id", SupplierController.remove);
export default router;
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase.from("suppliers").delete().eq("id", id);

    if (error) throw error;

    res.json({ message: `Supplier ${id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
