namespace Restful
{
    public class Repo
    {
        NoteContext noteContext = new NoteContext();

        public List<Note> GetNotes()
        {
            return noteContext.Notes.ToList();
        }

        public Note InsertNote(Note note)
        {
            noteContext.Notes.Add(note);
            noteContext.SaveChanges();
            return note;
        }


        public void UpdateNote(Note note)
        {
            Note findNote = noteContext.Notes.FirstOrDefault(x => x.Id == note.Id);

            findNote.Content = note.Content;

            noteContext.SaveChanges();
        }

        public void DeleteNote(int Id)
        {
            Note note = noteContext.Notes.FirstOrDefault(x => x.Id == Id);

            if (note != null)
            {
                noteContext.Notes.Remove(note);
                noteContext.SaveChanges();
            }
        }
    }
}
