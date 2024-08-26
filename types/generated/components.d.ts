import type { Schema, Attribute } from '@strapi/strapi';

export interface AmenitiesAmenities extends Schema.Component {
  collectionName: 'components_amenities_amenities';
  info: {
    displayName: 'Amenities';
    icon: 'bars';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ConnectivityConnectivity extends Schema.Component {
  collectionName: 'components_connectivity_connectivities';
  info: {
    displayName: 'connectivity';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
    icon: 'book-open';
    description: '';
  };
  attributes: {
    bedroom: Attribute.Integer;
    bathroom: Attribute.Integer;
    swimming_pool: Attribute.Integer;
  };
}

export interface HospitalHospital extends Schema.Component {
  collectionName: 'components_hospital_hospitals';
  info: {
    displayName: 'HOSPITAL';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface ItParksItParks extends Schema.Component {
  collectionName: 'components_it_parks_it_parks';
  info: {
    displayName: 'IT-PARKS';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface MallMall extends Schema.Component {
  collectionName: 'components_mall_malls';
  info: {
    displayName: 'mall';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface NearbyNearbyLocation extends Schema.Component {
  collectionName: 'components_nearby_nearby_locations';
  info: {
    displayName: 'Nearby Location';
    description: '';
  };
  attributes: {
    Educational: Attribute.Component<'education.education', true>;
    CONNECTIVITY: Attribute.Component<'connectivity.connectivity', true>;
    HOSPITAL: Attribute.Component<'hospital.hospital', true>;
    Mall: Attribute.Component<'mall.mall', true>;
    ITPARKS: Attribute.Component<'it-parks.it-parks', true>;
  };
}

export interface NearbyNearby extends Schema.Component {
  collectionName: 'components_nearby_nearbies';
  info: {
    displayName: 'nearby';
    icon: 'archway';
  };
  attributes: {
    attribute: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ProjectOverviewProjectOverview extends Schema.Component {
  collectionName: 'components_project_overview_project_overviews';
  info: {
    displayName: 'Project Overview';
    description: '';
  };
  attributes: {
    Type: Attribute.String;
    Location: Attribute.String;
    Land_Parcel: Attribute.String;
    Structure: Attribute.Text;
    No_of_Units: Attribute.Text;
    Unit_Variants: Attribute.Text;
    Size_Range: Attribute.String;
    Price_Range: Attribute.String;
    Possession_Date: Attribute.String;
    RERA_No: Attribute.String;
  };
}

export interface PropertyDetailsPropertyDetails extends Schema.Component {
  collectionName: 'components_property_details_property_details';
  info: {
    displayName: 'property_details';
    icon: 'align-justify';
  };
  attributes: {
    attribute: Attribute.String;
    value: Attribute.Text;
  };
}

export interface ReviewReview extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'Review';
    icon: 'angry';
    description: '';
  };
  attributes: {
    Pic: Attribute.Media;
    Name: Attribute.String;
    Review: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    rating: Attribute.Enumeration<['one', 'two', 'three', 'four', 'five']>;
  };
}

export interface UnitPricingUnitPricing extends Schema.Component {
  collectionName: 'components_unit_pricing_unit_pricings';
  info: {
    displayName: 'Unit Pricing';
    icon: 'bulletList';
  };
  attributes: {
    BHK: Attribute.String;
    Size: Attribute.String;
    Price: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'amenities.amenities': AmenitiesAmenities;
      'connectivity.connectivity': ConnectivityConnectivity;
      'education.education': EducationEducation;
      'features.features': FeaturesFeatures;
      'hospital.hospital': HospitalHospital;
      'it-parks.it-parks': ItParksItParks;
      'mall.mall': MallMall;
      'nearby.nearby-location': NearbyNearbyLocation;
      'nearby.nearby': NearbyNearby;
      'project-overview.project-overview': ProjectOverviewProjectOverview;
      'property-details.property-details': PropertyDetailsPropertyDetails;
      'review.review': ReviewReview;
      'unit-pricing.unit-pricing': UnitPricingUnitPricing;
    }
  }
}
