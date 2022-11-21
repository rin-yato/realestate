import { Schema, Entity, Repository } from "redis-om";
import { connect, client } from "../redis";

class Property extends Entity {}

let schema = new Schema(
  Property,
  {
    name: { type: "string" },
    description: { type: "string" },
    price: { type: "string" },
    location: { type: "string" },
    images: { type: "string" },
    owner: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createProperty(data) {
  await connect();
  const repo =  client.fetchRepository(schema);
  const property = repo.createEntity(data);
  const id = await repo.save(property);
  return id;
}
