import Link from "next/link";

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  console.log(result);
  console.log(result.thumbnail);
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2 className="flex justify-center text-center text-xl text-blue-800 underline duration-150 hover:text-red-800 md:justify-normal">
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank">
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const imageScaler = 1.5;

  const contentWithThumbnail = (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className={`flex min-w-max items-center justify-center`}>
        <img
          src={result.thumbnail?.source}
          alt={result.title}
          width={Number(result.thumbnail?.width) * imageScaler}
          height={Number(result.thumbnail?.height) * imageScaler}
          loading="lazy"
          className="rounded-lg"
        />
      </div>
      {itemTextCol}
    </div>
  );

  const contentWithoutThumbnail = <>{itemTextCol}</>;

  return (
    <article className="rounded-lg bg-slate-200 p-2">
      {result.thumbnail?.source
        ? contentWithThumbnail
        : contentWithoutThumbnail}
    </article>
  );
};

export default Item;
