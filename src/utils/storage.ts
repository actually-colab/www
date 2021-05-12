/**
 * Make a storage object with CRUD functions
 */
export const buildLocalStorage = <T extends string>(
  key: string
): {
  get: () => T | null;
  set: (value: T) => void;
  remove: () => void;
} => ({
  get: (): T | null => localStorage.getItem(key) as T | null,
  set: (value: T) => localStorage.setItem(key, value),
  remove: () => localStorage.removeItem(key),
});

/**
 * A local storage implementation of a Set
 */
class LocalStorageSet {
  key: string;
  items: string[] = [];
  defaultValues: string[] = [];

  constructor(key: string, defaultValues: string[] = []) {
    this.key = key;
    this.defaultValues = defaultValues;
    this.get();
  }

  /**
   * Get an array of values in storage without reloading from local storage
   */
  values() {
    return this.items.slice();
  }

  /**
   * Get the last item in the array
   */
  last() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    }

    return null;
  }

  /**
   * Get the existing items in storage
   */
  get() {
    const data = localStorage.getItem(this.key);

    if (data) {
      this.items = JSON.parse(data)?.items ?? this.defaultValues;
    } else {
      this.items = this.defaultValues;
    }

    return this.items.slice();
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

    return this.items.slice();
  }

  /**
   * Add an item in storage
   */
  add(value: string) {
    return this.set(this.items.filter((item) => item !== value).concat([value]));
  }

  /**
   * Remove an item from storage
   */
  remove(value: string) {
    return this.set(this.items.filter((item) => item !== value));
  }

  /**
   * Reset to the initial value
   */
  reset() {
    return this.set(this.defaultValues);
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
