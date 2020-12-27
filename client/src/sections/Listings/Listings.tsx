import { server, useQuery } from '../../lib/api';
import { DeleteListingData, DeleteListingVariables, ListingsData } from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);
  const listings = data ? data.listings : null;

  const deleteListings = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: DELETE_LISTING,
      variables: { id }
    });

    refetch();
  };

  const listingsList = listings?.map((listing) => (
    <li key={listing.id}>
      {listing.title}
      <button onClick={() => deleteListings(listing.id)}>Delete listing</button>
    </li>
  ));

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Uh Oh! Something went wrong, please try again later :(</h2>
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {listingsList}
      </ul>
    </div>
  )
};
