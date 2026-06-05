export const PRODUCT_CATEGORIES = [
  {
    id: 'tears',
    title: 'Artificial Tears',
    description: 'Over-the-counter lubricating eye drops that supplement your natural tear film. Often the first line of treatment for mild to moderate dry eye.',
    products: [
      {
        name: 'Systane Ultra Lubricant Eye Drops',
        description: 'A widely used artificial tear with dual polymer formula designed to provide extended relief from dry eye symptoms.',
        bestFor: 'Mild to moderate dry eye, contact lens wearers, daily screen users',
        searchQuery: 'Systane+Ultra+Lubricant+Eye+Drops',
      },
      {
        name: 'Refresh Optive Mega-3',
        description: 'Preservative-free lubricant drops with flaxseed oil and castor oil components to support the lipid layer of the tear film.',
        bestFor: 'Evaporative dry eye, sensitivity to preservatives, moderate symptoms',
        searchQuery: 'Refresh+Optive+Mega-3',
      },
      {
        name: 'iVizia Dry Eye Drops',
        description: 'Preservative-free artificial tears formulated with povidone and hyaluronic acid for sustained ocular surface hydration.',
        bestFor: 'Moderate dry eye, those needing frequent dosing without preservative exposure',
        searchQuery: 'iVizia+dry+eye+drops',
      },
    ],
  },
  {
    id: 'prescription',
    title: 'Prescription Drops',
    description: 'FDA-approved prescription medications that address inflammation underlying chronic dry eye. Require evaluation and prescription from an eye care professional.',
    note: 'These medications require a prescription. Always consult your ophthalmologist or optometrist before starting any prescription dry eye treatment.',
    products: [
      {
        name: 'Restasis (Cyclosporine 0.05%)',
        description: 'An immunomodulatory eye drop that helps increase natural tear production by reducing inflammation on the ocular surface. Typically used twice daily.',
        bestFor: 'Chronic dry eye with reduced tear production, inflammation-related dry eye',
        searchQuery: 'Restasis+cyclosporine+eye+drops',
      },
      {
        name: 'Xiidra (Lifitegrast 5%)',
        description: 'A prescription drop that blocks a protein on the ocular surface involved in inflammation, helping reduce both signs and symptoms of dry eye disease.',
        bestFor: 'Moderate to severe dry eye with inflammatory component',
        searchQuery: 'Xiidra+lifitegrast+eye+drops',
      },
    ],
  },
  {
    id: 'compress',
    title: 'Warm Compresses & Masks',
    description: 'Heat therapy helps melt blocked meibomian gland secretions — a common cause of evaporative dry eye (MGD affects up to 69% of Asian populations per epidemiological studies).',
    products: [
      {
        name: 'Bruder Moist Heat Eye Compress',
        description: 'Microwave-activated moist heat mask that delivers consistent, medically appropriate warmth to unblock meibomian glands and improve tear film stability.',
        bestFor: 'Meibomian gland dysfunction (MGD), evaporative dry eye, morning eye discomfort',
        searchQuery: 'Bruder+Moist+Heat+Eye+Compress',
      },
      {
        name: 'EyeGiene Insta-Warmth System',
        description: 'Single-use warming pods that provide controlled heat for meibomian gland expression without needing a microwave.',
        bestFor: 'Travel-friendly warm compress, MGD management on the go',
        searchQuery: 'EyeGiene+Insta+Warmth+dry+eye',
      },
    ],
  },
  {
    id: 'omega3',
    title: 'Omega-3 Supplements',
    description: 'Clinical studies suggest omega-3 fatty acids may improve tear film stability and reduce dry eye symptoms, particularly in inflammatory dry eye.',
    products: [
      {
        name: 'HydroEye Softgels',
        description: 'A clinically studied omega-3 supplement specifically formulated for dry eye, containing GLA from black currant seed oil alongside EPA and DHA.',
        bestFor: 'Chronic dry eye, those seeking nutritional support alongside topical treatment',
        searchQuery: 'HydroEye+omega+3+dry+eye',
      },
      {
        name: 'PRN DE Omega-3 Benefits',
        description: 'Physician Recommended Nutriceuticals omega-3 supplement designed to support ocular surface health with re-esterified triglyceride-form fish oil.',
        bestFor: 'Moderate dry eye, post-LASIK dry eye, nutritional deficiency-related symptoms',
        searchQuery: 'PRN+DE+Omega-3+dry+eye',
      },
    ],
  },
  {
    id: 'environment',
    title: 'Humidifiers & Blue Light Glasses',
    description: 'Environmental management tools that address two major dry eye triggers: low indoor humidity and prolonged digital screen exposure.',
    products: [
      {
        name: 'Levoit Classic 300S Humidifier',
        description: 'Ultrasonic cool mist humidifier that helps maintain indoor humidity levels — low humidity is a documented environmental trigger for dry eye discomfort.',
        bestFor: 'Dry indoor environments, AC-heavy workspaces, bedroom use overnight',
        searchQuery: 'Levoit+humidifier+bedroom',
      },
      {
        name: 'Blue Light Blocking Glasses',
        description: 'Glasses that filter high-energy visible blue light from screens. While research on blue light and dry eye is ongoing, reduced eye strain during extended screen use is widely reported.',
        bestFor: 'Extended screen workers, gamers, remote workers with digital eye strain',
        searchQuery: 'blue+light+blocking+glasses+computer',
      },
    ],
  },
];

export function amazonSearchUrl(query) {
  return `https://www.amazon.in/s?k=${encodeURIComponent(query.replace(/\+/g, ' '))}`;
}
