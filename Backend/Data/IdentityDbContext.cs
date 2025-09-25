using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class IdentityDbContext<T>
    {
        public IdentityDbContext(DbContextOptions options)
        {
        }
    }
}