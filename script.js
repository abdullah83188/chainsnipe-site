// ChainSnipe - Professional Crypto Analytics Platform
// Demo Mode with Mock Data

console.log("ChainSnipe loading...");

// Mock data for demo purposes
const mockMarketData = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        price: 43285.67,
        change24h: 2.34,
        marketCap: 847382947392,
        volume: 28472959382
    },
    {
        id: "ethereum",
        name: "Ethereum", 
        symbol: "ETH",
        price: 2591.43,
        change24h: -1.23,
        marketCap: 311847382947,
        volume: 15832947382
    },
    {
        id: "solana",
        name: "Solana",
        symbol: "SOL", 
        price: 98.76,
        change24h: 5.67,
        marketCap: 45738294739,
        volume: 2847295938
    },
    {
        id: "binancecoin",
        name: "BNB",
        symbol: "BNB",
        price: 312.45,
        change24h: 1.89,
        marketCap: 47382947392,
        volume: 1947382947
    }
];

const mockTransactions = [
    {
        type: "buy",
        hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
        value: "2.45 ETH",
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        from: "0x742d35Cc6634C0532925a3b8D4",
        to: "0x8ba1f109551bD432803012645Hac",
        blockchain: "ethereum"
    },
    {
        type: "swap",
        hash: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
        value: "45.2 SOL",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        from: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
        to: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        blockchain: "solana"
    },
    {
        type: "transfer",
        hash: "0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d",
        value: "1,250 USDT",
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        from: "0x742d35Cc6634C0532925a3b8D4",
        to: "0x3f4b5c6d7e8f9a0b1c2d3e4f5a",
        blockchain: "bsc"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log("ChainSnipe initialized");
    
    // Load initial data
    loadMarketData();
    
    // Set up navigation
    setupNavigation();
    
    // Add demo mode notice
    addDemoNotice();
    
    // Initialize interactive elements
    initializeInteractivity();
});

// Load market data
function loadMarketData() {
    const marketContainer = document.getElementById('marketData');
    
    // Remove loading state
    marketContainer.innerHTML = '';
    
    // Add market data
    mockMarketData.forEach(coin => {
        const changeClass = coin.change24h >= 0 ? 'positive' : 'negative';
        const changeSign = coin.change24h >= 0 ? '+' : '';
        
        const marketItem = document.createElement('div');
        marketItem.className = 'market-item';
        marketItem.innerHTML = `
            <div class="market-info">
                <div class="market-avatar">${coin.symbol.substring(0, 2)}</div>
                <div class="market-details">
                    <div class="market-name">${coin.name}</div>
                    <div class="market-symbol">${coin.symbol}</div>
                </div>
            </div>
            <div class="market-price">
                <div class="market-value">$${coin.price.toLocaleString()}</div>
                <div class="market-change ${changeClass}">${changeSign}${coin.change24h.toFixed(2)}%</div>
            </div>
        `;
        
        marketContainer.appendChild(marketItem);
    });
}

// Setup navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show relevant content (in a real app, this would switch views)
            console.log('Navigation clicked:', this.textContent.trim());
        });
    });
}

// Add demo mode notice
function addDemoNotice() {
    const main = document.querySelector('.main .container');
    const demoNotice = document.createElement('div');
    demoNotice.className = 'demo-notice';
    demoNotice.innerHTML = `
        <i class="fas fa-info-circle"></i>
        Demo Mode Active - All data is simulated for demonstration purposes
    `;
    
    main.insertBefore(demoNotice, main.firstChild);
}

// Initialize interactive elements
function initializeInteractivity() {
    // Add click handlers to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Portfolio item clicked:', this.querySelector('.portfolio-item-label').textContent);
        });
    });
    
    // Add click handlers to activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Activity item clicked:', this.querySelector('.activity-title').textContent);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
}

