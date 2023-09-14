using System.ComponentModel.DataAnnotations;

namespace Restful
{
    public class Note
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Content { get; set; }

        public string? Date { get; set; }

        [Required]
        public string? Color { get; set; }
    }
}
