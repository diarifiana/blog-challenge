import { getAuthorByFirstName } from "../../_api/getAuthorByFirstName";
import Image from "next/image";

const AboutAuthorDetail = async ({
  params,
}: {
  params: Promise<{ firstName: string }>;
}) => {
  const firstName = (await params).firstName;
  const author = await getAuthorByFirstName(firstName);

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 capitalize">
          {author.firstName} {author.lastName}
        </h1>

        <div className="mb-8">
          <Image
            src={author.image}
            alt={`${author.firstName} ${author.lastName}`}
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            {author.title}
          </h3>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href={`mailto:${author.email}`}
              className="text-blue-600 hover:underline"
            >
              {author.email}
            </a>
          </p>
        </div>

        <div className="text-left">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {author.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutAuthorDetail;
