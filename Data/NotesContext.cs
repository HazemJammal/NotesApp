using System.Data.Entity;

namespace Data
{
    public class NotesContext : DbContext

    {
        public NotesContext(DbContextOptions dbContextOptions)
        DbSet<Note> _notes;
    }
}
