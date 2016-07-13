using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebApiCore.Infra;
using WebApiCore.Model;

namespace WebApiCore
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            CarregarDB();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                                        .AllowAnyMethod()
                                                                         .AllowAnyHeader()));
            // Add framework services.
            services.AddMvc();
            services.AddEntityFrameworkInMemoryDatabase()
                .AddDbContext<EFContext>(opt => opt.UseInMemoryDatabase());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("AllowAll");
            app.UseMvc();
        }
        private void CarregarDB(){
            var context = new EFContext();
            context.AddRange(
                    new Product {Id = 1, Name = "COCA COLA 2LT", Image = "", Price = 4.5},
                    new Product {Id = 2, Name = "CERVEJA BRAHAMA LATA", Image = "", Price = 2.5},
                    new Product {Id = 3, Name = "CERVEJA CORONA LONG NECK", Image = "", Price = 4.9},
                    new Product {Id = 4, Name = "CERVEJA BRAHAMA EXTRA LONG NECK", Image = "", Price = 2.9}
            );
            context.SaveChanges();
        }
    }
}
