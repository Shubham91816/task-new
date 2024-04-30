const express = require("express");
const router = express.Router();

// Import controller
const { getDataFieldByConfigId, updateRemarkByConfigId } = require("../controllers/configuration");

// Get data by config ID
router.get('/configurations/:configId', async (req, res) => {
  const { configId } = req.params;

  try {
    // Call the controller function to get data by config ID
    const data = await getDataFieldByConfigId(configId);

    // If data is found, return it
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Data not found for the specified configId' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update remark by config ID
router.put('/configurations/:configId', async (req, res) => {
  const { configId } = req.params;
  const { remark } = req.body;

  try {
    // Call the controller function to update remark by config ID
    const updatedConfig = await updateRemarkByConfigId(configId, remark);

    // If update is successful, return the updated document
    if (updatedConfig) {
      res.json(updatedConfig);
    } else {
      res.status(404).json({ message: 'Config ID not found' });
    }
  } catch (error) {
    console.error('Error updating remark:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
