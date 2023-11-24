import { useState } from "react";
import { Note, NoteData } from "./Notes";
import EditNote from "./EditNote";
import Popup from "reactjs-popup";
import TextTruncate from "react-text-truncate"; // recommend
import { AiOutlineClose } from "react-icons/ai";

type NoteProps = {
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: NoteData) => void;
  noteData: Note;
};
export default function NoteCard({ noteData, onDelete, onUpdate }: NoteProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const closeModal = () => setOpen(false);
  const closeExpansion = () => setExpand(false);
  return (
    <>
      <li className="flex flex-col gap-2 bg-[#ECF4D6] h-72 justify-between rounded-lg">
        <div className="flex flex-col gap-2 p-3">
          <p className="text-2xl text-[#2D9596] font-medium truncate">
            {noteData.title}
          </p>
          <p className="text-lg text-[#2D9596] flex-wrap">
            <TextTruncate
              line={5}
              element="span"
              truncateText="…"
              text={noteData.body}
              textTruncateChild={
                <a
                  className="text-[#265073] font-medium hover:text-[#732626] cursor-pointer"
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  edit
                </a>
              }
            />
          </p>
          {/* body expansion  */}
          <div className={`${expand ? `visible` : `hidden`}`}>
            <Popup open={expand} closeOnDocumentClick onClose={closeExpansion}>
              <div className="p-3">
                {expand && (
                  <div
                    className={`p-3 ${
                      expand ? "visible" : "hidden"
                    } flex flex-col max-h-[500px] bg-[#ECF4D6] rounded-lg sm:w-[500px] relative overflow-scroll`}
                  >
                    <AiOutlineClose
                      className="absolute top-2 right-2 text-2xl text-white  hover:text-[#2D9596]"
                      onClick={() => setExpand(false)}
                    />
                    <p className="text-2xl text-[#2D9596] font-medium px-3">
                      {noteData.title}
                    </p>
                    <p className="text-lg text-[#2D9596] px-3">
                      {noteData.body}
                    </p>
                    <div className="flex flex-row w-full justify-between p-3 gap-1.5">
                      <button
                        className="text-base sm:text-xl p-0.5 sm:p-1 text-white bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
                        onClick={() => {
                          setExpand(!expand);
                          setOpen(!open);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="text-base sm:text-xl p-0.5 sm:p-1 text-white bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
                        onClick={() => {
                          onDelete(noteData.id);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Popup>
          </div>
        </div>
        {/* Button  */}
        <div className="flex flex-row w-full justify-between p-3">
          <button
            className="bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
            onClick={() => {
              setOpen(!open);
            }}
          >
            edit
          </button>
          <button
            className="bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
            onClick={() => {
              onDelete(noteData.id);
            }}
          >
            delete
          </button>
          <div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="">
                {open && (
                  <div className={`p-3 ${open ? "visible" : "hidden"}`}>
                    <EditNote
                      setOpen={setOpen}
                      onSubmit={(data) => onUpdate(noteData.id, data)}
                      noteData={noteData}
                    />
                  </div>
                )}
              </div>
            </Popup>
          </div>
        </div>
      </li>
    </>
  );
}
