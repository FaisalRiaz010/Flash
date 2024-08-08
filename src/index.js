import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Web3ModalProvider } from './Web/Web3Provider';
import { BrowserRouter } from 'react-router-dom';
import { WalletProvider } from '../src/context/WalletContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Web3ModalProvider>
      <WalletProvider>
      <App />
      </WalletProvider>
    </Web3ModalProvider>
  </BrowserRouter>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { WalletProvider } from './context/WalletContext'; // Import the WalletProvider
// import '@rainbow-me/rainbowkit/styles.css';
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
// import {
//   getDefaultConfig,
//   darkTheme ,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import {
//   mainnet
// } from 'wagmi/chains';
// import {
//   QueryClientProvider,
//   QueryClient,
// } from "@tanstack/react-query";
// const config = getDefaultConfig({
//   appName: 'solEthtx',
//   projectId: 'eec2e68e224c8957b33e2cd06c1b8b39',
//   chains: [mainnet],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });
// const queryClient = new QueryClient();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <WagmiProvider config={config}>
//     <QueryClientProvider client={queryClient}>
//       <RainbowKitProvider
//       modalSize="compact"
//       theme={darkTheme()} 
//       >
//         <BrowserRouter>
//           <WalletProvider>
//             <App />

//           </WalletProvider>

//         </BrowserRouter>
//       </RainbowKitProvider>
//       </QueryClientProvider >
//       </WagmiProvider>
//       );