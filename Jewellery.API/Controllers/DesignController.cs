using Jewellery.Data;
using Jewellery.Models;
using System.Linq;
using System.Web.Http;

namespace Jewellery.API.Controllers
{
    public class DesignController : BaseController
    {
        private IDataOperationRepository<Design> _dbOperationRepo;
        public DesignController(IDataOperationRepository<Design> dbOperationRepo)
        {
            this._dbOperationRepo = dbOperationRepo;
        }

        [HttpGet]
        public IQueryable<Design> Get()
        {
            return this._dbOperationRepo.All().AsQueryable();
        }

        [HttpPost]
        public void Post([FromBody]Design design)
        {
            this._dbOperationRepo.Insert(design);
        }
    }
}
