const stocks = {
  GOOG: {
    symbol: 'GOOG',
    price: 100,
  },
  AAPL: {
    symbol: 'AAPL',
    price: 200,
  },
  MSFT: {
    symbol: 'MSFT',
    price: 300,
  },
  FB: {
    symbol: 'FB',
    price: 400,
  },
};

interface Portfolio {
  symbol: string;
  quantity: number;
  purchasePrice: number;
}

export class StockExchangeAccountClass {
  private cash: number;
  private portfolio: Portfolio[];

  constructor(cash) {
    this.cash = cash;
    this.portfolio = [];
  }

  buyStock(symbol, quantity) {
    const stock = stocks[symbol];
    // const stock = Object.values(stocks).find((item) => item.symbol === symbol);
    if (stock) {
      const { symbol, price } = stock;
      const totalCost = price * quantity;
      if (this.cash >= totalCost) {
        const foundStockIndex = this.findStockIndex(symbol);
        if (foundStockIndex > -1) {
          this.portfolio[foundStockIndex].quantity += quantity;
        } else {
          this.portfolio.push({ symbol, quantity, purchasePrice: price });
        }
        this.cash -= totalCost;
      } else {
        console.log(
          'Sorry you do not have enough cash to create this transaction',
        );
      }
    } else {
      console.log('Did not find the stock you are looking for');
    }
  }

  sellStock(symbol, quantity) {
    const foundStockIndex = this.findStockIndex(symbol);
    const stock = this.portfolio[foundStockIndex];
    if (foundStockIndex > -1 && stock.quantity >= quantity) {
      stock.quantity -= quantity;
      if (stock.quantity === 0) {
        this.portfolio.splice(foundStockIndex, 1);
      }
      this.cash += quantity * stock.purchasePrice;
    }
  }

  findStockIndex(symbol) {
    return this.portfolio.findIndex((item) => item.symbol === symbol);
  }

  getPortfolioValue() {
    return this.portfolio.reduce(
      (acc, item) => acc + item.quantity * item.purchasePrice,
      0,
    );
  }

  getPortfolio() {
    return this.portfolio.map((item) => item.symbol);
  }
}

function StockExchangeAccountFunction(cash: number) {
  this.cash = cash;
  this.portfolio = [];
  return {
    buyStock: (symbol, quantity) => {
      const stock = stocks[symbol];
      if (stock) {
        const { symbol, price } = stock;
        const totalCost = price * quantity;
        if (this.cash >= totalCost) {
          const foundStockIndex = this.findStockIndex(symbol);
          if (foundStockIndex > -1) {
            this.portfolio[foundStockIndex].quantity += quantity;
          } else {
            this.portfolio.push({ symbol, quantity, purchasePrice: price });
          }
          this.cash -= totalCost;
        } else {
          console.log(
            'Sorry you do not have enough cash to create this transaction',
          );
        }
      } else {
        console.log('Did not find the stock you are looking for');
      }
    },
    sellStock: (symbol, quantity) => {
      const foundStockIndex = this.findStockIndex(symbol);
      const stock = this.portfolio[foundStockIndex];
      if (foundStockIndex > -1 && stock.quantity >= quantity) {
        stock.quantity -= quantity;
        if (stock.quantity === 0) {
          this.portfolio.splice(foundStockIndex, 1);
        }
        this.cash += quantity * stock.purchasePrice;
      }
    },
  };
}
