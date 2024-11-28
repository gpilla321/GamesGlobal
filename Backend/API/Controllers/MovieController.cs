using Domain.DTO;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Interfaces;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private IMovieService _movieService;

    public MovieController(IMovieService movieService)
    {
        _movieService = movieService;
    }

    [HttpGet(Name = "")]
    [ResponseCache(Duration = 900)]
    public async Task<ActionResult<List<MovieDTO>>> Get()
    {
        var list = await _movieService.List();

        return Ok(list);
    }
}

