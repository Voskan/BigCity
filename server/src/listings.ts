interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    "id": "005",
    "title": "My first listing title",
    "image": "https://picsum.photos/id/237/500/400",
    "address": "21 tun, Odanavakayan, Gyumri, Shirak, Armenia",
    "price": 15000,
    "numOfGuests": 2,
    "numOfBeds": 1,
    "numOfBaths": 2,
    "rating": 5
  },
  {
    "id": "006",
    "title": "Lorem Ipsum is simply dummy text of",
    "image": "https://picsum.photos/id/236/500/400",
    "address": "Armenia, Shirak Marz, Gyumri, Shirakatsu St., 181/3 Building",
    "price": 10000,
    "numOfGuests": 3,
    "numOfBeds": 2,
    "numOfBaths": 3,
    "rating": 4
  },
  {
    "id": "007",
    "title": "the printing and typesetting industry. Lorem Ipsum has been",
    "image": "https://picsum.photos/id/235/500/400",
    "address": "Armenia, Shirak Marz, Gyumri, Rizhkovi St., 5 Building",
    "price": 12000,
    "numOfGuests": 2,
    "numOfBeds": 1,
    "numOfBaths": 3,
    "rating": 3
  },
  {
    "id": "008",
    "title": "industry's standard dummy text ever since the 1500s,",
    "image": "https://picsum.photos/id/234/500/400",
    "address": "Armenia, Shirak Marz, Gyumri, Lalayan St., 35 Building",
    "price": 13000,
    "numOfGuests": 3,
    "numOfBeds": 1,
    "numOfBaths": 2,
    "rating": 5
  }
];