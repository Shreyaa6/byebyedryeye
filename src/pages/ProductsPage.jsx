import { ExternalLink, Droplet, Pill, Thermometer, Fish, Home, Stethoscope } from 'lucide-react';
import { PRODUCT_CATEGORIES, amazonSearchUrl } from '../data/products';

const CATEGORY_ICONS = {
  tears: Droplet,
  prescription: Pill,
  compress: Thermometer,
  omega3: Fish,
  environment: Home,
};

export default function ProductsPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-3">
            Product Guide
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-4">
            Informed Product Recommendations
          </h1>
          <p className="text-green-dark/70 leading-relaxed">
            These are informational recommendations — not a storefront. We don't sell anything.
            Each product is categorized by type with guidance on who it may help most.
            Always consult your eye care professional before starting new treatments.
          </p>
        </div>

        <div className="space-y-16">
          {PRODUCT_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.id];
            return (
            <section key={category.id}>
              <div className="flex items-start gap-4 mb-6">
                <CategoryIcon size={36} className="shrink-0" />
                <div>
                  <h2 className="font-display text-2xl font-bold text-green-dark">{category.title}</h2>
                  <p className="text-green-dark/70 text-sm mt-1 max-w-2xl leading-relaxed">{category.description}</p>
                  {category.note && (
                    <div className="mt-3 flex items-start gap-2 rounded-[1rem] border border-[#d3c29b] bg-[#f7f0de] px-4 py-3 max-w-2xl text-[#6b5430]">
                      <Stethoscope size={16} className="shrink-0 mt-0.5" />
                      <p className="text-sm">{category.note}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.name}
                    className="soft-surface rounded-[1.7rem] p-6 flex flex-col"
                  >
                    <div className="w-full h-36 rounded-[1.2rem] mb-4 flex items-center justify-center overflow-hidden bg-green-bg/70">
                      <img
                        src={`https://placehold.co/280x120/B7E4C7/2D6A4F?text=${encodeURIComponent(product.name.split(' ')[0])}`}
                        alt={product.name}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-green-dark mb-2 leading-snug">{product.name}</h3>
                    <p className="text-sm text-green-dark/70 leading-relaxed mb-4 flex-1">{product.description}</p>
                    <div className="soft-panel rounded-[1rem] p-3 mb-4">
                      <p className="text-xs font-semibold text-green-dark/60 uppercase tracking-wide mb-1">Best for</p>
                      <p className="text-sm text-green-dark/80">{product.bestFor}</p>
                    </div>
                    <a
                      href={amazonSearchUrl(product.searchQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button inline-flex items-center justify-center gap-2 w-full py-3 rounded-[1rem] text-sm font-medium"
                    >
                      Find Online
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
          })}
        </div>

        <div className="deep-panel mt-16 rounded-[2rem] p-8 md:p-10 text-center">
          <p className="text-green-light/90 leading-relaxed max-w-2xl mx-auto mb-2">
            Not sure where to start? Take our free OSDI assessment to understand your symptom
            severity, then discuss results with your eye care professional.
          </p>
          <p className="text-green-light/50 text-xs">
            Product links open Amazon search results for convenience. BuyBuy Dry Eye is not affiliated
            with any product manufacturer and receives no commission.
          </p>
        </div>
      </div>
    </div>
  );
}
