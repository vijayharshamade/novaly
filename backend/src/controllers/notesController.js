
export const getAllNotes = (req, res) => {
    res.status(200).json({ message: "you have created 10 notes Successfully" })
}


export const createNote = (req, res) => {
    res.status(201).json({ message: "you just Created a Note" })
}

export const updateNote = (req, res) => {
    res.status(200).json({ message: "nots updated successfuully" })
}

export const deleteNote = (req, res) => {
    res.status(200).json({ message: "notes deleted successfully" })
}