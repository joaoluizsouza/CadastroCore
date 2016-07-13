using Microsoft.EntityFrameworkCore;
using WebApiCore.Model;

namespace WebApiCore.Infra
{
    public class EFContext : DbContext
    {

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseInMemoryDatabase();
        }
    }
}