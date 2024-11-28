namespace Domain.Entities
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = default!;
        public int Year { get; set; }
        public List<string> Genre { get; set; } = default!;
        public string Director { get; set; } = default!;
        public List<string> Actors { get; set; } = default!;
        public double Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Guid CreatedBy { get; set; }
    }
}