# Solidtime VSCode Extension

This is a community made VSCode extension for [Solidtime](https://solidtime.io), a powerful time tracking tool. The extension integrates with Solidtime's API to track your coding time and send periodic updates. Manage your API key, API URL, and organization ID directly from VSCode.

## Features

- Tracks time spent coding and syncs with your Solidtime account
- Provides commands to set and update your API key, API URL, and organization ID
- Project-based time tracking with workspace mappings
- Display today's coding time in the status bar

## Usage

1. Install the Solidtime extension from VSCode marketplace
2. Use the command palette to execute any of the following commands:
   - **Solidtime: Set API Key**
   - **Solidtime: Set API URL**
   - **Solidtime: Set Organization ID**
   - **Solidtime: Force Time Update**

The extension automatically tracks activity and sends time updates to your Solidtime account in the background.

## Development

1. Install Bun ([https://bun.sh](https://bun.sh)).
2. Clone the repository.
3. Run `bun install` to install dependencies.
4. Build the extension with `bun run build`.

- Main code is located in `src/extension.ts`
- Uses ES6 modules and Bun for bundling
- To watch for changes and auto-build, run:  
  `bun run watch`
- Press `F5` to launch the extension in a new Extension Development Host window.
