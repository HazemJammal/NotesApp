﻿using Microsoft.EntityFrameworkCore;

namespace Restful
{
    public class NoteContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public NoteContext(DbContextOptions options) : base(options) { }
        public NoteContext() { }
        public DbSet<Note> Notes { get; set; }
    }
}
