using Microsoft.EntityFrameworkCore;
using PrintHub.Backend.Data;

namespace PrintHub.Backend.Data;

public static class DataInitializer
{
    public static void InitializeDatabase(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        
        // Ensure database is created and seeded
        dbContext.Database.EnsureCreated();
    }
}
