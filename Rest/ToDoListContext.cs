using Microsoft.EntityFrameworkCore;

namespace Rest
{
    public class ToDoListContext : DbContext
    {
        public ToDoListContext(DbContextOptions<ToDoListContext> options) : base(options) { }

        public DbSet<Note> Notes { get; set; }

    }
}
