// Portfolio from the Advicon company profile (pages 11–46). Each entry is one
// page of the profile; photo files are named after the page they came from.

export type Photo = { src: string; alt: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  photos: Photo[];
};

const photo = (file: string, alt: string): Photo => ({
  src: `/profile/${file}.jpg`,
  alt,
});

export const COMPLETED: Project[] = [
  {
    id: "c01",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p11-1", "Three-storey house with grey and white façade and louvred balconies"),
      photo("p11-2", "Side view of the same house showing its stepped terraces"),
    ],
  },
  {
    id: "c02",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p12-1", "Three-storey house with wood-clad and grey stone façade"),
      photo("p12-2", "The same house lit with festive lights at night"),
    ],
  },
  {
    id: "c03",
    title: "Bengaluru",
    subtitle: "Residence",
    photos: [
      photo("p13-1", "Narrow multi-storey house with charcoal façade, red brick panels and an external staircase"),
    ],
  },
  {
    id: "c04",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p14-1", "Corner house with a wood-clad bay and red lattice panel"),
      photo("p14-2", "Front view of the house and its entrance"),
    ],
  },
  {
    id: "c05",
    title: "Channapatna, Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p15-1", "Three-storey corner house with grey and white façade"),
    ],
  },
  {
    id: "c06",
    title: "Bengaluru",
    subtitle: "Residence",
    photos: [
      photo("p16-1", "Two-storey house with wood cladding, pergola and carved entrance gates"),
    ],
  },
  {
    id: "c07",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p17-1", "House with a wood-clad panel featuring a tree motif"),
      photo("p17-2", "The same house seen from the street against the hills"),
    ],
  },
  {
    id: "c08",
    title: "Makali, Ramanagara",
    subtitle: "Farm house",
    photos: [
      photo("p18-1", "Single-storey farm house with sloping tiled roof and deep verandah"),
      photo("p18-2", "Farm house front elevation with gabled entrance"),
    ],
  },
  {
    id: "c09",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p19-1", "Two-storey house with wood-clad boxes and a pergola terrace"),
      photo("p19-2", "The house at night with wall washers and warm interior light"),
    ],
  },
  {
    id: "c10",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p20-1", "Three-storey house with a tower element and wood-clad balconies"),
      photo("p20-2", "Another angle of the house showing its compound wall and gate"),
    ],
  },
  {
    id: "c11",
    title: "Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p21-1", "Contemporary house with a gabled wood-clad tower and patterned gates"),
    ],
  },
  {
    id: "c12",
    title: "Bidadi",
    subtitle: "Residence",
    photos: [
      photo("p22-1", "Three-storey house with maroon and grey façade and ground-floor parking"),
    ],
  },
  {
    id: "c13",
    title: "Bidadi",
    subtitle: "Residence",
    photos: [
      photo("p23-2", "Corner house with wood-textured cladding and a cantilevered balcony"),
      photo("p23-1", "Street view of the house with its stone-clad pillar"),
    ],
  },
  {
    id: "c14",
    title: "Channapatna, Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p24-1", "Three-storey building with stone-textured façade and ground-floor shutters"),
    ],
  },
  {
    id: "c15",
    title: "Channapatna, Ramanagara",
    subtitle: "Residence",
    photos: [
      photo("p25-1", "Multi-storey building with stone cladding during final finishing"),
      photo("p25-2", "Close view of the stone-clad balconies"),
    ],
  },
  {
    id: "c16",
    title: "Bengaluru",
    subtitle: "Residence",
    photos: [
      photo("p26-1", "Two-storey house with brick-red accents behind street trees"),
      photo("p26-2", "Compound wall and entrance of the same house"),
    ],
  },
  {
    id: "c17",
    title: "Bengaluru",
    subtitle: "Residence",
    photos: [
      photo("p27-1", "Three-storey house with timber-look panels and a ground-floor shutter"),
      photo("p27-2", "The house at dusk with its façade lights on"),
    ],
  },
  {
    id: "c18",
    title: "Bengaluru",
    subtitle: "Residence",
    photos: [
      photo("p28-2", "White two-storey house with stone accents and a gated entrance"),
      photo("p28-1", "The house with festive decorations at the entrance"),
    ],
  },
];

