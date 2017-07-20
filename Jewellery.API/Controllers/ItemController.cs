using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Jewellery.Data;
using Jewellery.Models;

namespace Jewellery.API.Controllers
{
    public class ItemController : BaseController
    {
        private IDataOperationRepository<Item> _dbOperationRepo;

        public ItemController(IDataOperationRepository<Item> dbOperationRepo)
        {
            this._dbOperationRepo = dbOperationRepo;
        }

        public IQueryable<Item> Get()
        {
            return this._dbOperationRepo.All().AsQueryable();
        }
    }
}
