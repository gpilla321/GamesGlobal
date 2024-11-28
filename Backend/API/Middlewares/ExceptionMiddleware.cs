using Microsoft.AspNetCore.Diagnostics;
using Microsoft.Extensions.Logging;
using static System.Net.Mime.MediaTypeNames;

namespace API.Middlewares
{
    public class ExceptionMiddleware : IExceptionHandler
    {
        private const string DEFAULT_ERROR_MESSAGE = "An unexpected error occurred. Please contact the administrator if the issue persists.";
        private readonly ILogger<ExceptionMiddleware> logger;

        public ExceptionMiddleware(ILogger<ExceptionMiddleware> logger)
        {
            this.logger = logger;
        }

        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            var exceptionMessage = exception.Message;
            logger.LogError(
                "Error Message: {exceptionMessage}, Time of occurrence {time}",
                exceptionMessage, DateTime.UtcNow);

            httpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await httpContext.Response.WriteAsJsonAsync(DEFAULT_ERROR_MESSAGE);

            return true;
        }
    }
}
