import { getCollection, type CollectionEntry } from 'astro:content';
import { kategoriBul, altKategoriBul } from './data/kategoriler';

export type Yazi = CollectionEntry<'yazilar'>;

export async function tumYazilar() {
  const y = await getCollection('yazilar');
  return y.sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}

export function tarihTR(d: Date) {
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function okumaSuresi(body = '') {
  const kelime = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(kelime / 200));
}

export function kategoriEtiketi(y: Yazi) {
  const k = kategoriBul(y.data.kategori);
  const a = altKategoriBul(y.data.kategori, y.data.altKategori);
  return { k, a, metin: a ? `${k?.ad} › ${a.ad}` : k?.ad ?? '' };
}
