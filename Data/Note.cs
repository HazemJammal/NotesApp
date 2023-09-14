using System;
using System.ComponentModel.DataAnnotations;

namespace Data
{
    public class Note
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
    }
}
