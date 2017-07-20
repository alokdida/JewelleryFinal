using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Address: BaseEntity
    {
        public int CustomerId { get; set; }

        public User Customer { get; set; }

        public bool IsDefault { get; set; }

        public string Line1 { get; set; }

        public string Line2 { get; set; }

        public int PinCode { get; set; }

        public string City { get; set; }

        public string State { get; set; }
    }
}
