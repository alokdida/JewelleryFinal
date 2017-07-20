using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Order : BaseEntity
    {
        public int ItemId { get; set; }

        public double Rate { get; set; }

        public int PaymentId { get; set; }

        public int CustomerId { get; set; }

        public User Customer { get; set; }
    }
}
