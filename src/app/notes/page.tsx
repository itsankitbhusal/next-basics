import Link from "next/link.js";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
}
export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div className=" grid place-items-center min-h-screen min-w-screen">
      <div className=" w-8/12">
        <h1 className=" text-4xl font-bold tracking-tighter my-4">Notes</h1>
        <div className=" my-4">
          <h2 className=" text-2xl font-bold tracking-tighter my-4">
            Create Note
          </h2>
          <div>
            <CreateNote />
          </div>
        </div>
        <div className=" grid gap-4 grid-cols-3">
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
}
function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className=" bg-blue-50 text-black p-4 rounded">
        <h2 className=" text-2xl font-bold tracking-tight uppercase">
          {title}
        </h2>
        <h5 className=" line-clamp-6">{content}</h5>
        <p>{new Date(created).toLocaleString()}</p>
      </div>
    </Link>
  );
}
