# Currency Listing App

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (min v18.17.1)
- npm
- Xcode
- Android Studio

## Setup Instruction

1. Clone the repository
2. Install dependencies

```
npm install
```

3. Start Metro Bundler

```
npm start
```

## Run the app

Run on iOS

```
npm run ios
```

Run on Android

```
npm run android
```

## Folder Structure

```
src/
├── assets/
│   └── icons/                        # icons static assets
│
├── components/
│   └── Button                        # Reusable button component
│   └── CurrencyList                  # Reusable currency list component (Crypto/Fiat)
│   └── CurrencyListItem              # Reusable currency list item component
│   └── Header                        # Reusable header component
│   └── ListHeader                    # Reusable list header component
│
├── data/
│   ├── crypto                        # Predefined Currency List (Crypto)
│   └── fiat                          # Predefined Currency List (Fiat)
│   └── type                          # Types related to data
│
├── screens/
│   └── HomeScreen                    # Home screen
│
├── themes/
│   └── colors                        # consolidate all the colors that used in the project
│
├── types/
│   └── OneOf.ts                      # Util types
│
├── utils/
│   └── storage.ts                    # Utility functions for local storage
```
