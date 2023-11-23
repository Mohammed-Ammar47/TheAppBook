import { FormEvent, useRef } from "react";
import { Note, NoteData } from "./Notes";
import { AiOutlineClose } from "react-icons/ai";
type FormDataProps = {
  onSubmit: (data: NoteData) => void;
  setOpen: (S: boolean) => void;
  noteData: Note;
};
export default function EditNote({
  onSubmit,
  setOpen,
  noteData,
}: FormDataProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({ title: titleRef.current!.value, body: bodyRef.current!.value });
    setOpen(false);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-2 p-5 rounded-md bg-[#ECF4D6] sm:w-[500px]"
    >
      <AiOutlineClose
        className="absolute top-2 right-2 text-2xl text-white  hover:text-[#2D9596]"
        onClick={() => setOpen(false)}
      />
      {/* title input */}
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium w-full text-[#2D9596]">
          Title
        </label>
        <input
          ref={titleRef}
          type="text"
          className=" w-full h-8 text-lg rounded-md"
          defaultValue={noteData.title}
          required
        />
      </div>
      {/* Body input */}
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium w-full text-[#2D9596]">
          Body
        </label>
        <textarea
          ref={bodyRef}
          className=" w-full text-lg rounded-md p-2"
          rows={5}
          defaultValue={noteData.body}
          required
        />
      </div>
      <div className="flex flex-row gap-1.5">
        <button
          onClick={() => setOpen(false)}
          className="text-base sm:text-xl p-0.5 sm:p-1 text-white bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-base sm:text-xl p-0.5 sm:p-1 text-white bg-[#9AD0C2] border-2 border-white w-full hover:bg-white hover:text-[#2D9596] transition-colors duration-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
