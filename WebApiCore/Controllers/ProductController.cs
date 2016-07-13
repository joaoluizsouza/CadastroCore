using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiCore.Infra;
using WebApiCore.Model;

namespace WebApiCore.Controllers
{
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly EFContext _dbContext;

        public ProductController(EFContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET api/product
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _dbContext.Products.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return _dbContext.Products.FirstOrDefault(prod => prod.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Product product)
        {
            product.Id = _dbContext.Products.Count() + 1;
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Product product)
        {
            product.Id = id;
            _dbContext.Entry(product).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var prod = _dbContext.Products.First(p => p.Id == id);
            _dbContext.Entry(prod).State = EntityState.Deleted;
            _dbContext.SaveChanges();
        }
    }
}