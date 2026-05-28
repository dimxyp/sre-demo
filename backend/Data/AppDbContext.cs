using Microsoft.EntityFrameworkCore;
using PrintHub.Backend.Models;
using System.Text.Json;

namespace PrintHub.Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Listing> Listings => Set<Listing>();
    public DbSet<Review> Reviews => Set<Review>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure relationships
        modelBuilder.Entity<Review>()
            .HasOne(r => r.Listing)
            .WithMany(l => l.Reviews)
            .HasForeignKey(r => r.ListingId);

        // Configure JSON serialization for List properties
        modelBuilder.Entity<Listing>()
            .Property(l => l.SupportedMaterials)
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null!),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null!)!);

        modelBuilder.Entity<Listing>()
            .Property(l => l.Specifications)
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null!),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null!)!);

        // Seed data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        // Seed reviews
        modelBuilder.Entity<Review>().HasData(
            // Bambu Lab X1 Carbon reviews
            new Review
            {
                Id = 101,
                ListingId = 1,
                Reviewer = "Alex Johnson",
                Rating = 5,
                Comment = "Incredible print quality with the multi-material system. PLA and PETG prints come out flawless.",
                CreatedAt = new DateTime(2025, 4, 15)
            },
            new Review
            {
                Id = 102,
                ListingId = 1,
                Reviewer = "Taylor Smith",
                Rating = 4,
                Comment = "Fast and reliable. AMS system is a game-changer for multi-color prints.",
                CreatedAt = new DateTime(2025, 4, 10)
            },
            // Prusa MK4S reviews
            new Review
            {
                Id = 201,
                ListingId = 2,
                Reviewer = "Jamie Lee",
                Rating = 5,
                Comment = "Rock-solid workhorse. Input shaping makes it incredibly fast for an open-frame printer.",
                CreatedAt = new DateTime(2025, 4, 18)
            },
            new Review
            {
                Id = 202,
                ListingId = 2,
                Reviewer = "Casey Morgan",
                Rating = 4,
                Comment = "Great community support and open-source firmware. Perfect for tinkerers.",
                CreatedAt = new DateTime(2025, 4, 5)
            },
            // Formlabs Form 4 reviews
            new Review
            {
                Id = 301,
                ListingId = 3,
                Reviewer = "Jordan Riley",
                Rating = 5,
                Comment = "Dental and jewelry prints are incredibly detailed. Worth every penny for professional work.",
                CreatedAt = new DateTime(2025, 3, 28)
            },
            new Review
            {
                Id = 302,
                ListingId = 3,
                Reviewer = "Riley Chen",
                Rating = 5,
                Comment = "The print speed improvement over Form 3 is remarkable. Surface finish is flawless.",
                CreatedAt = new DateTime(2025, 3, 15)
            },
            // Creality Ender 3 V3 reviews
            new Review
            {
                Id = 401,
                ListingId = 4,
                Reviewer = "Sam Wilson",
                Rating = 5,
                Comment = "Best budget printer on the market. CoreXZ gives it speed without sacrificing quality.",
                CreatedAt = new DateTime(2025, 4, 2)
            },
            new Review
            {
                Id = 402,
                ListingId = 4,
                Reviewer = "Jesse Taylor",
                Rating = 4,
                Comment = "Great value for beginners. Klipper firmware out of the box is a nice touch.",
                CreatedAt = new DateTime(2025, 3, 20)
            },
            // Ultimaker S5 reviews
            new Review
            {
                Id = 501,
                ListingId = 5,
                Reviewer = "Taylor Kim",
                Rating = 5,
                Comment = "Dual extrusion with water-soluble supports is perfect for complex engineering parts.",
                CreatedAt = new DateTime(2025, 4, 12)
            },
            new Review
            {
                Id = 502,
                ListingId = 5,
                Reviewer = "Alex Rivera",
                Rating = 4,
                Comment = "Reliable for production runs. The enclosed chamber handles ABS and Nylon beautifully.",
                CreatedAt = new DateTime(2025, 4, 8)
            },
            // Anycubic Photon Mono M7 reviews
            new Review
            {
                Id = 601,
                ListingId = 6,
                Reviewer = "Charlie Simmons",
                Rating = 5,
                Comment = "14K resolution is insane for miniatures. Every detail comes through perfectly.",
                CreatedAt = new DateTime(2025, 4, 28)
            },
            new Review
            {
                Id = 602,
                ListingId = 6,
                Reviewer = "Morgan Patel",
                Rating = 5,
                Comment = "Fast print speeds for resin. Great for batch-printing tabletop minis.",
                CreatedAt = new DateTime(2025, 4, 22)
            },
            new Review
            {
                Id = 603,
                ListingId = 6,
                Reviewer = "Sam Washington",
                Rating = 5,
                Comment = "The tilting release mechanism significantly reduces peel forces. Fewer failed prints!",
                CreatedAt = new DateTime(2025, 5, 1)
            }
        );
        // Seed listings
        modelBuilder.Entity<Listing>().HasData(
            new Listing
            {
                Id = 1,
                Name = "Bambu Lab X1 Carbon",
                Location = "Desktop FDM",
                Address = "Bambu Lab, Shenzhen, China",
                Description = "High-speed CoreXY FDM printer with multi-material system, lidar-based first layer inspection, and AI failure detection.",
                Price = 1449m,
                Type = "fdm",
                SupportedMaterials = new List<string> { "PLA", "ABS", "PETG", "TPU" },
                Specifications = new List<string> { "Build: 256x256x256mm", "Speed: 500mm/s", "AMS multi-material", "AI monitoring" },
                Photos = new List<string> { "bambu-x1c.jpg", "bambu-x1c-2.jpg" },
                Rating = 4.7,
                CreatedAt = new DateTime(2025, 4, 15)
            },
            new Listing
            {
                Id = 2,
                Name = "Prusa MK4S",
                Location = "Desktop FDM",
                Address = "Prusa Research, Prague, Czech Republic",
                Description = "Open-source FDM printer with input shaping, load cell bed leveling, and extensive community support.",
                Price = 799m,
                Type = "fdm",
                SupportedMaterials = new List<string> { "PLA", "PETG", "ABS", "Nylon" },
                Specifications = new List<string> { "Build: 250x210x220mm", "Speed: 200mm/s", "Input shaping", "Open-source" },
                Photos = new List<string> { "prusa-mk4s.jpg", "prusa-mk4s-2.jpg" },
                Rating = 4.5,
                CreatedAt = new DateTime(2025, 4, 18)
            },
            new Listing
            {
                Id = 3,
                Name = "Formlabs Form 4",
                Location = "Desktop SLA",
                Address = "Formlabs, Somerville, MA, USA",
                Description = "Professional resin printer with Low Force Display technology for ultra-fast, high-detail prints.",
                Price = 3499m,
                Type = "sla",
                SupportedMaterials = new List<string> { "Resin (SLA)", "PLA", "Nylon" },
                Specifications = new List<string> { "Build: 200x125x210mm", "Resolution: 50 microns", "Low Force Display", "Automated resin system" },
                Photos = new List<string> { "formlabs-form4.jpg", "formlabs-form4-2.jpg" },
                Rating = 4.9,
                CreatedAt = new DateTime(2025, 3, 28)
            },
            new Listing
            {
                Id = 4,
                Name = "Creality Ender 3 V3",
                Location = "Desktop FDM",
                Address = "Creality, Shenzhen, China",
                Description = "Budget-friendly CoreXZ printer with Klipper firmware, auto bed leveling, and direct drive extruder.",
                Price = 219m,
                Type = "fdm",
                SupportedMaterials = new List<string> { "PLA", "PETG", "TPU (flexible)" },
                Specifications = new List<string> { "Build: 220x220x250mm", "Speed: 600mm/s", "Klipper firmware", "Direct drive" },
                Photos = new List<string> { "ender3v3.jpg", "ender3v3-2.jpg" },
                Rating = 4.8,
                CreatedAt = new DateTime(2025, 4, 2)
            },
            new Listing
            {
                Id = 5,
                Name = "Ultimaker S5",
                Location = "Professional FDM",
                Address = "UltiMaker, Utrecht, Netherlands",
                Description = "Industrial-grade dual extrusion printer with enclosed chamber, ideal for engineering-grade materials.",
                Price = 5995m,
                Type = "industrial",
                SupportedMaterials = new List<string> { "PLA", "ABS", "PETG", "Nylon", "TPU (flexible)" },
                Specifications = new List<string> { "Build: 330x240x300mm", "Dual extrusion", "Enclosed chamber", "Water-soluble supports" },
                Photos = new List<string> { "ultimaker-s5.jpg", "ultimaker-s5-2.jpg" },
                Rating = 4.6,
                CreatedAt = new DateTime(2025, 4, 12)
            },
            new Listing
            {
                Id = 6,
                Name = "Anycubic Photon Mono M7",
                Location = "Desktop SLA",
                Address = "Anycubic, Shenzhen, China",
                Description = "High-resolution resin printer with 14K mono LCD, tilting release, and fast print speeds for detailed miniatures.",
                Price = 299m,
                Type = "sla",
                SupportedMaterials = new List<string> { "Resin (SLA)" },
                Specifications = new List<string> { "Build: 218x123x200mm", "Resolution: 14K", "Tilting release", "High speed resin" },
                Photos = new List<string> { "anycubic-m7.jpg", "anycubic-m7-2.jpg" },
                Rating = 5.0,
                CreatedAt = new DateTime(2025, 4, 28)
            },
            new Listing
            {
                Id = 7,
                Name = "Bambu Lab A1 Mini",
                Location = "Desktop FDM",
                Address = "Bambu Lab, Shenzhen, China",
                Description = "Compact and affordable CoreXY printer with AMS Lite support, perfect for beginners and small spaces.",
                Price = 299m,
                Type = "fdm",
                SupportedMaterials = new List<string> { "PLA", "PETG", "TPU (flexible)" },
                Specifications = new List<string> { "Build: 180x180x180mm", "Speed: 500mm/s", "AMS Lite", "All-metal hotend" },
                Photos = new List<string> { "bambu-a1mini.jpg", "bambu-a1mini-2.jpg" },
                Rating = 5.0,
                CreatedAt = new DateTime(2025, 5, 2)
            }
        );
    }
}
