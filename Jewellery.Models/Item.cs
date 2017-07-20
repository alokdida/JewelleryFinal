using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    /// <summary>
    /// Here I am considering that it will be only single item.
    /// If this is not the case then we have to add number of items as a property.
    /// </summary>
    public class Item : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public int DesignId { get; set; }

        public Design Design { get; set; }

        public ICollection<Cart> Carts { get; set; }

        public ICollection<ItemDetail> ItemDetails { get; set; }
    }
}
