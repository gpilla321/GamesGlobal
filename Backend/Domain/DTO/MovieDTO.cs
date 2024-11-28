namespace Domain.DTO
{
    public class MovieDTO
    {
        public string Title { get; set; } = default!;
        public int Year { get; set; }
        public List<string> Genre { get; set; } = default!;
        public string Director { get; set; } = default!;
        public List<string> Actors { get; set; } = default!;
        public double Rating { get; set; }
    }
}
