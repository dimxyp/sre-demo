import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListingCard.css';
import { Listing, PrinterCategory } from '../types/types';
import { LISTING_TYPES } from '../data/constants';
import { MATERIAL_TYPES } from '../data/constantsJsx';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="listing-card">
      <div className="listing-image">
        {listing.photos && listing.photos.length > 0 ? (
          <img src={`/images/venues/${listing.photos[0]}`} alt={listing.name} />
        ) : (
          <div className="image-placeholder">
            {LISTING_TYPES.find((t: PrinterCategory) => t.id === listing.type)?.icon || '🖨️'}
          </div>
        )}
        <div className="image-overlay">
          <div className="overlay-type">
            {LISTING_TYPES.find((t: PrinterCategory) => t.id === listing.type)?.icon}
            <span>{LISTING_TYPES.find((t: PrinterCategory) => t.id === listing.type)?.name}</span>
          </div>
          <div className="overlay-rating">
            <span className="stars">★</span>
            <span className="rating-value">{(listing.rating ?? 0).toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="listing-details-under-name">
        <h3>{listing.name}</h3>
        <div className="listing-address">{listing.location}</div>        <div className="allowed-pets-horizontal">
          {listing.supportedMaterials.map(materialId => {
            const material = MATERIAL_TYPES.find(m => m.id === materialId);
            return material ? (
              <span key={material.id} className="pet-icon" title={material.name}>
                {material.icon}
              </span>
            ) : null;
          })}
        </div>
        <div className="listing-buttons">
          <Link to={`/listing/${listing.id}`} className="btn btn-small btn-outline">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
