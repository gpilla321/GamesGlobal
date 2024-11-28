using Domain.DTO;
using Repository.Repositories.Interfaces;
using Service.Services.Interfaces;

namespace Service.Services;


public class MovieService : IMovieService
{
    private readonly IMovieRepository _movieRepository;
    public MovieService(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }
    public async Task<List<MovieDTO>> List()
    {
        return await _movieRepository.List();
    }
}

