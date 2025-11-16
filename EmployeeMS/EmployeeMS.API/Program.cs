var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        policy => policy.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddOpenApi();

var app = builder.Build();

// Use CORS before routing or endpoints
app.UseCors("AllowLocalhost");

// Optional: Swagger setup

app.MapControllers(); // Or app.MapGet(...) if you're using minimal APIs

app.Run();
