import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { categories, featured, products } from "../src/data/products.ts";

test("public catalogue stays complete and enquiry-ready", () => {
  assert.equal(products.length, 75);
  assert.equal(new Set(products.map(({ name }) => name)).size, products.length);
  assert.deepEqual(products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] ?? 0) + 1;
    assert.ok(product.price > 0, `${product.name} needs a price`);
    assert.ok(product.packs.length > 0, `${product.name} needs pack choices`);
    if (product.image) assert.ok(existsSync(`public${product.image}`), `${product.name} needs its photo`);
    return counts;
  }, {}), {
    "Traditional Sweets": 10,
    "Ghee Specials": 14,
    "Premium Sweets": 10,
    "Festival Specials": 5,
    "Home Foods": 15,
    "Hot Snacks": 21,
  });
  assert.equal(categories.length, 6);
  assert.equal(featured.length, 4);
});
