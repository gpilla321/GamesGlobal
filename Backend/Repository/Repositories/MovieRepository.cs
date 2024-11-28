using Domain.DTO;
using Repository.Repositories.Interfaces;
using System.Text.Json;

namespace Repository.Repositories;

public class MovieRepository : IMovieRepository
{

    //in a real world this would be an async db call
    public async Task<List<MovieDTO>> List()
    {
        var jsonString = File.ReadAllText("data.json");

        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        var movies = JsonSerializer.Deserialize<List<MovieDTO>>(jsonString, options);

        return movies.ToList();
    }
}

