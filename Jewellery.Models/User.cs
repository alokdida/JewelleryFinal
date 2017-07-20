using Jewellery.Common.Enums;
using System.Collections.Generic;

namespace Jewellery.Models
{
    public class User : BaseEntity
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MobileNo1 { get; set; }

        public string MobileNo2 { get; set; }

        public string Email { get; set; }

        public bool Sex { get; set; }

        public Roles Role { get; set; }

        public ICollection<Cart> Carts { get; set; }

        public ICollection<Order> Orders { get; set; }

        public ICollection<Address> Addresses { get; set; }
    }
}
