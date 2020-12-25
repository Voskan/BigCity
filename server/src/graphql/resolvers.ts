import { IResolvers } from 'apollo-server-express';
import { listings } from './../listings';

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return listings
    }
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      const idx = listings.findIndex(obj => obj.id === id);
      if (idx != -1) {
        return listings.splice(idx, 1)[0];
      }

      throw new Error("Field to delete listing");
    }
  }
}