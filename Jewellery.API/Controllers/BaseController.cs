using Jewellery.Data;
using Jewellery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.OData;

namespace Jewellery.API.Controllers
{
    [EnableQuery]
    public class BaseController : ApiController
    {
        public BaseController()
        {

        }
    }
}
