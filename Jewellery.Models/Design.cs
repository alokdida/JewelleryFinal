using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Design : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public ICollection<Item> Items { get; set; }
    }
}
