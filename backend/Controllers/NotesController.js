import { Notes } from "../Model/NotesModel.js";

export const addNotes = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Notes.create({ title, content });

        res.status(201).json({
            msg: 'Note created',
            id: note.id,
            title: note.title,
            content: note.content
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Error creating note', error: err.message
        });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ msg: 'Error retrieving notes', error: err.message });
    }
};


export const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const note = await Notes.findByPk(id);

        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }
        note.title = title;
        note.content = content;

        await note.save();
        res.status(200).json({ msg: 'Note updated', note });
    } catch (err) {
        res.status(500).json({ msg: 'Error updating note', error: err.message });
    }
};


export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await Notes.findByPk(id);

        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        await note.destroy();
        res.status(200).json({ msg: 'Note deleted', note });
    } catch (err) {
        res.status(500).json({ msg: 'Error deleting note', error: err.message });
    }
};
