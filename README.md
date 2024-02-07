# QR Code Maker

## Description
This project is a web application built with Next.js and React. It provides a user-friendly interface for generating QR codes. Users can input text, and the application will generate a corresponding QR code.

## Features
- **QR Code Generation**: Users can generate QR codes by inputting text. This is handled by the `createQRCode` function in the [`index.js`](command:_github.copilot.openSymbolInFile?%5B%22pages%2Findex.js%22%2C%22index.js%22%5D "pages/index.js") file. The QR code generation is done server-side in the [`helloQR.js`](command:_github.copilot.openSymbolInFile?%5B%22pages%2Fapi%2FhelloQR.js%22%2C%22helloQR.js%22%5D "pages/api/helloQR.js") file.
- **Custom Fonts**: The application uses the VT323 and Space Mono fonts from Google Fonts for a unique look and feel.
- **Responsive Design**: The application uses Tailwind CSS for a responsive design that looks good on all devices.

## Installation
To install the project, run the following command in your terminal:

```sh
npm install
```

## Running the Project
To run the project, use the following command:

```sh
npm run dev
```

This command is defined in the [`package.json`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22package.json%22%5D "package.json") file.

## Contributing
Please see the [`.gitignore`](.gitignore) file for a list of files that should not be committed to the repository.
