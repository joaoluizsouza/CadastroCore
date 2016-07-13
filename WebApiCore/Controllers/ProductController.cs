using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}