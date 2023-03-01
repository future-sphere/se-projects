class ShoppingCartClass {
  private items = [];
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    const itemIndex = this.items.findIndex((item) => item.name === name);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }

  getItems() {
    return this.items.map((item) => {
      return {
        name: item.name,
        quantity: item.quantity,
      };
    });
  }

  getTotal() {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }

  getReceipt() {
    return this.items
      .map((item) => {
        return `${item.name} * ${item.quantity}: $${
          item.price * item.quantity
        }`;
      })
      .join('\n');
  }

  clearCart() {
    this.items = [];
  }
}

export function ShoppingCartFunction() {
  this.items = [];
  return {
    addItem: (item) => {
      this.items.push(item);
    },
    removeItem: (name) => {
      const itemIndex = this.items.findIndex((item) => item.name === name);
      if (itemIndex > -1) {
        this.items.splice(itemIndex, 1);
      }
    },
    getItems: () => {
      return this.items.map((item) => {
        return {
          name: item.name,
          quantity: item.quantity,
        };
      });
    },
    getTotal: () => {
      return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },
    getReceipt: () => {
      return this.items
        .map((item) => {
          return `${item.name} * ${item.quantity}: $${
            item.price * item.quantity
          }`;
        })
        .join('\n');
    },
  };
}

const cart = new ShoppingCartClass();
cart.addItem({
  name: 'Bread',
  price: 1.99,
  quantity: 2,
});
cart.addItem({
  name: 'Milk',
  price: 2.99,
  quantity: 1,
});
cart.addItem({
  name: 'Eggs',
  price: 3.99,
  quantity: 3,
});

console.log(cart.getTotal());
cart.removeItem('Bread');

console.log(cart.getTotal());
console.log(cart.getItems());
console.log(cart.getReceipt());
