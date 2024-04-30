const YourModel = require("../models/Config"); // Import your Mongoose model

// Get data field by config ID
async function getDataFieldByConfigId(configId) {
  try {
    // Find the document with the provided config ID
    const document = await YourModel.findOne({ configId }, 'data').exec();
    
    // Check if document exists
    if (!document) {
      return null;
    }

    // Extract the data field from the document
    return document.data;
  } catch (error) {
    console.error('Error fetching data field by config ID:', error);
    throw error;
  }
}
// Update remark by config ID
async function updateRemarkByConfigId(configId, remark) {
  try {
    // Find the document with the provided config ID and update the remark field
    const updatedConfig = await YourModel.findOneAndUpdate(
      { configId },
      { $set: { remark } },
      { new: true } // Return the updated document
    ).exec();
    
    // Check if the update operation affected any document
    if (!updatedConfig) {
      throw new Error('Failed to update remark: Config ID not found');
    }

    return { message: 'Success' };
  } catch (error) {
    console.error('Error updating remark by config ID:', error.message);
    return { message: 'Failed' };
  }
}




module.exports = { getDataFieldByConfigId, updateRemarkByConfigId };
