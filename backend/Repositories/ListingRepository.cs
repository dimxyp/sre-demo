using Microsoft.EntityFrameworkCore;
using PrintHub.Backend.Data;
using PrintHub.Backend.Models;
using PrintHub.Backend.Repositories.Interfaces;

namespace PrintHub.Backend.Repositories;

public class ListingRepository : IListingRepository
{
    private readonly AppDbContext _context;

    public ListingRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Listing>> GetAllAsync()
    {
        return await _context.Listings
            .Include(l => l.Reviews)
            .ToListAsync();
    }

    public async Task<Listing?> GetByIdAsync(int id)
    {
        return await _context.Listings
            .Include(l => l.Reviews)
            .FirstOrDefaultAsync(l => l.Id == id);
    }

    public async Task<Listing> CreateAsync(Listing listing)
    {
        listing.CreatedAt = DateTime.UtcNow;
        _context.Listings.Add(listing);
        await _context.SaveChangesAsync();
        return listing;
    }

    public async Task<Listing?> UpdateAsync(int id, Listing listing)
    {
        var existingListing = await _context.Listings.FindAsync(id);
        if (existingListing == null)
            return null;

        existingListing.Name = listing.Name;
        existingListing.Description = listing.Description;
        existingListing.Location = listing.Location;
        existingListing.Address = listing.Address;
        existingListing.Price = listing.Price;
        existingListing.Type = listing.Type;
        existingListing.SupportedMaterials = listing.SupportedMaterials;
        existingListing.Specifications = listing.Specifications;
        existingListing.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return existingListing;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var listing = await _context.Listings.FindAsync(id);
        if (listing == null)
            return false;

        _context.Listings.Remove(listing);
        await _context.SaveChangesAsync();
        return true;
    }
}
