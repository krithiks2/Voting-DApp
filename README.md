## DAPP FOR A VOTING SYSTEM

A simple decentralized voting application built with React, Hardhat, Solidity, and MetaMask.

## Setup Instructions

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-repo/React-Voting-DApp.git
   cd React-Voting-DApp
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start Ganache:**
   - Open Ganache and create a workspace.
   - Use RPC URL: `http://127.0.0.1:7545`.

4. **Deploy the Smart Contract:**
   ```sh
   npx hardhat run scripts/deploy.js --network ganache
   ```

5. **Update Frontend Configuration:**
   - Copy the deployed contract address.
   - Update `constant.js`:
   ```js
   export const contractAddress = "YOUR_NEW_CONTRACT_ADDRESS";
   ```

6. **Run the Application:**
   ```sh
   npm start
   ```

7. Open **http://localhost:3000/** and connect MetaMask to vote.


🚀 Happy Coding!

