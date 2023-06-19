import getWikiResults from "@/lib/getWikiResults";
import capitalize from "@/lib/capitalize";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replace("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: `${process.env.NEXT_PUBLIC_TITLE_PAGE} | ${capitalize(displayTerm)}`,
    description: `Search result for ${displayTerm}`,
  };
}

async function SearchTerm({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data.query?.pages;

  return (
    <main className="m-2 flex min-h-screen flex-col items-center justify-center md:mx-20">
      <div className="flex flex-col gap-4">
        {results ? (
          // Object.values(results).map((result) => (
          //   <p>
          //     {JSON.stringify(result)} <br /> <hr />
          //   </p>
          // ))
          Object.values(results).map((result) => (
            <Item key={result.pageid} result={result} />
          ))
        ) : (
          <h2 className="p-2 text-xl">{`${SearchTerm} Not Found`}</h2>
        )}
      </div>
    </main>
  );
}

export default SearchTerm;
