# AnatomyQuest
Repository of anatomy information pages created in collaboration with underprivileged communities. Revenue raised by the site will be used to directly support those communities.

Licenced under CC-BY-SA-4.0.

## Running Locally

This is a Jekyll-based static site. Follow these steps to run it locally:

### Prerequisites

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install rbenv and ruby-build**:
   ```bash
   brew install rbenv ruby-build
   ```

3. **Set up rbenv in your shell** (add to your `~/.zshrc` or `~/.bash_profile`):
   ```bash
   eval "$(rbenv init -)"
   ```

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/emiliasavich/Anatomy.git
   cd Anatomy
   ```

2. **Install Ruby 3.3.0** (or the version specified in `.ruby-version`):
   ```bash
   rbenv install 3.3.0
   rbenv local 3.3.0
   ```

3. **Install Bundler**:
   ```bash
   gem install bundler
   ```

4. **Install dependencies**:
   ```bash
   bundle install
   ```

### Running the Development Server

Start the Jekyll development server:
```bash
bundle exec jekyll serve
```

The site will be available at [http://127.0.0.1:4000](http://127.0.0.1:4000)

The server has auto-regeneration enabled, so any changes you make to files will automatically rebuild the site.

To stop the server, press `Ctrl+C`.
