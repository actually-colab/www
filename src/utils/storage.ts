/**
 * Make a storage object with CRUD functions
 */
export const buildLocalStorage = (
  key: string
): {
  get: () => string | null;
  set: (value: string) => void;
  remove: () => void;
} => ({
  get: () => localStorage.getItem(key),
  set: (value: string) => localStorage.setItem(key, value),
  remove: () => localStorage.removeItem(key),
});

/**
 * A local storage implementation of a Set
 */
class LocalStorageSet {
  key: string;
  items: string[] = [];

  constructor(key: string) {
    this.key = key;
    this.get();
  }

  /**
   * Get the existing items in storage
   */
  get() {
    const data = localStorage.getItem(this.key);

    if (data) {
      this.items = JSON.parse(data)?.items ?? [];
    } else {
      this.items = [];
    }

    return this.items;
  }

  /**
   * Set the array items in storage
   */
  set(values: string[]) {
    this.items = values.slice();

    localStorage.setItem(
      this.key,
      JSON.stringify({
        items: this.items,
      })
    );
  }

  /**
   * Add an item in storage
   */
  add(value: string) {
    this.set(this.items.filter((item) => item !== value).concat([value]));
  }

  /**
   * Remove an item from storage
   */
  remove(value: string) {
    this.set(this.items.filter((item) => item !== value));
  }

  /**
   * Check if an item is in storage
   */
  has(value: string): boolean {
    return this.items.includes(value);
  }
}

/**
 * Store the waitlist emails added on this device
 */
export const WaitlistEmailStorage = new LocalStorageSet("waitlist.email");
