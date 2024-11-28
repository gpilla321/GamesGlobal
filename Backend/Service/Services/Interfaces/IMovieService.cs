using Domain.DTO;

namespace Service.Services.Interfaces;

public interface IMovieService
{
    Task<List<MovieDTO>> List();
}

