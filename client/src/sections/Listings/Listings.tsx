import { Alert, List, Avatar, Button, Spin } from "antd";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo";

import { Listings as ListingsData } from "./__generated__/Listings";
import { DeleteListing as DeleteListingData, DeleteListingVariables } from "./__generated__/DeleteListing";
import { ListingsSkeleton } from "./components";

import "./styles/Listings.css";

const LISTINGS = gql`
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

const DELETE_LISTING = gql`
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

  const [
    deleteListing,
    {
      loading: deleteListingLoading,
      error: deleteListingError
    }
  ] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

  const handleDeleteListings = async (id: string) => {
    await deleteListing({ variables: { id } });
    refetch();
  };

  const listingsList = listings ? (
    <List
      itemLayout="horizontal"
      dataSource={listings}
      renderItem={listing => (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => handleDeleteListings(listing.id)}>Delete</Button>
          ]}>
          <List.Item.Meta
            title={listing.title}
            description={listing.address}
            avatar={
              <Avatar src={listing.image} size={48} shape="square" />
            }
          />
        </List.Item>
      )}
    />
  ) : null;

  if (loading) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} error />
      </div>
    );
  }

  const deleteListingErrorMessage = deleteListingError ? (
    <Alert
      type="error"
      message="Uh Oh! Something went wrong with deleting, please try again later :("
      className="listings__alert"
    />
  ) : null;

  return (
    <div className="listings">
      <Spin spinning={deleteListingLoading}>
        {deleteListingErrorMessage}
        <h2>{title}</h2>
        {listingsList}
      </Spin>
    </div>
  )
};
