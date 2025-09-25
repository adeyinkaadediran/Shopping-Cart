﻿using Backend.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class AuthDbContext : DbContext
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options)
        {
        }

        // Add your DbSets here
         public DbSet<User> Users { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        //public DbSet<Cart> Carts { get; set; }

        //public DbSet<CartItem> CartItems { get; set; }

        //public DbSet<Order> Orders { get; set; }
    }
}
