import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function titleFromSlug(slug) {
  if (!slug) return "";
  return slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}

export default function CaseStudy() {
  const { query } = useRouter();
  const { slug } = query;

  const isArtisan = slug === "artisan-leather-site";
  const isPantry = slug === "pantrypulse-site";
  const isManage = slug === "manageit-dashboard";

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <Link href="/work" className="text-sm underline">← Back to Work</Link>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold">
        Case Study — {isArtisan
          ? "Artisan Leather & Co. — Next.js + Tailwind (Frontend)"
          : isPantry
            ? "PantryPulse — Inventory Alerts SaaS Marketing Site"
            : isManage
              ? "ManageIt — Admin Dashboard"
              : (titleFromSlug(slug) || "Project")}
      </h1>

      {/* Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {isArtisan ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
              <Image
                src="/images/work/artisan-leather-site/catalog-mobile.jpeg"
                alt="Artisan — Catalog (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
              <Image
                src="/images/work/artisan-leather-site/home-mobile.jpeg"
                alt="Artisan — Home (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
          </>
        ) : isPantry ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
              <Image
                src="/images/work/pantrypulse-site/home-mobile.jpeg"
                alt="PantryPulse — Home (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
              <Image
                src="/images/work/pantrypulse-site/contact-mobile.jpeg"
                alt="PantryPulse — Contact (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
          </>
        ) : isManage ? (
          <>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
              <Image
                src="/images/work/manageit-dashboard/overview-mobile.jpeg"
                alt="ManageIt — Overview (mobile)"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative border-2 border-dashed rounded-xl h-[360px] sm:h-[420px] overflow-hidden">
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

      {/* Content */}
      {isArtisan ? (
        <section className="mt-8 space-y-6">
          <div>
            <p className="mt-2 text-sm">
              <a href="https://artisan-leather-site.vercel.app/" className="underline">Live (Vercel)</a> ·{" "}
              <a href="https://github.com/Talal609-sudo/artisan-leather-site.git" className="underline">GitHub</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2">
              Catalog website for a small leather brand. Mobile-first, fast, and accessible. Built as a static frontend with Next.js (App Router) and Tailwind CSS; all product data comes from a local JSON file—no backend required. Pages include Home, Catalog with category filters, Product Detail, About, Contact, FAQ, and Shipping & Returns.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How I implemented the project</h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Bootstrapped Next.js 14 (App Router) and configured Tailwind CSS (PostCSS/Autoprefixer); mobile-first layout with utility classes.</li>
              <li>Modeled products in a local JSON file; built Catalog and Product Detail pages with client-side category filters (jackets/hoodies/wallets/bags).</li>
              <li>Implemented accessible mobile navigation (hamburger) with proper <code>aria-*</code> and keyboard support.</li>
              <li>Added WhatsApp and Email CTAs for quick inquiries.</li>
              <li>Set up basic SEO metadata and an Open Graph image via App Router metadata.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Technologies used</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>Framework:</b> Next.js 14 (App Router), React 18</li>
              <li><b>Language:</b> TypeScript</li>
              <li><b>Styling:</b> Tailwind CSS, PostCSS, Autoprefixer</li>
              <li><b>Data:</b> Local JSON (no server/database)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What I learned</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Structuring a small storefront with App Router and file-based routing for static content.</li>
              <li>Designing a clean, responsive UI with Tailwind and reusable components.</li>
              <li>Building dynamic product pages and catalog filtering from JSON without a backend.</li>
              <li>Applying accessibility patterns and SEO fundamentals in a static site.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Difficulties</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>No backend, dynamic pages needed:</b> Used stable product slugs and a JSON index for lookups.</li>
              <li><b>Filter UX on mobile:</b> Compact filter bar with visible active states and keyboard support.</li>
              <li><b>Consistent layout across pages:</b> Defined layout primitives for container widths and spacing.</li>
              <li><b>SEO from file data:</b> Generated metadata from JSON for consistent titles/descriptions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Links</h2>
            <p className="mt-2">
              <a href="https://artisan-leather-site.vercel.app/" className="underline">Vercel deployment</a><br />
              <a href="https://github.com/Talal609-sudo/artisan-leather-site.git" className="underline">GitHub repository</a>
            </p>
          </div>
        </section>
      ) : isPantry ? (
        <section className="mt-8 space-y-6">
          <div>
            <p className="mt-2 text-sm">
              <a href="https://pantrypulse-site.vercel.app/" className="underline">Live (Vercel)</a> ·{" "}
              <a href="https://github.com/Talal609-sudo/pantrypulse-site.git" className="underline">GitHub</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2">
              A clean, accessible, responsive marketing site for PantryPulse — helps shops reduce waste with expiry and low-stock alerts.
              Pages: Home, Features, Pricing, FAQ, Contact. Semantic landmarks, skip-link, visible focus, keyboard-friendly mobile menu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How I implemented the project</h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Next.js 14 (App Router) + Tailwind; mobile-first layout with a consistent spacing scale.</li>
              <li>Centered header with accessible hamburger nav (ARIA + keyboard) and a clear hero CTA.</li>
              <li>Built Features & “How it works”, Pricing tiers + comparison table, FAQ accordion, and Contact page.</li>
              <li>Basic SEO and Open Graph image; deployed to Vercel.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Technologies used</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>Framework:</b> Next.js 14 (App Router), React 18</li>
              <li><b>Language:</b> TypeScript</li>
              <li><b>Styling:</b> Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What I learned</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Designing a focused funnel (hero → features → pricing → contact).</li>
              <li>Accessible nav/accordion patterns with correct semantics and focus handling.</li>
              <li>Making comparison tables readable on small screens.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Difficulties</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>Hero clarity vs brevity:</b> iterated copy to surface the core value quickly.</li>
              <li><b>Mobile nav & focus management:</b> ensured trap-free keyboard flow and visible focus states.</li>
              <li><b>Responsive tables:</b> adjusted structure/stacking so pricing is scannable on phones.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Links</h2>
            <p className="mt-2">
              <a href="https://pantrypulse-site.vercel.app/" className="underline">Vercel deployment</a><br />
              <a href="https://github.com/Talal609-sudo/pantrypulse-site.git" className="underline">GitHub repository</a>
            </p>
          </div>
        </section>
      ) : isManage ? (
        <section className="mt-8 space-y-6">
          <div>
            <p className="mt-2 text-sm">
              <a href="https://manageit-dashboard.vercel.app/" className="underline">Live (Vercel)</a> ·{" "}
              <a href="https://github.com/Talal609-sudo/manageit-dashboard.git" className="underline">GitHub</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2">
              A colorful, accessible, mobile-first admin dashboard. Purpose: portfolio admin UI demonstrating responsiveness and accessibility.
              Pages: Overview, Orders, Customers, Reports, Settings. Semantic landmarks, skip link, visible focus, keyboard-friendly mobile nav.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How I implemented the project</h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Bootstrapped Next.js 14 (App Router) with Tailwind; dark mode default with a user toggle.</li>
              <li>Built card-based Orders (filters, search, sort, export) and Customers grid with quick actions.</li>
              <li>Added Reports with clean spacing and filter controls; Settings via accordion cards; simple Invoices list.</li>
              <li>Implemented accessible mobile navigation (ARIA + keyboard) and a skip-to-content link; deployed to Vercel.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Technologies used</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>Framework:</b> Next.js 14 (App Router), React 18</li>
              <li><b>Language:</b> TypeScript</li>
              <li><b>Styling:</b> Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What I learned</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Designing dense admin UIs that stay readable and touch-friendly on mobile.</li>
              <li>Building filter/search/sort/export patterns for data-heavy views.</li>
              <li>Managing dark mode tokens with Tailwind while keeping contrast accessible.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Difficulties</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><b>Density vs clarity:</b> tuned spacing/typography so tables and cards don’t feel crowded.</li>
              <li><b>Keyboard accessibility in complex views:</b> maintained focus order and visible states across filters/menus.</li>
              <li><b>Consistent theming:</b> standardized components so dark mode remains consistent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Links</h2>
            <p className="mt-2">
              <a href="https://manageit-dashboard.vercel.app/" className="underline">Vercel deployment</a><br />
              <a href="https://github.com/Talal609-sudo/manageit-dashboard.git" className="underline">GitHub repository</a>
            </p>
          </div>
        </section>
      ) : (

        <section className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">How I implemented the project</h2>
            <p className="mt-2">[Add content here]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Technologies used</h2>
            <p className="mt-2">[Add content here]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What I learned</h2>
            <p className="mt-2">[Add content here]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Difficulties</h2>
            <p className="mt-2">[Add content here]</p>
          </div>
        </section>
      )}
    </main>
  );
}
