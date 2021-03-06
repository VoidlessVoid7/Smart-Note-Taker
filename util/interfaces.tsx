import { Dispatch, SetStateAction } from "react";

export interface Note {
    id: number;
    title: string;
    body?: string;
    lastModified: number;
    author: any
}

export interface AppContextInterface {
    state: {
        notes: Note[];
        activeNote: number | undefined;
        user: any;
    }
    setNotes: Dispatch<SetStateAction<Note[]>>;
    setUser: any;
    onAddNote: (user: string) => void;
    setActiveNote: React.Dispatch<React.SetStateAction<number | undefined>>;
    onUpdateNote: (updatedNote: Note) => Note | void;
    onDeleteNote: (idToDelete: Note) => void;
    getActiveNote: () => Note | undefined;
    writeNote: (note: Note) => Promise<void>;
    writeAllNotes: Function;
    updateUser: any;
}