export const INTERIORS: Project[] = [
  {
    id: "i01",
    title: "Living room",
    subtitle: "Interiors",
    photos: [
      photo("p29-1", "Double-height living room with a wooden ceiling feature, glass staircase and sectional sofa"),
    ],
  },
  {
    id: "i02",
    title: "Pooja room",
    subtitle: "Interiors",
    photos: [
      photo("p30-1", "Carved wooden pooja room doorway with a gold mandala screen"),
      photo("p30-2", "Pooja room framed by gold mandala panels"),
    ],
  },
  {
    id: "i03",
    title: "Kitchen",
    subtitle: "Interiors",
    photos: [
      photo("p31-1", "Modular kitchen with grey gloss cabinets and white upper shutters"),
    ],
  },
  {
    id: "i04",
    title: "Living room",
    subtitle: "Interiors",
    photos: [
      photo("p32-1", "Living room with a panelled feature wall and cove lighting"),
    ],
  },
  {
    id: "i05",
    title: "Master bedroom",
    subtitle: "Interiors",
    photos: [
      photo("p33-1", "Bedroom with wooden false ceiling, marble-look headboard wall and linear lights"),
      photo("p33-2", "Bedroom wardrobe and study wall under a layered ceiling"),
      photo("p33-3", "Detail of the layered ceiling with linear lighting"),
    ],
  },
  {
    id: "i06",
    title: "Hall & staircase",
    subtitle: "Interiors",
    photos: [
      photo("p34-1", "Hall with wooden false ceiling and a slatted staircase screen"),
      photo("p34-2", "Hall with jaali-pattern pooja door, TV wall and staircase screen"),
    ],
  },
  {
    id: "i07",
    title: "Pooja room",
    subtitle: "Interiors",
    photos: [
      photo("p35-1", "Backlit onyx pooja room decorated with flowers"),
      photo("p35-2", "Pooja room with a wooden ceiling and backlit onyx wall"),
    ],
  },
  {
    id: "i08",
    title: "Living room",
    subtitle: "Interiors",
    photos: [
      photo("p36-2", "Living room with teal sofas, white TV unit and a circular ceiling feature"),
      photo("p36-1", "Wide view of the living and dining area"),
    ],
  },
  {
    id: "i09",
    title: "Foyer & dining",
    subtitle: "Interiors",
    photos: [
      photo("p37-1", "Entrance foyer with a carved wooden door and grey shoe cabinet"),
      photo("p37-2", "Dining area with a slatted wooden partition"),
    ],
  },
  {
    id: "i10",
    title: "Kitchen",
    subtitle: "Interiors",
    photos: [
      photo("p38-1", "Kitchen with a marble-look island, pendant lights and cane-panel cabinets"),
    ],
  },
  {
    id: "i11",
    title: "Kitchen",
    subtitle: "Interiors",
    photos: [
      photo("p39-1", "L-shaped kitchen with blush-pink cabinets and a patterned backsplash"),
      photo("p39-2", "The kitchen beside a wooden pooja unit"),
    ],
  },
  {
    id: "i12",
    title: "Doors & balcony",
    subtitle: "Interiors",
    photos: [
      photo("p40-1", "Glass sliding doors over herringbone wooden flooring"),
      photo("p40-2", "Balcony corridor with vertical wooden fins"),
    ],
  },
  {
    id: "i13",
    title: "Bedrooms",
    subtitle: "Interiors",
    photos: [
      photo("p41-1", "Bedroom with a layered false ceiling and cove lighting"),
      photo("p41-2", "Bedroom with a tufted headboard and full-height wardrobe"),
    ],
  },
  {
    id: "i14",
    title: "Bedroom & wardrobe",
    subtitle: "Interiors",
    photos: [
      photo("p42-1", "Bedroom with a glass-shutter wardrobe and linear ceiling light"),
      photo("p42-2", "Blue wardrobe with open display niches"),
    ],
  },
  {
    id: "i15",
    title: "Pooja unit",
    subtitle: "Interiors",
    photos: [
      photo("p43-1", "Freestanding dark wood pooja unit with backlit panels"),
      photo("p43-2", "Backlit onyx pooja wall under a slatted wooden ceiling"),
    ],
  },
  {
    id: "i16",
    title: "Kitchen",
    subtitle: "Interiors",
    photos: [
      photo("p44-1", "Kitchen with dark gloss cabinets and warm under-cabinet lighting"),
      photo("p44-2", "Tall pantry unit beside the kitchen counter"),
    ],
  },
  {
    id: "i17",
    title: "Staircase & skylight",
    subtitle: "Interiors",
    photos: [
      photo("p45-1", "Stairwell with a skylight, crystal chandelier and wooden landing"),
      photo("p45-2", "Stair landing lit by a patterned window"),
    ],
  },
  {
    id: "i18",
    title: "Wardrobes",
    subtitle: "Interiors",
    photos: [
      photo("p46-2", "Lilac and white sliding wardrobe with open shelving"),
      photo("p46-1", "Sliding wardrobe with blue and white geometric shutters"),
    ],
  },
];