// Wallet tracking function
function trackWallet() {
    const walletAddress = document.getElementById('walletInput').value;
    const blockchain = document.getElementById('blockchainSelect').value;
    const resultDiv = document.getElementById('walletResult');
    
    if (!walletAddress) {
        resultDiv.innerHTML = '<div class="result-error"><i class="fas fa-exclamation-triangle"></i> Please enter a wallet address</div>';
        return;
    }
    
    // Show loading state
    resultDiv.innerHTML = '<div class="loading"></div>';
    
    // Simulate API call
    setTimeout(() => {
        const mockWalletData = {
            address: walletAddress,
            blockchain: blockchain,
            balance: generateRandomBalance(),
            transactionCount: Math.floor(Math.random() * 1000) + 50,
            tokens: Math.floor(Math.random() * 20) + 1
        };
        
        resultDiv.innerHTML = `
            <div class="result-success">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <i class="fas fa-check-circle" style="color: var(--accent);"></i>
                    <strong>Wallet Tracked Successfully</strong>
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                    <div>Address: ${walletAddress.substring(0, 10)}...${walletAddress.substring(walletAddress.length - 8)}</div>
                    <div>Network: ${blockchain.charAt(0).toUpperCase() + blockchain.slice(1)}</div>
                    <div>Balance: ${mockWalletData.balance}</div>
                    <div>Transactions: ${mockWalletData.transactionCount}</div>
                    <div>Tokens: ${mockWalletData.tokens}</div>
                </div>
            </div>
        `;
    }, 1500);
}

// Token analysis function
function analyzeToken() {
    const contractAddress = document.getElementById('tokenInput').value;
    const blockchain = document.getElementById('tokenBlockchain').value;
    const resultDiv = document.getElementById('tokenResult');
    
    if (!contractAddress) {
        resultDiv.innerHTML = '<div class="result-error"><i class="fas fa-exclamation-triangle"></i> Please enter a contract address</div>';
        return;
    }
    
    // Show loading state
    resultDiv.innerHTML = '<div class="loading"></div>';
    
    // Simulate API call
    setTimeout(() => {
        const mockTokenData = {
            address: contractAddress,
            symbol: generateRandomTokenSymbol(),
            name: generateRandomTokenName(),
            price: (Math.random() * 100).toFixed(4),
            marketCap: (Math.random() * 1000000000).toFixed(0),
            holders: Math.floor(Math.random() * 50000) + 1000
        };
        
        resultDiv.innerHTML = `
            <div class="result-success">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <i class="fas fa-chart-line" style="color: var(--accent);"></i>
                    <strong>Token Analysis Complete</strong>
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                    <div>Symbol: ${mockTokenData.symbol}</div>
                    <div>Name: ${mockTokenData.name}</div>
                    <div>Price: $${mockTokenData.price}</div>
                    <div>Market Cap: $${Number(mockTokenData.marketCap).toLocaleString()}</div>
                    <div>Holders: ${mockTokenData.holders.toLocaleString()}</div>
                </div>
            </div>
        `;
    }, 1500);
}

// Utility functions
function generateRandomBalance() {
    const balances = [
        "12.45 ETH",
        "234.56 SOL", 
        "1,234.56 BNB",
        "45.78 ETH",
        "567.89 SOL",
        "2,345.67 BNB"
    ];
    return balances[Math.floor(Math.random() * balances.length)];
}

function generateRandomTokenSymbol() {
    const symbols = ["DOGE", "SHIB", "PEPE", "FLOKI", "BONK", "WIF", "POPCAT", "BRETT"];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateRandomTokenName() {
    const names = [
        "Dogecoin", 
        "Shiba Inu", 
        "Pepe", 
        "Floki Inu", 
        "Bonk", 
        "dogwifhat",
        "Popcat",
        "Brett"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

// Time formatting utility
function formatTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else {
        return `${days}d ago`;
    }
}

// Update market data every 30 seconds
setInterval(loadMarketData, 30000);

// Console welcome message
console.log(`
🎯 ChainSnipe - Professional Crypto Analytics Platform
📊 Demo Mode: All data is simulated for demonstration
🔗 Multi-chain support: Ethereum, Solana, BSC
⚡ Features: Wallet tracking, token analysis, portfolio management
`);