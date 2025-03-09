import Image from "next/image";
import { getAuthors } from "../_api/getAuthors";
import Link from "next/link";

const Authors = async () => {
  const data = await getAuthors();

  return (
    <main className="teko-300 min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Circuit Code
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6 text-justify">
            Circuit Code began as a passion project, driven by the desire to
            explore the fascinating intersection of automotive engineering and
            the high-stakes world of sport, specifically Formula 1. The initial
            motivation was to dissect the complex machinery and strategic
            battles that define the pinnacle of motorsport, blending the
            technical prowess of automotive development with the raw excitement
            of competitive racing.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6 text-justify">
            In its early days, Circuit Code focused on detailed race analyses,
            breaking down the technical innovations that gave teams a
            competitive edge. It was a place where the automotive enthusiast
            could appreciate the cutting-edge technology behind each car, and
            the sports fan could understand the strategic decisions that shaped
            each race.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed text-justify">
            Our major developments over time included building a community of
            fans that appreciated the combination of automotive and sport
            coverage, facilitating discussions and sharing insights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((author) => (
              <Link
                key={author.firstName}
                href={`/about/${author.firstName}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={author.image}
                    alt={`${author.firstName} ${author.lastName}`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover my-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {author.firstName} {author.lastName}
                  </h3>
                  <h4 className="text-2xl text-gray-600">{author.title}</h4>
                </div>
                <p className="text-gray-700 text-lg text-justify">
                  {author.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6 text-justify">
            Circuit Code's mission is to demystify the complex world of Formula
            1, providing in-depth analysis and insightful content that bridges
            the gap between technical automotive innovation and the thrilling
            spectacle of motorsport. Our vision is to be the premier online
            destination for fans seeking a deeper understanding of F1, fostering
            a community of informed enthusiasts.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6 text-justify">
            Our primary goals include delivering accurate, engaging, and
            data-driven content, expanding our technical analysis, and promoting
            interactive discussions. We uphold the values of accuracy,
            integrity, and passion. We strive to present unbiased information,
            respect diverse perspectives, and celebrate the dedication of
            drivers, teams, and fans alike.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed text-justify">
            We believe in the power of knowledge to enhance appreciation for the
            sport, and we are committed to providing a platform that educates,
            informs, and inspires.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Authors;
