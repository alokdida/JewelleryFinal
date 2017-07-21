using Jewellery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace Jewellery.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("http://localhost:1130", "*", "*");
            config.EnableCors(cors);
            ODataConventionModelBuilder modelBuilder = new ODataConventionModelBuilder();
            config.Count().Select().Filter().OrderBy().Expand().MaxTop(null);
            modelBuilder.EntitySet<Item>("Item"); // We are exposing only Movies via oData
            modelBuilder.EntitySet<Design>("Design");
            config.MapODataServiceRoute("Jewellery", "odata", modelBuilder.GetEdmModel()); // Specify the routing
            config.EnsureInitialized();
        }
    }
}
