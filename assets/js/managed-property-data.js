var AzuriteProperties = window.AzuriteProperties || {};

AzuriteProperties.managedPropertyData = [
  {
    id: 'mp-001',
    title: 'Starshine Apartments',
    slug: 'starshine-apartments',
    location: 'Tudor, Mombasa',
    image: '../../starshine.png',
    heroImage: '../../starshine.png',
    type: 'Residential Apartments',
    label: 'Managed Property',
    summary: 'A well-established residential apartment development in Tudor, Mombasa. Azurite Properties Ltd provides comprehensive property management and operational support services at Starshine Apartments, ensuring a professionally run residential environment for all occupants.',
    about: 'Starshine Apartments is a residential development situated in Tudor, one of Mombasa Island\'s most active and well-connected neighbourhoods. Azurite Properties Ltd provides professional property management and operational support services at this development — covering day-to-day building operations, maintenance coordination, resident support, and vendor management. Our role is to ensure the development runs smoothly, professionally, and to the standard expected of a well-managed residential address.',
    managementNote: 'Azurite Properties Ltd provides management and operational support services at Starshine Apartments. We do not own or develop this property.',
    services: [
      { title: 'Property Management', desc: 'Day-to-day oversight of the residential development\'s operations and administration.' },
      { title: 'Maintenance Coordination', desc: 'Coordinating maintenance requests, repairs, and planned maintenance works with vetted contractors.' },
      { title: 'Resident Support', desc: 'Acting as the primary point of contact for resident enquiries, complaints, and communications.' },
      { title: 'Site Operations Oversight', desc: 'Ensuring building systems, security, and shared facilities function effectively on a daily basis.' },
      { title: 'Vendor Coordination', desc: 'Managing relationships with approved service providers including cleaning, security, and utilities.' },
      { title: 'Administrative Support', desc: 'Handling building administration, record-keeping, and operational documentation.' }
    ],
    metaTitle: 'Starshine Apartments Tudor — Managed by Azurite Properties Ltd',
    metaDescription: 'Starshine Apartments in Tudor, Mombasa is supported by Azurite Properties Ltd providing professional property management and operational support services.'
  },
  {
    id: 'mp-002',
    title: 'Moonlight Luxury Residence',
    slug: 'moonlight-luxury-residence',
    location: 'Tudor, Mombasa',
    image: '../../moonlight.png',
    heroImage: '../../moonlight.png',
    type: 'Luxury High-Rise Residence',
    label: 'Managed Property',
    summary: 'A premium high-rise residential development situated in Tudor, Mombasa. Azurite Properties Ltd delivers professional property management and building support services at Moonlight Luxury Residence — maintaining the high standards expected of a luxury residential address on the Kenya Coast.',
    about: 'Moonlight Luxury Residence is a premium high-rise residential development in Tudor, Mombasa, and is among the most prominent residential addresses on Mombasa Island. Azurite Properties Ltd provides professional property management and operational support services for this development — ensuring that the building is maintained to the high standard that residents and owners rightfully expect. Our management scope covers building operations, maintenance, resident services, and vendor coordination.',
    managementNote: 'Azurite Properties Ltd provides management and operational support services at Moonlight Luxury Residence. We do not own or develop this property.',
    services: [
      { title: 'Property Management', desc: 'Comprehensive oversight of building operations and residential management for a high-rise luxury development.' },
      { title: 'Maintenance Coordination', desc: 'Coordinating all maintenance, repairs, and planned works to the standard expected of a luxury address.' },
      { title: 'Resident Support', desc: 'Professional and prompt support for all resident enquiries, requests, and building communications.' },
      { title: 'Site Operations Oversight', desc: 'Ensuring building systems, lifts, security, and shared amenities operate reliably at all times.' },
      { title: 'Vendor Coordination', desc: 'Managing specialist service providers for cleaning, security, landscaping, and technical maintenance.' },
      { title: 'General Building Management', desc: 'End-to-end building management including documentation, compliance support, and operational reporting.' }
    ],
    metaTitle: 'Moonlight Luxury Residence Tudor — Managed by Azurite Properties Ltd',
    metaDescription: 'Moonlight Luxury Residence in Tudor, Mombasa is supported by Azurite Properties Ltd providing professional property management and building support services.'
  }
];

AzuriteProperties.getManagedPropertyBySlug = function(slug) { return AzuriteProperties.managedPropertyData.find(function(p){return p.slug===slug;})||null; };
