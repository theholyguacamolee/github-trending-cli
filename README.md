# 🔥 GitHub Trending CLI

A beautiful command-line tool to discover trending GitHub repositories. View the hottest repos from the past day, week, month, or year - right in your terminal!

## ✨ Features

- 🎨 **Colorful Output** - Beautiful tables with syntax highlighting
- ⚡ **Fast** - Quickly fetch trending repositories using GitHub API
- 🔧 **Flexible** - Filter by time period (day, week, month, year)
- 📊 **Detailed Info** - See stars, forks, language, and descriptions
- 🚀 **Easy to Use** - Simple CLI interface with helpful options

## 📸 Screenshot

<!-- Insert your screenshot here -->

<img width="960" height="511" alt="trending-repos" src="https://github.com/user-attachments/assets/734039c7-c129-41af-b103-3507e2df45d9" />

<img width="1920" height="1016" alt="image" src="https://github.com/user-attachments/assets/fab81e22-2840-422b-b9f3-bdc56c9c70c1" />


## 🚀 Installation

### Global Installation

```bash
npm install -g github-trending-cli
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/github-trending-cli.git
cd github-trending-cli

# Install dependencies
npm install

# Link globally
npm link
```

## 📖 Usage

### Basic Usage

```bash
# Get trending repos from the past week (default)
trending-repos

# Get trending repos from the past day
trending-repos --duration day

# Get trending repos from the past month
trending-repos --duration month

# Get trending repos from the past year
trending-repos --duration year
```

## 🛠️ Technology Stack

- **Node.js** - Runtime environment
- **axios** - HTTP client for GitHub API
- **commander** - CLI framework
- **chalk** - Terminal styling
- **cli-table3** - Beautiful tables
- **dayjs** - Date manipulation

## 📦 Dependencies

```json
{
  "axios": "^1.13.4",
  "chalk": "^5.6.2",
  "cli-table3": "^0.6.5",
  "commander": "^14.0.3",
  "dayjs": "^1.11.19"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- GitHub API for providing repository data
- All the amazing open-source libraries used in this project

Made with ❤️ and ☕
