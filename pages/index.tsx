import { useQuery, gql } from "@apollo/client";
import { HomeQuery, HomeQueryVariables } from "src/generated/HomeQuery";

const HOME_QUERY = gql`
  query HomeQuery($search: String!) {
    names(search: $search)
  }
`;

export default function Home() {
  const { data, loading } = useQuery<HomeQuery, HomeQueryVariables>(
    HOME_QUERY,
    {
      variables: { search: "ma" },
    }
  );

  if (loading || !data) return <div>loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
