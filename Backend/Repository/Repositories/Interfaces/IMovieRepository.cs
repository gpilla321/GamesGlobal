using Domain.DTO;

namespace Repository.Repositories.Interfaces;

public interface IMovieRepository
{
    Task<List<MovieDTO>> List();
}
