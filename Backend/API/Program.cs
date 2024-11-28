
using API.Middlewares;
using Microsoft.AspNetCore.Diagnostics;
using Repository.Repositories;
using Repository.Repositories.Interfaces;
using Service.Services;
using Service.Services.Interfaces;
using static System.Net.Mime.MediaTypeNames;

namespace API
{
    public class Program
    {
        private const string MY_ALLOW_SPECIFIC_ORIGINS = "_myAllowSpecificOrigins";
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddExceptionHandler<ExceptionMiddleware>();
            builder.Services.AddProblemDetails();

            builder.Services.AddTransient<IMovieService, MovieService>();
            builder.Services.AddTransient<IMovieRepository, MovieRepository>();


            builder.Services.AddCors(options =>
            {
                options.AddPolicy(MY_ALLOW_SPECIFIC_ORIGINS, policy =>
                {
                    policy.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseResponseCaching();

            app.MapControllers();

            app.UseExceptionHandler();
            app.UseCors(MY_ALLOW_SPECIFIC_ORIGINS);

            app.Run();
        }
    }
}
