// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from './../src/database/index';
import { Listing } from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();

    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: "Gold Room in Old American Style House, Near Subway",
        image: "https://a0.muscache.com/im/pictures/0e54f8a7-e0e7-42c7-b8a5-e2199fa785bf.jpg?im_w=1440",
        address: "Queens, 33rd Street, Long Island City, NY, USA",
        price: 15000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      },
      {
        _id: new ObjectId(),
        title: "Lovely Studio for 2 Near Hollywood & Downtown!",
        image: "https://a0.muscache.com/im/pictures/94fd17be-7e6e-4f6a-b0b6-47674773127f.jpg?im_w=1200",
        address: "Los Angeles, California, United States",
        price: 10000,
        numOfGuests: 3,
        numOfBeds: 2,
        numOfBaths: 3,
        rating: 4
      },
      {
        _id: new ObjectId(),
        title: "Downtown LA Fashion Studio near Staples Center",
        image: "https://a0.muscache.com/im/pictures/72fa40c0-f002-4352-bb4b-a1fbae1a98f7.jpg?im_w=1200",
        address: "Downtown Los Angeles, Los Angeles, CA, USA",
        price: 12000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 3,
        rating: 3
      },
      {
        _id: new ObjectId(),
        title: "Petite Hollywood Central bungalow",
        image: "https://a0.muscache.com/im/pictures/0c90684a-270b-4f21-a9c3-e693e10e34bf.jpg?im_w=1440",
        address: "Long Beach Deck Contractors, West 3rd Street, Long Beach, CA, USA",
        price: 13000,
        numOfGuests: 3,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      }
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    console.log("[seed] : success");
  } catch {
    throw new Error("field to seed to database");
  }
};

seed();