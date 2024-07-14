import React from 'react';
import ListingBesideMapCards from '../../components/cards/ListingBesideMapCards';

const BookmarksSection = () => {
    return (
      <div className="mb-16 flex flex-col lg:flex-row gap-8">
      <div
        className=" overflow-y-auto"
        style={{ maxHeight: "600px" }}
      >
        <ListingBesideMapCards />
      </div>
    </div>
      );
};

export default BookmarksSection;