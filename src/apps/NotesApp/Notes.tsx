import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import NoteCard from "./NoteCard";
import NewNote from "./NewNote";
import Popup from "reactjs-popup";
import { IoIosAdd } from "react-icons/io";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  body: string;
};

export default function Notes() {
  const [notes, setNotes] = useLocalStorage<Note[]>("Notes", []);
  const closeModal = () => setOpen(false);

  const [open, setOpen] = useState<boolean>(false);
  function onCreate({ ...data }: NoteData) {
    setNotes((prevNotes: NoteData[]) => {
      return [...prevNotes, { ...data, id: uuidv4() }];
    });
  }
  function onUpdate(id: string, { ...data }: NoteData) {
    setNotes((prevNotes: Note[]) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data };
        } else {
          return note;
        }
      });
    });
  }
  function onDelete(id: string) {
    setNotes((prevNotes: Note[]) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }
  return (
    <div className="flex flex-col p-2 sm:p-5 fontNunito bg-[#265073] text-white min-h-screen">
      <h1 className="text-center text-4xl sm:text-6xl font-semibold py-3 sm:py-5">
        Ma Notes
      </h1>

      <div>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="">
            {open && (
              <div className={`p-3 ${open ? "visible" : "hidden"}`}>
                <NewNote onSubmit={onCreate} setOpen={setOpen} />
              </div>
            )}
          </div>
        </Popup>
      </div>

      <ul className="p-5 grid grid-c sm:grid-cols-4 gap-3">
        <li className="flex bg-white  h-full">
          <button
            className=" text-3xl/3 sm:text-9xl/3 hover:text-emerald-600 transition-all duration-300 w-full h-20 sm:h-full flex bg-[#9AD0C2] justify-center items-center hover:scale-95 "
            onClick={() => setOpen(true)}
          >
            <IoIosAdd className="hover:scale-125 transition-all duration-300 h-full w-full" />
          </button>
        </li>
        {notes.length > 0 &&
          notes.map((note) => (
            <NoteCard noteData={note} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
      </ul>
    </div>
  );
}
