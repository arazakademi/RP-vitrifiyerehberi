// Kategori ağacı shop.creavit.com.tr "Vitrifiyeler" menüsünden alındı (9 Kasım 2026).
// creavit: o kategorinin Creavit mağazasındaki karşılığı.

export type AltKategori = {
  slug: string;
  ad: string;
  aciklama: string;
  creavit: string;
};

export type Kategori = AltKategori & { alt: AltKategori[] };

const C = 'https://shop.creavit.com.tr/collections/';

export const kategoriler: Kategori[] = [
  {
    slug: 'klozet-ve-rezervuarlar',
    ad: 'Klozet ve Rezervuarlar',
    aciklama:
      'Asma ve takım klozetler, klozet kapakları, rezervuarlar ve gömme sistemler: ölçü, montaj ve hijyen açısından doğru klozeti seçmek için rehberler.',
    creavit: C + 'creavit-klozet-modelleri',
    alt: [
      {
        slug: 'asma-klozet',
        ad: 'Asma Klozetler',
        aciklama: 'Duvara asılan, gömme rezervuarla çalışan klozetler: ölçü, kanalsız (rim-off) yıkama ve montaj rehberleri.',
        creavit: C + 'creavit-hijyenik-asma-klozet-modelleri',
      },
      {
        slug: 'takim-klozet',
        ad: 'Takım Klozetler',
        aciklama: 'Yere monte edilen, rezervuarı üzerinde gelen klozetler: tadilatsız değişim ve ölçü rehberleri.',
        creavit: C + 'takim-klozetler',
      },
      {
        slug: 'klozet-kapagi',
        ad: 'Klozet Kapakları',
        aciklama: 'Duroplast mı thermoplast mı, yavaş kapanan mekanizma, uyumlu ölçü: kapak seçimi rehberleri.',
        creavit: C + 'creavit-antibakteriyel-yavas-kapanan-klozet-kapaklari',
      },
      {
        slug: 'rezervuar-ve-ic-takimlar',
        ad: 'Rezervuar ve İç Takımlar',
        aciklama: 'Dış rezervuarlar ve iç takımlar: su kaçıran rezervuarı onarmak ve doğru yedek parçayı bulmak için rehberler.',
        creavit: C + 'rezervuar-ve-ic-takimlar',
      },
      {
        slug: 'gomme-rezervuar-ve-kumanda-paneli',
        ad: 'Gömme Rezervuar ve Kumanda Paneli',
        aciklama: 'Duvar içi rezervuarlar ve kumanda panelleri: duvar tipi, montaj derinliği ve panel uyumu rehberleri.',
        creavit: C + 'gomme-rezervuar-ve-kumanda-paneli',
      },
    ],
  },
  {
    slug: 'lavabolar',
    ad: 'Lavabolar',
    aciklama:
      'Çanak, tezgah üstü, tezgah altı, etajerli ve ayaklı lavabolar: banyo ölçüsüne, dolaba ve kullanım alışkanlığına göre lavabo seçimi.',
    creavit: C + 'lavabolar',
    alt: [
      {
        slug: 'canak-lavabo',
        ad: 'Çanak Lavabolar',
        aciklama: 'Tezgah üzerine oturan çanak lavabolar: armatür yüksekliği, tezgah derinliği ve temizlik rehberleri.',
        creavit: C + 'vitrifiye-canak-lavabo-modelleri-creavit',
      },
      {
        slug: 'tezgah-ustu-lavabo',
        ad: 'Tezgah Üstü Lavabolar',
        aciklama: 'Dolap ya da tezgah üstüne oturan lavabolar: dolap genişliği ve ölçü uyumu rehberleri.',
        creavit: C + 'tezgah-ustu-lavabolar',
      },
      {
        slug: 'etajerli-lavabo',
        ad: 'Etajerli Lavabolar',
        aciklama: 'Yan tablalı, eşya koyma alanı olan lavabolar: küçük banyolar için rehberler.',
        creavit: C + 'etajerli-lavabolar',
      },
      {
        slug: 'ayakli-lavabo',
        ad: 'Ayaklı Lavabolar',
        aciklama: 'Tam ve yarım ayaklı lavabolar: tesisatı gizleyen klasik çözüm için rehberler.',
        creavit: C + 'ayakli-lavabolar',
      },
      {
        slug: 'tezgah-alti-lavabo',
        ad: 'Tezgah Altı Lavabolar',
        aciklama: 'Tezgahın altından monte edilen lavabolar: kesim ölçüsü ve tezgah malzemesi rehberleri.',
        creavit: C + 'tezgah-alti-lavabo',
      },
    ],
  },
];

export function kategoriBul(slug: string) {
  return kategoriler.find((k) => k.slug === slug);
}

export function altKategoriBul(anaSlug: string, altSlug?: string) {
  if (!altSlug) return undefined;
  return kategoriBul(anaSlug)?.alt.find((a) => a.slug === altSlug);
}
