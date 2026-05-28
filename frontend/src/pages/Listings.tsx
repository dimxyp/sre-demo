import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES, LISTING_TYPES } from '../data/constants';
import { MATERIAL_TYPES } from '../data/constantsJsx';
import { DataService } from '../data/dataService';
import { Listing, MaterialType, PrinterCategory } from '../types/types';
import ListingCard from '../components/ListingCard';
import '../styles/Listings.css';

const Listings: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMaterialType, setSelectedMaterialType] = useState<string>(searchParams.get('materialType') || '');
  const [selectedListingType, setSelectedListingType] = useState<string>(searchParams.get('listingType') || '');  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Function to update search parameters in the URL
  const updateSearchParams = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const fetchedListings = await DataService.getListings();
        console.log('Fetched listings:', fetchedListings); // Debug log
        setListings(fetchedListings);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      } finally {
        setLoading(false);
      }    };

    fetchListings();
  }, [searchParams]);

  const filteredListings = listings.filter(listing => {
    const matchesMaterialType = !selectedMaterialType || listing.supportedMaterials.includes(selectedMaterialType);
    const matchesListingType = !selectedListingType || listing.type === selectedListingType;
    const matchesSearch = !searchTerm ||
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesMaterialType && matchesListingType && matchesSearch;
  });

  if (loading) {
    return <div className="loading">Loading printers...</div>;
  }

  return (
    <div className="listings-page">
      <div className="hero-section">
        <h1>Find compatible printers</h1>
        <div className="search-container">          <input
            type="text"
            placeholder="Search by name, description, or category..."
            value={searchTerm}
            onChange={(e) => {
              const value = e.target.value;
              setSearchTerm(value);
              updateSearchParams('search', value);
            }}
            className="hero-search-input"
          />
          <button 
            className="search-button"
            onClick={() => console.log('Search triggered')}
          >
            Search
          </button>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-controls">          <div className="filter-group">
            <label htmlFor="material-type">Material Type</label>
            <select
              id="material-type"
              value={selectedMaterialType}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedMaterialType(value);
                updateSearchParams('materialType', value);
              }}
            >
              <option value="">All Materials</option>
              {MATERIAL_TYPES.map((material: MaterialType) => (
                <option key={material.id} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="listing-type">Printer Category</label>
            <select
              id="listing-type"
              value={selectedListingType}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedListingType(value);
                updateSearchParams('listingType', value);
              }}
            >              <option value="">All Categories</option>
              {LISTING_TYPES.map((type: PrinterCategory) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="listings-container">
        {filteredListings.length === 0 ? (
          <div className="no-results">
            <p>No printers found matching your criteria.</p>
            <button
              className="btn btn-secondary"              onClick={() => {
                setSelectedMaterialType('');
                setSelectedListingType('');
                setSearchTerm('');
                setSearchParams(new URLSearchParams());
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="listings-grid">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}          </div>
        )}
      </div>
      
      <section className="cta-section-container">
        <section className="cta-section">
          <div className="cta-image">
            <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="3D printing workspace" />
          </div>
          <div className="cta-content">
            <div className="cta-text">
              <h2>Have a design to share?</h2>
              <p>Help other makers discover great designs compatible with their printers.</p>
            </div>
            <div className="hero-buttons">
              <Link to={ROUTES.ADD_LISTING} className="btn btn-black">Upload a design</Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Listings;
