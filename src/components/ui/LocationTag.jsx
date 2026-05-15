import React from 'react';

export default function LocationTag({ city = "Lagos", country = "Nigeria" }) {
    return (
        <button
            className="btn-tag"
        >
            {/* Live pulse */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="btn-slide-wrapper">
                <span className="btn-slide-text">{city}, {country}</span>
                <span className="btn-slide-text-hover">Available Now</span>
            </span>
        </button>
    );
}
