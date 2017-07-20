using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Content : BaseEntity
    {
        public string Name { get; set; }
        public bool IsMetal { get; set; }
        public int PurityId { get; set; }
        public Purity Purity { get; set; }
        public float Rate { get; set; }

        public ICollection<ItemDetail> ItemDetails { get; set; }
    }
}
