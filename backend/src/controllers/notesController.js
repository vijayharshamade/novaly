
export const getAllNotes = (req, res) => {
    res.status(200).json({ message: "you have created 10 notes Successfully" })
}


export const createNote = (req, res) => {
    res.status(201).json({ message: "you just created a note" })
}

export const updateNote = (req, res) => {
    res.status(200).json({ message: "notes updated successfully" })
}

export const deleteNote = (req, res) => {
    res.status(200).json({ message: "notes deleted successfully" })
}
