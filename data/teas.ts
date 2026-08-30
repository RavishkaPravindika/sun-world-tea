export interface TeaGrade {
  id: string;
  name: string;
  grade: string;
  tagline: string;
  leafAppearance: string;
  character: string;
  aroma: string;
  liquor: string;
  tasteProfile: string;
  brewingNotes: string;
  description: string;
  category: 'black' | 'green' | 'specialty';
  infusionSpeed: 'slow' | 'moderate' | 'fast' | 'very fast';
  bodyStrength: 'light' | 'medium' | 'medium-full' | 'full' | 'bold';
  color: string; // tailwind color for card accent
}

export const teaGrades: TeaGrade[] = [
  {
    id: 'op',
    name: 'Orange Pekoe',
    grade: 'OP',
    tagline: 'The Whole-Leaf Classic',
    leafAppearance: 'Long, wiry, whole leaves with a clean, uniform appearance. Leaves are typically unbroken and display a consistent twist.',
    character: 'Refined, balanced and smooth. OP offers a measured cup with good clarity and a clean finish that rewards patient brewing.',
    aroma: 'Delicate and naturally floral with subtle earthy undertones characteristic of well-processed black tea.',
    liquor: 'Bright amber to golden-orange. Clear and luminous in the cup.',
    tasteProfile: 'Smooth, balanced and gently malty with a clean finish. Less astringent than broken grades, making it ideal for those who appreciate a refined, nuanced cup.',
    brewingNotes: 'Best brewed with freshly boiled water (95–100°C) for 3–4 minutes. Suitable for drinking plain or with a small addition of milk.',
    description: 'Orange Pekoe (OP) is one of the most recognised whole-leaf black tea grades in the world. The name "Orange Pekoe" is a traditional grading term — it does not refer to orange flavour. It is believed to derive from the Dutch Royal House of Orange-Nassau, reflecting the historical tea trade. OP consists of long, whole, unbroken tea leaves that produce a lighter, more refined cup compared to broken grades. It is valued for its elegant appearance and balanced flavour profile.',
    category: 'black',
    infusionSpeed: 'moderate',
    bodyStrength: 'medium',
    color: 'amber',
  },
  {
    id: 'bop',
    name: 'Broken Orange Pekoe',
    grade: 'BOP',
    tagline: 'Bold Character, Brisk Cup',
    leafAppearance: 'Smaller broken leaf pieces. More compact than OP, with visible texture from the breaking process.',
    character: 'Brisk, full-bodied and robust. BOP produces a more assertive cup with pronounced strength and colour.',
    aroma: 'Rich and malty with a strong, inviting fragrance.',
    liquor: 'Deep amber to copper, with a rich and vivid colour in the cup.',
    tasteProfile: 'Strong, brisk and full-flavoured. Well-suited to those who prefer a bold, robust black tea experience. Responds well to milk.',
    brewingNotes: 'Brews quickly due to the broken leaf structure. Use freshly boiled water (95–100°C) for 2–3 minutes. Excellent with or without milk.',
    description: 'Broken Orange Pekoe (BOP) is produced by mechanically cutting or rolling whole tea leaves into smaller pieces. The increased surface area of the broken leaf allows for faster, stronger infusion — delivering a more intense colour and bolder flavour than OP. BOP is one of the most widely used grades in quality tea blends and is popular among consumers who appreciate a brisk, full-bodied cup. It forms the backbone of many classic breakfast teas.',
    category: 'black',
    infusionSpeed: 'fast',
    bodyStrength: 'full',
    color: 'orange',
  },
  {
    id: 'bopf',
    name: 'Broken Orange Pekoe Fannings',
    grade: 'BOPF',
    tagline: 'Fine, Fast & Vibrant',
    leafAppearance: 'Very fine broken tea particles, smaller than BOP. Uniform, granular texture with excellent surface area.',
    character: 'Strong, vivid and brisk. BOPF delivers immediate colour and body with a fast, consistent brew.',
    aroma: 'Intense and boldly aromatic with a pronounced black tea character.',
    liquor: 'Deep, rich reddish-brown. Strong colour yield with immediate visual impact.',
    tasteProfile: 'Bold and assertive with a straightforward, full strength character. Ideal for those seeking a strong, vibrant cup with excellent colour.',
    brewingNotes: 'Very fast brewing — 1.5 to 2.5 minutes with freshly boiled water. Well-suited for tea-bag style preparation. Commonly enjoyed with milk and/or sugar.',
    description: 'Broken Orange Pekoe Fannings (BOPF) consists of finer broken tea particles than BOP. The significantly increased surface area results in very fast infusion, strong liquor and excellent colour release. BOPF is commonly used in premium tea bag production, where quick brewing and strong liquor are desirable. It produces a consistently bold and vibrant cup and is one of the most widely used grades in global tea consumption.',
    category: 'black',
    infusionSpeed: 'very fast',
    bodyStrength: 'bold',
    color: 'red',
  },
  {
    id: 'fbop',
    name: 'Flowery Broken Orange Pekoe',
    grade: 'FBOP',
    tagline: 'Aromatic Elegance in Every Leaf',
    leafAppearance: 'Broken leaf pieces with the presence of golden tips (buds). The tips add a distinctive visual quality and aromatic character.',
    character: 'Aromatic, lively and balanced. The presence of tips elevates the cup with added fragrance and a pleasing visual quality.',
    aroma: 'Distinctly floral and fragrant, with the golden tips contributing a refined aromatic complexity.',
    liquor: 'Bright, warm amber with excellent clarity. The tips add a gentle golden quality.',
    tasteProfile: 'Lively and well-rounded, with a pleasant balance of strength and aroma. The golden tips contribute a slightly sweeter, more refined dimension.',
    brewingNotes: 'Brew with freshly boiled water (95–100°C) for 2.5–3.5 minutes. Can be enjoyed with or without milk, depending on preference.',
    description: 'Flowery Broken Orange Pekoe (FBOP) is a broken-leaf black tea grade distinguished by the presence of "tips" — young tea leaf buds that have been retained during processing. These golden tips contribute a more refined aromatic character and a pleasing visual quality to the grade. FBOP strikes a balance between the body and strength of a broken-leaf tea and the delicacy and fragrance associated with tip-rich grades. It is valued by those who appreciate both depth of flavour and aromatic complexity.',
    category: 'black',
    infusionSpeed: 'fast',
    bodyStrength: 'medium-full',
    color: 'yellow',
  },
  {
    id: 'pekoe',
    name: 'Pekoe',
    grade: 'Pekoe',
    tagline: 'A Traditional Grade of Distinction',
    leafAppearance: 'Shorter, whole leaves compared to OP. More compact in form, with a clean and consistent appearance.',
    character: 'Smooth and clean with a well-defined, traditional character. Pekoe offers a straightforward, reliable cup.',
    aroma: 'Warm and classic black tea fragrance with mild, natural earthiness.',
    liquor: 'Clear amber, somewhat lighter than BOP.',
    tasteProfile: 'Clean, smooth and traditionally balanced. Pekoe offers a dependable cup with gentle astringency and a natural finish.',
    brewingNotes: 'Brew with freshly boiled water for 3–4 minutes. Versatile — enjoyable plain or with a touch of milk.',
    description: 'Pekoe is a traditional tea-grade classification recognised within the broader Ceylon tea grading system. It typically consists of shorter whole leaves than OP, presenting a more compact leaf style while retaining the character of a whole-leaf tea. Pekoe occupies an important position in the grading hierarchy and is appreciated for its clean, consistent cup quality. The name "Pekoe" itself derives from the Chinese word for the fine white hairs found on young tea buds.',
    category: 'black',
    infusionSpeed: 'moderate',
    bodyStrength: 'medium',
    color: 'amber',
  },
  {
    id: 'green',
    name: 'Green Tea',
    grade: 'Green',
    tagline: 'Purity in Every Leaf',
    leafAppearance: 'Green to pale green leaves, often intact with a natural, minimally processed appearance.',
    character: 'Fresh, clean and delicate. Green tea presents a noticeably different character from black tea due to minimal oxidation.',
    aroma: 'Fresh and vegetal with grassy, floral or light sweet notes depending on origin and processing method.',
    liquor: 'Pale yellow to light green. Delicate and clear.',
    tasteProfile: 'Light, fresh and often slightly sweet or vegetal. Can range from gently grassy to subtly floral. Less astringent when brewed at lower temperatures.',
    brewingNotes: 'Use water at 70–80°C (not boiling) to preserve delicate flavours. Steep for 1.5–2.5 minutes. Avoid over-brewing to prevent bitterness.',
    description: 'Green tea is produced from the same Camellia sinensis plant as black tea, but undergoes minimal oxidation. After harvesting, the leaves are quickly heated — by steaming or pan-firing — to halt the oxidation process, preserving the natural green colour, fresh character and a range of delicate flavour compounds. The result is a tea of considerable lightness and freshness, quite distinct from the robust character of black tea. Green tea originates from both Chinese and Japanese traditions and is appreciated worldwide for its clean, nuanced profile.',
    category: 'green',
    infusionSpeed: 'fast',
    bodyStrength: 'light',
    color: 'green',
  },
  {
    id: 'black',
    name: 'Black Tea',
    grade: 'Black Tea',
    tagline: 'Rich, Full & Fully Oxidised',
    leafAppearance: 'Dark, fully oxidised leaves ranging from whole to broken, depending on grade. Deep brown to black in colour.',
    character: 'Full-bodied, robust and rich. Black tea is the most oxidised form of tea, producing a well-defined, bold cup.',
    aroma: 'Rich and malty with earthy, sometimes floral or fruity notes depending on origin and grade.',
    liquor: 'Deep amber to rich reddish-brown. Strong visual presence in the cup.',
    tasteProfile: 'Bold, malty and full-flavoured. Can present notes ranging from brisk and astringent to smooth and refined, depending on leaf grade and origin.',
    brewingNotes: 'Best with freshly boiled water (95–100°C). Brewing time varies by grade — 2 to 4 minutes. Suitable for drinking plain, with milk, or sweetened.',
    description: 'Black tea is produced through a full oxidation process that transforms the fresh green leaf into the characteristic dark, robust beverage known globally. During oxidation, the natural compounds in the tea leaf react with oxygen, developing the deep colour, rich flavour and complex aroma that define black tea. Ceylon black tea — produced in Sri Lanka — is particularly noted for its bright liquor, brisk character and wide variety of flavour profiles across different growing regions and elevations.',
    category: 'black',
    infusionSpeed: 'moderate',
    bodyStrength: 'full',
    color: 'stone',
  },
  {
    id: 'specialty',
    name: 'Specialty & Premium Tea',
    grade: 'Specialty',
    tagline: 'Curated Selections of Exceptional Character',
    leafAppearance: 'Varies by variety — from fine tips to rolled pellets to large whole leaves. Each specialty tea presents its own distinctive visual identity.',
    character: 'Unique and expressive. Specialty teas are selected for their exceptional or unusual character beyond standard grade classifications.',
    aroma: 'Highly varied — from intensely floral and fruity to deep, earthy and complex.',
    liquor: 'Ranges widely by variety — pale gold, bright green, deep amber or rich brown.',
    tasteProfile: 'Distinctive and often complex. Specialty selections are chosen for their remarkable flavour profiles, rarity or exceptional quality.',
    brewingNotes: 'Brewing parameters vary by variety. Specific guidance is provided with each specialty tea at Sun World Tea.',
    description: "Sun World Tea's specialty and premium selections represent our commitment to seeking out exceptional teas beyond standard grade classifications. These carefully chosen varieties may include single-origin lots of outstanding quality, rare seasonal harvests, high-grown teas of particular distinction, or unique processing styles that produce a truly memorable cup. Our specialty range is curated with care and expanded as we discover new teas that meet our quality standards. Specific varieties and details are available in-store.",
    category: 'specialty',
    infusionSpeed: 'moderate',
    bodyStrength: 'medium',
    color: 'purple',
  },
];

