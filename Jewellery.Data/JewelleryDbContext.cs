using Jewellery.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jewellery.Data
{
    public class JewelleryDbContext : DbContext
    {
        public JewelleryDbContext() : base("JewelleryDBConnectionString") { }

        public DbSet<Design> Designs { get; set; }

        public DbSet<Content> Contents{ get; set; }

        public DbSet<Purity> Purities { get; set; }

        public DbSet<Item> Items { get; set; }
        public DbSet<ItemDetail> ItemDetails { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Cart> Carts { get; set; }

        public DbSet<User> Customers { get; set; }

        public DbSet<Address> Addresses { get; set; }
    }
}
