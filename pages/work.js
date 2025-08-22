import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Artisan Leather & Co. — Next.js + Tailwind (Frontend)", slug: "artisan-leather-site" },
  { title: "PantryPulse — Inventory Alerts SaaS Marketing Site", slug: "pantrypulse-site" },
  { title: "ManageIt — Admin Dashboard", slug: "manageit-dashboard" },
];

function ProjectCard({ title, slug }) {
  return (
    <article className="border rounded-2xl p-4 sm:p-6 space-y-4 bg-white">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {slug === "artisan-leather-site" ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/artisan-leather-site/catalog-mobile.jpeg"
                alt="Artisan Leather — Catalog (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/artisan-leather-site/home-mobile.jpeg"
                alt="Artisan Leather — Home (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
          </>
        ) : slug === "pantrypulse-site" ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/pantrypulse-site/home-mobile.jpeg"
                alt="PantryPulse — Home (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/pantrypulse-site/contact-mobile.jpeg"
                alt="PantryPulse — Contact (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
          </>
        ) : slug === "manageit-dashboard" ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/manageit-dashboard/overview-mobile.jpeg"
                alt="ManageIt — Overview (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <Image
                src="/images/work/manageit-dashboard/customers-mobile.jpeg"
                alt="ManageIt — Customers (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
          </>
        ) : (
          <>
            <div className="border-2 border-dashed rounded-xl aspect-[16/10] flex items-center justify-center">Image Placeholder #1</div>
            <div className="border-2 border-dashed rounded-xl aspect-[16/10] flex items-center justify-center">Image Placeholder #2</div>
          </>
        )}
      </div>

      <div className="pt-2">
        <Link href={`/work/${slug}`} className="inline-block">
          <span className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm sm:text-base">Case Study</span>
        </Link>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {projects.map((p) => (
        <ProjectCard key={p.slug} title={p.title} slug={p.slug} />
      ))}
    </div>
  );
}
