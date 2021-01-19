import { buildSchemaSync, Resolver, Query, Arg } from "type-graphql";

@Resolver()
class DummyResolver {
  @Query((_returns) => [String])
  names(@Arg("search") search: string): string[] {
    const lowerSearch = search.toLowerCase();
    const names = [
      "Leigh",
      "Bob",
      "Jim",
      "Mauricio",
      "Pedro",
      "Peter",
      "Pierre",
      "Amanda",
      "Marian",
    ];
    return names.filter((name) => name.toLowerCase().includes(lowerSearch));
  }
}

export const schema = buildSchemaSync({
  resolvers: [DummyResolver],
  emitSchemaFile: process.env.NODE_ENV === "development",
});
