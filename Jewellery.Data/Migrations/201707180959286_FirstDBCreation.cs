namespace Jewellery.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstDBCreation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Addresses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CustomerId = c.Int(nullable: false),
                        IsDefault = c.Boolean(nullable: false),
                        Line1 = c.String(),
                        Line2 = c.String(),
                        PinCode = c.Int(nullable: false),
                        City = c.String(),
                        State = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.CustomerId, cascadeDelete: true)
                .Index(t => t.CustomerId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Password = c.String(),
                        FirstName = c.String(),
                        LastName = c.String(),
                        MobileNo1 = c.String(),
                        MobileNo2 = c.String(),
                        Email = c.String(),
                        Sex = c.Boolean(nullable: false),
                        Role = c.Int(nullable: false),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Carts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ItemId = c.Int(nullable: false),
                        CustomerId = c.Int(nullable: false),
                        CartAddedTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.CustomerId, cascadeDelete: true)
                .ForeignKey("dbo.Items", t => t.ItemId, cascadeDelete: true)
                .Index(t => t.ItemId)
                .Index(t => t.CustomerId);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        DesignId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Designs", t => t.DesignId, cascadeDelete: true)
                .Index(t => t.DesignId);
            
            CreateTable(
                "dbo.Designs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ItemDetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ItemId = c.Int(nullable: false),
                        ContentId = c.Int(nullable: false),
                        Weight = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Contents", t => t.ContentId, cascadeDelete: true)
                .ForeignKey("dbo.Items", t => t.ItemId, cascadeDelete: true)
                .Index(t => t.ItemId)
                .Index(t => t.ContentId);
            
            CreateTable(
                "dbo.Contents",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        IsMetal = c.Boolean(nullable: false),
                        PurityId = c.Int(nullable: false),
                        Rate = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Purities", t => t.PurityId, cascadeDelete: true)
                .Index(t => t.PurityId);
            
            CreateTable(
                "dbo.Purities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Value = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ItemId = c.Int(nullable: false),
                        Rate = c.Double(nullable: false),
                        PaymentId = c.Int(nullable: false),
                        CustomerId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.CustomerId, cascadeDelete: true)
                .Index(t => t.CustomerId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Addresses", "CustomerId", "dbo.Users");
            DropForeignKey("dbo.Orders", "CustomerId", "dbo.Users");
            DropForeignKey("dbo.Users", "User_Id", "dbo.Users");
            DropForeignKey("dbo.ItemDetails", "ItemId", "dbo.Items");
            DropForeignKey("dbo.Contents", "PurityId", "dbo.Purities");
            DropForeignKey("dbo.ItemDetails", "ContentId", "dbo.Contents");
            DropForeignKey("dbo.Items", "DesignId", "dbo.Designs");
            DropForeignKey("dbo.Carts", "ItemId", "dbo.Items");
            DropForeignKey("dbo.Carts", "CustomerId", "dbo.Users");
            DropIndex("dbo.Orders", new[] { "CustomerId" });
            DropIndex("dbo.Contents", new[] { "PurityId" });
            DropIndex("dbo.ItemDetails", new[] { "ContentId" });
            DropIndex("dbo.ItemDetails", new[] { "ItemId" });
            DropIndex("dbo.Items", new[] { "DesignId" });
            DropIndex("dbo.Carts", new[] { "CustomerId" });
            DropIndex("dbo.Carts", new[] { "ItemId" });
            DropIndex("dbo.Users", new[] { "User_Id" });
            DropIndex("dbo.Addresses", new[] { "CustomerId" });
            DropTable("dbo.Orders");
            DropTable("dbo.Purities");
            DropTable("dbo.Contents");
            DropTable("dbo.ItemDetails");
            DropTable("dbo.Designs");
            DropTable("dbo.Items");
            DropTable("dbo.Carts");
            DropTable("dbo.Users");
            DropTable("dbo.Addresses");
        }
    }
}
