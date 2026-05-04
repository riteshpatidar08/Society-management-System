import Flat from '../model/flat.model.js';

export const createFlat = async (req, res) => {
  try {
    const { flatNumber, block, floor } = req.body;
    const newFlat = await Flat.create({ flatNumber, block, floor });
    res.status(201).json({
      message: 'Flat created successfully',
      data: newFlat,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getFlats = async (req, res) => {
  try {
    const flats = await Flat.find();
    res.status(200).json({ data: flats });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id);
    if (!flat) return res.status(404).json({ message: 'Flat not found' });
    res.status(200).json({ data: flat });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateFlat = async (req, res) => {
  try {
    const updatedFlat = await Flat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFlat) return res.status(404).json({ message: 'Flat not found' });
    res.status(200).json({
      message: 'Flat updated successfully',
      data: updatedFlat,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteFlat = async (req, res) => {
  try {
    const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
    if (!deletedFlat) return res.status(404).json({ message: 'Flat not found' });
    res.status(200).json({ message: 'Flat deleted successfully' });
  } catch (error) {
    res.json({ error: error.message });
  }
};
