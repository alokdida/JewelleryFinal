using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Models
{
    public class Purity : BaseEntity
    {
        public int Value { get; set; }

        public ICollection<Content> Contents { get; set; }
    }
}
