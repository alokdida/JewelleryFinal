using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class ItemDetail : BaseEntity
    {
        public int ItemId { get; set; }

        public Item Item { get; set; }

        public int ContentId { get; set; }

        public Content Content { get; set; }

        public double Weight { get; set; }
    }
}
