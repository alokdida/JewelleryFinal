using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Cart : BaseEntity
    {
        public int ItemId { get; set; }

        public Item Item { get; set; }

        public int CustomerId { get; set; }

        public User Customer { get; set; }

        public DateTime CartAddedTime { get; set; }
    }
}