export const teaComparisonData = [
  { grade: 'OP', leafStyle: 'Whole leaf', infusionSpeed: 'Moderate', typicalCharacter: 'Refined / balanced', strength: 2 },
  { grade: 'BOP', leafStyle: 'Broken leaf', infusionSpeed: 'Faster', typicalCharacter: 'Brisk / fuller', strength: 4 },
  { grade: 'BOPF', leafStyle: 'Fine broken leaf', infusionSpeed: 'Very fast', typicalCharacter: 'Strong / vibrant', strength: 5 },
  { grade: 'FBOP', leafStyle: 'Broken leaf + tips', infusionSpeed: 'Fast', typicalCharacter: 'Aromatic / lively', strength: 3 },
  { grade: 'Pekoe', leafStyle: 'Whole leaf (shorter)', infusionSpeed: 'Moderate', typicalCharacter: 'Clean / smooth', strength: 2 },
  { grade: 'Green', leafStyle: 'Whole leaf (minimal)', infusionSpeed: 'Fast', typicalCharacter: 'Fresh / delicate', strength: 1 },
];

export const teaFAQs = [
  {
    question: 'What does OP mean in tea?',
    answer: 'OP stands for Orange Pekoe — a traditional whole-leaf black tea grade. Despite the name, it has nothing to do with orange flavour. The term is believed to derive from the historical Dutch Royal House of Orange-Nassau and the Chinese word "pekoe" referring to fine white hairs on young tea buds. OP describes a long, wiry, unbroken whole-leaf tea that produces a refined, balanced cup.',
  },
  {
    question: 'What is the difference between OP and BOP?',
    answer: 'The primary difference is leaf size and the resulting cup character. OP (Orange Pekoe) consists of whole, unbroken tea leaves that produce a lighter, more refined and balanced cup. BOP (Broken Orange Pekoe) consists of smaller, broken leaf pieces that — due to their greater surface area — brew faster and produce a stronger, more brisk and full-bodied cup with deeper colour.',
  },
  {
    question: 'What does BOPF mean?',
    answer: 'BOPF stands for Broken Orange Pekoe Fannings. It consists of finer broken tea particles than BOP, resulting in an even faster infusion, stronger liquor and excellent colour. The very high surface area of BOPF particles allows for an almost immediate release of colour and flavour. BOPF is widely used in quality tea bag production where a consistently strong, quick-brewing cup is desired.',
  },
  {
    question: 'What is FBOP?',
    answer: 'FBOP stands for Flowery Broken Orange Pekoe. It is a broken-leaf grade that is distinguished by the presence of "tips" — the young, golden-coloured leaf buds retained during processing. These tips contribute a more refined aromatic character and a visually attractive golden appearance to the grade. FBOP strikes a balance between the strength of a broken-leaf tea and the delicacy associated with tip-bearing grades.',
  },
  {
    question: 'What is the difference between black tea and green tea?',
    answer: 'Both black and green tea come from the same plant — Camellia sinensis — but the key difference is oxidation. Green tea is minimally oxidised: the fresh leaves are quickly heated after harvesting to halt oxidation, preserving a fresh, vegetal, delicate character and pale liquor. Black tea undergoes full oxidation, transforming the leaf completely and developing a rich, robust flavour, deep amber liquor and the malty character typical of the teas most commonly consumed worldwide.',
  },
  {
    question: 'Why do different tea grades brew differently?',
    answer: 'The speed and strength of infusion is directly related to the surface area of the tea particles exposed to water. Whole-leaf grades like OP release their flavours more slowly and gradually, producing a lighter, more delicate cup. Broken grades like BOP and BOPF have significantly more surface area — meaning water can access the internal cell structure of the leaf more quickly, releasing colour, flavour and strength at a much faster rate. This is why BOPF can produce a full-strength cup in under two minutes, while OP benefits from a longer, gentler brew.',
  },
  {
    question: 'What makes Ceylon tea distinctive?',
    answer: 'Ceylon tea — produced in Sri Lanka — is renowned for its bright, vivid liquor, clean flavour and brisk character. Sri Lanka\'s diverse geography, ranging from coastal lowlands to high mountain elevations above 2,000 metres, produces teas with a remarkable variety of flavour profiles. High-grown Ceylon teas are particularly prized for their light, delicate character and floral aroma, while low-grown teas tend to be fuller-bodied and more robust.',
  },
  {
    question: 'How should I store my tea?',
    answer: 'Tea is best stored in an airtight container, away from direct sunlight, heat, moisture and strong odours. A cool, dark cupboard is ideal. Avoid storing tea near spices, coffee or other strongly aromatic foods, as tea readily absorbs surrounding aromas. Properly stored tea can retain its quality for 12 to 24 months, depending on the grade and type.',
  },
];
