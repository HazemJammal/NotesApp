using Microsoft.AspNetCore.Mvc;

namespace Restful.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {

        NoteContext _db = new NoteContext();
        public NotesController() { }
        Repo repo = new Repo();

        [HttpGet]

        public IEnumerable<Note> GetNotes()
        {

            return repo.GetNotes();
        }

        [HttpPost]
        public Note InsertNote(Note note)
        {
            return repo.InsertNote(note);
        }
        [HttpPut]
        public void UpdateNote(Note note)
        {
            repo.UpdateNote(note);
        }

        [HttpDelete("{Id}")]
        public void DeleteNote(int id)
        {
            repo.DeleteNote(id);
        }
    }
}
